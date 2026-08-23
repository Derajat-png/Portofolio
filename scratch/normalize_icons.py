import os
from PIL import Image

def trim_transparency_threshold(img_path, threshold=10):
    img = Image.open(img_path)
    w, h = img.size
    pixels = img.load()
    
    min_x, min_y, max_x, max_y = w, h, 0, 0
    found = False
    
    for y in range(h):
        for x in range(w):
            alpha = pixels[x, y][3]
            if alpha > threshold:
                found = True
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
                
    if found:
        # Add a tiny padding
        pad_x = int(w * 0.02)
        pad_y = int(h * 0.02)
        
        left = max(0, min_x - pad_x)
        top = max(0, min_y - pad_y)
        right = min(w, max_x + pad_x)
        bottom = min(h, max_y + pad_y)
        
        trimmed_img = img.crop((left, top, right, bottom))
        # Ensure we preserve original image object/file
        trimmed_img.save(img_path)
        print(f"Trimmed {img_path} with threshold from {img.size} to {trimmed_img.size}")
    else:
        print(f"No pixels with alpha > {threshold} found in {img_path}")

if __name__ == "__main__":
    trim_transparency_threshold("src/assets/Mysql.png")
    trim_transparency_threshold("src/assets/Javascript.png")
    trim_transparency_threshold("src/assets/laravel.png")
