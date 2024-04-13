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
}