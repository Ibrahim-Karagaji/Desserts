let Brownie_add = adding[7];

let Brownie_Plus = document.createElement("i");
plus(Brownie_Plus);

let Brownie_ordersCounter = document.createElement("p");
let Brownie_ordersCounterText = document.createTextNode("1");
Brownie_ordersCounter.appendChild(Brownie_ordersCounterText);

let Brownie_Minus = document.createElement("i");
minus(Brownie_Minus);

Brownie_add.onclick = function () {
  Brownie_add.innerHTML = "";
  afterAddToCartStyle(Brownie_add);
  Brownie_add.appendChild(Brownie_Plus);
  Brownie_add.appendChild(Brownie_ordersCounter);
  Brownie_add.appendChild(Brownie_Minus);
  IncreaseTotal(totle);
};

Brownie_ordersCounter.onclick = function (e) {
  e.stopPropagation();
};

Brownie_Plus.onclick = function (e) {
  e.stopPropagation();
  Brownie_ordersCounter.textContent =
    Number(Brownie_ordersCounter.textContent) + 1;
  IncreaseTotal(totle);
};

Brownie_Minus.onclick = function (e) {
  e.stopPropagation();
  Brownie_ordersCounter.textContent =
    Number(Brownie_ordersCounter.textContent) - 1;
  if (Brownie_ordersCounter.textContent == 0) {
    mainStyle(Brownie_add);
    Brownie_ordersCounter.textContent =
      Number(Brownie_ordersCounter.textContent) + 1;
  }
  ReduceTotal(totle);
};
