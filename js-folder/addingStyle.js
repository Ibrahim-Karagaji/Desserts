function plus(e) {
  e.className = "fa-solid fa-plus";
  e.style.flex = "1";
  e.style.display = "flex";
  e.style.justifyContent = "start";
  e.style.zIndex = "33";
  return e;
}

function minus(e) {
  e.className = "fa-solid fa-minus";
  e.style.flex = "1";
  e.style.display = "flex";
  e.style.justifyContent = "end";
  e.style.zIndex = "1";
  return e;
}

function afterAddToCartStyle(e) {
  e.style.backgroundColor = "#f26314b8";
  e.style.border = "2px solid #eee";
  e.style.outline = "2px solid #f26314b8";
  e.style.color = "#eee";
  e.style.display = "flex";
  e.style.justifyContent = "space-between";
  e.style.width = "105px";
  e.style.padding = "3px 5px";
  e.style.gap = "0px";
}


