let Cake_add = adding[6];

let Cake_Plus = document.createElement("i");
plus(Cake_Plus);

let Cake_ordersCounter = document.createElement("p");
let Cake_ordersCounterText = document.createTextNode("1");
Cake_ordersCounter.appendChild(Cake_ordersCounterText);

let Cake_Minus = document.createElement("i");
minus(Cake_Minus);

Cake_add.onclick = function () {
  Cake_add.innerHTML = "";
  afterAddToCartStyle(Cake_add);
  Cake_add.appendChild(Cake_Plus);
  Cake_add.appendChild(Cake_ordersCounter);
  Cake_add.appendChild(Cake_Minus);
};

Cake_Plus.onclick = function (e) {
  e.stopPropagation();
  Cake_ordersCounter.textContent =
    Number(Cake_ordersCounter.textContent) + 1;
};

Cake_Minus.onclick = function (e) {
  e.stopPropagation();
  Cake_ordersCounter.textContent =
    Number(Cake_ordersCounter.textContent) - 1;
  if (Cake_ordersCounter.textContent == 0) {
    mainStyle(Cake_add);
    Cake_ordersCounter.textContent =
      Number(Cake_ordersCounter.textContent) + 1;
  }
};
