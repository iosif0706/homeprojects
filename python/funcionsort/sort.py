'''

Given a binary array, in-place sort it in linear time and constant space. 
The output should contain all zeroes, followed by all ones.

Input : [1, 0, 1, 0, 1, 0, 0, 1]
Output: [0, 0, 0, 0, 1, 1, 1, 1]

Input : [1, 1]
Output: [1, 1]

'''
def sort(input):
    
    input.sort()
    print(input)
    
    
if __name__ == '__main__':
    
    input = [1,5,6,3,2,6,]
    
    sort(input)