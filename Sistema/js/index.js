//DOM - Elementos HTML

const nome = document.querySelector('#nome');
const unidade1 = document.querySelector('#unidade1');
const unidade2 = document.querySelector('#unidade2');
const unidade3 = document.querySelector('#unidade3');
const botao = document.querySelector('#btn');
const notaFinal = document.querySelector('#nota');
const resultado = document.querySelector('#resultado');
const alvo = document.querySelector('.alvo');
// aqui começa para valer 

botao.addEventListener('click', calculoUnidade);

function calculoUnidade(){
    event.preventDefault();
    
    let nota =  (unidade1.value /3 ) + (unidade2.value /3 ) + (unidade3.value /3 );
     notaFinal.value = nota.toFixed(2);

   if(nota < 4){
        resultado.innerHTML = "Sr(a)" + nome.value + " Recuperação!";
        alvo.src = "images/entao.png";               

   }else if(nota >= 4 && nota < 7){
        resultado.innerHTML = "Sr(a)" + nome.value + " Prova Final!";
        alvo.src = "images/procupado.png";               

   }else {
         nota >= 7
         resultado.innerHTML = "Sr(a)" + nome.value + " Aprovado";
         alvo.src = "images/feliz.png";               

   }

   
}