function updateCountdown() {
  // Data final específica no horário tailandês
  const targetDate = new Date("2024-11-23T09:15:00+07:00"); // Formato ISO com UTC+7
  
  const now = new Date(); // Hora atual do navegador
  const timeLeft = targetDate - now; // Diferença entre agora e a data-alvo

  // Verifica se o tempo acabou
  if (timeLeft <= 0) {
    document.getElementById("timer").innerHTML = "The event has started!";
    clearInterval(countdownInterval); // Para o contador
    return;
  }

  // Calcula dias, horas, minutos e segundos restantes
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Atualiza o conteúdo do elemento com o ID "timer"
  document.getElementById("timer").innerHTML = ` 
    ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Atualiza o contador a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Função de redirecionamento para o trailer (abre em nova guia)
document.getElementById("trailerButton").addEventListener("click", function() {
  window.open("https://www.youtube.com/watch?v=y3Pwt8F-ppo", "_blank");
});

// Função de redirecionamento para o site (abre em nova guia)
document.getElementById("watchButton").addEventListener("click", function() {
  window.open("https://www.iq.com/album/petrichor-2024-ar002mup45?", "_blank");
});
