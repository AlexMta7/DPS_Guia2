
//Ejercicio 1
console.log("Ejercicio 1");
class Rombo{
    DiagonalVertical:number;
    DiagonalHorizontal:number;

    constructor(hori?:number,verti?:number){
        this.DiagonalHorizontal = hori;
        this.DiagonalVertical = verti;
    }

    Area():number { //Area del rombo
        var area:number = this.DiagonalHorizontal*this.DiagonalVertical;
        return area;
    }
}

let rom = new Rombo(15,13);
let resu = rom.Area();
console.log(resu);
console.log("\n");

//Ejercicio 2
console.log("Ejercicio 2");
interface Spiderman{
    nombre:string;
    poderes:string[];
}

let spider:Spiderman = {
    nombre: "Peter Parker",
    poderes:["Trepar","Fuerza","Agilidad","Telas de araña"]
}
console.log(spider);
console.log("\n");

//Ejercicio 3
console.log("Ejercicio 3")
class Empleado{
    nombre:string;
    salario:number;

    constructor(name:string,salary:number){
        this.nombre = name;
        this.salario = salary;
    }

    Descuentos():string{
        var desc:number = (this.salario*0.13);
        var total:number = this.salario - desc; 
        var mensaje:string = "Monto total: " + this.salario.toString() + " Monto con descuento: " +total.toString();    
        return mensaje;
    }
}

let emple = new Empleado("Alex",500);
let desc = emple.Descuentos();
console.log(desc)
console.log("\n");

//Ejercicio 4
console.log("Ejercicio 4");
class Calculadora {
    numero1: number;
    numero2: number;

    constructor(num1:number,num2:number){
        this.numero1 = num1;
        this.numero2 = num2;
    }

    Suma():string {
        var suma = "El número " + this.numero1 + " + " + this.numero2 + " = " + (this.numero1+this.numero2);
        return suma;
    }

    Resta():string {
        var resta = "El número " + this.numero1 + " - " + this.numero2 + " = " + (this.numero1-this.numero2);
        return resta;
    }
    
    Multiplicacion():string {
        var multi = "El número " + this.numero1 + " * " + this.numero2 + " = " + (this.numero1*this.numero2);
        return multi;
    }

    Division():string {
        var divi = "El número " + this.numero1 + " / " + this.numero2 + " = " + (this.numero1/this.numero2);
        return divi;
    }
}

let calcu = new Calculadora(5,9);
let suma = calcu.Suma();
let resta = calcu.Resta();
let multi = calcu.Multiplicacion();
let divi = calcu.Division();
let total =  suma + "\n" + resta + "\n" + multi + "\n" + divi;
console.log(total);

