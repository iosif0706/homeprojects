from zmq import NULL


def rearrange(A):
		# Write your code here...
		
    left = [0] * len(A)
    

    
    for i in range( len(left)):
        left[i] = A[i]
        if A[i] == 0:
            A.append(A[i])
            left[i] = A[i +1]
            del A[i]
    print(A)
            
            

if __name__ == '__main__':
    A = [0, -3, 5, -4, -2, 3, 1, 0]
    
    rearrange(A)