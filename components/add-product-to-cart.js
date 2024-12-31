function add(e) {
  e.style.justifyContent = "space-between";
  e.innerHTML = "";

  const plus = document.createElement("p");
  plus.style.flex = "1";
  plus.innerHTML = `+`;

  let counter = document.createElement("p");
  counter.innerHTML = `1`;

  const miuns = document.createElement("p");
  miuns.innerHTML = `-`;
  miuns.style.textAlign = "end";
  miuns.style.flex = "1";

  e.appendChild(plus);
  e.appendChild(counter);
  e.appendChild(miuns);

}
