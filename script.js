document.addEventListener('DOMContentLoaded', function() {
    let userLang = navigator.language || navigator.userLanguage; 
    let mainTitle = document.querySelector('.title');
    let button = document.querySelector('.button');
    let popupBg = document.querySelector('.popup-block'); 
    let popup = document.querySelector('.popup');
    let popupText = document.querySelector('.popup-text');
    let popupButton= document.querySelector('.popup-button');
    let wheel = document.querySelector('.wheel');
    let main = document.querySelector('.main');
    
    if (userLang.startsWith('ua')) {
        mainTitle.textContent = 'Крутіть колесо та отримуйте бонуси';
    } else {
        mainTitle.textContent = 'Pörgesd a kereket kapj bónuszokat';
    }

    if (userLang.startsWith('ua')) {
        button.textContent = 'Крутити';
    } else {
        button.textContent = 'Pörgetni';
    }

    if (userLang.startsWith('ua')) {
       popupText.textContent = 'Ти переміг';
    } else {
        popupText.textContent = 'Nyertél';
    }

    if (userLang.startsWith('ua')) {
        popupButton.textContent = 'Спробувати ще';
    } else {
        popupButton.textContent = 'Próbálja újra';
    }


button.addEventListener("click", openPopup);

function openPopup(){
    wheel.classList.add('spin');
    setTimeout(() => {
        popupBg.classList.add('active'); 
        popup.classList.add('active');
        main.classList.add('blur');
    }, 500);
}

popupButton.addEventListener("click", closePopup);

function closePopup(){
        popupBg.classList.remove('active'); 
        popup.classList.remove('active');
        main.classList.remove('blur');
    }
});



