def lucky_sum(a, b, c):
    sm = 0
    for n in (a, b, c):
        if n != 13:
            sm += n
        else:
            break
    return sm


def close_far(a, b, c):
    a_b_diff = abs(a - b)
    a_c_diff = abs(a - c)
    b_c_diff = abs(b - c)
    return (
        (a_b_diff <= 1 and a_c_diff >= 2 and b_c_diff >= 2) !=
        (a_c_diff <= 1 and a_b_diff >= 2 and b_c_diff >= 2)
    )


def round_sum(a, b, c):
    rounded_values = [int(round(num, -1)) for num in (a, b, c)]
    return sum(rounded_values)


def no_teen_sum(a, b, c):
    nums = (a, b, c)
    return sum(fix_teen(n) for n in nums)


def fix_teen(n):
    return 0 if n not in (15, 16) and 13 <= n <= 19 else n


def make_bricks(small, big, goal):
    big_needed = min(big, goal // 5)
    return goal - (big_needed * 5) <= small


def make_chocolate(small, big, goal):
    if goal >= 5 * big:
        remainder = goal - 5 * big
    else:
        remainder = goal % 5
    if remainder <= small:
        return remainder  
    return -1
