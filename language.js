
let currentLang = 'en';

function switchLanguage() {
  const elements = document.querySelectorAll('[data-lang-ja]');
  elements.forEach((element) => {
    const jaText = element.getAttribute('data-lang-ja');
    const enText = element.textContent;
    if (currentLang === 'en') {
      element.textContent = jaText;
    } else {
      element.textContent = enText;
    }
  });

  currentLang = currentLang === 'en' ? 'ja' : 'en';
}

document.getElementById('lang-switch').addEventListener('click', switchLanguage);
