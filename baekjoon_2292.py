n = int(input())
end = 1
layer = 1
while(n > end):
    end += 6 * layer
    layer += 1
print(layer)
