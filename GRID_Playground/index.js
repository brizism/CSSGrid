const blueSquare = document.getElementById('element');
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const animate = rootStyles.getPropertyValue('--square-animation');
const animateHeadline = rootStyles.getPropertyValue('--animation-headline');
const h1 = [...document.getElementsByTagName('h1')];
console.log(animateHeadline);
// blueSquare.addEventListener('click', function() {
//   this.style = animate;
// });

window.onload = () => {
  h1.forEach(h1 => h1.style.animation = animateHeadline);
}
