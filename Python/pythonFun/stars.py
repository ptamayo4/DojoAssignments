def draw_stars(arr):
    for i in range(len(arr)):
        if type(arr[i]) is int:
            print "*" * arr[i]
        elif type(arr[i]) is str:
            temp = arr[i]
            print temp[0] * len(temp)
x = [4,6,1,3,5,7,25]
y = ["Patrick",2,10,"Richard", "Hello"]
draw_stars(x)
draw_stars(y)
