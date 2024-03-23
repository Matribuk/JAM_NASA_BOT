##
## EPITECH PROJECT, 2024
## EPITECH-JAM-2
## File description:
## api
##

import requests
import os
from dotenv import load_dotenv
import sys

# Get date from command-line argument
if len(sys.argv) < 2:
    print("Usage: python script.py <YYYY-MM-DD>")
    sys.exit(1)

load_dotenv()

date = sys.argv[1]
api_key = os.getenv("API_KEY")
api = os.getenv("API_URL")

request = api + "?api_key=" + api_key + "&date=" + date

response = requests.get(request);

# Check if the request was successful
if response.status_code == 200:
    data = response.json()

    title = data['title']
    description = data['explanation']

    image_url = data['hdurl']
    image_response = requests.get(image_url)

    if image_response.status_code == 200:
        # Create directory based on the date
        directory_name = date
        if not os.path.exists(directory_name):
            os.makedirs(directory_name)

        # Save image file
        image_file = os.path.join(directory_name, "image-of-the-day-" + date + ".jpg")
        with open(image_file, 'wb') as file:
            file.write(image_response.content)
        print("Image saved successfully as:", image_file)

        # Save title and description files
        title_file = os.path.join(directory_name, "title-of-the-day-" + date + ".txt")
        description_file = os.path.join(directory_name, "description-of-the-day-" + date + ".txt")

        with open(title_file, 'w') as file:
            file.write(title)
        print("Title saved successfully as:", title_file)

        with open(description_file, 'w') as file:
            file.write(description)
        print("Description saved successfully as:", description_file)
    else:
        print("Error while fetching image data:", image_response.status_code)

else:
    print("Error while fetching title and description data:", response.status_code)