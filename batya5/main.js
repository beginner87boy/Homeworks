

const form = document.querySelector(".form");
const btn = document.querySelector('.btn');
const icon = document.querySelector(".icon");
const form_box_btn_1 = document.querySelector(".form_box_btn_1");
const form_box_btn_2 = document.querySelector(".form_box_btn_2");

btn.addEventListener('click',function (){
    form.classList.toggle('active')
})

icon.addEventListener('click',function (){
    form.classList.remove('active')
})

form_box_btn_1.addEventListener('click',function (){
    form.classList.remove('active')
})

form_box_btn_2.addEventListener('click',function (){
    form.classList.remove('active')
    
})