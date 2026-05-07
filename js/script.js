//Comentário em linha
/*
    Comentário em bloco
*/

//Forma de declaração de variáveis

var nome = "Renato"; //Deve ser evitado
let sobrenome = "Silva"; //Deve ser utilizado
// const idade = 20;//Constante, não pode ser alterada no fluxo do código

//Exemplo da diferencia entre var e let

if (true) {
  var nome = "Joaquim"; //Deve ser evitado
  let sobrenome = "de Paula"; //Deve ser utilizado
}
console.log(nome);
console.log(sobrenome);
// console.log(idade);

//tipo de dados
const nome = "Renato";
console.log(typeof nome);
const idade = 20;
console.log(typeof idade);
const sobrenome = "Silva";
console.log(typeof sobrenome);
const corSelecionada = null;
console.log(typeof corSelecionada);

//tipagem no js e dinamica
let variavel;
console.log("Valor: " + variavel);
console.log("tipo: " + typeof variavel);

let nome = "Renato";
console.log("Valor: " + nome);
console.log("tipo: " + typeof nome);

//LICAO PRA CASA
//crie um objeto que seja semelhante aos dados do formulario de login
const dadosLogin = {
  email: "renato@example.com",
  senha: "123456",
};
//imprimi os dados do objeto no console.
console.log(dadosLogin);
