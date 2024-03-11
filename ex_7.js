class Animal {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Esse animalzinho se chama ${this.nome} e ele tem ${this.idade} meses.`);
    }
}

let cachorro = new Animal('Dexter', '3');
cachorro.descrever();

let gato = new Animal ('Miso', '8');
gato.descrever();