const playSound = (e) => {
  //the console.log(e.keyCode) <--- gives you that keycode, eg. 65 if hitting a
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start of the audio
  audio.play();
  key.classList.add("playing");
  console.log(key);
};

// when using this, must be <ES6
function removeTransition(e) {
  // console.log(e);
  // only care for the longest time
  if (e.propertyName !== "transform") return;
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove("playing");
}

// for when the document has loaded
window.addEventListener("load", (event) => {
  // for every key, going to call removeTransition function when transition ends
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  window.addEventListener("keydown", playSound);
});
