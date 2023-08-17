const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
let qrContent = document.getElementById('qrText');
console.log(qrContent.value);

function generateQR() {
  if (qrContent.value.length > 0) {
    qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrContent.value}`;
    imgBox.classList.add('show-img');
    qrContent.value = '';
  } else {
    qrContent.classList.add('error');
    qrContent.placeholder = 'Please enter Text or URL';
    setTimeout(() => {
      qrContent.classList.remove('error');
      qrContent.placeholder = 'Text or URL';
    }, 1000);
  }
}

const btn = document.getElementById('btn');
btn.addEventListener('click', generateQR);
