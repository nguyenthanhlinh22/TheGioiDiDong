const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')


// console.log()
addressbtn.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click",function(){
    document.querySelector('#address-form').style.display = "none"


})





// slider1
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// /đăng nhập 
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// // cart
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
    alert('Đặt Hàng Thành Công');
    
})

let products = [
    {
        id: 1,
        name: 'Món 1',
        anh: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'Món 2',
        anh: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'Món 3',
        anh: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'Món 4',
        anh: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'Món 5',
        anh: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'Món 6',
        anh: '6.PNG',
        price: 120000
    },
    {
        id: 7,
        name: 'Món 7',
        anh: '3.PNG',
        price: 120000
    },
    {
        id: 8,
        name: 'Món 8',
        anh: '2.PNG',
        price: 120000
    },
    {
        id: 9,
        name: 'Món 9',
        anh: '1.PNG',
        price: 120000
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="anh/${value.anh}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Mua</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="anh/${value.anh}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}