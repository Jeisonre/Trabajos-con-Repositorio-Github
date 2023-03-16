function nComentario() {
  let li = document.createElement("li");
  let valoringresado = document.getElementById("nuevoComentario").value;
  let text = document.createTextNode(valoringresado);
  li.appendChild(text);

  if (valoringresado === "") {
    alert("Ingrese un Comentario!");
  } else {
    document.getElementById("comentarios").appendChild(li);
  }

  document.getElementById("nuevoComentario").value = "";
  li.cloneNode = "comentario";

  let borrar = document.createElement("p");
  borrar.innerHTML = "Borrar";
  borrar.className = "close";
  li.appendChild(borrar);

  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// function usrpas(){
//     if (document.form1.txt.value=="Admin1" && document.form1.num.value=="Admin1"){
//         window.location="Admin1.html";
//         return;
//     }
//     alert("Error en Usuario o Contraseña. Intenta de nuevo.");
// }

// document.getElementById("formulario").addEventListener('submit', function(e) {
//     console.log('hohoho');
//     e.preventDefault();
//     usrpas();
// });
