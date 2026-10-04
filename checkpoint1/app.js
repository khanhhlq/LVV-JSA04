////  Khởi tạo dữ liệu thẻ
const cards = [
  { name: "rainbow", img: "images/rainbow.png" },
  { name: "rainbow", img: "images/rainbow.png" },
  { name: "sun", img: "images/sun.png" },
  { name: "sun", img: "images/sun.png" },
  { name: "moon", img: "images/moon.png" },
  { name: "moon", img: "images/moon.png" },
  { name: "star", img: "images/star.png" },
  { name: "star", img: "images/star.png" },
  { name: "cloud", img: "images/cloud.png" },
  { name: "cloud", img: "images/cloud.png" },
  { name: "flower", img: "images/flower.png" },
  { name: "flower", img: "images/flower.png" },
  { name: "tree", img: "images/tree.png" },
  { name: "tree", img: "images/tree.png" },
  { name: "bird", img: "images/bird.png" },
  { name: "bird", img: "images/bird.png" },
];

//// Sắp xếp ngẫu nhiên thẻ
cards.sort(() => Math.random() - 0.5);

////   Hiển thị thẻ lên giao diện
const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
let score = 0;
let flippedCards = [];
let matchedCards = [];

function createBoard() {
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-id", index);

    const cardImage = document.createElement("img");
    cardImage.src = card.img;

    cardElement.appendChild(cardImage);
    gameBoard.appendChild(cardElement);

    // Thêm sự kiện click
    cardElement.addEventListener("click", flipCard);
  });
}

createBoard();

//// Lật thẻ và kiểm tra trùng khớp
function flipCard() {
  const cardId = this.getAttribute("data-id");
  const card = cards[cardId];

  if (flippedCards.length < 2 && !flippedCards.includes(cardId)) {
    this.classList.add("flipped");
    flippedCards.push(cardId);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}

// Kiểm tra trùng khớp thẻ
function checkMatch() {
  const [firstId, secondId] = flippedCards;
  const firstCard = document.querySelector(`[data-id="${firstId}"]`);
  const secondCard = document.querySelector(`[data-id="${secondId}"]`);

  if (cards[firstId].name === cards[secondId].name) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedCards.push(firstId, secondId);
    score += 10;
  } else {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
  }

  flippedCards = [];
  scoreDisplay.textContent = score;

  if (matchedCards.length === cards.length) {
    alert("Chúc mừng! Bạn đã hoàn thành trò chơi!");
    saveScore();
  }
}

//// Lưu điểm với LocalStorage
function saveScore() {
  const highScore = localStorage.getItem("highScore") || 0;
  if (score > highScore) {
    localStorage.setItem("highScore", score);
    alert(`Bạn đã đạt kỷ lục mới: ${score} điểm!`);
  }
}
