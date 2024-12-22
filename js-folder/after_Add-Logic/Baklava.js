let Baklava_add = adding[4];

let Baklava_Plus = document.createElement("i");
plus(Baklava_Plus);

let Baklava_ordersCounter = document.createElement("p");
let Baklava_ordersCounterText = document.createTextNode("1");
Baklava_ordersCounter.appendChild(Baklava_ordersCounterText);

let Baklava_Minus = document.createElement("i");
minus(Baklava_Minus);

Baklava_add.onclick = function () {
    Baklava_add.innerHTML = "";
  afterAddToCartStyle(Baklava_add);
  Baklava_add.appendChild(Baklava_Plus);
  Baklava_add.appendChild(Baklava_ordersCounter);
  Baklava_add.appendChild(Baklava_Minus);
};

Baklava_ordersCounter.onclick = function (e) {
  e.stopPropagation();
};

Baklava_Plus.onclick = function (e) {
  e.stopPropagation();
  Baklava_ordersCounter.textContent =
    Number(Baklava_ordersCounter.textContent) + 1;
 };

Baklava_Minus.onclick = function (e) {
  e.stopPropagation();
  Baklava_ordersCounter.textContent =
    Number(Baklava_ordersCounter.textContent) - 1;
  if (Baklava_ordersCounter.textContent == 0) {
    mainStyle(Baklava_add);
    Baklava_ordersCounter.textContent =
      Number(Baklava_ordersCounter.textContent) + 1;
  }
 };
