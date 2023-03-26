binary = input() 
decimal = 0  

for i in range(len(binary)):
    digit = int(binary[-i-1])
    decimal += digit * (2 ** i)

print(decimal)