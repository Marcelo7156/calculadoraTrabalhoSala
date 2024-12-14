function pegarValor() {
    const selecionado = document.querySelector('input[name="calcular_escolha"]:checked');
    const valor1 = Number(document.getElementById('id_numero1').value);
    const valor2 = Number(document.getElementById('id_numero2').value);
    let total, total2;

    if (selecionado) {
        switch (selecionado.value) {
            case "somar":
                total = valor1 + valor2; 
                break;
            case "subtrair":
                total = valor1 - valor2;
                break;
            case "multiplicar":
                total = valor1 * valor2;
                break;
            case "dividir":
                if (valor2 != 0 && valor1 > valor2) {
                    total = valor1 / valor2;
                } else {
                    document.getElementById('resultado').textContent = `Não existe divisão por zero!`;
                    return;
                }
                break;
            case "potenciacao":
                if (valor2 < 20 && valor1 < 10000000) {
                    total = valor1 ** valor2;
                } else {
                    document.getElementById('resultado').textContent = `Valor muito grande!`;
                    return;
                }
                break;
            case "radiacao":
                total = Math.sqrt(valor1);
                total2 = Math.sqrt(valor2);
                break;
            case "porcentagem":
                if (valor1 > 0) {
                    total = (valor1 / 100) * valor2;
                } else {
                    document.getElementById('resultado').textContent = `Faltei algumas aulas de matemática, então nem sei se existe porcentagem com número negativo e não estou psicologicamente pronto para descobrir.`;
                    return;
                }
                break;
        }

        // Formatando os resultados
        if (selecionado.value != 'radiacao') {
            document.getElementById('resultado').textContent = `Resultado: ${formatarNumero(total)}`;
        } else {
            document.getElementById('resultado').textContent = `Resultados: Valor 1: ${formatarNumero(total)} -- Valor 2: ${formatarNumero(total2)}`;
        }
    } else {
        alert('Você precisa selecionar uma conta!');
    }
}

// Função para formatar números com vírgulas e pontos
function formatarNumero(valor) {
    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2, // Mínimo de 2 casas decimais
        maximumFractionDigits: 2  // Máximo de 2 casas decimais
    });
}
