def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else cigars in range(40, 61)


def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5
    if speed <= 60:
        return 0
    return 1 if 61 <= speed <= 80 else 2


def love6(a, b):
    return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6


def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 1


def sorta_sum(a, b):
    return 20 if a + b in range(10, 20) else a + b


def in1to10(n, outside_mode):
    if outside_mode:
        return n <= 1 or n >= 10
    return 1 <= n <= 10


def squirrel_play(temp, is_summer):
    return temp in range(60, 101 if is_summer else 91)


def alarm_clock(day, vacation):
    week_day = day not in (1, 6)
    if vacation:
        return '10:00' if week_day else 'off'
    return '7:00' if week_day else '10:00'


def near_ten(num):
    num_mod_10 = num % 10
    return num_mod_10 <= 2 or num_mod_10 >= 8
