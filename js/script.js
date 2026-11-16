document.addEventListener("DOMContentLoaded", () => {
  const giftButton = document.getElementById("openGift");
  if (giftButton) {
    const tapsRequired = 5;
    let tapCount = 0;
    const giftHint = document.getElementById("giftHint");
    giftButton.addEventListener("click", () => {
      tapCount += 1;
      giftButton.classList.add("is-opening");
      window.setTimeout(() => giftButton.classList.remove("is-opening"), 250);
      if (tapCount < tapsRequired) {
        giftHint.textContent = `${tapsRequired - tapCount} more tap${tapsRequired - tapCount === 1 ? "" : "s"} to open your surprise`;
        return;
      }
      window.setTimeout(() => {
        window.location.href = "recuerdos.html";
      }, 250);
    });
  }

  const music = document.getElementById("backgroundMusic");
  const musicToggle = document.getElementById("musicToggle");
  if (music && musicToggle) {
    musicToggle.addEventListener("click", () => {
      if (music.paused) {
        music.play().then(() => {
          musicToggle.textContent = "Pause our song ❚❚";
        }).catch(() => {
          musicToggle.textContent = "Add a local song to play ♪";
        });
      } else {
        music.pause();
        musicToggle.textContent = "Play our song ♪";
      }
    });
  }
});