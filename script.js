const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main_list");

const cardArray = [
    {
        id: 0,
        title: "Туфли мужские",
        price: "1000 ₽",
        address: "Казань р-н Вахитовский",
        date: "10 июля 11:24",
        img: "./image/card-img.jpg",
    },
    {
        id: 1,
        title: "Туфли мужские 1",
        price: "1010 ₽",
        address: "Казань р-н Вахитовский",
        date: "10 июля 11:24",
        img: "./image/card-img.jpg",
    },
    {
        id: 2,
        title: "Туфли мужские 2",
        price: "1020 ₽",
        address: "Казань р-н Вахитовский",
        date: "10 июля 11:24",
        img: "./image/card-img.jpg",
    },
    {
        id: 3,
        title: "Туфли мужские 3",
        price: "1030 ₽",
        address: "Казань р-н Вахитовский",
        date: "10 июля 11:24",
        img: "./image/card-img.jpg",
    },
    {
        id: 4,
        title: "Туфли мужские 4",
        price: "1040 ₽",
        address: "Казань р-н Вахитовский",
        date: "10 июля 11:24",
        img: "./image/card-img.jpg",
    },
    {
        id: 5,
        title: "Туфли мужские 5",
        price: "1050 ₽",
        address: "Казань р-н Вахитовский",
        date: "10 июля 11:24",
        img: "./image/card-img.jpg",
    }
];

const render = (cardList) => {
    cardWrapper.innerHTML = '';

    cardList.forEach((item, idx) => {
        cardWrapper.insertAdjacentHTML("beforeend", `
            <a href="#" class="content-main_list-item">
                <div class="content-main_list-item-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main_list-item-title">${item.title}</h5>

                <strong class="content-main_list-item_price">${item.price}</strong>

                <div class="content-main_list-item_desc-box">
                    <span class="content-main_list-item_desc">${item.address}</span>
                    <span class="content-main_list-item_desc">${item.date}</span>
                </div>
            </a>
        `);
    });
};

filteredArray = (array, value) => {
    console.log(array);
    console.log(value);
    
    

    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener("click", () => {
    render(filteredArray(cardArray, searchInput.value))
});

