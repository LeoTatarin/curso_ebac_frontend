
/*const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./aprovado.png" alt = "Emoji celebrando" />';
const imgReprovado = '<img src="./reprovado.png" alt = "Emoji triste" />';
const atividades = [];
const notas = [];
const spamAprovado = '<spam class="resultado aprovado">Aprovado</spam>';
const spamReprovado = '<spam class="resultado reprovado">Reprovado</spam>';
const notaMinima = parseFloat(prompt('Digite a nota minima: '))


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});   

function adicionaLinha() {

    const inputNomeContato=document.getElementById('nome-contato');
    const inputNumero=document.getElementById('numero');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} ja foi adicionada`);
    } else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    

    

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const media = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = media >= notaMinima ? spamAprovado : spamReprovado;

}   

function calculaMediaFinal(){
    let somaDasNotas =0;
    for (let i = 0; i< notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}*/


const form = document.getElementById('form-contatos');
const contatos = [];
const numero = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaContato();
    atualizaTabela();


});  

function adicionaContato(){

    const inputNomeContato=document.getElementById('nome-contato');
    const inputNumero=document.getElementById('numero');

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} ja foi adicionado`);
    }else if(numero.includes(inputNumero.value)){
        alert(`O Numero: ${inputNumero.value} ja foi adicionado`);
    }else{
        contatos.push(inputNomeContato.value);
        numero.push(inputNumero.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumero.value = '';

}

function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
