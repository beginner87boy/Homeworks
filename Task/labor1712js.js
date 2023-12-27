let cards = document.querySelector(".shop-content");
  document.addEventListener("DOMContentLoaded", () =>{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) =>
    data.products.map((item) => {
      cards.innerHTML +=`
      <div class="product-box">
      <img src="https://i.dummyjson.com/data/products/${item.id}/1.jpg" alt="product-img">
      <h2 class="product-title">${item.title}<h2>
      <h3 class="product-price">${item.price}$<h3>
      <button class="add-cart">Səbətə əlavə et</button>
      </div>`;
    }))
  })


const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active")
});
closeCart.addEventListener("click", () => {
  cart.classList.remove("active")
});


if(document.readyState == "loading"){
  document.addEventListener('DOMContentLoaded', start);
  }else{
    start();
  }

  // START
  function start(){
    addEvents();
    updateTotal();
  }

  // UPDATE 
  function update(){
    addEvents();
  } 

  // ADD events
  function addEvents(){
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
      btn.addEventListener("click", handle_removeCartItem);
      });
  

  // change item quantity
  let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
  cartQuantity_inputs.forEach(input => {
    input.addEventListener("change", handle_changeItemQuantity);
  })
}

// add button to cart
let addCart_btns = document.querySelectorAll(".add-cart");
addCart_btns.forEach(btn => {
  addCart_btns.addEventListener("click", handle_addCartItem);
  // body.classList.add('active');




  // buy order
const buy_btn = document.querySelector(".btn-buy");
buy_btn.addEventListener("click", handle_buyOrder);
})



function handle_buyOrder(){
  if (ItemsAdded.length <=0) {
    alert("Səbətiniz boşdur!!!");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = '';
  alert("Alışınız uğurla başa atdı");
  ItemsAdded = [];

  update();
}



// let ItemsAdded = [];
function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img");
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc
  };

  if(ItemsAdded.find((el) => el.title == newToAdd.title)) {
    return;
  }else{
    ItemsAdded.push(newToAdd);
  }

  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update()
}

// handle events
  function handle_removeCartItem() {
    this.parentElement.remove();
    ItemsAdded = ItemsAdded.filter((el) =>el.title !=
    this.parentElement.querySelector(".cart-product-title").innerHTML)
    update();
  }

  function handle_changeItemQuantity(){
    if (isNaN(this.value) || this.value < 1) {
      this.value = 1;
    }
    this.value = Math.floor(this.value);
    update();
  }


  function updateTotal(){
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
      let priceElement = cartBox.querySelector(".cart-price");
      let price = parseFloat(priceElement.innerHTML.replace("$", " "));
      let quantity = cartBox.querySelector(".cart-quantity").value;
      total += price * quantity;
    }); 
    total = total.toFixed(2);
    totalElement.innerHTML = "$" + total;
  }

  function CartBoxComponent(title, price, imgSrc) {
return `  <div class="cart-box">
<img src=${imgSrc} alt="" class="cart-img">
<div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  <input type="number" value="1" class="cart-quantity">
</div>
<i class='bx bx-trash cart-remove'></i>
      </div>`
  }


