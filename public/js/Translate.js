'use strict';

const script = document.createElement('script');
script.setAttribute('async', '');
script.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
document.head.appendChild(script);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'es' }, 'google_translate_element');

    // Forzar la traducción automática al idioma deseado (ejemplo: inglés)
    setTimeout(() => {
        const select = document.querySelector('select.goog-te-combo');
        if (select) {
            select.value = 'es';  // Cambia 'en' por el código de idioma que desees (ejemplo: 'fr' para francés)
            select.dispatchEvent(new Event('change'));
        }
    }, 1000); // Esperar a que se cargue el traductor y la lista de idiomas
}
