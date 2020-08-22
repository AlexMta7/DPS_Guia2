console.log("Hola mundo");
//Variables
var nombre = "Alex";
var age = 23;
var developer = true;
//Arreglos
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numeros = [123, 321, 231, 213];
//Enumerables
var CARGO;
(function (CARGO) {
    CARGO[CARGO["Employee"] = 0] = "Employee";
    CARGO[CARGO["Manager"] = 1] = "Manager";
    CARGO[CARGO["Admin"] = 2] = "Admin";
    CARGO[CARGO["Developer"] = 3] = "Developer";
})(CARGO || (CARGO = {}));
;
var rol = CARGO.Employee;
//Funciones
function Nombre(name, age) {
    var dato = document.write("Mi nombre es: " + name + ", mi edad es: " + age);
}
//Objetos
var Persona = /** @class */ (function () {
    function Persona(primerNombre, segundoNombre) {
        this.name = primerNombre;
        this.lastname = segundoNombre;
    }
    return Persona;
}());
//Se puede asignar o no los parametros, ya que en el constructor de la clase son opcionales
//Si no fueran opcionales, se tendrían que mandar obligatoriamente los parámetros
var personaUno = new Persona();
var personaDos = new Persona("Alex");
var personaTres = new Persona("Alex", "Mata");
/*INTERPOLACIÓN
Es la forma en que mezclamos variables junto con los strings. Acompañando de comillas francesas, podemos acceder al valor
de una variable de forma directa desde ese string*/
var a = "Roberto";
var b = "Mi nombre es :" + this.a;
console.log(b);
getSaludo(a);
function getSaludo(a, b) {
    var emojis = "\n        " + a + " manda saludos a todos\n    ";
}
var persona = {
    first_name: "",
    last_name: 'Cano',
    twitter_account: '@jorgecano'
};
