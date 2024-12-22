let Pie_add = adding[5];

let Pie_Plus = document.createElement("i");
plus(Pie_Plus);

let Pie_ordersCounter = document.createElement("p");
let Pie_ordersCounterText = document.createTextNode("1");
Pie_ordersCounter.appendChild(Pie_ordersCounterText);

let Pie_Minus = document.createElement("i");
minus(Pie_Minus);

Pie_add.onclick = function () {
  Pie_add.innerHTML = "";
  afterAddToCartStyle(Pie_add);
  Pie_add.appendChild(Pie_Plus);
  Pie_add.appendChild(Pie_ordersCounter);
  Pie_add.appendChild(Pie_Minus);
};

Pie_ordersCounter.onclick = function (e) {
  e.stopPropagation();
};

Pie_Plus.onclick = function (e) {
  e.stopPropagation();
  Pie_ordersCounter.textContent =
    Number(Pie_ordersCounter.textContent) + 1;
 };

Pie_Minus.onclick = function (e) {
  e.stopPropagation();
  Pie_ordersCounter.textContent =
    Number(Pie_ordersCounter.textContent) - 1;
  if (Pie_ordersCounter.textContent == 0) {
    mainStyle(Pie_add);
    Pie_ordersCounter.textContent =
      Number(Pie_ordersCounter.textContent) + 1;
  }
 };
