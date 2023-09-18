const container = document.querySelector(".container");
const numCells = document.getElementById("grid-dim");
const btnStart = document.querySelector("button");


//let message;
let className;

reset();


btnStart.addEventListener('click', function(){
  reset();
  className = selectValue(numCells.value);
  letsPlay(className);
});





function reset(){
  container.innerHTML = "";
}


function selectValue(numCellsF){
  let classNameF;
  
  

  switch (numCellsF){
    case "100":
      classNameF = "dieci";
      break;
    case "81":
      
      classNameF = "nove";
      break;
    case "49":
      classNameF = "sette";
      break;
    
    default:
      alert("Seleziona un valore valido");
      classNameF = null;
  }
  
  return classNameF;
}


function letsPlay(flag) {
  
  const max = parseInt(numCells.value);
  if(flag != null){
    for (let i = 0; i< max; i++ ){
      const square = document.createElement("div");
      square.classList.add("square", className);
      container.append(square);
    }
  }
}