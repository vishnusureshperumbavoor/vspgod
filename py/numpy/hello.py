import numpy as np 
print(np.array([1,2,3,4]))  # lists
print(np.array((1,2,3,4)))  # tuples
print("dimension = ",np.array([1,2,3,4]).ndim)
print(np.array([[1,2],[3,4]]))  # 2D array  
print()
print(np.array([[[1,2],[3,4]],[[5,6],[7,8]]]))  # 3D array
print(type(np.array((1,2,3,4))))
print(np.__version__)
print(np.array([1,2,3,4],ndmin=5))
print("dimension = ",np.array([1,2,3,4],ndim=5).ndim)


# numpy = numerical python 
# to work with arrays
# array object in numpy is called ndarray
# numpy arrays are faster than lists