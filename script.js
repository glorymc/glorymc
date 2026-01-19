// Initialize Scroll Animations
AOS.init({ duration: 1000, once: true });

// Mouse Glow Logic
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Particles Configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ff88" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3, "random": true },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.1, "width": 1 },
        "move": { "enable": true, "speed": 0.8, "direction": "top", "random": true, "out_mode": "out" }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } },
        "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } } }
    }
});

// Button Click Bounce
document.querySelectorAll('a').forEach(btn => {
    btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
    btn.addEventListener('mouseup', () => btn.style.transform = 'scale(1)');
});
