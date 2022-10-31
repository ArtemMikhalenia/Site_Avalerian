
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
   iconMenu.addEventListener("click", function () {
      iconMenu.classList.toggle("active");
      body.classList.toggle("lock");
      menuBody.classList.toggle("active");
   });
}
//<Скрипт для поворота стрелочки при клике>=============

const selectForm = document.querySelector('.select');
const arrow = document.querySelector('.column-form__image');

selectForm.addEventListener("click", function () {
   arrow.classList.toggle("active");
});

//<Скрипт для удаления placeholder при фокусе>=============
//форма Growth
const growthForm = document.forms.growth;                 //константа для нашей формы
//форма Touch
const touchForm = document.forms.touch;
//форма Contacts
const contactsForm = document.forms.contacts;

const inputAll = document.querySelectorAll('input');       //константа всех тегов с классом input
const placeholder = document.querySelectorAll('[placeholder]');  //константа всех тегов с атрибутом placeholder

//Для формы Growth
const nameInputGrowth = growthForm.name;   //константа для input с именем name
const namePlaceholderGrowth = nameInputGrowth.placeholder; //константа для placeholder в указанном input
const companyInputGrowth = growthForm.comName;   //константа для input с именем name
const companyPlaceholderGrowth = companyInputGrowth.placeholder; //константа для placeholder в указанном input
const emailInputGrowth = growthForm.email; //константа для input с именем email
const emailPlaceholderGrowth = emailInputGrowth.placeholder; //константа для placeholder в указанном input
//Для формы Touch
const emailInputTouch = touchForm.touchEmail;
const emailPlaceholderTouch = emailInputTouch.placeholder;
//Для формы Contacts
const nameInputContacts = contactsForm.names;
const namePlaceholderContacts = nameInputContacts.placeholder;
const lnameInputContacts = contactsForm.lNames;
const lnamePlaceholderContacts = lnameInputContacts.placeholder;
const emailInputContacts = contactsForm.Emails;
const emailPlaceholderContacts = emailInputContacts.placeholder;
const websiteInputContacts = contactsForm.web;
const websitePlaceholderContacts = websiteInputContacts.placeholder;
const textAreaContacts = contactsForm.textarea;
const textPlaceholderContacts = textAreaContacts.placeholder;

console.log(emailInputContacts);

placeholder.forEach(el =>   //для всех placeholder мы
   el.addEventListener("focus", function (element) { //при событии фокус
      el.placeholder = ""; //пишем функцию, которая убирает placeholder
   })
);

placeholder.forEach(el => //для всех placeholder мы
   el.addEventListener("blur", function (element) { //при событии blur - это когда вышли из фокуса
      //Для формы Growth
      nameInputGrowth.placeholder = placeholder.value = "Name";  //возвращаем исходный placeholder
      companyInputGrowth.placeholder = placeholder.value = "Company name";
      emailInputGrowth.placeholder = placeholder.value = "Email"; //возвращаем исходный placeholder
      //Для формы Touch
      emailInputTouch.placeholder = placeholder.value = "user@email.com";
      //Для формы Contacts
      nameInputContacts.placeholder = placeholder.value = "First name";
      lnameInputContacts.placeholder = placeholder.value = "Last name";
      emailInputContacts.placeholder = placeholder.value = "Email";
      websiteInputContacts.placeholder = placeholder.value = "Your company’s website";
      textAreaContacts.placeholder = placeholder.value = "Describe your company in 1 sentence";
   }));


//Скрипт для скролла при нажатии на кнопку вверх
const button = document.querySelector('.footer__button');

button.addEventListener("click", scrollToTop);

function scrollToTop() {
   window.scrollTo({
      top: 0,
      //left: 0,
      behavior: "smooth"
   });
};

//Скрипт для селекта
const selectButton = document.querySelector('.select');
const selectList = document.querySelector('.select__list');
const selectListItem = document.querySelectorAll('.select__list-item');

selectButton.addEventListener('click', clickButton);

function clickButton() {
   selectList.classList.toggle('showlist');
}

selectListItem.forEach(listItem => {

   listItem.addEventListener('click', function () {
      selectButton.innerText = this.innerText;
      selectList.classList.remove('showlist');
   });
});

//Скрипт для анимации сайта
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            if (!animItem.classList.contains('_no-anim')) {
               animItem.classList.remove('active');
            }
         }
      }
   }
   //Функция позиции объекта относительно верха (кроссбраузерная)
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 100);
}

//Нажатие кнопки
const buttonOnClick = document.querySelectorAll('.button');
//const buttonSubmit  = document.

buttonOnClick[0].addEventListener('click', buttonClick0);
buttonOnClick[1].addEventListener('click', buttonClick1);
buttonOnClick[2].addEventListener('click', buttonClick2);
buttonOnClick[3].addEventListener('click', buttonClick3);

function buttonClick0() {
   buttonOnClick[0].classList.add("active");
}

function buttonClick1() {
   buttonOnClick[1].classList.add("active");
}

function buttonClick2() {
   buttonOnClick[2].classList.add("active");
}

function buttonClick3() {
   buttonOnClick[3].classList.add("active");
}