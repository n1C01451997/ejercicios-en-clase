// Solicitar al usuario que ingrese un mes (en formato numérico)
let mes = parseInt(prompt("Por favor, ingrese un número de mes (1-12):"));

// Verificar si el número de mes ingresado es válido
if (mes >= 1 && mes <= 12) {
    // Crear un objeto Date con el año actual y el mes ingresado por el usuario
    let fecha = new Date(new Date().getFullYear(), mes - 1, 1);

    // Obtener el nombre completo del mes utilizando el objeto Date
    let nombreMes = fecha.toLocaleString('es-ES', { month: 'long' });

    // Verificar en qué cuatrimestre del año nos encontramos
    if (mes >= 1 && mes <= 4) {
        document.write(`Nos encontramos en el primer cuatrimestre del año (${nombreMes}).`);
    } else if (mes >= 5 && mes <= 8) {
        document.write(`Nos encontramos en el segundo cuatrimestre del año (${nombreMes}).`);
    } 
     else {
        document.write(`Nos encontramos en el cuarto cuatrimestre del año (${nombreMes}).`);
    }
} else {
    document.write("El número de mes ingresado es inválido.");
}
