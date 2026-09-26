function formatarCpf(texto) {
    let digitos = "";
    for (const caractere of texto) {
        if (caractere >= "0" && caractere <= "9") {
            digitos += caractere;
        }
    }
    digitos = digitos.slice(0, 11);

    let resultado = "";
    for (let i = 0; i < digitos.length; i++) {
        if (i === 3 || i ===6) {
            resultado += ".";
        }
        if (i===9) {
            resultado += "-";
        }
        resultado += digitos[i];
    }
    return resultado;
}