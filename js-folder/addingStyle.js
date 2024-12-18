let Plus = document.createElement("i");
let ordernumber = 1;
let Minus = document.createElement("i");

let num = document.createElement("p");
let numTextNode = document.createTextNode(ordernumber);
num.appendChild(numTextNode);

function plus(e) {
  e.className = "fa-solid fa-plus";
  e.style.flex = "1";
  e.style.display = "flex";
  e.style.justifyContent = "start";
  return e;
}

function minus(e) {
  e.className = "fa-solid fa-minus";
  e.style.flex = "1";
  e.style.display = "flex";
  e.style.justifyContent = "end";
  return e;
}

function afterAddToCartStyle(e) {
  e.style.backgroundColor = "#f26314b8";
  e.style.border = "2px solid #eee";
  e.style.outline = "2px solid #f26314b8";
  e.style.color = "#eee";
  e.style.display = "flex";
  e.style.justifyContent = "space-between";
  e.style.width = "106px";
  e.style.padding = "3px 5px";
}

function afterAddToCart(e) {
  e.innerHTML = "";
  afterAddToCartStyle(e);
  e.appendChild(plus(Plus));
  e.appendChild(num);
  e.appendChild(minus(Minus));
}
