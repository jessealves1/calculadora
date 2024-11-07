let resultado = "";

function adicionarValor(valor) {
    resultado += valor;
    document.getElementById("resultado").value = resultado;
}

function calcular() {
    try {
        resultado = eval(resultado);
        document.getElementById("resultado").value = resultado;
    } catch (error) {
        document.getElementById("resultado").value = "Erro";
        resultado = "";
    }
}

function limpar() {
    resultado = "";
    document.getElementById("resultado").value = "";
}
