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
        name: 'iphone 14 promax',
        anh: '1.webp',
        price: 32990000
    },
    {
        id: 2,
        name: 'Điện thoại Samsung A34',
        anh: '2.webp',
        price: 9490000
    },
    {
        id: 3,
        name: 'Điện thoại OPPO A57',
        anh: '3.webp',
        price: 4590000
    },
    {
        id: 4,
        name: 'Điện thoại Xiaomi Redmi',
        anh: '4.webp',
        price: 5490000
    },
    {
        id: 5,
        name: 'iPhone 11 64GB',
        anh: '5.webp',
        price: 10490000 
    },
    {
        id: 6,
        name: 'iphone 12 pro Max 126G',
        anh: '6.webp',
        price: 32990000
    },
    {
        id: 7,
        name: 'Điện thoại Samsung A3',
        anh: '7.webp',
        price: 9490000
    },
    {
        id: 8,
        name: 'Điện thoại OPPO A57',
        anh: '8.webp',
        price: 4590000
    },
    {
        id: 9,
        name: 'iPhone 11 64GB',
        anh: '9.webp',
        price: 10490000 
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

// thời gian sale

let countdownTimer = document.getElementById("countdown-timer");

		let targetDate = new Date();
		targetDate.setDate(targetDate.getDate() + 1); // Thiết lập thời gian đích đến là 24h sau thời điểm hiện tại

		setInterval(() => {
			let currentDate = new Date();
			let remainingTime = targetDate.getTime() - currentDate.getTime();

			let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
			let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
			let seconds = Math.floor((remainingTime / 1000) % 60);

			let displayTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

			countdownTimer.innerHTML = displayTime;
		}, 1000);