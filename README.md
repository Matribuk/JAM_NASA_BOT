# JAM_NASA_BOT

This project aims to create a tool for fetching images from NASA's API and embedding them onto a template image along with relevant text. It consists of one script, `apod-maker.py`, which generate a .jpg file with a date as argument.

## Features

- Fetches data from NASA API including image URL, title and a QR code of the page of the new.
- Downloads the image from the provided URL.
- Embeds the fetched image onto a template image.
- Adds text overlay containing title, date, and a generated qrcode of the news.
- Saves the processed image as a JPEG file.

## Usage

### `apod-maker.py`

This script fetches data from NASA's API, downloads the image, pastes it onto a template image, adds relevant text, the date passed as argument and a generated QR code, and saves the final image.

## Prerequisites

- Python 3
- Pillow library (for image processing)
- Requests library (for making HTTP requests)
- Python-dotenv library (for loading environment variables)
- Python-qrcode library (for qrcode generation)
(check requirement.txt)

## Setup

1. Clone the repository.
2. Install dependencies using `pip install -r requirements.txt`.
3. Configure environment variables:
   - `API_KEY`: NASA API key
   - `DATE`: Date for fetching NASA image of the day
   - `API_URL`: NASA API endpoint URL

## Usage

1. Execute `paste-image-to-template.py` to process and embed NASA images onto a template.
2. Execute `api.py` to fetch data from NASA's API and store it locally.

## License

This project is licensed under the MIT License.
