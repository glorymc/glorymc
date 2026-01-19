// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Premium Particle Configuration
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#00f2ff", "#7000ff", "#ffffff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4, "random": true },
    "size": { "value": 2, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#00f2ff",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "top", /* Particles floating up like ash/energy */
      "random": true,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": true, "mode": "repulse" }
    },
    "modes": {
      "bubble": { "distance": 200, "size": 4, "duration": 2, "opacity": 0.8 },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  }
});
