import os
import json
import requests
import importlib




from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)


# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""
    try:
        user_id = session.get("user_id")
        total = db.execute("SELECT * FROM stocks WHERE persons_id= ?",user_id)
        for x in total:
            symbol = x['symbol']
            share = x['shares']
            if share == 0:
                db.execute("DELETE FROM stocks WHERE persons_id = ? AND symbol = ?",user_id,symbol)


            token = 'sk_b56afcaea0c14018ae0e79ea4c47c6cf'
            url = f'https://api.iex.cloud/v1/data/CORE/QUOTE/{symbol}?token={token}'
            r = requests.get(url)
            data = json.loads(r.text)
            for y in data:
                price = y['iexClose']

            item = lookup(symbol)
            price = item['price']
            total = share * price
            db.execute("UPDATE stocks SET price = ?,total=? WHERE symbol = ? and persons_id=?",price,total,symbol,user_id )




        check_symbol = []
        total = db.execute("SELECT * FROM stocks WHERE persons_id= ?",user_id)
        chek = db.execute("SELECT symbol FROM stocks WHERE persons_id= ?",user_id)
        for x in chek:
            check_symbol.append(x)
        cash = db.execute("SELECT cash FROM users WHERE id = ?",user_id)
        names = db.execute("SELECT username FROM users WHERE id = ?",user_id)
        for name in names:
            n = name['username']

        return render_template('layout.html',bought =total,cash=cash,alltotal = total,check_symbol=check_symbol,name=n)
    except UnboundLocalError:
        return render_template('layout.html')

@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""
    if request.method == "POST":
        check_symbol = None
        check_shares = None
        request_symbol = request.form.get("symbol")
        share = request.form.get("shares")
        sym = str(request_symbol.upper())
        flag = True
        if not sym:
            return apology ("must provide a symbol")
        elif not share :
            return apology ("must provide a share")

        try:
            share =int(share)
        except ValueError:
            flag = False
        if flag == False:
            return apology('must be a integer')
        elif int(share) < 0 :
            return apology("share must be a positiv number")

        user_id = session.get("user_id")
        try:
            item = lookup(sym)
            price = item['price']
            symbol = item['symbol']
        except TypeError:
            return apology('invlid symbol')

        check_symbol =[]
        totalprice = price * share
        totalprice =float(totalprice)





        cash = db.execute("SELECT cash FROM users WHERE id = ?",user_id)
        for x in cash:
            cashin=x['cash']
        cashleft = cashin - totalprice
        if cashleft < 0:
                return apology ("you run out of mony")


        check = db.execute("SELECT * FROM stocks WHERE persons_id = ?",user_id)
        for y in check:
            check_symbol.append(y['symbol'])
        check_valid_share = db.execute("SELECT shares FROM stocks WHERE persons_id = ? AND symbol = ?",user_id,sym)
        for z in check_valid_share:
            check_shares = z['shares']



        if sym not in check_symbol:
            cashleft = float(cashleft)

            db.execute("UPDATE users SET cash=? WHERE id = ?",cashleft ,user_id)
            db.execute("INSERT  INTO stocks('symbol',shares,persons_id,price,total) VALUES (?,?,?,?,?)",sym,share,user_id,price,totalprice)


        elif sym in check_symbol:


            share = int(share)
            new_share = share + check_shares

            totalprice = new_share * price


            cashleft = cashin - (price * share)

            if cashleft < 0:
                return apology ("you run out of mony")
            db.execute("UPDATE users SET cash=? WHERE id = ?",cashleft ,user_id)
            db.execute("UPDATE stocks SET  shares=?,price = ?,total=? WHERE symbol = ? and persons_id=?",new_share,price,totalprice,sym,user_id )

        else:
            return apology('error')
        bought = db.execute("SELECT * FROM stocks WHERE persons_id = ?",user_id)

        cash = db.execute("SELECT cash FROM users WHERE id = ?",user_id)
        names = db.execute("SELECT username FROM users WHERE id = ?",user_id)
        for name in names:
            n = name['username']

        flash('bought',200)
        return render_template("layout.html",bought=bought,cash=cash,alltotal=bought,name=n)

    else:
        return render_template("buy.html")



@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    return apology("TODO")


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    if request.method == "POST":
        item=[]
        name=[]
        token = 'sk_b56afcaea0c14018ae0e79ea4c47c6cf'
        symbol = str(request.form.get("symbol"))
        symbol= symbol.upper()
        if not symbol:
            return apology('missing stocks')
        try:
            item = lookup(symbol)
            name = item['symbol']
            price = item['price']

        except TypeError:
            return apology('symbol invalid',400)

        return render_template('quoted.html',item=item)

    else:
        return render_template("quote.html")




@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        confpass = request.form.get("confirmation")

        name = []
        data = db.execute("SELECT username FROM users")
        for x in data:
            name.append(x['username'])

        if not username:
            return apology("must provide username", 400)
        elif not password and not confpass:
            return apology("must provide a password and confirm it",400)

        elif password != confpass:
            return apology("pasword doesen't mach",400)


        elif username in name:
            return apology("username exist",400)


        hash = generate_password_hash(password)
        db.execute("INSERT INTO users('username',hash) VALUES(?,?)",username,hash)

        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))
        session["user_id"] = rows[0]["id"]
        flash('You were successfully logged in',200)
        return redirect("/")
    else:
        return render_template("/register.html")


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""
    if request.method == "POST":
        symbol = request.form.get('symbol')
        share = request.form.get('shares')
        user_id = session.get("user_id")
        check = db.execute("SELECT * FROM stocks WHERE persons_id = ? AND symbol = ?",user_id,symbol)
        symbol_left = []
        for sym in check:
            symbol_empty = sym['symbol']
            share_left = sym['shares']
            share_in = sym['shares']
        flag = True
        try:
            item =lookup(symbol)
            price = item['price']
            check_symbol = item['symbol']
        except TypeError:
            return apology('invalid simbol')
        try:
            share = int(share)
        except ValueError:
            flag == False
        if flag ==  False:
            return apology('must be a integer')

        elif symbol not in check_symbol:
            return apology('you dont have shares')



        cash =db.execute("SELECT * FROM users WHERE id = ?",user_id)
        for y in cash:
            cash_in = y['cash']

        if symbol:
            if int(share_in) == 0:
                return apology("you don't have enough shares" )
            share_out = share_in - share

            db.execute("UPDATE stocks SET shares=? WHERE persons_id = ? AND symbol = ?",share_out,user_id,symbol)
            cash_left = cash_in + (share * price)
            db.execute("UPDAte users SET cash=? WHERE id = ?",cash_left,user_id)
            if share_left == 0:
                db.execute("DELETE FROM stocks WHERE persons_id = ? AND symbol = ?",user_id,symbol_empty)


        elif symbol == None:
            return apology("you must select a stock symbol")
        elif symbol not in check_symbol:
            return apology('ss')


        elif share == None:
            return apology("you must put a share")
        elif share > share_in:
            return apology("you don't have enough shares")
        elif symbol_left == 0:
            db.execute("DELETE FROM stocks WHERE persons_id = ? AND symbol = ?",user_id,symbol)


        return redirect("/")
    else:
        user_id = session.get("user_id")
        check_symbol = []
        check = db.execute("SELECT * FROM stocks WHERE persons_id = ?",user_id)
        for y in check:
            check_symbol.append(y['symbol'])

        return render_template("/sell.html",check_symbol=check_symbol,check=check)


@app.route("/selldirect", methods=["GET", "POST"])
def deregister():


    symbol = request.form.get("symbol")
    user_id = session.get("user_id")

    if symbol:
        db.execute("DELETE * FROM stocks WHERE symbol = ?,persons_id=?",symbol,user_id)
        return redirect("/")


    else:
        redirect("/")