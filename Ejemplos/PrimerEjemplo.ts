console.log("Hola mundo");

//Variables
var nombre:string = "Alex";
var age:number = 23;
var developer:boolean = true;

//Arreglos
var skills:Array<string> = ['JavaScript','TypeScript','Angular'];
var numeros:number[] = [123,321,231,213];

//Enumerables
enum CARGO {'Employee','Manager','Admin','Developer'};
var rol:CARGO = CARGO.Employee;

//Funciones
function Nombre(name:string,age:string){
    var dato = document.write("Mi nombre es: "+name+", mi edad es: "+age);
}

//Objetos
class Persona{
    name:string;
    lastname:string;
    constructor(primerNombre?:string,segundoNombre?:string){
        this.name = primerNombre;
        this.lastname = segundoNombre;
    }
}

//Se puede asignar o no los parametros, ya que en el constructor de la clase son opcionales
//Si no fueran opcionales, se tendrían que mandar obligatoriamente los parámetros
let personaUno = new Persona();
let personaDos = new Persona("Alex");
let personaTres = new Persona("Alex","Mata");


/*INTERPOLACIÓN
Es la forma en que mezclamos variables junto con los strings. Acompañando de comillas francesas, podemos acceder al valor
de una variable de forma directa desde ese string*/
var a:string ="Roberto";
var b = `Mi nombre es ${this.a}`;
console.log(b);
getSaludo(a);

function getSaludo(a?:string,b?:string){
    let emojis = `
        ${a} manda saludos a todos
    `;
}

//INTERFACES
//Las interfaces no se instancian mediando constructores, sino mediante un onjeto JSON. Palabra reservada interface
interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let persona:MyPersona = {
    first_name:"jorge",
    last_name:'Cano',
    twitter_account:'@jorgecano'
}

/*SHAPES
Son parecidos a la implementación de clases y siguen siendo un objeto. No se depende de constructores para asignar
valores a las variables internas de la clase, sino que asignamos directamente el valor después de la creación de la
instancia*/