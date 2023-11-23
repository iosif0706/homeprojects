from cs50 import get_string

#prompt user for string
s = get_string("Greeting:")
if s in ["Hey", "How you doing?"]:
    print("$20")
elif s in ["What's happening?", "What's up?"]:
    print("$100")
else:
    print("$0")

