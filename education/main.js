window.addEventListener('scroll', () =>{
document.querySelector('nav').classList.toggle
('window-scroll', window.scrollY > 0)
})

// show hide //
const faq = document.querySelectorAll('.faqs');
faq.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
    })
});

// show and hide nav bar //
const menu =document.querySelector('.nav_menu')
const menubtn = document.querySelector('.open_menu')
const closebtn = document.querySelector('.close_menu')


menubtn.addEventListener('click' , () => {
menu.style.display = "flex";
closebtn.style.display = "inline-block";
menubtn.style.display = "none";
})

closebtn.addEventListener('click' , () => {
menu.style.display = "none";
menubtn.style.display = "inline-block";
closebtn.style.display = "none";
})
