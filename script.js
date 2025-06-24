window.addEventListener("load", () => {
  const audio = document.getElementById("music");
  const playBtn = document.getElementById("play-btn");

  audio.play()
    .then(() => {
      console.log("Autoplay sukses 🎶");
    })
    .catch(err => {
      console.warn("Autoplay diblok:", err);
      playBtn.classList.remove("hidden");
    });

});
