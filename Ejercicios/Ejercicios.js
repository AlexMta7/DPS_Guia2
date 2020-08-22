//Ejercicio 1
console.log("Ejercicio 1");
var Rombo = /** @class */ (function () {
    function Rombo(hori, verti) {
        this.DiagonalHorizontal = hori;
        this.DiagonalVertical = verti;
    }
    Rombo.prototype.Area = function () {
        var area = this.DiagonalHorizontal * this.DiagonalVertical;
        return area;
    };
    return Rombo;
}());
var rom = new Rombo(15, 13);
var resu = rom.Area();
console.log(resu);
console.log("\n");
//Ejercicio 2
console.log("Ejercicio 2");
var spider = {
    nombre: "Peter Parker",
    poderes: ["Trepar", "Fuerza", "Agilidad", "Telas de araña"]
};
console.log(spider);
console.log("\n");
//Ejercicio 3
console.log("Ejercicio 3");
var Empleado = /** @class */ (function () {
    function Empleado(name, salary) {
        this.nombre = name;
        this.salario = salary;
    }
    Empleado.prototype.Descuentos = function () {
        var desc = (this.salario * 0.13);
        var total = this.salario - desc;
        var mensaje = "Monto total: " + this.salario.toString() + " Monto con descuento: " + total.toString();
        return mensaje;
    };
    return Empleado;
}());
var emple = new Empleado("Alex", 500);
var desc = emple.Descuentos();
console.log(desc);
console.log("\n");
//Ejercicio 4
console.log("Ejercicio 4");
var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    Calculadora.prototype.Suma = function () {
        var suma = "El número " + this.numero1 + " + " + this.numero2 + " = " + (this.numero1 + this.numero2);
        return suma;
    };
    Calculadora.prototype.Resta = function () {
        var resta = "El número " + this.numero1 + " - " + this.numero2 + " = " + (this.numero1 - this.numero2);
        return resta;
    };
    Calculadora.prototype.Multiplicacion = function () {
        var multi = "El número " + this.numero1 + " * " + this.numero2 + " = " + (this.numero1 * this.numero2);
        return multi;
    };
    Calculadora.prototype.Division = function () {
        var divi = "El número " + this.numero1 + " / " + this.numero2 + " = " + (this.numero1 / this.numero2);
        return divi;
    };
    return Calculadora;
}());
var calcu = new Calculadora(5, 9);
var suma = calcu.Suma();
var resta = calcu.Resta();
var multi = calcu.Multiplicacion();
var divi = calcu.Division();
var total = suma + "\n" + resta + "\n" + multi + "\n" + divi;
console.log(total);
