// const library = [
//   {
//     title: 'book1',
//     author: 'Bill Gates',
//     status: { own: true, reading: false, read: false },
//   },
//   {
//     title: 'book2',
//     author: 'Steve',
//     status: { own: true, reading: false, read: false },
//   },
//   {
//     title: 'book3',
//     author: 'Walter',
//     status: { own: true, reading: false, read: false },
//   },
// ];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// const { title: firstBook } = library[0];
// const libraryJSON = JSON.stringify(library);
// const newName = JSON.parse(libraryJSON);

// console.log(libraryJSON);

// function showCoords(event) {
//   let x = event.clientX;
//   let y = event.clientY;
//   let text = 'X coords: ' + x + ', Y coords: ' + y;
//   document.getElementById('demo').innerHTML = text;
// }

// console.log(showCoords());

// const inputValue = document.querySelector('#fahrenheit');
// const result = document.getElementById('demo');
// const btn = document.getElementById('btn');
// btn.addEventListener('click', getCeisius);

// function getCeisius() {
//   const fahrenheitDegree = inputValue.value;
//   const ceisiusDegree = ((fahrenheitDegree - 32) * 5) / 9;
//   result.innerHTML = `The temperture of ${fahrenheitDegree} fahrenheit degree is ${ceisiusDegree} ceisius degrees`;
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz...');
//   } else if (i % 5 === 0) {
//     console.log('Buzz...');
//   } else {
//     console.log(i);
//   }
// }
// let i = 1;
// while (i <= 100) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz...');
//   } else if (i % 3 === 0) {
//     console.log('Fizz...');
//   } else if (i % 5 === 0) {
//     console.log('Buzz...');
//   } else {
//     console.log(i);
//   }

//   i++;
// }

// const colorArr = ['red', 'blue', 'green'];

// for (const color of colorArr) {
//   console.log(color);
// }

// for (const color in colorArr) {
//   console.log(colorArr[color]);
// }

// colorArr.forEach(function (item, index, arr) {
//   console.log(`${index}-${item}`, arr);
// });

// const result = peoples.filter((people)=>people.age<=25).map((e)=>{
//   return {name:e.firstName + e.laseName,
//   email:e.email}
// })

// let output;

// output = document.all[8];
// output = document.documentElement;
// output = document.body.children;
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;
// output = document.links;
// output = document.links[0];
// output = document.links[0].href = 'https://twitter.com';
// output = document.links[0].id = 'new-link';
// output = document.links[0].className = 'twitter-class';
// output = document.links[0].classList;
// output = document.images[0];
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));
// console.log(output);

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// const title = document.getElementById('app-title');
// title.style.backgroundColor = 'orange';
// title.style.padding = '10px';
// title.style.borderRadius = '5px';

// document.querySelector()

// const listItems = document.querySelectorAll('li');
// listItems.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.setAttribute('class', 'item');
//     item.style.color = 'red';
//   }
// });

// const listItems = document.getElementsByTagName('li');
// console.log(listItems[2]);
// let output;

// get children
// const parent = document.querySelector('.parent');
// output = parent.children[1];
// parent.children[1].style.color = 'red';
// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Last Child';

// get parents

// const child = document.querySelector('.child');
// output = child.parentElement;
// output.style.border = '1px solid black';
// output.style.padding = '10px';

// Sibling elements

// const secondItem = document.querySelector('.child:nth-child(2)');
// output = secondItem;
// output = secondItem.nextElementSibling;
// output.style.color = 'green';
// output = secondItem.previousElementSibling;
// output.style.color = 'orange';

// console.log(output);

// let output;
// const parent = document.querySelector('.parent');

// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].textContent; //output:Child 2 extra content
// output = parent.childNodes[3].outerHTML; // output:<div class="child">Child 2<span> extra content</span></div>

// output = parent.childNodes[3].innerHTML; // output:Child 2<span> extra content</span>
// parent.lastChild.textContent = 'last child';

// parent node
// let output;
// const child = document.querySelector('.child');
// output = child.parentNode;
// output = child.parentElement;
// child.parentNode.style.backgroundColor = '#ccc';
// child.parentNode.style.padding = '10px';
// child.parentNode.style.textAlign = 'left';
// const secondItem = document.querySelector('.child:nth-child(2)');
// output = secondItem.previousSibling;

// console.log(output.childNodes);

// insertAdjacentElement example

// insertAdjacentText example

// insertAdjacentHTML example

/*
<!--  beforebegin -->
<p>
<!--  afterbegin -->
   foo
<!--  beforeend -->
</p>
<!--  afterend -->
*/
// function insertElement() {
//   const filter = document.querySelector('.filter');
//   const h1 = document.createElement('h1');
//   h1.textContent = 'insertAdjacentElement';
//   filter.insertAdjacentElement('beforebegin', h1);
// }

// function insertText() {
//   const item = document.querySelector('li:first-child');
//   item.insertAdjacentText('afterend', 'New info');
// }

// function insertHTML() {
//   const item = document.querySelector('li:last-child');

//   item.insertAdjacentHTML(
//     'afterend',
//     `<li>
//     New item
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>
//   </li>`
//   );
// }

// New element to insert

// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling); // insertBefore need to find the parent node first.
// }
// const li = document.createElement('li');
// li.textContent = 'Insert Me After';

// // Existing elment to insert after

// const firstItem = document.querySelector('li:first-child');
// console.log(firstItem.parentNode);
// insertElement();
// // insertText();
// insertHTML();
// insertAfter(li, firstItem);

// Replace elements

// function replaceFirstElement() {
//   const firstItem = document.querySelector('li:first-child');
//   const li = document.createElement('li');
//   li.textContent = 'replaced content';
//   firstItem.replaceWith(li);
// }

// function replaceSecondItem() {
//   const secondItem = document.querySelector('li:nth-child(2)');
//   secondItem.outerHTML = '<li>Replace Second</li>';
// }

// function replaceChildHeading() {
//   const header = document.querySelector('header');
//   const h1 = document.querySelector('header h1');
//   const h2 = document.createElement('h2');
//   h2.id = 'app-title';
//   h2.textContent = 'Shopping List';
//   header.replaceChild(h2, h1);
// }
// // replaceFirstElement();
// // console.log(document.querySelector('li:nth-child(2)').outerHTML);
// // replaceSecondItem();

// replaceChildHeading();

// function removeClearButton() {
//   document.querySelector('#clear').remove();
// }
// removeClearButton();

// function removeItem1(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);
//   ul.removeChild(li);
// }
// function removeItem2(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li')[itemNumber - 1];
//   ul.removeChild(li);
// }
// function removeItem3(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li');
//   li[itemNumber - 1].remove();
// }

// function removeItem4(itemNumber) {
//   document.querySelectorAll('li')[itemNumber - 1].remove();
// }

// function removeFirstItem() {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector('li:first-child');
//   ul.removeChild(li);
// }
// removeFirstItem();

// removeItem1(2)
// removeItem2(2);
// removeItem3(3);
// removeItem4(2);

// Adding and removing styles & classes

// const text = document.querySelector('p');
// const itemList = document.querySelector('.item-list');
// const items = itemList.querySelectorAll('li');

// function run() {
// change classes
//   console.log(itemList.className);
//   text.className = 'card red';
//   text.classList.add('red');
// text.classList.toggle('hidden');
//   text.classList.replace('card', 'red');

// itemList.style.lineHeight = '2';
// }

// document.querySelector('button').onclick = run;

// const clearBtn = document.querySelector('#clear');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//remove all itesm method1
// itemList.innerHTML = '';
//method2
// items.forEach((item) => item.remove());
// alert('You clicked it.');
// console.log('Got it');

// method3
//   while (itemList.firstChild) {
//     itemList.firstChild.remove();
//   }
// }

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

// Mouse events

const logo = document.querySelector('img');

const onClick = () => {
  alert('You clicked it.');
};

const onRightClick = () => {
  console.log('Right clicked');
};
const onMouseDown = () => {
  console.log('Mouse Down');
};
const onMouseUp = () => {
  console.log('Mouse Up');
};
const onMouseEnter = () => {
  console.log('Mouse Enter');
};
const onMouseMove = () => {
  console.log('Mouse Move');
};
const onMouseLeave = () => {
  console.log('Mouse Leave');
};
const onMouseOut = () => {
  console.log('Mouse Out');
};
const onMouseWheel = () => {
  console.log('Mouse Wheel event');
};
const onMouseOver = () => {
  console.log('Mouse Over event');
};
const onMouseDrag = (e) => {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
};
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'orange') {
    document.body.style.backgroundColor = 'orange';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('click', onClick);

// logo.addEventListener('contextmenu', onRightClick); // Right click

// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('mouseenter', onMouseEnter);
// logo.addEventListener('mousemove', onMouseMove);
// logo.addEventListener('mouseleave', onMouseLeave);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('drag', onMouseDrag);
// logo.addEventListener('dragstart', onMouseDragstart);

// logo.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('window' + e.clientX);
//   console.log('window' + e.clientY);
//   console.log('page' + e.pageX);
//   console.log('page' + e.pageY);
//   console.log('screen' + e.screenX);
//   console.log('screen' + e.screenY);
// });

// const itemInput = document.getElementById('item-input');
// console.log(itemInput.outerHTML);

// function insertElement(value) {
//   const filter = document.querySelector('.filter');
//   const h1 = document.createElement('h1');
//   h1.className = 'new-content';
//   h1.textContent = value;
//   filter.insertAdjacentElement('beforebegin', h1);
// }

// const onKeyPress = (e) => {
//   console.log('keypress');
// };
// const onKeyUp = (e) => {
//   e.preventDefault();
//   insertElement(e.target.value);
// };
// const pressedKeys = [];
// const onKeyDown = (e) => {
//   pressedKeys.push(e.key);
//   const newString = pressedKeys.join('');
//   document.querySelector('h1').textContent = `You pressed ${newString}`;
// };

// const newItem = document.querySelectorAll('.new-content');

// function clearText(newItem) {
//   newItem.forEach((item) => item.remove());
//   console.log('cleared');
//   console.log(newItem);
// }
// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('contextmenu', clearText(newItem));

// itemInput.addEventListener('keydown', onKeyDown);

const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'checked' : 'unchecked';
}

function onFocus() {
  console.log('Input is focused.');
}

function onBlur() {
  itemInput.style.backgroundColor = 'orange';
  document.getElementById('item-input').placeholder = 'new info';
}
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

const list = document.querySelector('ul');

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
list.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'black';
  }
});
