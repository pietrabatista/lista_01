class Animal {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;  
    }

    descrever() {
        console.log(`Esse animalzinho se chama ${this.nome} e ele tem ${this.idade} meses.`)
    }
}

class Gato extends Animal {
    constructor (nome, idade, cor) {
        super (nome, idade);
        this.cor = cor;
    }

    miar() {
        console.log('Miau...');
    }
}

let cachorro = new Animal('Dexter', '3');
cachorro.descrever();

let gato = new Gato ('Miso', '5');
gato.descrever()
gato.miar();

