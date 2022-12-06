export default class Calculator{

    num1;
    num2;
    operator;

    constructor(num1, num2, operator){
        this.num1 = num1
        this.num2 = num2
        this.operator = operator
    }

    calculate(){
        switch(this.operator){
            case "sub":
                return this.num1 - this.num2
            case "mul":
                return this.num1 * this.num2
            case "div":
                return this.num1 / this.num2
            default:
                return this.num1 + this.num2
        }
    }
}