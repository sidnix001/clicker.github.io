document.addEventListener('mousedown', (event) => {
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
