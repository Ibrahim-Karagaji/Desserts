let waffie_add = adding[0];

let waffie_Plus = document.createElement("i");
plus(waffie_Plus);

let waffie_ordersCounter = document.createElement("p");
let waffie_ordersCounterText = document.createTextNode("1");
waffie_ordersCounter.appendChild(waffie_ordersCounterText);

let waffie_Minus = document.createElement("i");
minus(waffie_Minus);

waffie_add.onclick = function () {
  waffie_add.innerHTML = "";
  afterAddToCartStyle(waffie_add);
  waffie_add.appendChild(waffie_Plus);
  waffie_add.appendChild(waffie_ordersCounter);
  waffie_add.appendChild(waffie_Minus);
};

waffie_Plus.onclick = function (e) {
  e.stopPropagation();
  waffie_ordersCounter.textContent =
    Number(waffie_ordersCounter.textContent) + 1;
};

waffie_Minus.onclick = function (e) {
  e.stopPropagation();
  waffie_ordersCounter.textContent =
    Number(waffie_ordersCounter.textContent) - 1;
  if (waffie_ordersCounter.textContent == 0) {
    mainStyle(waffie_add);
    waffie_ordersCounter.textContent =
      Number(waffie_ordersCounter.textContent) + 1;
  }
};
