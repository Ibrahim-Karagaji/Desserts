function styleAfterAdd(i) {
  i.style.backgroundColor = "purple";
  i.style.display = "flex";
  i.style.justifyContent = "justify-content: space-between";
  i.style.padding = "5px";
}

function plasMark(i) {
  let plas = document.createTextNode("+");
  i.appendChild(plas);
}

function muinsMark(i) {
  let muins = document.createTextNode("-");
  i.appendChild(muins);
}

function addingTheOrder(i) {
  i.innerHTML = "";
  styleAfterAdd(i);
  let plas = document.createElement("span");
  plasMark(plas);
  let muins = document.createElement("span");
  muinsMark(muins);
  i.appendChild(plas);
  i.appendChild(muins);
}

let i = document.getElementById("waffle-addtion");

i.onclick = function () {
  addingTheOrder(i);
};
