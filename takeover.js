(function() {
    // Create a semi-transparent black overlay
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#000000';
    overlay.style.zIndex = '9997';
    overlay.style.opacity = '0.8'; // Semi-transparent to show matrix effect
    document.body.appendChild(overlay);

    // Create matrix container for binary rain effect
    var matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix';
    matrixContainer.style.zIndex = '9998'; // Above overlay, below message
    document.body.appendChild(matrixContainer);

    // Create container for logo and message
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.zIndex = '9999'; // Topmost layer
    document.body.appendChild(container);

    // Add logo (replace with your own URL if desired)
    var logo = document.createElement('img');
    logo.src = 'https://xss0r.com/resources/logo-v3.jpg'; // Placeholder logo
    logo.style.width = '150px';
    logo.style.marginBottom = '20px';
    container.appendChild(logo);

    // Add hacking message with neon cyan text
    var message = document.createElement('div');
    message.innerHTML = `
        <h1 style="color: #00FFFF; font-family: monospace; text-align: center; font-size: 3em;">
            HACKED BY Bytes_Knight
        </h1>
        <p style="color: #00FFFF; font-family: monospace; text-align: center; font-size: 1.5em;">
            Security breach detected. Immediate action required.
        </p>
        <p style="color: #00FFFF; font-family: monospace; text-align: center; font-size: 1.2em;">
            All systems compromised. Data encryption in progress.
        </p>
    `;
    container.appendChild(message);

    // Add styles for glow and shake effects
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`
        @keyframes glow {
            0% { text-shadow: 0 0 10px #00FFFF; }
            50% { text-shadow: 0 0 20px #00FFFF, 0 0 30px #00FFFF; }
            100% { text-shadow: 0 0 10px #00FFFF; }
        }
        @keyframes shake {
            0% { transform: translate(0, 0); }
            10% { transform: translate(-2px, 2px); }
            20% { transform: translate(2px, -2px); }
            30% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            50% { transform: translate(0, 0); }
            100% { transform: translate(0, 0); }
        }
        h1, p {
            animation: glow 2s infinite;
        }
        h1 {
            animation: glow 2s infinite, shake 5s infinite;
        }
    `));
    document.head.appendChild(style);

    // Add styles for matrix binary rain
    var matrixStyle = document.createElement('style');
    matrixStyle.type = 'text/css';
    matrixStyle.appendChild(document.createTextNode(`
        .matrix {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9998;
            pointer-events: none;
            overflow: hidden;
        }
        .matrix span {
            position: absolute;
            color: #00FFFF;
            font-family: monospace;
            font-size: 1.2em;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        @keyframes fall {
            0% { top: -50px; }
            100% { top: 100%; }
        }
    `));
    document.head.appendChild(matrixStyle);

    // Function to create binary rain effect
    function createMatrixCode() {
        var span = document.createElement('span');
        span.textContent = Math.random() < 0.5 ? '0' : '1'; // Binary digits
        span.style.left = Math.random() * window.innerWidth + 'px';
        span.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Random fall speed
        matrixContainer.appendChild(span);
        setTimeout(() => span.remove(), 7000); // Remove after 7 seconds
    }
    setInterval(createMatrixCode, 100); // Spawn new binary digits every 100ms

    // Play warning sound (replace URL with your own if desired)
    var audio = new Audio('https://xss0r.com/Resources/warning.mp3');
    audio.loop = true;
    audio.muted = true; // Start muted to bypass autoplay restrictions
    audio.play().then(() => {
        setTimeout(() => {
            audio.muted = false; // Unmute after 1 second
        }, 1000);
    }).catch((error) => {
        console.error('Audio autoplay failed:', error);
    });
})();
