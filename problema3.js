let nombreTrabajador  = prompt("por favor ingrese el nombre del trabajador ").toLowerCase();
let edadTrabajador  = parseInt(prompt ("por favor ingrese la edad de su trabajador "));

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empresa {
    constructor (edadtope){
        this.edatope =  edadtope;
        this.trabajadoresContratados = [];
        this.trabajadoresNoContratados = [];
    }

    agregartrabajador(persona){
        if (persona.edad <= this.edatope){
            this.trabajadoresContratados.push(persona);
            document.write(`¡${persona.nombre} ha sido contratado como trabajador en la empresa!`);
        }
        else{
            this.trabajadoresNoContratados.push(persona);
            document.write(`Lo siento, ${persona.nombre} está inhabilitado para trabajar en la empresa debido a su edad.`);
        }
    }
}

// Crear un objeto de la clase Persona con los datos ingresados por el usuario
let trabajador = new Persona(nombreTrabajador, edadTrabajador);

// Crear un objeto de la clase Empresa con una edad tope de 60 años
let empresa = new Empresa(60);

// Agregar al trabajador a la empresa
empresa.agregartrabajador(trabajador);