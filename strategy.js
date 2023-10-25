class Funcionario {
    constructor(salario) {
        this.salario = salario;
    }
}

class Desenvolvedor extends Funcionario {
    calcularSalario() {
        return this.salario * 0.70;
    }   
}

class Gerente extends Funcionario {
    calcularSalario() {
        return this.salario * 0.85;
    }   
}


class Empresa {

    constructor() {
        this.funcionario = undefined;
    }

    setStrategy(funcionario) {
        this.funcionario = funcionario;
    }

    calcularSalario() {
        if(this.funcionario != undefined) {
            return this.funcionario.calcularSalario();
        }
    }

}

var empresa = new Empresa();
empresa.setStrategy(new Gerente(12.000));
console.log(empresa.calcularSalario());