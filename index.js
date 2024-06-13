var pessoa = {
    id: 1,
    nome: "Lucas",
    idade: 23,
};
var usuario = {
    id: 2,
    nome: "Fabiana",
    idade: 25,
    email: "teixeira.fabiana1@gmail.com"
};
function mostrarIndividuo(pessoa) {
    return "Nome: ".concat(pessoa.nome, ", Idade: ").concat(pessoa.idade, ", Email: ").concat(pessoa.email);
}
console.log(mostrarIndividuo(pessoa));
console.log(mostrarIndividuo(usuario));
