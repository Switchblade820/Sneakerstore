const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code:"black",
                img:"./img/Product/air.png",
            },
            {
                code: "darkblue",
                img: "./img/Product/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/jordan.png",
            },
            {
                code: "green",
                img: "./img/Product/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code:"lightgrey",
                img: "./img/Product/blazer.png",
            },
            {
                code: "green",
                img: "./img/Product/blazer2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/Product/crater.png",
            },
            {
                code: "lightgrey",
                img: "./img/Product/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "grey",
                img: "./img/Product/hippie.png",
            },
            {
                code: "black",
                img: "./img/Product/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title: "Puma",
        price: 269,
        colors: [
            {
                code: "red",
                img: "./img/Product/pumas.png",
            },
            {
                code: "yellow",
                img: "./img/Product/pumas2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductColors = document.querySelectorAll(".color");
const currentproductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentproductTitle.textContent = choosenProduct.title;
        currentproductPrice.textContent = "RM" + choosenProduct.price;
        currentproductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentproductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentproductColors.forEach((color, index) => {
    color,addEventListener("click",() => {
        currentproductImg.src = choosenProduct.colors[index].img;
    });
});

currentproductSizes.forEach((size, index) => {
    size.addEventListener("click",() => {
        currentproductSizes.forEach((size) => {
            size.style.backgroundColor= "white";
            size,style.color = "black";
        });
         size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
