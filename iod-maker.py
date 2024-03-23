##
## EPITECH PROJECT, 2024
## JAM_NASA_BOT
## File description:
## paste-image-to-template
##

from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
import sys
import qrcode

if len(sys.argv) < 4:
    print("Usage: python iod-maker.py <image_file.png> <title_file.txt> <YYYY-MM-DD>")
    sys.exit(1)

image = sys.argv[1]
title_file = sys.argv[2]
date = sys.argv[3]

page_date = date[2:4] + date[5:7] + date[8:10]

iod_page = "https://apod.nasa.gov/apod/ap" + page_date + ".html"
qr = qrcode.make(iod_page)

# Open template image
template_image = Image.open("template.jpg")
image_content = Image.open(image)

new_size = (1113, 587)
data_image = image_content.resize(new_size)
qr = qr.resize((300, 300))

# Paste data image onto template image
template_image.paste(data_image, (92, 323))
template_image.paste(qr, (1400, 600))

# Read title content
with open(title_file, 'r') as title_file:
    title = title_file.read().strip()

title_pos = (648 - (len(title) * 10), 188)

# Draw text
draw = ImageDraw.Draw(template_image)
font = ImageFont.truetype("LeagueSpartan-Bold.ttf", size=48)
draw.text(title_pos, title, fill="white", font=font)
draw.text((109, 973), date, fill="white", font=font)

# Save final image as JPG
iod_name = "iod-" + date + ".jpg"
template_image.save(iod_name, "JPEG")

print("Image processing complete.")
