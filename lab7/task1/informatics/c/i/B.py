a = int(input())
b = int(input())
c = int(input())
d = int(input())

for num in range(a, b + 1):
    if num % d == c:
        print(num, end=" ")