const images = [
  "image.png",
    "image copy.png",
    "image copy 2.png",
    "image copy 9.png",
    "image copy 4.png",
    "image copy 5.png",
    "image copy 6.png",
    "image copy 7.png",
];

// Суреттерді екі рет қайталап, араластыру
const cards = [...images, ...images].sort(() => Math.random() - 0.5);

const mainDiv = document.querySelector(".main");
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

// Карточкаларды жасау
cards.forEach((image, index) => {
    const card = document.createElement("img");
    card.src = "image copy 8.png"; // Бастапқы жабық сурет
    card.dataset.image = image; // Суретті сақтау үшін
    card.classList.add("card");
    card.addEventListener("click", flipCard);
    mainDiv.appendChild(card);
});

// Карточканы ашу
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.src = this.dataset.image;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkMatch();
}

// Сәйкестікті тексеру


// Сәйкес келген карточкаларды өшіру
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

// Карточкаларды жабу
function unflipCards() {
    setTimeout(() => {
        firstCard.src = "image copy 8.png";
        secondCard.src = "image copy 8.png";

        resetBoard();
    }, 1000);
}

// Ойын тақтасын қайта баптау
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}


function checkMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        disableCards();
        matchedPairs++;

        // Барлық жұп табылса
        if (matchedPairs === images.length) {
            document.body.classList.add("win");

            // "Congratulations" мәтінін көрсету
            const congratsDiv = document.getElementById("congrats");
            congratsDiv.classList.remove("hidden");
        }
    } else {
        unflipCards();
    }
}







'https://c02.purpledshub.com/uploads/sites/41/2023/09/GettyImages_154514873.jpg?w=1029&webp=1'
'https://img.oe.kz/bitrix-catalog/22960/1720303764-granat-1000-gr-2.jpeg'
'https://naturefarm.com.my/wp-content/uploads/2022/01/Watermelon-Red-Grade-AA-Seedless-Watermelon-Red-Grade-Seedless-melons.jpeg'
'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/Pomona-Sweet-Semi-Dwarf-Lemon-Tree.jpg?v=1729718413'
'https://orgboxthailand.com/wp-content/uploads/2020/09/Organic-Fruits_0014_banana.png'
'https://calorizator.ru/sites/default/files/imagecache/product_512/product/raspberry.jpg'
'https://orgboxthailand.com/wp-content/uploads/2020/09/Organic-Fruits_0014_banana.png'
'https://tropic-fruits.ru/wp-content/uploads/2022/07/%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD.jpg'
'https://tropic-fruits.ru/wp-content/uploads/2022/07/%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD.jpg'
'https://c02.purpledshub.com/uploads/sites/41/2023/09/GettyImages_154514873.jpg?w=1029&webp=1'
'https://sizomarket.kz/wp-content/uploads/2023/09/dSTg1Wk44PJACMVYH1Z5.jpg'
'https://sizomarket.kz/wp-content/uploads/2023/09/dSTg1Wk44PJACMVYH1Z5.jpg'
'https://naturefarm.com.my/wp-content/uploads/2022/01/Watermelon-Red-Grade-AA-Seedless-Watermelon-Red-Grade-Seedless-melons.jpeg'
'https://img.oe.kz/bitrix-catalog/22960/1720303764-granat-1000-gr-2.jpeg'
'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/Pomona-Sweet-Semi-Dwarf-Lemon-Tree.jpg?v=1729718413'
'https://naturefarm.com.my/wp-content/uploads/2022/01/Watermelon-Red-Grade-AA-Seedless-Watermelon-Red-Grade-Seedless-melons.jpeg'
'https://calorizator.ru/sites/default/files/imagecache/product_512/product/raspberry.jpg'



