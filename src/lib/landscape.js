

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

function landscape(){

  let scrollDist = document.documentElement.scrollTop;

  for (let each in layersObj){
    let offSet = each;
    let newPos = offSet * scrollDist;

    layersObj[each].style.marginTop = `-${newPos}px`;
  }
}

window.addEventListener("scroll", landscape);