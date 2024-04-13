import requests
import json
import os
from dotenv import load_dotenv, dotenv_values
from pydantic import BaseModel


load_dotenv()

url = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"

secret = os.getenv("BEARER_TOKEN")


async def summarize_text(text: str):
    try:
        payload = json.dumps({"inputs": text, "parameters": {
            "max_length": 100, "min_length": 30}})
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {secret}'
        }

        response = requests.request("POST", url, headers=headers, data=payload)
        response.raise_for_status()
        response_dict = response.json()
        return response_dict[0].get("summary_text")

    except requests.exceptions.RequestException as e:
        print(f'An error occurred: {e}')
        return
