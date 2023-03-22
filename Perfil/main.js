let boton = document.querySelector(".card button");
let contador = document.querySelector(".card .contador");

let seguidores = 0;

boton.addEventListener("click", function() {
    if (boton.textContent === "Seguir") {
        seguidores++;
        boton.textContent = "Siguiendo";
    } else {
        seguidores--;
        boton.textContent = "Seguir";
    }
    
    contador.textContent = `Seguidores: ${seguidores}`;
});