document.addEventListener('DOMContentLoaded', function() {
    // Typed animation
    new Typed('#typed-text', {
        strings: ['MCA Student (Security Essentials)', 'Full Stack Developer', 'Cloud & AI Enthusiast', 'Hackathon Semi-Finalist'],
        typeSpeed: 65,
        backSpeed: 35,
        loop: true
    });

    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;
    const toggleIcon = themeBtn.querySelector('i');
    const toggleSpan = themeBtn.querySelector('span');

    function setTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light');
            toggleIcon.className = 'fas fa-sun';
            toggleSpan.innerText = ' Dark';
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            body.classList.remove('light');
            toggleIcon.className = 'fas fa-moon';
            toggleSpan.innerText = ' Light';
            localStorage.setItem('portfolio-theme', 'dark');
        }
    }

    const savedTheme = localStorage.getItem('portfolio-theme');
    savedTheme === 'light' ? setTheme('light') : setTheme('dark');

    themeBtn.addEventListener('click', () => {
        body.classList.contains('light') ? setTheme('dark') : setTheme('light');
    });

    // Contact form toast
    const form = document.getElementById('messageForm');
    function showToast(message, isError = false) {
        let toast = document.querySelector('.toast-msg');
        if (toast) toast.remove();
        const toastDiv = document.createElement('div');
        toastDiv.className = 'toast-msg';
        toastDiv.style.background = isError ? '#dc2626' : '#8B5CF6';
        toastDiv.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
        document.body.appendChild(toastDiv);
        setTimeout(() => toastDiv.remove(), 3500);
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const msg = document.getElementById('message').value.trim();
            if (!name || !email || !msg) {
                showToast('⚠️ Please fill all fields', true);
                return;
            }
            if (!email.includes('@')) {
                showToast('❌ Invalid email address', true);
                return;
            }
            showToast(`✨ Thanks ${name}! I'll reply soon.`, false);
            form.reset();
        });
    }

    // Active nav highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--accent)';
            } else {
                link.style.color = 'var(--text-primary)';
            }
        });
    });
});
