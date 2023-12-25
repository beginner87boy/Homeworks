const post = document.querySelector(".btn_post");
const get = document.querySelector(".btn_get");
const put = document.querySelector(".btn_put");
const delete_btn = document.querySelector(".btn_delete");



post.addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            Id: 7,
            name: "Nokia",
            email: "nokia@gmail.com",
            price: "50",
        }),

        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
})

get.addEventListener("click", () => {
    fetch("https://dummyjson.com/products").then((res) => res.json())
        .then((data) => console.log(data));
})

put.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1 ', {
        method: 'PUT',
        body: JSON.stringify({
            Id: 7,
            name: "Nokia",
            email: "nokia@gmail.com",
            price: "50",
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

})

delete_btn.addEventListener("click", ()=> {
    fetch('https://dummyjson.com/products/1', {
        method: 'DELETE',
        body: JSON.stringify({
            id: 2,
         }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
      
      .then(res => res.json())
      .then(console.log);
    })
              
  
// for(let i=0; i<5; i++) {
//     setTimeout(() => console.log(i))
// }

// for(var i=0; i<5; i++) {
//     setTimeout(() => console.log(i))
// }

// let x = [1, 2, 3];
// let y = x.map((x) => x * x);

// console.log(x[1] ** y[1]);
