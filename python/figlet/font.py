import sys
import random
from pyfiglet import Figlet

figlet = Figlet()
#You can then get a list of available fonts with code like this:
figlet.getFonts()

str = input("Input: ")

if len(sys.argv) == 1:
    font = random.choices(figlet.getFonts())
    print(f"Output: \n{figlet.renderText(str)}")

elif len(sys.argv) == 3 and (sys.argv[1] == "-f" or sys.argv[1] == "-font"):
    try:
        figlet.setFont(font=sys.argv[2])
        print(figlet.renderText(str))
    except:
        print("invalid font")
        sys.exit(1)
else:
    print("invalid font")
    sys.exit(1)






