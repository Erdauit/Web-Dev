x = int(input())
reverse_x = 0
while x > 0:
    reverse_x = reverse_x * 10 + x % 10
    x = x // 10
print(reverse_x)