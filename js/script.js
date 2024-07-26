// language
const translations = {
    ka: {
        product: "პროდუქტები",
        logo: "../svgs/tbc.svg",
        selectedLanguage: "ქარ",
    },
    en: {
        product: "products",
        logo: "../svgs/tbc-en.svg",
        selectedLanguage: "Eng",
    },
};

function switchLanguage(language) {
    document.getElementById('product').textContent = translations[language].product;
    document.getElementById('tbcLogo').setAttribute("src", translations[language].logo);
    localStorage.setItem('Language', language);
    updateLanguageButtons(language);
}

function updateLanguageButtons(selectedLanguage) {
    document.querySelectorAll('.language_toggle').forEach(toggle => {
        const selectedLanguageText = toggle.querySelector('.selectedLanguageText');
        const otherLanguageText = toggle.querySelector('.language_button_second');
        selectedLanguageText.textContent = translations[selectedLanguage].selectedLanguage;
        const otherLanguage = selectedLanguage === 'ka' ? 'en' : 'ka';
        otherLanguageText.textContent = translations[otherLanguage].selectedLanguage;
        otherLanguageText.onclick = () => switchLanguage(otherLanguage);
    });
}

const savedLanguage = localStorage.getItem('Language') || 'ka';
switchLanguage(savedLanguage);

// dropdown and underline
const handleDropdown = (props) => {
    let parent = props.parentElement;
    let child = parent.lastChild.previousSibling;
    const isDropdownOpen = child.classList.contains('show');
    closeDropdowns();
    if (!isDropdownOpen) {
        child.classList.toggle('show');
        const backgroundDiv = document.querySelector('.dropdown_background');
        backgroundDiv.classList.add('show');
        props.classList.add('active');
    }
};

const closeDropdowns = () => {
    const dropdowns = document.querySelectorAll('ul li ul');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    const backgroundDiv = document.querySelector('.dropdown_background');
    backgroundDiv.classList.remove('show');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    })
};

document.addEventListener('click', (event) => {
    const isDropdownButton = event.target.matches('ul li button');
    if (!isDropdownButton) {
        closeDropdowns();
    }
});

document.addEventListener('scroll', closeDropdowns);
document.querySelectorAll('ul li button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

//SmMenu Toggle
const MenuToggle = document.querySelector('.menu_toggle_sm')
const MenuContainer = document.querySelector('.menu_container_sm')

MenuToggle.onclick = function () {
    MenuToggle.classList.toggle('active');
    MenuContainer.classList.toggle('active');
}

//collapse
document.addEventListener('DOMContentLoaded', () => {
    const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetSelector = trigger.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);
            const isVisible = targetElement.classList.contains('show');

            document.querySelectorAll('.collapse.show').forEach(collapse => {
                collapse.classList.remove('show');
            });

            document.querySelectorAll('.collapse_btn svg.rotate').forEach(svg => {
                svg.classList.remove('rotate');
            });

            if (!isVisible) {
                targetElement.classList.add('show');
                trigger.querySelector('svg').classList.add('rotate');
            }
        });
    });
});

//Fixed Menu
document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.querySelector('.fixed_menu_main_button');
    const fixedMenuContent = document.querySelector('.fixed_menu_content');
    let isAnimating = false;
    mainButton.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        if (fixedMenuContent.classList.contains('visible')) {
            fixedMenuContent.classList.remove('visible');
            mainButton.classList.remove('active');
        } else {
            fixedMenuContent.classList.add('visible');
            mainButton.classList.add('active');
        }
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    });
});

