class Calculator {
    constructor() {
        this.inOne = null;
        this.operation = null;
        this.inTwo = null;
    }

    calculate() {
        return eval(`${this.inOne} ${this.operation} ${this.inTwo}`);
    }

}
