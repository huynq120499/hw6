const button = document.querySelector('#myButton');
const animation = document.querySelector('#myAnimation');

button.addEventListener('click', () => {
  animation.style.display = 'block';
  animation.classList.add('animate');
  setTimeout(() => {
    animation.style.display = 'none';
    animation.classList.remove('animate');
  }, 1000);
});
