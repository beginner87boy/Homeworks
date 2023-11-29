// Task  Modal acildiqdan sonra gorunen x buttonuna click edersek modal baglanmalidir
/// Modal acildiqdan sonra gorunen "No cancel" buttonuna click edersek modal baglanmalidir

const unit = document.querySelector(".unit");
const btn = document.querySelector('.btn');
const icon = document.querySelector(".icon");
const unit_box_btn1 = document.querySelector(".unit_box_btn1");
const unit_box_btn2 = document.querySelector(".unit_box_btn2");
const text = document.querySelector("#text");

btn.addEventListener('click',function (){
    unit.classList.toggle('active')
})

icon.addEventListener('click',function (){
    unit.classList.remove('active')
})

unit_box_btn1.addEventListener('click',function (){
    unit.classList.remove('active')
})

unit_box_btn2.addEventListener('click',function (){
    unit.classList.remove('active')
    alert(text.value);
    })





