const botonMostrar = document.getElementById("mostrarNumero");
const ventanaEmergente = document.getElementById("ventanaEmergente");
const fondoOpaco = document.getElementById("fondoOpaco");

botonMostrar.addEventListener("click", function(){
    
    ventanaEmergente.style.display = "block";
    fondoOpaco.style.display = "block";
});

fondoOpaco.addEventListener("click", function(){
    ventanaEmergente.style.display = "none";
    fondoOpaco.style.display = "none";
})