document.addEventListener('astro:page-load', () => {

let blobs = document.querySelectorAll('.blob');

blobs.forEach(blob => {
    blob.style.transform = 'translate(-50%, -50%)';
})

let lastUpdate = 0;

document.addEventListener('mousemove', (event) => {

  const now = performance.now();

  if (now - lastUpdate > 100) {
    requestAnimationFrame(() => {
      blobs.forEach(blob => {
        blob.animate({
            left: event.clientX + 'px',
            top: event.clientY + 'px',
        },
        {
        duration: 800,
        fill: 'forwards',
        })
      })
    });
    lastUpdate = now;
  }

});

});