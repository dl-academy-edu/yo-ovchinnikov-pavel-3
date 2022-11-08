(function () {
    const button = document.querySelector('.button-to-top_js');

    if(!button)
        return;

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })

        window.addEventListener('scroll', (e) => {
            if(window.pageYOffset > 1000) {
                button.classList.remove('button-to-top_hidden')
            }
            if(window.pageYOffset <= 1000) {
                button.classList.add('button-to-top_hidden')
            }
        })
})();



// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.btn__next',
//       prevEl: '.btn__prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next, btn__next",
      prevEl: ".swiper-button-prev, btn__prev",
    },
  });




var mobileBurger = document.querySelector('.humburger');
var mobileCls = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');
var input = document.querySelector('input');

mobileBurger.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header__open');
    input.focus();
})

mobileCls.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-header__open');
    mobileBurger.focus();
})

window.addEventListener('keydown', function(e) {
    if (e.code === "Escape") {
        mobileHeader.classList.remove('mobile-header__open');
        mobileBurger.focus();
    }
})


var popupSign = document.querySelector('.popup__sign');
var popupSignLink = document.querySelector('.sign__link_js');
var popupCls = document.querySelector('.popup__sign__close');
var input = document.querySelector('input');

popupSignLink.addEventListener('click', function() {
    popupSign.classList.add('popup__open');
    input.focus();
})

popupCls.addEventListener('click', function() {
    popupSign.classList.remove('popup__open');
    popupSignLink.focus();
})

window.addEventListener('keydown', function(e) {
    if (e.code === "Escape") {
        popupSign.classList.remove('popup__open');
        popupSignLink.focus();
    }
})


var popupReg = document.querySelector('.popup__register');
var popupRegLink = document.querySelector('.register__link_js');
var popupRegCls = document.querySelector('.popup__register__close');
var input = document.querySelector('input');

popupRegLink.addEventListener('click', function() {
    popupReg.classList.add('popup__open');
    input.focus();
})

popupRegCls.addEventListener('click', function() {
    popupReg.classList.remove('popup__open');
    popupRegLink.focus();
})

window.addEventListener('keydown', function(e) {
    if (e.code === "Escape") {
        popupReg.classList.remove('popup__open');
        popupRegLink.focus();
    }
})

var popupMes = document.querySelector('.popup__message');
var popupMesBtn = document.querySelector('.message__button_js');
var popupMesCls = document.querySelector('.popup__message__close');
var input = document.querySelector('input');

popupMesBtn.addEventListener('click', function() {
    popupMes.classList.add('popup__open');
    input.focus();
})

popupMesCls.addEventListener('click', function() {
    popupMes.classList.remove('popup__open');
    popupMesBtn.focus();
})

window.addEventListener('keydown', function(e) {
    if (e.code === "Escape") {
        popupMes.classList.remove('popup__open');
        popupMesBtn.focus();
    }
})



// let position = 0;
// const slidesToShow = 1;
// const slidesToScroll = 1;
// const container = document.querySelector('.slider__container');
// const track = document.querySelector('.slider__track');
// const btnPrev = document.querySelector('.btn__prev');    
// const btnNext = document.querySelector('.btn__next');
// const items = document.querySelectorAll('.slider__item')
// const itemsCont = items.length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;
// // let checkerMouseDown = false;
// // let isTouched = false;

// // wrapper.addEventListener('touchstart', (e) => {
// //     isTouched = true;
// //     const touch = e.targ
// // })

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`;
// });

// btnNext.addEventListener('click', () => {
//     const itemsLeft = itemsCont - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// });

// btnPrev.addEventListener('click', () => {
//     const itemsLeft = Math.abs(position) / itemWidth;

//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// });

// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`;
// };

// const checkBtns = () => {
//     btnPrev.disabled = position === 0;
//     btnNext.disabled = position <= -(itemsCont - slidesToShow) * itemWidth;
// };

// checkBtns();

const formSg = document.forms["sign"];

const submitSg = formSg.elements["submitsign"];

const inputArrSg = Array.from(sign);
const validInputArrSg = [];

inputArrSg.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validInputArrSg.push(el);
    }
});

formSg.addEventListener("input", inputHandlerSg);
submitSg.addEventListener('click', submitHandlerSg);

function inputHandlerSg({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheckSg(target);
    }
}

function inputCheckSg(el) {
    const inputValueSg = el.value;
    const inputRegSg = el.getAttribute("data-reg");
    const reg = new RegExp(inputRegSg);
    if (reg.test(inputValueSg)) {
        el.style.border = "2.5px solid #03BC3C";
        el.setAttribute("is-valid", "1");
        } else {
            el.style.border = "2.5px solid #EB3617";
            el.setAttribute("is-valid", "0");
    }
}

function submitHandlerSg(e) {
    const isAllValid = []
    validInputArrSg.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        e.preventDefault();
    }
}

// function emailCheckSg(emailsign) {
//     return emailsign.match('^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$');
// }

// (function () {
//     const formSg = document.forms["sign"]; 

//     const data = getFormData(formSg);
//     let error = {};
//     if (!data.emailsign) {
//         error.emailsign = "Error";
//     }
//     if (data.emailsign && !emailCheckSg(data.emailsign)) {
//         error.emailsign = "Поле не заполнено";
//     }
//     if (!data.passwordsign) {
//         error.passwordsign = "Поле не заполнено";
//     }
//     setErrorsToForm(emailsign, error)
// })();




const formRg = document.forms["register"];

const submitRg = formRg.elements["submitregister"];

const inputArrRg = Array.from(register);
const validInputArrRg = [];

inputArrRg.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validInputArrRg.push(el);
    }
});

formRg.addEventListener("input", inputHandlerRg);
submitRg.addEventListener('click', submitHandlerRg);

function inputHandlerRg({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2.5px solid #03BC3C";
        el.setAttribute("is-valid", "1");
        } else {
            el.style.border = "2.5px solid #EB3617";
            el.setAttribute("is-valid", "0");
    }
}

function submitHandlerRg(e) {
    const isAllValid = []
    validInputArrRg.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        e.preventDefault();
    }
}


const formMg = document.forms["message"];

const submitMg = formMg.elements["submitmessage"];

const inputArrMg = Array.from(message);
const validInputArrMg = [];

inputArrMg.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validInputArrMg.push(el);
    }
});

formMg.addEventListener("input", inputHandlerMg);
submitMg.addEventListener('click', submitHandlerMg);

function inputHandlerMg({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheckMg(target);
    }
}

function inputCheckMg(el) {
    const inputValueMg = el.value;
    const inputRegMg = el.getAttribute("data-reg");
    const reg = new RegExp(inputRegMg);
    if (reg.test(inputValueMg)) {
        el.style.border = "2.5px solid #03BC3C";
        el.setAttribute("is-valid", "1");
        } else {
            el.style.border = "2.5px solid #EB3617";
            el.setAttribute("is-valid", "0");
    }
}



function submitHandlerMg(e) {
    const isAllValid = []
    validInputArrMg.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        e.preventDefault();
    }
}





// (function () {
//     const contextmenu = document.querySelector('.contextmenu_js');
//     if(!contextmenu) {
//         return;
//     }
//     const btn = contextmenu.querySelector('.contextmenu_button_js');

//     if(!btn) {
//         return;
//     }

//     function closeMenu() {
//         window.removeEventListener('scroll', scrollHandler);
//         window.removeEventListener('click', clickHandler);
//         window.removeEventListener('keydown', keydownHandler);
//         contextmenu.classList.add('contextmenu_hidden')
//     }

//     btn.addEventListener('click', () => {
//         closeMenu();
//         window.scrollTo({ 
//             top: 0,
//             behavior: 'smooth',
//         })
//     })

//     function scrollHandler(e) {
//         closeMenu()
//     }

//     function clickHandler(e) {
//         if(!contextmenu.contains(e.target)) {
//             closeMenu();
//         }
//     }

//     function keydownHandler(e) {
//         if(e.keyCode === 27) {
//             closeMenu();
//         }
//     }

//     window.addEventListener('contextmenu', e => {
//         e.preventDefault()
//         contextmenu.style.top = `${e.clientY}px`;
//         contextmenu.style.left = `${e.clientX}px`;
//         contextmenu.classList.remove('contextmenu_hidden');
//         window.addEventListener('scroll', scrollHandler);
//         window.addEventListener('click', clickHandler);
//         window.addEventListener('keydown', keydownHandler);
//     })
// })();