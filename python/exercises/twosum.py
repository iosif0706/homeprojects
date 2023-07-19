

# Function to find a pair in an array with a given sum using sorting
def findPair(nums, target):
 
    nums.sort()
    (low, hight) = (0, len(nums) - 1)
    
    while low < hight:
        if nums[low] + nums[hight] == target:
            print('pair faund',nums[low],nums[hight])
            return
        if nums[low] + nums[hight] < target:
            low = low + 1
        else:
            hight = hight-1
    print("pair not faund")
 
if __name__ == '__main__':
 
    nums = [3,8,5,11,45,76,4]
    target = 19
 
    findPair(nums, target)
 