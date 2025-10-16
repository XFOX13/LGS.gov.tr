function startSite() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  startCountdown();
  document.getElementById('bg-music').play();
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function wavePaw() {
  const paw = document.querySelector('.paw');
  paw.classList.add('wave');
  setTimeout(() => paw.classList.remove('wave'), 300);
  document.getElementById('reveal').style.display = 'block';
}

function startCountdown() {
  const targetDate = new Date("June 8, 2026 09:00:00").getTime();
  const countdownEl = document.getElementById("countdown");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(interval);
      countdownEl.innerHTML = "🎉 It's LGS Day!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
