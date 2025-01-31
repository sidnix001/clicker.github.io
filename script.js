// const varient = prompt('Режимы:\n по нажатию(click)\n преследовать(mousemove)', 'click')
const gurgling = new Audio();
gurgling.src = 'audio/gurgling.mp3';
document.addEventListener('mousedown', (event) => {
   gurgling.play();
   let circle = document.createElement('div');
   circle.setAttribute('id', 'circle')
   circle.style.left = `${event.clientX}px`;
   circle.style.top = `${event.clientY}px`;
   setTimeout(() => {
      circle.style.transform = 'scale(5)';
      circle.style.opacity = 0;
   }, 0);
   document.body.append(circle);
   setTimeout(() => {
      circle.remove(circle)
   }, 1000);
});