
function checkCaps(event) {
    const input = event.target.value;
    const warning = document.getElementById('capsWarning');
    if (/[A-Z]/.test(input)) {
        warning.style.display = 'inline';
        checkA = true;
    } else {
        warning.style.display = 'none';
    }
}
function permitirSomenteAlfanumerico(event) {
    const textoArea = event.target;
    const input = textoArea.value;
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (!regex.test(input)) {

        textoArea.value = input.replace(/[^a-zA-Z0-9\s]/g, '');
    }
}
function encryptText() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let encryptedText = text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
    resizeTextarea(outputText);
}
function decryptText() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let decryptedText = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}
function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
function resizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
window.addEventListener('load', function () {
    let outputText = document.getElementById("outputText");
    resizeTextarea(outputText);
});



