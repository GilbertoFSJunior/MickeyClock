
//Selecionando os elementos  DOM
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

//Função para atualizar o Relógio
function updateClock() {
  var now = new Date();
  var currentHour = now.getHours();
  var currentMinutes = now.getMinutes();
  var currentSeconds = now.getSeconds();

  //Definindo a posição dos Ponteiros das horas e dos minutos
  if (currentHour >= 6 && currentHour < 12) {
    hours.className = "left";
  } else {
    hours.className = "right";
  }

  if (currentMinutes <= 30) {
    minutes.className = "back left";
  } else {
    minutes.className = "left";
  }

  //Definindo a rotação dos ponteiros
  set(hours, 30 * currentHour + 0.5 * currentMinutes); // Ajuste para considerar os minutos
  set(minutes, 6 * currentMinutes);
  set(seconds, 6 * currentSeconds);
}


//Função para aplicar a rotação nos elementos
function set(element, degree) {
  element.style.transform = "rotate(" + degree + "deg)";
  element.style.webkitTransform = "rotate(" + degree + "deg)";
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualiza o relógio imediatamente após a carga da página
updateClock();
