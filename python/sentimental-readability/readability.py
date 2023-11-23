from cs50 import get_string
# ask user for text
text = get_string("Text : ").strip()

letters, word, sentece = 0, 1, 0
# loop trough text
for i in range(len(text)):

    if text[i].isalpha():
        letters += 1

    elif text[i] == " ":
        word += 1

    elif text[i] == "?" or text[i] == "!" or text[i] == ".":
        sentece += 1
# Coleman - Liau formula
L = float(letters / word) * 100
S = float(sentece / word) * 100
index = round(0.0588 * L - 0.296 * S - 15.8)
# print grade
if index < 1:
    print("Before Grade 1")
elif index > 16:
    print("Grade 16+")
else:
    print(f"Grade :{index}")

