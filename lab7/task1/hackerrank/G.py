if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    arr.sort()
    max2 = 0
    max1 = arr[0]
    for i in range(1, n):
        if(arr[i] > max1):
            max2 = max1
            max1 = arr[i]
    print(max2)