def sum67(nums):
    flag = True
    sm = 0
    for n in nums:
        if n == 6:
            flag = False
        if flag:
            sm += n
            continue
        if n == 7:
            flag = True
    return sm


def big_diff(nums):
    return max(nums) - min(nums)


def sum13(nums):
    sum = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
            continue
        sum += nums[i]
        i += 1
    return sum


def count_evens(nums):
    return sum(1 for n in nums if n % 2 == 0)


def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False


def centered_average(nums):
    small = min(nums)
    big = max(nums)
    return (sum(nums) - small - big) / (len(nums) - 2)
