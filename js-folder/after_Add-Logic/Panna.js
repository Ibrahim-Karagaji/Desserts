let Panna_add = adding[8];

let Panna_Plus = document.createElement("i");
plus(Panna_Plus);

let Panna_ordersCounter = document.createElement("p");
let Panna_ordersCounterText = document.createTextNode("1");
Panna_ordersCounter.appendChild(Panna_ordersCounterText);

let Panna_Minus = document.createElement("i");
minus(Panna_Minus);

Panna_add.onclick = function () {
  Panna_add.innerHTML = "";
  afterAddToCartStyle(Panna_add);
  Panna_add.appendChild(Panna_Plus);
  Panna_add.appendChild(Panna_ordersCounter);
  Panna_add.appendChild(Panna_Minus);
};

Panna_Plus.onclick = function (e) {
  e.stopPropagation();
  Panna_ordersCounter.textContent =
    Number(Panna_ordersCounter.textContent) + 1;
};

Panna_Minus.onclick = function (e) {
  e.stopPropagation();
  Panna_ordersCounter.textContent =
    Number(Panna_ordersCounter.textContent) - 1;
  if (Panna_ordersCounter.textContent == 0) {
    mainStyle(Panna_add);
    Panna_ordersCounter.textContent =
      Number(Panna_ordersCounter.textContent) + 1;
  }
};
