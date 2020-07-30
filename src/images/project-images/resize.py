import os
from PIL import Image
from resizeimage import resizeimage

path = os.getcwd()

for folder in os.listdir(path):
    if(folder!='resize.py'):
        for photo in os.listdir(path+'/'+folder):
            if(photo!='thumbnail'):
                with open(path+'/'+folder+'/'+photo, 'r+b') as f:
                    with Image.open(f) as image:
                        new = resizeimage.resize_height(image, 600)
                        new.save(path+'/'+folder+'/'+photo, image.format)

print("ready")