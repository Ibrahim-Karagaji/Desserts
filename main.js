function orderTotle(i) {
  return "x" + i;
}

function getPriceOfOrder(i) {
  let price = document.getElementById(i);
  return price.textContent.substring(1);
}

function getOrderName(i) {
  let named = document.getElementById(i);
  return named.textContent;
}

function addItemParentStyle(i) {
  i.style.display = "flex";
  i.style.borderBottom = "1px solid rgb(238 238 238 / 54%)";
  i.style.borderRadius = "10px";
  i.style.backgroundColor = "#eee";
  i.style.padding = "5px 10px";
  i.style.width = "100%";
  i.style.transition = "2s";
  i.style.justifyContent = "space-between";
}

function addItemsFristChildChildren(i, price, name, totle) {
  i.style.display = "grid";
  i.style.gap = "3px";
  let orderName = document.createElement("h3");
  orderName.style.color = "purple";
  let orderNameValue = document.createTextNode(getOrderName(name));
  orderName.appendChild(orderNameValue);
  let priceOrder = document.createElement("p");
  let priceOrderValue = document.createTextNode(getPriceOfOrder(price));
  priceOrder.appendChild(priceOrderValue);
  let t = document.createElement("span");
  t.style.color = "purple";
  let tvalue = document.createTextNode(orderTotle(totle));
  t.appendChild(tvalue);
  i.appendChild(orderName);
  i.appendChild(priceOrder);
  i.appendChild(t);
}

function addItem(i, price, name, totle) {
  if (i.children[1] instanceof Image) {
    i.removeChild(i.children[1]);
    i.removeChild(i.children[1]);
  }
  let parent = document.createElement("div");
  addItemParentStyle(parent);
  let firstChold = document.createElement("div");
  addItemsFristChildChildren(firstChold, price, name, totle);
  parent.appendChild(firstChold);
  i.appendChild(parent);
}

function styleAfterAdd(i) {
  i.style.backgroundColor = "purple";
  i.style.display = "flex";
  i.style.justifyContent = "space-between";
  i.style.padding = "4px";
  i.style.gap = "0px";
  i.style.outline = "1px solid purple";
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
  i.style.outline = "1px solid white";
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
  i.style.flex = "1";
  i.appendChild(plas);
}

function muinsMark(i) {
  let muins = document.createTextNode("-");
  i.style.flex = "1";
  i.style.textAlign = "end";
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

function increasekTheTotle(i) {
  i.textContent = Number(i.textContent) + 1;
}

function ShirnkTheTotle(i) {
  i.textContent = Number(i.textContent) - 1;
}

let prepare_box = document.getElementById("prepare-order");

let waffle = document.getElementById("waffle-addtion");
let ordersTotle = 0;

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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
  addItem(prepare_box, "waffle-price", "waffle-named", ordersTotle);
};

waffle_plas.onclick = function (e) {
  e.stopPropagation();
  waffle_numberOfOrders.textContent =
    Number(waffle_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

waffle_muins.onclick = function (e) {
  e.stopPropagation();
  waffle_numberOfOrders.textContent =
    Number(waffle_numberOfOrders.textContent) - 1;
  if (waffle_numberOfOrders.textContent == "0") backToStyleBeforeAdd(waffle);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

creme_brulee_plas.onclick = function (e) {
  e.stopPropagation();
  creme_brulee_numberOfOrders.textContent =
    Number(creme_brulee_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

creme_brulee_muins.onclick = function (e) {
  e.stopPropagation();
  creme_brulee_numberOfOrders.textContent =
    Number(creme_brulee_numberOfOrders.textContent) - 1;
  if (creme_brulee_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(creme_brulee);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

macaron_plas.onclick = function (e) {
  e.stopPropagation();
  macaron_numberOfOrders.textContent =
    Number(macaron_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

macaron_muins.onclick = function (e) {
  e.stopPropagation();
  macaron_numberOfOrders.textContent =
    Number(macaron_numberOfOrders.textContent) - 1;
  if (macaron_numberOfOrders.textContent == "0") backToStyleBeforeAdd(macaron);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

tiramisu_plas.onclick = function (e) {
  e.stopPropagation();
  tiramisu_numberOfOrders.textContent =
    Number(tiramisu_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

tiramisu_muins.onclick = function (e) {
  e.stopPropagation();
  tiramisu_numberOfOrders.textContent =
    Number(tiramisu_numberOfOrders.textContent) - 1;
  if (tiramisu_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(tiramisu);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

baklava_plas.onclick = function (e) {
  e.stopPropagation();
  baklava_numberOfOrders.textContent =
    Number(baklava_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

baklava_muins.onclick = function (e) {
  e.stopPropagation();
  baklava_numberOfOrders.textContent =
    Number(baklava_numberOfOrders.textContent) - 1;
  if (baklava_numberOfOrders.textContent == "0") backToStyleBeforeAdd(baklava);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

meringue_plas.onclick = function (e) {
  e.stopPropagation();
  meringue_numberOfOrders.textContent =
    Number(meringue_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

meringue_muins.onclick = function (e) {
  e.stopPropagation();
  meringue_numberOfOrders.textContent =
    Number(meringue_numberOfOrders.textContent) - 1;
  if (meringue_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(meringue);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

cake_plas.onclick = function (e) {
  e.stopPropagation();
  cake_numberOfOrders.textContent = Number(cake_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

cake_muins.onclick = function (e) {
  e.stopPropagation();
  cake_numberOfOrders.textContent = Number(cake_numberOfOrders.textContent) - 1;
  if (cake_numberOfOrders.textContent == "0") backToStyleBeforeAdd(cake);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

brownie_plas.onclick = function (e) {
  e.stopPropagation();
  brownie_numberOfOrders.textContent =
    Number(brownie_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

brownie_muins.onclick = function (e) {
  e.stopPropagation();
  brownie_numberOfOrders.textContent =
    Number(brownie_numberOfOrders.textContent) - 1;
  if (brownie_numberOfOrders.textContent == "0") backToStyleBeforeAdd(brownie);
  ShirnkTheTotle(totleOfOrders);
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
  if (totleOfOrders.textContent == "0") increasekTheTotle(totleOfOrders);
  else totleOfOrders.textContent = Number(totleOfOrders.textContent) + 1;
};

panna_cotta_plas.onclick = function (e) {
  e.stopPropagation();
  panna_cotta_numberOfOrders.textContent =
    Number(panna_cotta_numberOfOrders.textContent) + 1;
  increasekTheTotle(totleOfOrders);
};

panna_cotta_muins.onclick = function (e) {
  e.stopPropagation();
  panna_cotta_numberOfOrders.textContent =
    Number(panna_cotta_numberOfOrders.textContent) - 1;
  if (panna_cotta_numberOfOrders.textContent == "0")
    backToStyleBeforeAdd(panna_cotta);
  ShirnkTheTotle(totleOfOrders);
};
