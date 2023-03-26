def smallest_of_four(a, b, c, d):
    return min(a, b, c, d)

a = list(map(int, input().split())) 
print(smallest_of_four(a[0], a[1], a[2], a[3]))