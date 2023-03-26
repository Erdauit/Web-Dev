n = int(input())
arr = list(map(int, input().split()))

for i in range(n-1):
    if arr[i]*arr[i+1] > 0:
        print("YES")
        break
else:
    print("NO")