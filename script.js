let clickCount = 0;
const candle = document.getElementById('candle');

candle.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 3) {
    // Launch confetti
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "https://hbd-meow.netlify.app";
    }, 1000);
  }
});
