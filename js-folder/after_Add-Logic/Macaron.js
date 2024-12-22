let Macaron_add = adding[2];

let Macaron_Plus = document.createElement("i");
plus(Macaron_Plus);

let Macaron_ordersCounter = document.createElement("p");
let Macaron_ordersCounterText = document.createTextNode("1");
Macaron_ordersCounter.appendChild(Macaron_ordersCounterText);

let Macaron_Minus = document.createElement("i");
minus(Macaron_Minus);

Macaron_add.onclick = function () {
  Macaron_add.innerHTML = "";
  afterAddToCartStyle(Macaron_add);
  Macaron_add.appendChild(Macaron_Plus);
  Macaron_add.appendChild(Macaron_ordersCounter);
  Macaron_add.appendChild(Macaron_Minus);
  IncreaseTotal(totle);
  preparStyleAfterAddToCart(preparing);
};

Macaron_ordersCounter.onclick = function (e) {
  e.stopPropagation();
};

Macaron_Plus.onclick = function (e) {
  e.stopPropagation();
  Macaron_ordersCounter.textContent =
    Number(Macaron_ordersCounter.textContent) + 1;
  IncreaseTotal(totle);
};

Macaron_Minus.onclick = function (e) {
  e.stopPropagation();
  Macaron_ordersCounter.textContent =
    Number(Macaron_ordersCounter.textContent) - 1;
  if (Macaron_ordersCounter.textContent == 0) {
    mainStyle(Macaron_add);
    Macaron_ordersCounter.textContent =
      Number(Macaron_ordersCounter.textContent) + 1;
  }
  ReduceTotal(totle);
};
