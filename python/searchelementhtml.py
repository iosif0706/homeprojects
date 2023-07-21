
def checkelement(element):
    
    found = []
    count = 0
    word = ''
    bool = True
    open_element = ''
    close_element = ''
    for check in html:
            word += check
            if word == '<div>' or word == '<p>' or word == '<i>' or word == '<a>':
                open_element += word
                count += 1
                word = ''
            elif  word == '</div>' or word == '</p>' or word == '</i>' or word == '</a>':
                open_element += word
                count -= 1
                word = ''
            elif word[0] != '<':
                word = ''
     
                

                
    if count == 1:
        bool = False
    print(open_element)
    print(close_element)
    print(bool)
        
        

if __name__ == '__main__':
    html = '<div></div><p>word<a></p><i></i><div>gg</div>'
    
    checkelement(html)
    
    
    

