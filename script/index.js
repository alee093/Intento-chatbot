// event listener para el botón de limpiar que reinicia el chat
document.getElementById("limpiar-chat").addEventListener("click", function () {
  document.getElementById("container-chat").innerHTML = ""
})

// Obtener la fecha actual
let fecha = new Date().toLocaleDateString([], {year: 'numeric', month: '2-digit', day: '2-digit'})
// Obtener el día de la semana en ESPANOL
const dias_es = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
let dia_semana_es = dias_es[new Date().getDay()]
// Obtener el dia de la semana en INGLES
const dias_en = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
let dia_semana_en = dias_en[new Date().getDay()]

// Funcion para cambiar el tiempo de espera de la respuesta del chatbot
function tiempoEsperaRespuesta(){
  return Math.random() * (1500 - 200) + 200
}

// Objeto que contiene las preguntas y respuestas predeterminadas ESPANOL
const pyr_es = {
  "¡Hola!": ["¡Hola! ¿en que puedo ayudarte hoy?", "¡Hola! ¿cómo estás?"],
  "¿Cómo estás?": ["Estoy bien, gracias. ¿y tú?", "Todo bien, ¿y tú?"],
  "¿Qué puedes hacer?": ["Puedo responder preguntas y ayudarte con información.", "Puedo ayudarte a encontrar respuestas a tus preguntas."],
  "¿Cuál es tu nombre?": ["Soy un chatbot sin nombre, pero puedes llamarme Chatbot.", "No tengo un nombre específico, pero estoy aquí para ayudarte."],
  "¿Qué fecha es hoy?": [`La fecha de hoy es: ${fecha}.`, `Hoy es ${fecha}.`],
  "¿Qué día es hoy?": [`Hoy es ${dia_semana_es}.`, `Es ${dia_semana_es} hoy.`],
  "¿Qué es la inteligencia artificial?": ["La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de sistemas informáticos.", "Es un campo de estudio que se centra en crear máquinas capaces de realizar tareas que normalmente requieren inteligencia humana."],
  "¿Qué es el aprendizaje automático?": ["El aprendizaje automático es una rama de la inteligencia artificial que permite a las máquinas aprender de datos y mejorar su rendimiento con el tiempo.", "Es un método que permite a los sistemas aprender y adaptarse sin ser programados explícitamente."],
  "¿Qué es el procesamiento del lenguaje natural?": ["El procesamiento del lenguaje natural es un campo de la inteligencia artificial que se ocupa de la interacción entre las computadoras y el lenguaje humano.", "Es la capacidad de una máquina para entender, interpretar y generar lenguaje humano de manera significativa."],
  "¿Qué es un chatbot?": ["Un chatbot es un programa de computadora diseñado para simular una conversación con usuarios humanos, especialmente a través de Internet.", "Es una aplicación que utiliza inteligencia artificial para interactuar con los usuarios en lenguaje natural."],
  "¡Gracias!": ["¡De nada! Si tienes más preguntas, no dudes en preguntar.", "¡Con gusto! Estoy aquí para ayudarte."],
  "¡Adiós!": ["¡Adiós! Que tengas un buen día.", "¡Hasta luego! Espero verte pronto."],
}
// Objeto que contiene las preguntas y respuestas predeterminadas INLGES
const pyr_en = {
  "Hello!": ["Hello! How can I help you today?", "Hi there! How are you?"],
  "How are you?": ["I'm fine, thank you. And you?", "All good, how about you?"],
  "What can you do?": ["I can answer questions and help you with information.", "I can assist you in finding answers to your questions."],
  "What is your name?": ["I'm a nameless chatbot, but you can call me Chatbot.", "I don't have a specific name, but I'm here to help."],
  "What date is it today?": [`Today's date is: ${fecha}.`, `Today is ${fecha}.`],
  "What day is it today?": [`Today is ${dia_semana_en}.`, `It's ${dia_semana_en} today.`],
  "What is artificial intelligence?": ["Artificial intelligence is the simulation of human intelligence processes by computer systems.", "It's a field of study focused on creating machines capable of performing tasks that typically require human intelligence."],
  "What is machine learning?": ["Machine learning is a branch of artificial intelligence that allows machines to learn from data and improve their performance over time.", "It's a method that enables systems to learn and adapt without being explicitly programmed."],
  "What is natural language processing?": ["Natural language processing is a field of artificial intelligence that deals with the interaction between computers and human language.", "It's the ability of a machine to understand, interpret, and generate human language meaningfully."],
  "What is a chatbot?": ["A chatbot is a computer program designed to simulate conversation with human users, especially over the Internet.", "It's an application that uses artificial intelligence to interact with users in natural language."],
  "Thank you!": ["You're welcome! If you have more questions, feel free to ask.", "My pleasure! I'm here to help."],
  "Goodbye!": ["Goodbye! Have a great day.", "See you later! Hope to see you soon."],
}
let idioma_actual = "es"
let preguntas_y_respuestas = pyr_es


generarPreguntasYRespuestas()

// Función para generar las preguntas y respuestas predeterminadas en espanol o ingles
function generarPreguntasYRespuestas(){
  const contenedor_preguntas = document.getElementById("container-preguntas")
  contenedor_preguntas.innerHTML = ""
  const contenedor_chat = document.getElementById("container-chat")
  contenedor_chat.innerHTML = ""

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
      
      // Mostrar los puntos de carga antes de mostrar la respuesta
      const contenedor_puntos_chat = document.getElementById("container-chat")
      contenedor_puntos_chat.innerHTML += `
      <div class="container_puntos_chat" id="container_puntos_chat">
        <span class="tres_puntos_chat uno"></span>
        <span class="tres_puntos_chat dos"></span>
        <span class="tres_puntos_chat tres"></span>
      </div>
      `
      contenedor_puntos_chat.scrollTop = contenedor_puntos_chat.scrollHeight

      setTimeout(() => {
        // Eliminar los puntos de carga y mostrar la respuesta
        const eliminar_puntos = document.getElementById("container_puntos_chat")
        eliminar_puntos.remove()
        
        // Crear un nuevo elemento de chat con la respuesta
        const contenedor_respuesta_chat = document.getElementById("container-chat");
        contenedor_respuesta_chat.innerHTML += `
        <div class="container-respuesta-chat">
          <p class="mensaje-respuesta">${respuesta}</p>
        </div>
        `
        contenedor_respuesta_chat.scrollTop = contenedor_respuesta_chat.scrollHeight
        }, tiempoEsperaRespuesta())
    })
  })
}

// condicion para cambiar el idioma de las preguntas y respuestas
document.getElementById("cambiar-idioma").addEventListener("click", function () {
  if (idioma_actual === "es") {
    preguntas_y_respuestas = pyr_en
    idioma_actual = "en"
    this.textContent = "Cambiar a español"
  } else {
    preguntas_y_respuestas = pyr_es
    idioma_actual = "es"
    this.textContent = "Cambiar a ingles"
  }
  generarPreguntasYRespuestas()
})