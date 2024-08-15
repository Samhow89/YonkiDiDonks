function convertYonks() {
    const yonks = document.getElementById('yonksInput').value;
    const seconds = yonks * 6932847160; // Assuming 1 Yonki Di Donk = 60 seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    document.getElementById('result').innerText = `${yonks} Yonki Di Donks is approximately ${minutes} minutes and ${remainingSeconds} seconds.`;
}
