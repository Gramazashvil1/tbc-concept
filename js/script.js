
const translations = {
    ka: {
        product: "პროდუქტები",
        logo: "../svgs/tbc.svg",
        selectedLanguage: "ქარ",
        offers:"შეთავაზებები",
        conceptSpace:"კონცეპტის სივრცე",
        subscribe:"გამოიწერეთ ნაკრები"
    },
    en: {
        product: "Products",
        logo: "../svgs/tbc-en.svg",
        selectedLanguage: "Eng",
        offers:"Offers",
        conceptSpace:"Concept Space",
        subscribe:"SUBSCRIBE TO A PACKAGE",
    },
};

function switchLanguage(language) {
    document.getElementById('product').textContent = translations[language].product;

    document.getElementById('offers').textContent = translations[language].offers;
    document.getElementById('conceptSpace').textContent = translations[language].conceptSpace;
    document.getElementById('subscribe').textContent = translations[language].subscribe;




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
const headerBackground = document.querySelector('header');

const dynamicFooter = document.querySelector('.footer_main');


MenuToggle.onclick = function () {
    MenuToggle.classList.toggle('active');
    MenuContainer.classList.toggle('active');
    if(MenuToggle.classList.contains('active')){
        headerBackground.classList.add('header_bg')
    }else {
        headerBackground.classList.remove('header_bg')
    }
}






function handleScreenResize() {
    if (window.innerWidth > 1024) {
        MenuToggle.classList.remove('active');
        MenuContainer.classList.remove('active');
        headerBackground.classList.remove('header_bg')
    }
}

window.addEventListener('resize', handleScreenResize);
handleScreenResize();

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





let swiperOffers = new Swiper(".swiper_offers", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        620: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
    },
    scrollbar: {
        el: ".swiper_offers .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper_offers .swiper-button-next",
        prevEl: ".swiper_offers .swiper-button-prev",
    },
});




let swiperProducts = new Swiper(".swiper_products", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        620: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
    },
    scrollbar: {
        el: ".swiper_products .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper_products .swiper-button-next",
        prevEl: ".swiper_products .swiper-button-prev",
    },
});


let swiperAwards = new Swiper(".swiper_awards", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        620: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
    },
    scrollbar: {
        el: ".swiper_awards .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper_awards .swiper-button-next",
        prevEl: ".swiper_awards .swiper-button-prev",
    },
});

