# ask user for change
while True:
    try:
        change = float(input("Change owed: "))

        while change < 0:
            print("Change must be bigger then 0")
            change = float(input("Change owed"))
# asure thet is a integer
    except ValueError:
        print("Not a integer")
        change = float(input("Change owed"))

    cents = int(change * 100)
    coins = 0
    quarters = 0
    dimes = 0
    nickels = 0
    pennies = 0
# calculate for quarters
    quarters = cents // 25
    cents %= 25
# calculate for dimes
    dimes += cents // 10
    cents %= 10
# calculate dor nickels
    nickels += cents // 5
    cents %= 5
# calculate for pennies
    pennies += cents // 1
    cents %= 1
# calculate numbers of coins
    coins = quarters + dimes + nickels + pennies
# print coins
    print(coins)
    break