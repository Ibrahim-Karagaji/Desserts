function styleAfterAdd(i) {
  i.style.backgroundColor = "purple";
  i.style.display = "flex";
  i.style.justifyContent = "space-between";
  i.style.padding = "4px";
  i.style.border = "1px solid white";
  i.style.width = "85px";
  i.style.transition = "0s";
}

function backToStyleBeforeAdd(i) {
  i.innerHTML = "";
  i.style.display = "flex";
  i.style.alignItems = "center";
  i.style.backgroundColor = "white";
  i.style.border = "1px solid purple";
  i.style.width = "96px";
  let font = document.createElement("i");
  font.style.color = "purple";
  font.className = "fa-solid fa-cart-plus";
  i.appendChild(font);
  let p = document.createElement("p");
  p.style.color = "purple";
  let textP = document.createTextNode("add To Cart");
  p.appendChild(textP);
  i.appendChild(p);
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
  let Number = document.createTextNode("1");
  i.style.color = "white";
  i.appendChild(Number);
}

function addingTheOrder(i, p, n, m) {
  i.innerHTML = "";
  styleAfterAdd(i);
  i.appendChild(p);
  i.appendChild(n);
  i.appendChild(m);
}

let waffle = document.getElementById("waffle-addtion");

let waffle_plas = document.createElement("span");
plasMark(waffle_plas);

let waffle_numberOfOrders = document.createElement("span");
numberOfTheOrder(waffle_numberOfOrders);

let waffle_muins = document.createElement("span");
muinsMark(waffle_muins);

waffle.onclick = function () {
  if (waffle_numberOfOrders.textContent == "0") waffle_numberOfOrders.textContent = "1";
  addingTheOrder(waffle, waffle_plas, waffle_numberOfOrders, waffle_muins);
};

waffle_plas.onclick = function (e) {
  e.stopPropagation();
  waffle_numberOfOrders.textContent = Number(waffle_numberOfOrders.textContent) + 1;
};

waffle_muins.onclick = function (e) {
  e.stopPropagation();
  waffle_numberOfOrders.textContent = Number(waffle_numberOfOrders.textContent) - 1;
  if (waffle_numberOfOrders.textContent == "0") backToStyleBeforeAdd(waffle);
};