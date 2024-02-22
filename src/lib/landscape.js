document.addEventListener('astro:page-load', () => {

let layerArr = document.querySelectorAll(".landscape");
let layersObj = {};

layerArr.forEach((element) => {
    let elementId = element.id;
    layersObj[elementId] = element;
});

// for (let each of layerArr){
//   let elementId = each.id;
//   layersObj[each] = elementId;
// }

let lastUpdate = 0;

function landscape(){

  let scrollDist = document.documentElement.scrollTop;

  const now = performance.now();

  if (now - lastUpdate > 20) {
    requestAnimationFrame(() => {
    for (let each in layersObj){
      let offSet = each;
      let newPos = offSet * scrollDist;
    
      layersObj[each].style.marginTop = `-${newPos}px`;
    }
  });
  lastUpdate = now;
  }
}

window.addEventListener("scroll", landscape);

});