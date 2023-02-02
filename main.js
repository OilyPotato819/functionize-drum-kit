// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === "KeyA") {
    // Play A-Clap
    play("clap", "A");
  } else if (e.code === "KeyS") {
    // Play S-hihat
    play("hihat", "S");
  } else if (e.code === "KeyD") {
    // Play D-kick
    play("kick", "D");
  } else if (e.code === "KeyF") {
    // Play F-Openhat
    play("openhat", "F");
  } else if (e.code === "KeyG") {
    // Play G-Boom
    play("boom", "G");
  } else if (e.code === "KeyH") {
    // Play H-Ride
    play("ride", "H");
  } else if (e.code === "KeyJ") {
    // Play J-Snare
    play("snare", "J");
  } else if (e.code === "KeyK") {
    // Play K-Tom
    play("tom", "K");
  } else if (e.code === "KeyL") {
    // Play L-Tink
    play("tink", "L");
  }
}

function play(audioId, divId) {
  let audio = document.getElementById(audioId);
  audio.currentTime = 0;
  audio.play();
  document.getElementById(divId).classList.add("playing");
}

// Add transition end listeners
document.getElementById("A").addEventListener("transitionend", removePlaying);
document.getElementById("S").addEventListener("transitionend", removePlaying);
document.getElementById("D").addEventListener("transitionend", removePlaying);
document.getElementById("F").addEventListener("transitionend", removePlaying);
document.getElementById("G").addEventListener("transitionend", removePlaying);
document.getElementById("H").addEventListener("transitionend", removePlaying);
document.getElementById("J").addEventListener("transitionend", removePlaying);
document.getElementById("K").addEventListener("transitionend", removePlaying);
document.getElementById("L").addEventListener("transitionend", removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove("playing");
}
