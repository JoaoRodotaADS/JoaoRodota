const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const operacaoopercacao = document.querySelector("#opercacao");
const igual = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

igual.addEventListener("click" ,calcular);

    // value resgata o valor que foi preenchido no campo.
    //parseInt Transforma "text" em numeros inteiro, para a soma.

function calcular(){
    const valor1 = parseInt (campo1.value);
    const valor2 = parseInt (campo2.value);
    const operacao = opercacao.value;
    
        if (operacao === "somar")
            resposta.innerHTML = valor1 + valor2;
  
        if (operacao ==="multiplicar")
            resposta.innerHTML = valor1 * valor2;
 
        if (operacao ==="dividir")
            resposta.innerHTML = valor1 / valor2;

        if (operacao ==="subtrair")
            resposta.innerHTML = valor1 - valor2;
}