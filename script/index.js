// event listener para el botón de enviar que reinicia el chat
document.getElementById("limpiar-chat").addEventListener("click", function () {
  location.reload();
  return false;
})

// Objeto que contiene las preguntas y respuestas predeterminadas
const preguntas_y_respuestas = {
  "¡Hola!": ["¡Hola! ¿en que puedo ayudarte hoy?", "¡Hola! ¿cómo estás?"],
  "¿Cómo estás?": ["Estoy bien, gracias. ¿y tú?", "Todo bien, ¿y tú?"],
}

// Función para crear la estructura HTML de una pregunta predeterminada
function estructuraPreguntaPredeterminada(pregunta) {
  const contenedor_preguntas = document.getElementById("container-preguntas")
  contenedor_preguntas.innerHTML += `
    <div class="container-boton-pregunta">
      <button class="pregunta">${pregunta}</button>
    </div>
  `
}

// Iterar sobre las preguntas y crear la estructura HTML para cada una
for (const pregunta in preguntas_y_respuestas) {
  estructuraPreguntaPredeterminada(pregunta)
}

// Agregar un event listener a cada botón de pregunta
const botones_preguntas = document.querySelectorAll(".pregunta");
botones_preguntas.forEach((boton) => {
  boton.addEventListener("click", function () {
    const pregunta = this.textContent
    const respuestas = preguntas_y_respuestas[pregunta]
    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]

    // Crear un nuevo elemento de chat con la pregunta y la respuesta
    const contenedor_pregunta_chat = document.getElementById("container-chat");
    contenedor_pregunta_chat.innerHTML += `
    <div class="container-pregunta-chat">
        <p class="mensaje-pregunta">${pregunta}</p>
    </div>`
    contenedor_pregunta_chat.scrollTop = contenedor_pregunta_chat.scrollHeight
    setTimeout(() => {
      const contenedor_respuesta_chat = document.getElementById("container-chat");
      contenedor_respuesta_chat.innerHTML += `
      <div class="container-respuesta-chat">
        <p class="mensaje-respuesta">${respuesta}</p>
      </div>
      `
      contenedor_respuesta_chat.scrollTop = contenedor_respuesta_chat.scrollHeight
      }, 500)
  })
})
