function sumar() {
    let n1 = parseFloat(document.getElementById('num1').value) || 0;
    let n2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('resultado').innerText = "Resultado: " + (n1 + n2);
}

function restar() {
    let n1 = parseFloat(document.getElementById('num1').value) || 0;
    let n2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('resultado').innerText = "Resultado: " + (n1 - n2);
}

function multiplicar() {
    let n1 = parseFloat(document.getElementById('num1').value) || 0;
    let n2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('resultado').innerText = "Resultado: " + (n1 * n2);
}

function dividir() {
    let n1 = parseFloat(document.getElementById('num1').value) || 0;
    let n2 = parseFloat(document.getElementById('num2').value) || 0;
    if (n2 !== 0) {
        document.getElementById('resultado').innerText = "Resultado: " + (n1 / n2);
    } else {
        document.getElementById('resultado').innerText = "Resultado: Error (División por 0)";
    }
}
