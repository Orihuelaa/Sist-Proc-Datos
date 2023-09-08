function mostrarDatos() {
     // Obtener los valores de los campos del formulario.
    var apellido = document.getElementById("Apellido").value;
    var nombre = document.getElementById("Nombre").value;
    var dni = document.getElementById("DNI").value;
    var fechaNacimiento = document.getElementById("Fecha de Nacimiento").value;
    var domicilio = document.getElementById("Domicilio").value;
    var localidad = document.getElementById("Localidad").value;
    
    var idiomas = []; // Crear un array para almacenar los idiomas seleccionados.
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="lenguajes"]:checked'); // Obtener todos los checkboxes con el atributo name="lenguajes" que estén marcados.
    // Recorrer los checkboxes seleccionados y agregar sus valores al array idiomas.
    for (var i = 0; i < checkboxes.length; i++) {
        idiomas.push(checkboxes[i].value);
    }
    
    var valoresBarras = []; // Crear un array para almacenar los valores de las barras de rango.
    var barras = document.querySelectorAll('input[type="range"]'); // Obtener todas las barras de rango en el formulario.
    // Obtener los valores de las barras solo para los idiomas seleccionados.
    for (var i = 0; i < barras.length; i++) { // Recorrer todas las barras de rango
        var idiomaRelacionado = barras[i].getAttribute("data-idioma"); // Obtener el idioma relacionado con cada barra de rango a través del atributo data-idioma.
        if (idiomas.includes(idiomaRelacionado)) { // Verificar si el idioma relacionado está incluido en la lista de idiomas seleccionados.
            valoresBarras.push(barras[i].value); // Si está incluido, agregar el valor de la barra al array de valoresBarras.
        }
    }  

  // Crear un mensaje con los datos obtenidos del formulario
    var nombreCompleto = apellido + " " + nombre; 
    var mensaje = "Datos del formulario:\n\n" +
    "Nombre Completo: " + nombreCompleto + "\n" +
    "Nro DNI: " + dni + "\n" +
    "Fecha de Nacimiento: " + fechaNacimiento + "\n" +
    "Domicilio: " + domicilio + "\n" +
    "Localidad: " + localidad + "\n" +
    "Idiomas: " + idiomas.join(", ") + "\n";
    
    // Agregar valores de las barras solo para los idiomas seleccionados.
    if (valoresBarras.length > 0) {
        mensaje += "Valores de las barras: " + valoresBarras.join(", ");
    }
    
    alert(mensaje); // Mostrar el mensaje en un cuadro de diálogo de alerta.
}
