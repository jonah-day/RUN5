

let blobs = document.querySelectorAll('.blob');

document.addEventListener('mousemove', (event) => {
  requestAnimationFrame(() => {
    blobs.forEach(blob => {
      blob.animate({
          left: event.clientX + 'px',
          top: event.clientY + 'px',
      },
      {
      duration: 1000,
      fill: 'forwards',
      })
    })
    blobs.forEach(blob => {
        blob.style.transform = 'translate(-50%, -50%)';
    })
  });
});