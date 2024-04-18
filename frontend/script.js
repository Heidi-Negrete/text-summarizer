const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit_button");
const summarizedTextArea = document.getElementById("summary");

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

submitButton.disabled = true


function verifyTextLength(event) {
    const textarea = event.target;

    if (textarea.value.length > 200 && textarea.value.length < 100000) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}

function submitData(event) {
    submitButton.classList.add("submit_button--loading");
    
    const text_to_summarize = textArea.value;


    const url = "http://127.0.0.1:8000"
    //const secret = ""

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //myHeaders.append("Authorization", `Bearer ${secret}`);

    const raw = JSON.stringify({
    "text": text_to_summarize
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch(`${url}/summarize`, requestOptions)
    .then(response => response.json())
        .then(text => {
            summarizedTextArea.value = text.content;
        })
    .catch((error) => {
        console.error(error);
        summarizedTextArea.value = "Something went wrong. Please try again later.";
    })
    .finally( () => submitButton.classList.remove("submit_button--loading"));

  }