def double_char(str):
    return ''.join(char * 2 for char in str)


def count_code(str):
    return sum(1 for i in range(len(str) - 3)
               if str[i:i + 2] == 'co' and str[i + 3] == 'e'
               )


def count_hi(str):
    return str.count('hi')


def end_other(a, b):
    long_s, short_s = (a, b) if len(a) >= len(b) else (b, a)
    return long_s.lower().endswith(short_s.lower())


def cat_dog(str):
    return str.count("cat") == str.count("dog")


def xyz_there(str):
    return str.count('.xyz') != str.count('xyz')