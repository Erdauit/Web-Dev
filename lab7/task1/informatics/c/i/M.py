n = int(input())
zeros_count = 0
for i in range(n):
    num = int(input())
    if num == 0:
        zeros_count += 1
print(zeros_count)