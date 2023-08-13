const apiKey = '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';

const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const responseDiv = document.getElementById('response');

submitButton.addEventListener('click', async () => {
    const userMessage = userInput.value;
    const response = await getChatGPTResponse(userMessage);
    displayResponse(response.choices[0].text);
});

async function getChatGPTResponse(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }]
        })
    });

    return response.json();
}

function displayResponse(responseText) {
    responseDiv.innerHTML = responseText;
}
