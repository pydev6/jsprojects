// DOM Manipulation

// Event Listeners

// element.addEventListner("click", function)

const buttonTwo = document.querySelector(".btn-2");
const cardEl = document.querySelector(".card-container");
console.log(cardEl);

function changeBg() {
  cardEl.style.backgroundColor = "red";
}

cardEl.addEventListener("mouseover", changeBg);

const hiddenContent = document.querySelector(".hidden-content");
const revealBtn = document.querySelector(".reveal-btn");
function revealContent() {
  if (hiddenContent.classList.contains("boxes")) {
    hiddenContent.classList.remove("boxes");
  } else {
    hiddenContent.classList.add("boxes");
  }
}

revealBtn.addEventListener("click", revealContent);
