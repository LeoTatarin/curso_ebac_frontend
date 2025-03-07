/*const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;
    
    formEValido = validaNome(nomeBeneficiario.value);
    if(formEValido) {
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else{
        alert("O nome não esta completo!");
    }
})

console.log(form);*/


document.getElementById('form-maior-menor').addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');
    const numero1 = Number(document.getElementById('primeiro-numero').value); // getElementById.value puxa o conteudo do elemento como string "Number" converte para numero //
    const numero2 = Number(document.getElementById('segundo-numero').value);

    let mensagem = '';

    if (numero1 > numero2) {
        mensagem = `O primeiro número, ${numero1}, é maior que o segundo, ${numero2}!`;
    }
    else if (numero1 < numero2) {
        mensagem = `O primeiro número, ${numero1}, é menor que o segundo, ${numero2}!`;
    }
    else{
        mensagem = 'Os dois números são iguais!';
    }

    alert(mensagem);

    primeiroNumero.value = '';
    segundoNumero.value = '';

});

