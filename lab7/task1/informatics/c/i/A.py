a = int(input())
b = int(input())

for num in range(a, b+1):
    if num % 2 == 0:
        print(num, end=" ")