def first_last6(nums):
    return 6 in [nums[0], nums[-1]]


def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]


def reverse3(nums):
    return [nums[2], nums[1], nums[0]]


def middle_way(a, b):
    return [a[1], b[1]]


def make_ends(nums):
    return [nums[0], nums[-1]]


def has23(nums):
    return 2 in nums or 3 in nums


def same_first_last(nums):
    return len(nums) > 0 and nums[0] == nums[-1]


def make_pi():
    return [3, 1, 4]


def sum3(nums):
    return sum(nums)


def max_end3(nums):
    return [nums[0]] * 3 if nums[0] >= nums[-1] else [nums[-1]] * 3


def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]


def sum2(nums):
    return sum(nums[:2])
