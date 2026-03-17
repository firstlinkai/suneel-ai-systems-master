// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Animate On Scroll (AOS) and Shutter Text
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
    });

    // Initialize Shutter Text Effect
    const shutterElements = document.querySelectorAll('.shutter-text');
    shutterElements.forEach(el => {
        const text = el.textContent;
        el.textContent = ''; // clear text

        const chars = text.split('');
        chars.forEach((char, i) => {
            const charContainer = document.createElement('div');
            charContainer.className = 'shutter-char';

            const displayChar = char === ' ' ? '\u00A0' : char;

            const mainSpan = document.createElement('span');
            mainSpan.className = 'shutter-char-main';
            mainSpan.textContent = displayChar;
            mainSpan.style.animationDelay = `${i * 0.04 + 0.3}s`;

            const slice1 = document.createElement('span');
            slice1.className = 'shutter-slice shutter-slice-1';
            slice1.textContent = displayChar;
            slice1.style.animationDelay = `${i * 0.04}s`;

            const slice2 = document.createElement('span');
            slice2.className = 'shutter-slice shutter-slice-2';
            slice2.textContent = displayChar;
            slice2.style.animationDelay = `${i * 0.04 + 0.1}s`;

            const slice3 = document.createElement('span');
            slice3.className = 'shutter-slice shutter-slice-3';
            slice3.textContent = displayChar;
            slice3.style.animationDelay = `${i * 0.04 + 0.2}s`;

            charContainer.appendChild(mainSpan);
            charContainer.appendChild(slice1);
            charContainer.appendChild(slice2);
            charContainer.appendChild(slice3);

            el.appendChild(charContainer);
        });
    });
});

// Update ambient glow position based on mouse movement
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.ambient-glow');

    // Slow down the movement for a subtle parallax effect
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glows[0].style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    glows[1].style.transform = `translate(${x * -30}px, ${y * -30}px)`;
});
