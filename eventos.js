function saludar() {
    alert("Hola desde eventos.js!");
}

document.addEventListener("DOMContentLoaded", function() {
    var miDiv = document.querySelector("div");

    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});