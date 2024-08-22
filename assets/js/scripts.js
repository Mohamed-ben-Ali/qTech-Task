document.addEventListener('DOMContentLoaded', function () {
    const arBtn = document.getElementById('ar-btn');
    const enBtn = document.getElementById('en-btn');
    const langElements = document.querySelectorAll('[data-lang-ar], [data-lang-en]');

    function switchLanguage(lang) {
        langElements.forEach(element => {
            const text = element.getAttribute(`data-lang-${lang}`);
            if (text) {
                element.innerText = text;
            }
        });

        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            document.body.classList.add('arabic');
            document.body.classList.remove('english');
        } else {
            document.body.setAttribute('dir', 'ltr');
            document.body.classList.add('english');
            document.body.classList.remove('arabic');
        }
    }

    arBtn.addEventListener('click', () => switchLanguage('ar'));
    enBtn.addEventListener('click', () => switchLanguage('en'));
    // Optional: Set default language based on browser or user preference
    const defaultLang = 'ar'; // or 'en'
    switchLanguage(defaultLang);

    // Existing JS Code for the screen toggle
    let report = document.getElementById('report');
    let screen1 = document.getElementById('screen1-content');
    let screen2 = document.getElementById('screen2-content');
    let toggle_icon = document.querySelectorAll('.toggle-icon');
    let toggle_icon1 = document.getElementById('toggle-icon1');
    let toggle_icon2 = document.getElementById('toggle-icon2');

    report.addEventListener('click', function () {
        report.style.color = "rgb(25, 135, 84)";
        screen1.classList.replace("col-md-12", "col-md-8");
        screen2.classList.remove("d-none");
        toggle_icon.forEach(icon => icon.classList.remove("d-none"));
    });

    toggle_icon1.addEventListener('click', function () {
        screen1.classList.add("col-md-12");
        screen2.classList.add("d-none");
    });

    toggle_icon2.addEventListener('click', function () {
        screen1.classList.add("d-none");
        screen2.classList.add("col-md-12");
    });

    toggle_icon2.addEventListener('dblclick', function () {
        screen1.classList.remove("d-none");
        screen2.classList.remove("col-md-12");
    });
});
