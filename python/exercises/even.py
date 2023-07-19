def even(small, big):
    list_num = [0] * (big)
    even_list = []
    
    for x in range(len(list_num)):
        list_num[x] = x
        if x >= small and x % 2  == 0 :
            even_list.append(x)
            

    print(even_list)
    
if __name__ == '__main__' :
    
    small = 4
    big = 30
    
    even (small,big)