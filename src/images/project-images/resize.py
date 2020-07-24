import os
from resizeimage import resizeimage
from PIL import Image

path = os.getcwd()

for folder in os.listdir():
    if(folder!="resize.py"):
        for image in os.listdir(path + "\\" + folder):
            localpath = os.listdir(path + "\\" + folder + "\\" + image) 
            if(image!="thumbnail"):
                with open(localpath, 'rb+') as f:
                    with Image.open(f) as image_opened:
                        print(image)
                        new_image = resizeimage.resize_height(image_opened, 800)
                        new_image.save(image_opened, image_opened.format)