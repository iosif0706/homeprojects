
def checkelement(element):
    
    found = []
    letter = ''
    element = ''
    for check in html:
            letter += check
            if letter[0] == '<' and letter[-1] == '>':
                found.append(letter)
                letter = ''
            elif letter[0] != '<':
                letter = ''
                
    open_element = []
    close_element = []
    for item in found:
        if item == '<div>' or item == '<p>' or item == '<i>' or item == '<a>':
            open_element.append(item)
        elif item == '</div>' or item == '</p>' or item == '</i>' or item == '</a>':
            close_element.append(item)
    
    print(open_element)
    print(close_element)
    print(True)
        
        

if __name__ == '__main__':
    html = '<div></div><p>word<a></p><i></i><div>gg</div>'
    
    checkelement(html)
    
    
    

