let waffie = document.getElementById("waffie");

let plas = document.createElement("span");
plas.appendChild(document.createTextNode("+"));
plas.style.padding = "5px";

let NumberOfOrders = document.createElement("span");
NumberOfOrders.appendChild(document.createTextNode(1));

let minus = document.createElement("span");
minus.appendChild(document.createTextNode("-"));
minus.style.padding = "5px";

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
  waffie.appendChild(plas);
  waffie.appendChild(NumberOfOrders);
  waffie.appendChild(minus);
};

plas.onclick = function (e) {
  e.stopPropagation();
  NumberOfOrders.textContent = Number(NumberOfOrders.textContent) + 1;
};

minus.onclick = function (e) {
  NumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (NumberOfOrders.textContent == "0") {
    waffie.innerHTML = "";
    let font = document.createElement("i");
    font.className = "fa-solid fa-basket-shopping";
    let textOfAdd = document.createElement("p");
    let aa = document.createTextNode("add to cart");
    textOfAdd.appendChild(aa);
    textOfAdd.style.color = "black";
    waffie.appendChild(font);
    waffie.appendChild(textOfAdd);
    waffie.style.backgroundColor = "white";
    waffie.style.padding = "5px ";
    waffie.style.display = "flex";
    waffie.style.justifyContent = "space-around";
    waffie.style.alignItems = "center";
    NumberOfOrders.textContent = Number(NumberOfOrders.textContent) + 1;
  }
};
