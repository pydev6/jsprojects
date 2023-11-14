// DOM Manipulation

// Event Listeners

// element.addEventListner("click", function)

const buttonTwo = document.querySelector('.btn-2');
const cardEl = document.querySelector('.card-container');
console.log(cardEl);

function changeBg() {
  cardEl.style.backgroundColor = 'red';
}

cardEl.addEventListener('mouseover', changeBg);

const hiddenContent = document.querySelector('.hidden-content');
const revealBtn = document.querySelector('.reveal-btn');
function revealContent() {
  if (hiddenContent.classList.contains('boxes')) {
    hiddenContent.classList.remove('boxes');
  } else {
    hiddenContent.classList.add('boxes');
  }
}

revealBtn.addEventListener('click', revealContent);

var moresponsorBtn = document.getElementById('sponsorBtn');
moresponsorBtn.addEventListener('click', showMore);

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('hide-header').style.top = '0';
  } else {
    document.getElementById('hide-header').style.top = '-80 px'; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;
};
