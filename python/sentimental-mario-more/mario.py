def main():
    while True:
        try:
            n = int(input("Inaltimea:"))
            # program reject input as invalid, as by re-prompting the user to type in another number.
            if n < 1 or n > 8:
                print(" must be between 1 and 8")
                continue
            # loop in each coloum and row
            for i in range(n):
                for j in range(n):
                    if j >= n - (i + 1):
                        print("#", end="")
                    else:
                        print(" ", end="")
                for x in range(2):
                    if x < 2:
                        print(" ", end="")

                for m in range(n):
                    if m <= i:
                        print("#", end="")
                    else:
                        print("", end="")

                print()
        # if input is a string
        except ValueError:
            print("Not a integer")
            continue
        break


main()
