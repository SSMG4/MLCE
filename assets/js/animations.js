// GSAP Animations for MLCE

// Make sure GSAP is loaded
if (typeof gsap === 'undefined') {
  console.warn('GSAP not loaded. Animations will not run.');
} else {
  // Animate mod cards fading up on page load
  gsap.from('.mod-card', {
    duration: 1,
    y: 40,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out',
  });

  // Button hover bounce effect
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, duration: 0.2, ease: 'power1.out' });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.2, ease: 'power1.out' });
    });
  });
}
