let Tiramisu_add = adding[3];

let Tiramisu_Plus = document.createElement("i");
plus(Tiramisu_Plus);

let Tiramisu_ordersCounter = document.createElement("p");
let Tiramisu_ordersCounterText = document.createTextNode("1");
Tiramisu_ordersCounter.appendChild(Tiramisu_ordersCounterText);

let Tiramisu_Minus = document.createElement("i");
minus(Tiramisu_Minus);

Tiramisu_add.onclick = function () {
  Tiramisu_add.innerHTML = "";
  afterAddToCartStyle(Tiramisu_add);
  Tiramisu_add.appendChild(Tiramisu_Plus);
  Tiramisu_add.appendChild(Tiramisu_ordersCounter);
  Tiramisu_add.appendChild(Tiramisu_Minus);
};

Tiramisu_Plus.onclick = function (e) {
  e.stopPropagation();
  Tiramisu_ordersCounter.textContent =
    Number(Tiramisu_ordersCounter.textContent) + 1;
 };

Tiramisu_Minus.onclick = function (e) {
  e.stopPropagation();
  Tiramisu_ordersCounter.textContent =
    Number(Tiramisu_ordersCounter.textContent) - 1;
  if (Tiramisu_ordersCounter.textContent == 0) {
    mainStyle(Tiramisu_add);
    Tiramisu_ordersCounter.textContent =
      Number(Tiramisu_ordersCounter.textContent) + 1;
  }
 };
