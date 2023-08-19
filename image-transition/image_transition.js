const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
var leftSpace = imgBox.offsetLeft;
var topSpace = imgBox.offsetTop;
const originalImg = document.querySelector('#originalImg');
originalImg.style.width = imgBox.offsetWidth + 'px';
const line = document.querySelector('#line');
const arrow = document.querySelector('.arrow');
console.log(imgBox.offsetWidth);

imgBox.onmousemove = function (e) {
  var boxWidth = e.pageX - leftSpace + 'px';
  var boxHeight = e.pageY - topSpace + 'px';
  imgWrap.style.width = boxWidth;
  imgWrap.style.height = boxHeight;
  line.style.left = boxWidth;
  //   line.style.top = boxHeight;
  //   arrow.style.left = boxWidth;
  arrow.style.top = boxHeight;
};
