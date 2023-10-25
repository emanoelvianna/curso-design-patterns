class Carro {
    construir(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Fiat extends Carro {
    getInfo() {
        return `Fiat ${this.modelo} ${this.ano}`;
    }
}

class Ford extends Carro {
    getInfo() {
        return `Ford ${this.modelo} ${this.ano}`;
    }
}

class Volkswagen extends Carro {
    getInfo() {
        return `Volkswagen ${this.modelo} ${this.ano}`;
    }
}

class CarroFactory {
    criar(fabrica) {
        switch (fabrica) {
            case "Fiat":
                return new Fiat();
            case "Ford":
                return new Ford();
            case "Volkswagen":
                return new Volkswagen();
        }
    }

}

var fabrica = new CarroFactory();

var palio = fabrica.criar("Fiat");
palio.construir('Palio', 2019);
console.log(palio.getInfo())

var fiesta = fabrica.criar("Ford");
fiesta.construir('Fiesta', 2021);
console.log(fiesta.getInfo())