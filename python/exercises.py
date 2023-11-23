input = "<div>abc</div><p><em><i>test test test</b></em></p><" 
count = 0
bool = True
word = ''
found = {
  '<div>': '</div>',
  '<p>': '</p>',
  '<i>': '</i>',
  '<p>': '</p>',
  '<em>': '</em>',  
  '<b>': '</b>',
  }

# code goes here
for check in input:
    if check == '<':
        count += 1
    elif check == '>':
        count -= 1
    
open = []
for check in input:
    
    word += check
    if check == '>':
        open.append(check)
    elif check == '</':
        open = []
            
      
             

print(found)
