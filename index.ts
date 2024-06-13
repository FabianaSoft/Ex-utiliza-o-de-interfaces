interface Pessoa {
    readonly id: number;
    nome: string;
    idade: number;
    email?: string;

}

const pessoa: Pessoa = {
    id: 1,
    nome: "Lucas",
    idade: 23,    
}

const usuario: Pessoa = {
    id: 2,
    nome: "Fabiana",
    idade: 25,
    email: "teixeira.fabiana1@gmail.com"
}

function mostrarIndividuo(pessoa: Pessoa): string{
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`;
}

console.log(mostrarIndividuo(pessoa));
console.log(mostrarIndividuo(usuario));