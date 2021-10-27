function validar(){
    var nombre;
    var apellidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;

    if(nombre === "" || aplellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
        alert("El campo  está vacío");
        return false;
    }
    else if(nombre.length>30) {
        alert("El nombre es demasiado largo");
        return false;
    }
    else if(apellidos.length>30) {
        alert("El nombre es demasiado largo");
        return false;
    }
    
}