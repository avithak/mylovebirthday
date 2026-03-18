// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.position = 'fixed';
    heart.style.bottom = '-50px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.opacity = '0';
    heart.style.animationName = 'float';
    heart.style.animationTimingFunction = 'linear';
    heart.style.zIndex = '0';
    heart.style.pointerEvents = 'none';
    heart.style.color = 'var(--deep-pink)';
    
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Background Particles
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'var(--gold)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.opacity = Math.random();
    particle.style.zIndex = '1';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = '0 0 10px var(--gold)';
    
    document.getElementById('particles-container').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createParticle, 500);

// Countdown Timer
function updateCountdown() {
    // Setting target date to 24 hours from now for demonstration
    // In a real scenario, this would be the actual birthday
    const targetDate = new Date('2026-03-19T00:00:00');

    function calculate() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(interval);
            const countdownEl = document.getElementById('countdown');
            countdownEl.innerHTML = `
                <h2 class="romantic-text" style="font-size: 3.5rem; color: var(--deep-pink); animation: glow 2s infinite;">
                    Happy Birthday Akansha! 🎂🎉✨
                </h2>
                <p style="font-size: 1.5rem; margin-top: 10px; color: var(--gold);">Today is all about you! ❤️</p>
            `;
            
            // Trigger intense heart celebration
            for(let i=0; i<50; i++) {
                setTimeout(createHeart, i * 100);
            }

            // Auto-trigger the surprise if it's not already shown
            const surpriseBtn = document.getElementById('surprise-btn');
            if (surpriseBtn && surpriseBtn.style.display !== 'none') {
                surpriseBtn.click();
            }

            // Try to play music if user has interacted with the page
            const music = document.getElementById('bg-music');
            if (music && music.paused) {
                music.play().catch(e => console.log("Music auto-play blocked by browser. User must interact first."));
            }
        }
    }

    const interval = setInterval(calculate, 1000);
    calculate();
}

updateCountdown();

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
function reveal() {
    reveals.forEach(r => {
        const windowHeight = window.innerHeight;
        const revealTop = r.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            r.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Surprise Button
document.getElementById('surprise-btn').addEventListener('click', function() {
    const msg = document.getElementById('surprise-msg');
    msg.style.display = 'block';
    msg.classList.add('active');
    this.style.display = 'none';
    
    // Extra celebration: more hearts!
    for(let i=0; i<30; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// Love Letter Popup
document.getElementById('love-letter-trigger').addEventListener('click', function() {
    document.getElementById('love-letter-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('love-letter-popup').style.display = 'none';
});

// Music Control
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
document.getElementById('music-control').addEventListener('click', function() {
    if (music.paused) {
        music.play();
        musicIcon.innerText = '⏸️';
    } else {
        music.pause();
        musicIcon.innerText = '🎵';
    }
});
