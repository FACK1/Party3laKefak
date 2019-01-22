const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const main = document.getElementById('mainimg');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

btn1.addEventListener('click', () => {
  main.setAttribute('src', image1.getAttribute('src'));
  image1.setAttribute('src', main.getAttribute('src'));
});

btn2.addEventListener('click', () => {
  main.setAttribute('src', image2.getAttribute('src'));
  image2.setAttribute('src', main.getAttribute('src'));
});

btn3.addEventListener('click', () => {
  main.setAttribute('src', image3.getAttribute('src'));
  image3.setAttribute('src', main.getAttribute('src'));
});

btn4.addEventListener('click', () => {
  main.setAttribute('src', image4.getAttribute('src'));
  image4.setAttribute('src', main.getAttribute('src'));
});
