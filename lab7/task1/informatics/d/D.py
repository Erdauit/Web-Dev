n = int(input())
a = list(map(int, input().split())) 

cnt = 0
prev = a[0]
for i in range(1, n):
    if(a[i] > prev):
        cnt += 1
    prev = a[i]
print(cnt)