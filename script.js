const langSwitch = document.getElementById('lang-switch');
const themeSwitch = document.getElementById('theme-switch');
const langElements = document.querySelectorAll('[data-lang-en]');

langSwitch.addEventListener('change', () => {
    const isEnglish = langSwitch.checked;
    
    langElements.forEach(el => {
        if (isEnglish) {
            el.innerHTML = el.getAttribute('data-lang-en');
        } else {
            el.innerHTML = el.getAttribute('data-lang-vi');
        }
    });
});

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});