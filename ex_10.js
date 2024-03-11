class Funcionario { // Cria a classe Funcionário
    constructor(nome, idade, salarioBase) { // Criação dos atributos da classe Funcionário
        this.nome = nome; // Atribui o nome ao objeto
        this.idade = idade; // Atribui a idade ao objeto
        this.salarioBase = salarioBase; // Atribui o salário base ao objeto
    }

    calcularSalario() { // Cria um método calcularSalario para diferentes funcionários, que possivelmente recebem diferentes salários
    } // Nada foi adicionado porque trabalhamos apenas com um tipo de funcionário (Professor), então esse método será utilizado posteriormente.
}

class Professor extends Funcionario { // Cria a classe Professor, herdando atributos da classe Funcionario
    constructor(nome, idade, salarioBase, disciplina, horasAulaSemana) { // Criação dos atributos da classe Professor
    super(nome, idade, salarioBase); // Atributos herdados da classe Funcionario
    this.disciplina = disciplina; // Definição de atributo específico da classe Professor
    this.horasAulaSemana = horasAulaSemana; // Definição de atributo específico da classe Professor
    }

    calcularSalario() { // Método para calcular o salario dos professores
        this.valorHoraAula = 100; // Definição do valor da hora/aula, ou seja, cada hora de aula dada por um professor equivale à R$100 
        this.salarioBase = this.horasAulaSemana * this.valorHoraAula * 4 // Define que o salário de um professor será o produto entre a quantidade de horas de aula por semana, o valor (constante) da hora/aula e a quantidade de semanas por mês (4). 
        console.log(`A professora ${this.nome} recebe um salário de R$ ${this.salarioBase} por mês.`); // Mostra a mensagem no console
    }
}

let professora1 = new Professor('Janaína', '32', '0', 'Física', '20'); // Cria um objeto, definindo os atributos
let professora2 = new Professor ('Tati', '58', '0', 'Filosofia', '30'); // Cria um objeto, definindo os atributos

professora1.calcularSalario(); // Calcula e mostra no console o salário da Janaina 
professora2.calcularSalario(); // Calcula e mostra no console o salário da Tati