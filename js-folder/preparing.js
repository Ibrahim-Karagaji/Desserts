function preparStyle(e) {
  e.style.padding = "10px";
  e.style.height = "fit-content";
  e.style.backgroundColor = "#eee";
  e.style.borderRadius = "10px";
}

function totlesCounter(e, ordersTotle) {
  cartText = document.createTextNode(`Add To Cart (${ordersTotle.totle})`);
  e.style.color = "#f26314b8";
  e.style.fontWeight = "600";
  e.appendChild(cartText);
}
