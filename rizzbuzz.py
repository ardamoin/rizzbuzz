def rizzbuzz(end_num):
    for i in range(1, end_num + 1):
        if i % 3 == 0 and i % 5 == 0:
            print(f"{i} rizzbuzz <3   HELLA RIZZZ!!!")
        else:
            if i % 3 == 0:
                print(f"{i} rizz")

            elif i % 5 == 0:
                print(f"{i} buzz")

            else:
                print(f"{i}")


if __name__ == "__main__":
    rizzbuzz(100)
