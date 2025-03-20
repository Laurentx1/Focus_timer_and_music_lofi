const youtubeMusicEmbed = document.getElementById('youtube-music');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start-timer');
const resetButton = document.getElementById('reset-timer');
const pauseButton = document.createElement('button'); // Criar botão de pausa

// Adicionar botão de pausa dinamicamente
pauseButton.textContent = "Pausar";
pauseButton.style.backgroundColor = "#ffa502"; // Laranja
pauseButton.style.color = "white";
pauseButton.style.border = "none";
pauseButton.style.padding = "10px 20px";
pauseButton.style.fontSize = "1rem";
pauseButton.style.margin = "5px";
pauseButton.style.borderRadius = "5px";
pauseButton.style.cursor = "pointer";
pauseButton.style.transition = "background-color 0.3s ease";
pauseButton.addEventListener("mouseover", () => (pauseButton.style.backgroundColor = "#ffbe76"));
pauseButton.addEventListener("mouseout", () => (pauseButton.style.backgroundColor = "#ffa502"));
document.querySelector('.controls').appendChild(pauseButton); // Adicionar ao container de botões

// Configuração do vídeo do YouTube Music
const youtubeMusicLink = "https://www.youtube.com/embed/9v3A-31rAOo"; // Link embed
youtubeMusicEmbed.setAttribute('src', youtubeMusicLink);

// Timer
let timerInterval;
let timeLeft = 60 * 60; // 25 minutos

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.body.style.backgroundColor = "#ff4757"; // Mudar cor para indicar término
    alert("Tempo acabou! Hora de descansar.");
  } else {
    timeLeft--;
  }
}

// Iniciar o timer
startButton.addEventListener('click', () => {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
});

// Pausar o timer
pauseButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Resetar o timer
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 60 * 60;
  minutesDisplay.textContent = '60';
  secondsDisplay.textContent = '00';
  document.body.style.backgroundColor = ""; // Restaurar cor original
});
