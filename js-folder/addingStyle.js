let adding = document.querySelectorAll(".adding");
let ordernumber = 1;

function plus() {
  let Plus = document.createElement("i");
  Plus.className = "fa-solid fa-plus";
  return Plus;
}

function minus() {
  let Minus = document.createElement("i");
  Minus.className = "fa-solid fa-minus";
  return Minus;
}

function afterAddToCartStyle(e) {
  e.style.backgroundColor = "#f26314b8";
  e.style.border = "2px solid #eee";
  e.style.outline = "2px solid #f26314b8";
}
