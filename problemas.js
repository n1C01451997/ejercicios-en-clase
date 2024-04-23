const traducir = {
    "casa" : "house",
    "mesa" : "table",
    "perro" : "dog",
    "gato" : "cat",
};
let palabra = prompt("porfavor ingrese una de estas palabras 'casa, mesa, perro, gato': ").toLowerCase();
if (traducir[palabra]){
    document.write(`La traducción al inglés de "${palabra}" es "${traducir[palabra]}".`);

}
else {
    document.write(`lo siento pero "${palabra}" no se pudo traducir".`);
}