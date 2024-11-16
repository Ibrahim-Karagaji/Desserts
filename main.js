let waffie = document.getElementById("waffie");

let waffieplas = document.createElement("span");
waffieplas.appendChild(document.createTextNode("+"));
waffieplas.style.padding = "5px";

let waffieNumberOfOrders = document.createElement("span");
waffieNumberOfOrders.appendChild(document.createTextNode(1));

let waffieminus = document.createElement("span");
waffieminus.appendChild(document.createTextNode("-"));
waffieminus.style.padding = "5px";

waffie.onclick = function () {
  waffie.innerHTML = "";
  waffie.style.fontSize = "13px";
  waffie.style.backgroundColor = "brown";
  waffie.style.color = "white";
  waffie.style.transition = "0s";
  waffie.style.width = "100px";
  waffie.style.display = "flex";
  waffie.style.justifyContent = "space-between";
  waffie.style.alignItems = "center";
  waffie.style.padding = "0px";
  waffie.appendChild(waffieplas);
  waffie.appendChild(waffieNumberOfOrders);
  waffie.appendChild(waffieminus);
};

waffieplas.onclick = function (e) {
  e.stopPropagation();
  waffieNumberOfOrders.textContent =
    Number(waffieNumberOfOrders.textContent) + 1;
};

waffieminus.onclick = function (e) {
  waffieNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (waffieNumberOfOrders.textContent == "0") {
    waffie.innerHTML = "";
    let waffiefont = document.createElement("i");
    waffiefont.className = "fa-solid fa-basket-shopping";
    let waffietextOfAdd = document.createElement("p");
    let waffiePtext = document.createTextNode("add to cart");
    waffietextOfAdd.appendChild(waffiePtext);
    waffietextOfAdd.style.color = "black";
    waffie.appendChild(waffiefont);
    waffie.appendChild(waffietextOfAdd);
    waffie.style.backgroundColor = "white";
    waffie.style.padding = "5px ";
    waffie.style.display = "flex";
    waffie.style.justifyContent = "space-around";
    waffie.style.alignItems = "center";
    waffieNumberOfOrders.textContent =
      Number(waffieNumberOfOrders.textContent) + 1;
  }
};

let creme_brulee = document.getElementById("creme_brulee");

let creme_bruleeplas = document.createElement("span");
creme_bruleeplas.appendChild(document.createTextNode("+"));
creme_bruleeplas.style.padding = "5px";

let creme_bruleeNumberOfOrders = document.createElement("span");
creme_bruleeNumberOfOrders.appendChild(document.createTextNode(1));

let creme_bruleeminus = document.createElement("span");
creme_bruleeminus.appendChild(document.createTextNode("-"));
creme_bruleeminus.style.padding = "5px";

creme_brulee.onclick = function () {
  creme_brulee.innerHTML = "";
  creme_brulee.style.fontSize = "13px";
  creme_brulee.style.backgroundColor = "brown";
  creme_brulee.style.color = "white";
  creme_brulee.style.transition = "0s";
  creme_brulee.style.width = "100px";
  creme_brulee.style.display = "flex";
  creme_brulee.style.justifyContent = "space-between";
  creme_brulee.style.alignItems = "center";
  creme_brulee.style.padding = "0px";
  creme_brulee.appendChild(creme_bruleeplas);
  creme_brulee.appendChild(creme_bruleeNumberOfOrders);
  creme_brulee.appendChild(creme_bruleeminus);
};

creme_bruleeplas.onclick = function (e) {
  e.stopPropagation();
  creme_bruleeNumberOfOrders.textContent =
    Number(creme_bruleeNumberOfOrders.textContent) + 1;
};

creme_bruleeminus.onclick = function (e) {
  creme_bruleeNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (creme_bruleeNumberOfOrders.textContent == "0") {
    creme_brulee.innerHTML = "";
    let creme_bruleefont = document.createElement("i");
    creme_bruleefont.className = "fa-solid fa-basket-shopping";
    let creme_bruleetextOfAdd = document.createElement("p");
    let creme_bruleePtext = document.createTextNode("add to cart");
    creme_bruleetextOfAdd.appendChild(creme_bruleePtext);
    creme_bruleetextOfAdd.style.color = "black";
    creme_brulee.appendChild(creme_bruleefont);
    creme_brulee.appendChild(creme_bruleetextOfAdd);
    creme_brulee.style.backgroundColor = "white";
    creme_brulee.style.padding = "5px ";
    creme_brulee.style.display = "flex";
    creme_brulee.style.justifyContent = "space-around";
    creme_brulee.style.alignItems = "center";
    creme_bruleeNumberOfOrders.textContent =
      Number(creme_bruleeNumberOfOrders.textContent) + 1;
  }
};
