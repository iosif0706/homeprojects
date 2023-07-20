
strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
first = set(strArr[0].split(", "))
secund = set(strArr[1].split(", "))

result = sorted(list(first.intersection(secund)), key = lambda str: int(str))
result = ', '.join(result)
print(result)

