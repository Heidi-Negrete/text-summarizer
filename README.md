Input text and receive an AI-powered summary

![ai text summarizer application](./aitextsummarizer.gif)

## References

This application was inspired by a project-based learning [course](https://academy.postman.com/project-ai-text-summarizer) by Postman that utilizes Node.js, Express, and Replit - but I thought it would be fun to take the idea and run with it using Python in a local environment.  
I decided not to host this app publicly in the cloud because I wasn't focused on security.

## Tech Stack

- Vanilla HTML/CSS/JS
- FastAPI (Python)
- Hugging Face Inference API ([BART model](https://huggingface.co/facebook/bart-large-cnn))

## Setting up local environment:

- See pipfile for requirements.
- Obtain a huggingface access token from your [huggingface account](https://huggingface.co) > settings > access token.
- rename .example_env to .env and replace the dummy token with your huggingface token.
- run backend server (default localhost 127.0.0.1:8000) from root directory with terminal command `uvicorn backend.main:app --reload`
- run frontend (I use live server in VS Code.)
- Double check that in main.py your list of allowed origins is configured with your front end (mine was localhost port 5500.)

:smile:
