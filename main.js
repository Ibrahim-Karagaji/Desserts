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
  if (waffle_numberOfOrders.textContent == "0")
    waffle_numberOfOrders.textContent = "1";
  addingTheOrder(waffle, waffle_plas, waffle_numberOfOrders, waffle_muins);
};

waffle_plas.onclick = function (e) {
  e.stopPropagation();
  waffle_numberOfOrders.textContent =
    Number(waffle_numberOfOrders.textContent) + 1;
};

waffle_muins.onclick = function (e) {
  e.stopPropagation();
  waffle_numberOfOrders.textContent =
    Number(waffle_numberOfOrders.textContent) - 1;
  if (waffle_numberOfOrders.textContent == "0") backToStyleBeforeAdd(waffle);
};

let creme_brulee = document.getElementById("creme-brulee-addtion");

let creme_brulee_plas = document.createElement("span");
plasMark(creme_brulee_plas);

let creme_brulee_numberOfOrders = document.createElement("span");
numberOfTheOrder(creme_brulee_numberOfOrders);

let creme_brulee_muins = document.createElement("span");
muinsMark(creme_brulee_muins);

creme_brulee.onclick = function () {
  if (creme_brulee_numberOfOrders.textContent == "0")
    creme_brulee_numberOfOrders.textContent = "1";
  addingTheOrder(
    creme_brulee,
    creme_brulee_plas,
    creme_brulee_numberOfOrders,
    creme_brulee_muins
  );
};

creme_brulee_plas.onclick = function (e) {
  e.stopPropagation();
  creme_brulee_numberOfOrders.textContent =
    Number(creme_brulee_numberOfOrders.textContent) + 1;
};

creme_brulee_muins.onclick = function (e) {
  e.stopPropagation();
  creme_brulee_numberOfOrders.textContent =
    Number(creme_brulee_numberOfOrders.textContent) - 1;
  if (creme_brulee_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(creme_brulee);
};

let macaron = document.getElementById("macaron-addtion");

let macaron_plas = document.createElement("span");
plasMark(macaron_plas);

let macaron_numberOfOrders = document.createElement("span");
numberOfTheOrder(macaron_numberOfOrders);

let macaron_muins = document.createElement("span");
muinsMark(macaron_muins);

macaron.onclick = function () {
  if (macaron_numberOfOrders.textContent == "0")
    macaron_numberOfOrders.textContent = "1";
  addingTheOrder(macaron, macaron_plas, macaron_numberOfOrders, macaron_muins);
};

macaron_plas.onclick = function (e) {
  e.stopPropagation();
  macaron_numberOfOrders.textContent =
    Number(macaron_numberOfOrders.textContent) + 1;
};

macaron_muins.onclick = function (e) {
  e.stopPropagation();
  macaron_numberOfOrders.textContent =
    Number(macaron_numberOfOrders.textContent) - 1;
  if (macaron_numberOfOrders.textContent == "0") backToStyleBeforeAdd(macaron);
};

let tiramisu = document.getElementById("addtion-tiramisu");

let tiramisu_plas = document.createElement("span");
plasMark(tiramisu_plas);

let tiramisu_numberOfOrders = document.createElement("span");
numberOfTheOrder(tiramisu_numberOfOrders);

let tiramisu_muins = document.createElement("span");
muinsMark(tiramisu_muins);

tiramisu.onclick = function () {
  if (tiramisu_numberOfOrders.textContent == "0")
    tiramisu_numberOfOrders.textContent = "1";
  addingTheOrder(
    tiramisu,
    tiramisu_plas,
    tiramisu_numberOfOrders,
    tiramisu_muins
  );
};

tiramisu_plas.onclick = function (e) {
  e.stopPropagation();
  tiramisu_numberOfOrders.textContent =
    Number(tiramisu_numberOfOrders.textContent) + 1;
};

tiramisu_muins.onclick = function (e) {
  e.stopPropagation();
  tiramisu_numberOfOrders.textContent =
    Number(tiramisu_numberOfOrders.textContent) - 1;
  if (tiramisu_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(tiramisu);
};

let baklava = document.getElementById("addtion-baklava");

let baklava_plas = document.createElement("span");
plasMark(baklava_plas);

let baklava_numberOfOrders = document.createElement("span");
numberOfTheOrder(baklava_numberOfOrders);

let baklava_muins = document.createElement("span");
muinsMark(baklava_muins);

baklava.onclick = function () {
  if (baklava_numberOfOrders.textContent == "0")
    baklava_numberOfOrders.textContent = "1";
  addingTheOrder(baklava, baklava_plas, baklava_numberOfOrders, baklava_muins);
};

baklava_plas.onclick = function (e) {
  e.stopPropagation();
  baklava_numberOfOrders.textContent =
    Number(baklava_numberOfOrders.textContent) + 1;
};

baklava_muins.onclick = function (e) {
  e.stopPropagation();
  baklava_numberOfOrders.textContent =
    Number(baklava_numberOfOrders.textContent) - 1;
  if (baklava_numberOfOrders.textContent == "0") backToStyleBeforeAdd(baklava);
};

let meringue = document.getElementById("addtion-meringue");

let meringue_plas = document.createElement("span");
plasMark(meringue_plas);

let meringue_numberOfOrders = document.createElement("span");
numberOfTheOrder(meringue_numberOfOrders);

let meringue_muins = document.createElement("span");
muinsMark(meringue_muins);

meringue.onclick = function () {
  if (meringue_numberOfOrders.textContent == "0")
    meringue_numberOfOrders.textContent = "1";
  addingTheOrder(
    meringue,
    meringue_plas,
    meringue_numberOfOrders,
    meringue_muins
  );
};

meringue_plas.onclick = function (e) {
  e.stopPropagation();
  meringue_numberOfOrders.textContent =
    Number(meringue_numberOfOrders.textContent) + 1;
};

meringue_muins.onclick = function (e) {
  e.stopPropagation();
  meringue_numberOfOrders.textContent =
    Number(meringue_numberOfOrders.textContent) - 1;
  if (meringue_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(meringue);
};

let cake = document.getElementById("addtion-cake");

let cake_plas = document.createElement("span");
plasMark(cake_plas);

let cake_numberOfOrders = document.createElement("span");
numberOfTheOrder(cake_numberOfOrders);

let cake_muins = document.createElement("span");
muinsMark(cake_muins);

cake.onclick = function () {
  if (cake_numberOfOrders.textContent == "0")
    cake_numberOfOrders.textContent = "1";
  addingTheOrder(cake, cake_plas, cake_numberOfOrders, cake_muins);
};

cake_plas.onclick = function (e) {
  e.stopPropagation();
  cake_numberOfOrders.textContent = Number(cake_numberOfOrders.textContent) + 1;
};

cake_muins.onclick = function (e) {
  e.stopPropagation();
  cake_numberOfOrders.textContent = Number(cake_numberOfOrders.textContent) - 1;
  if (cake_numberOfOrders.textContent == "0") backToStyleBeforeAdd(cake);
};

let brownie = document.getElementById("addtion-brownie");

let brownie_plas = document.createElement("span");
plasMark(brownie_plas);

let brownie_numberOfOrders = document.createElement("span");
numberOfTheOrder(brownie_numberOfOrders);

let brownie_muins = document.createElement("span");
muinsMark(brownie_muins);

brownie.onclick = function () {
  if (brownie_numberOfOrders.textContent == "0")
    brownie_numberOfOrders.textContent = "1";
  addingTheOrder(brownie, brownie_plas, brownie_numberOfOrders, brownie_muins);
};

brownie_plas.onclick = function (e) {
  e.stopPropagation();
  brownie_numberOfOrders.textContent =
    Number(brownie_numberOfOrders.textContent) + 1;
};

brownie_muins.onclick = function (e) {
  e.stopPropagation();
  brownie_numberOfOrders.textContent =
    Number(brownie_numberOfOrders.textContent) - 1;
  if (brownie_numberOfOrders.textContent == "0") backToStyleBeforeAdd(brownie);
};

let panna_cotta = document.getElementById("addtion-panna-cotta");

let panna_cotta_plas = document.createElement("span");
plasMark(panna_cotta_plas);

let panna_cotta_numberOfOrders = document.createElement("span");
numberOfTheOrder(panna_cotta_numberOfOrders);

let panna_cotta_muins = document.createElement("span");
muinsMark(panna_cotta_muins);

panna_cotta.onclick = function () {
  if (panna_cotta_numberOfOrders.textContent == "0")
    panna_cotta_numberOfOrders.textContent = "1";
  addingTheOrder(
    panna_cotta,
    panna_cotta_plas,
    panna_cotta_numberOfOrders,
    panna_cotta_muins
  );
};

panna_cotta_plas.onclick = function (e) {
  e.stopPropagation();
  panna_cotta_numberOfOrders.textContent =
    Number(panna_cotta_numberOfOrders.textContent) + 1;
};

panna_cotta_muins.onclick = function (e) {
  e.stopPropagation();
  panna_cotta_numberOfOrders.textContent =
    Number(panna_cotta_numberOfOrders.textContent) - 1;
  if (panna_cotta_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(panna_cotta);
};
