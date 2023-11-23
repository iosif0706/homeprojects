import sys
import random
from pyfiglet import Figlet

figlet = Figlet()

if len(sys.argv) == 1:
    imp = True
elif len(sys.argv) == 3 and (sys.argv[1] == "-f" or sys.argv[1] == "-font"):
    imp = False
else:
    print("invalid font")
    sys.exit(1)

str = input("Input: ")

#You can then get a list of available fonts with code like this:
figlet.getFonts()

if imp == False:
    try:
        figlet.setFont(font=sys.argv[2])
        print(figlet.renderText(str))
    except:
        print("invalid font")
        sys.exit(1)
else:
    font = random.choice(figlet.getFonts())
    print(f"Output: \n{figlet.renderText(str)}")
