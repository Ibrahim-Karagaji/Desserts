function styleAfterAdd(i) {
  i.style.backgroundColor = "purple";
  i.style.display = "flex";
  i.style.justifyContent = "space-between";
  i.style.padding = "5px";
  i.style.border = "1px solid white";
  i.style.width = "85px";
  i.style.transition = "0s";
}

function plasMark(i) {
  let plas = document.createTextNode("+");
  i.style.color = "white";
  i.appendChild(plas);
}

function muinsMark(i) {
  let muins = document.createTextNode("-");
  i.style.color = "white";
  i.appendChild(muins);
}

function numberOfTheOrder(i) {
  let Number = document.createTextNode("0");
  i.style.color = "white";
  i.appendChild(Number);
}
