let clickCount = 0;
const candle = document.getElementById('candle');

candle.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 3) {
    candle.classList.add('fade-out');
    setTimeout(() => {
      candle.src = "https://ibb.co/5hTTWWTt";
      candle.classList.remove('fade-out');
    }, 500);
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    setTimeout(() => {
      if (confirm("🎁 Click OK for another surprise!")) {
        window.location.href = "https://hbd-meow.netlify.app";
      }
    }, 1200);
  }
});
