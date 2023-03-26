n = int(input())

k = 0
power_of_two = 1

while power_of_two < n:
    power_of_two *= 2
    k += 1
print(k)