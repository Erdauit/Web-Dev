n = int(input())
arr = list(map(int, input().split()))

for i in range(n // 2):
    arr[i], arr[n-i-1] = arr[n-i-1], arr[i]

print(*arr)