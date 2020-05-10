# a function to reverse an input array
def reverseArray(inputArray):
  for i in range(len(inputArray)//2):
    inputArray[i],inputArray[-(i+1)]=inputArray[-(i+1)],inputArray[i]
  return inputArray

# print(reverseArray([1,2,3,4,5]))
# print(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]))

# method #2.

def reverseArray2(inputArray):
  outputArray=[]
  for i in range(len(inputArray)):
    outputArray.append(inputArray[-i-1])
  return outputArray

# print(reverseArray2([1,2,3,4,5,6,7]))