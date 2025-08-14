let clickCount = 0;
const candle = document.getElementById('candle');

candle.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 3) {
    candle.classList.add('fade-out');
    setTimeout(() => {
      candle.<imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BvewkZb8kaS2FXjhJUHij0Cs0zFz4mHEgw&s">;
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
