    # python collections (list,set,tuples,dictionary)
a=["tesla","spacex",100]                    # list (changeable,ordered)
b=("tesla","spacex","neuralink")            # tuple (unchangeable,ordered)
c={"tesla","spacex","neuralink"}            # set (unchangeable,unordered,no duplicates)
d={"name":"vsp","tech":20}                  # dictionary (changeable, ordered, no duplicates)

e=frozenset({"tesla","spacex","neuralink"}) # frozenset
f=1j                                        # complex    # 2+5j      # only j works
g=range(12)                                 # range
h=b"vsp"                                    # bytes
i=bytearray(10)                             # bytearray
k=memoryview(bytes(12))                     # memoryview
l=None                                      # NoneType
print(type(a),"\n",type(b),"\n",type(c),"\n",type(d),"\n",type(e),"\n",type(f),"\n",type(f),"\n",type(g),"\n",type(h),"\n",type(i),"\n",type(k),"\n",type(l))