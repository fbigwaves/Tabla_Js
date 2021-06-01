var nombre = [];

function Grabar() {

    let persona = new Object();
    let dato = document.getElementById('nombre').value;

    persona['nombre'] = dato;
    nombre.push(persona);

    var tabla = document.getElementById('personas');
    //crear fila
    var nuevoNombre = tabla.insertRow(0);
    //insertar una celda
    var nuevaColumna = nuevoNombre.insertCell(0);

    //creacion del dato
    var newNombre = document.createTextNode(dato);

    nuevaColumna.appendChild(newNombre);

    console.log(nombre);




}