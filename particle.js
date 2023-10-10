
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800 // Adjust as needed
        }
      },
      "color": {
        "value": "#ffffff" // Particle color
      },
      "shape": {
        "type": "circle", // Particle shape
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5, // Particle opacity
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 3, // Particle size
        "random": true
      },
      // More customization options can be added here
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  });

