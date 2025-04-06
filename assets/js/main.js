// Main JavaScript file for Hacker Blog

document.addEventListener('DOMContentLoaded', function() {
  // Terminal typing effect
  const terminalElements = document.querySelectorAll('.terminal-typing');
  
  terminalElements.forEach(element => {
    const text = element.getAttribute('data-text');
    if (text) {
      element.textContent = '';
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    }
  });

  // Matrix rain effect for hero section
  const canvas = document.getElementById('matrix-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columns = canvas.width / 20;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // Glitch effect on hover
  const glitchElements = document.querySelectorAll('.glitch-effect');
  
  glitchElements.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.classList.add('glitching');
    });
    
    element.addEventListener('mouseout', () => {
      element.classList.remove('glitching');
    });
  });

  // Simulated terminal commands
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  
  if (terminalInput && terminalOutput) {
    terminalInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const command = terminalInput.value;
        terminalInput.value = '';
        
        // Add command to output
        const commandLine = document.createElement('div');
        commandLine.classList.add('terminal-line');
        commandLine.innerHTML = `<span class="prompt-sign">$</span> ${command}`;
        terminalOutput.appendChild(commandLine);
        
        // Process command
        processCommand(command, terminalOutput);
        
        // Scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    });
  }

  function processCommand(command, output) {
    const response = document.createElement('div');
    response.classList.add('terminal-response');
    
    switch(command.trim().toLowerCase()) {
      case 'help':
        response.innerHTML = `
          Available commands:<br>
          - help: Display this help message<br>
          - about: Display information about this blog<br>
          - ls: List blog posts<br>
          - clear: Clear the terminal<br>
          - contact: Show contact information
        `;
        break;
      case 'about':
        response.innerHTML = `
          Hacker Blog - A Jekyll-based blog with a black hacker theme.<br>
          Created with ♥ using Jekyll and GitHub Pages.
        `;
        break;
      case 'ls':
        response.innerHTML = `Fetching blog posts...<br>`;
        // In a real implementation, this would fetch posts dynamically
        setTimeout(() => {
          response.innerHTML += `
            2025-04-06-welcome-to-the-hacker-blog.md<br>
            2025-04-05-introduction-to-ethical-hacking.md<br>
            2025-04-04-basic-linux-commands-for-hackers.md
          `;
        }, 500);
        break;
      case 'clear':
        output.innerHTML = '';
        return;
      case 'contact':
        response.innerHTML = `
          Email: your-email@example.com<br>
          GitHub: github.com/yourusername<br>
          Twitter: @yourusername
        `;
        break;
      default:
        response.innerHTML = `Command not found: ${command}. Type 'help' for available commands.`;
    }
    
    output.appendChild(response);
  }

  // Responsive navigation menu
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Animated skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  
  if (skillBars.length > 0) {
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const barFill = bar.querySelector('.skill-bar-fill');
        
        if (barFill) {
          barFill.style.width = '0%';
          
          setTimeout(() => {
            barFill.style.width = percentage + '%';
          }, 300);
        }
      });
    };
    
    // Animate on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(document.querySelector('.skills-section'));
  }

  // Particle background effect
  const particleContainer = document.getElementById('particles');
  
  if (particleContainer) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      // Random size
      const size = Math.random() * 5 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random animation duration
      particle.style.animationDuration = Math.random() * 10 + 5 + 's';
      
      particleContainer.appendChild(particle);
    }
  }
});
