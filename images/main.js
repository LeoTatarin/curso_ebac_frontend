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
