function handleResponse(type) {
    const userInput = type;
    const messageBox = document.createElement('div');
    messageBox.textContent = `Anda memilih: ${userInput}`;
    document.body.appendChild(messageBox);

    const responseDiv = document.createElement('div');
    switch (userInput) {
        case "gambar":
            responseDiv.textContent = "Saya bisa membantu membuat gambar untuk Anda.";
            break;
        case "analisis":
            responseDiv.textContent = "Saya sedang menganalisis gambar Anda.";
            break;
        case "nasihat":
            responseDiv.textContent = "Selalu jaga semangat dan terus belajar!";
            break;
        case "lainnya":
            responseDiv.textContent = "Silakan pilih opsi yang lain.";
            break;
        default:
            responseDiv.textContent = "Saya tidak mengerti.";
    }
    document.body.appendChild(responseDiv);
}

// Simulasi jika user mengetik di kotak pesan dan klik ikon mikrofon
function simulateResponse() {
    const userText = document.getElementById('userInput').value;
    if (userText.trim() === '') return;

    const responseDiv = document.createElement('div');
    responseDiv.textContent = `AI: Hai! Anda bertanya tentang: "${userText}"`;
    document.body.appendChild(responseDiv);

    document.getElementById('userInput').value = '';
}
