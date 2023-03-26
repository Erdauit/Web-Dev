def func(a, n):
    return a ** n

a = list(map(float, input().split()))
print(func(a[0], a[1]))