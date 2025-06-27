// MLCE Easter Eggs — secret fun for the savvy

// Console lore message
console.log('%cWelcome to MLCE — the Ultimate Legacy Console Edition mod hub! 👾', 'color:#00ffcc; font-size:16px; font-weight:bold;');

// Herobrine alert on random chance at page load
if (Math.random() < 0.1) { // 10% chance
  alert('👻 Herobrine has been spotted on this page! Run! 🏃‍♂️💨');
}

// Konami code detection (↑↑↓↓←→←→BA)
const konamiCode = [38,38,40,40,37,39,37,39,66,65];
let konamiIndex = 0;

window.addEventListener('keydown', (e) => {
  if (e.keyCode === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      konamiIndex = 0;
      herobrineMode();
    }
  } else {
    konamiIndex = 0;
  }
});

function herobrineMode() {
  alert('Herobrine Mode Activated! Beware the spooky mods 👻');
  // Fun animation: shake page with GSAP
  if (typeof gsap !== 'undefined') {
    gsap.to('body', { duration: 0.1, x: -10, repeat: 5, yoyo: true, ease: "power1.inOut" });
  }
}
