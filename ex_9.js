class SomadorDeNotas {
    constructor(total) {
        this.total = 0;
    }

    adicionarNota(nota) {
        this.total += nota
    }

    verTotal() {
        console.log(`O total da soma de notas é igual a: ${this.total}`);
    }
}

let somador = new SomadorDeNotas();

somador.adicionarNota(8);
somador.adicionarNota(2);
somador.adicionarNota(7);

somador.verTotal();
