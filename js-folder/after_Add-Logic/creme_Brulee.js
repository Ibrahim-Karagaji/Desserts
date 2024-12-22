let creme_Brulee_add = adding[1];

let creme_Brulee_Plus = document.createElement("i");
plus(creme_Brulee_Plus);

let creme_Brulee_ordersCounter = document.createElement("p");
let creme_Brulee_ordersCounterText = document.createTextNode("1");
creme_Brulee_ordersCounter.appendChild(creme_Brulee_ordersCounterText);

let creme_Brulee_Minus = document.createElement("i");
minus(creme_Brulee_Minus);

creme_Brulee_add.onclick = function () {
  creme_Brulee_add.innerHTML = "";
  afterAddToCartStyle(creme_Brulee_add);
  creme_Brulee_add.appendChild(creme_Brulee_Plus);
  creme_Brulee_add.appendChild(creme_Brulee_ordersCounter);
  creme_Brulee_add.appendChild(creme_Brulee_Minus);
};

creme_Brulee_ordersCounter.onclick = function (e) {
  e.stopPropagation();
};

creme_Brulee_Plus.onclick = function (e) {
  e.stopPropagation();
  creme_Brulee_ordersCounter.textContent = Number(creme_Brulee_ordersCounter.textContent) + 1;
 };

creme_Brulee_Minus.onclick = function (e) {
  e.stopPropagation();
  creme_Brulee_ordersCounter.textContent = Number(creme_Brulee_ordersCounter.textContent) - 1;
  if (creme_Brulee_ordersCounter.textContent == 0) {
    mainStyle(creme_Brulee_add);
    creme_Brulee_ordersCounter.textContent = Number(creme_Brulee_ordersCounter.textContent) + 1;
  }
 };
