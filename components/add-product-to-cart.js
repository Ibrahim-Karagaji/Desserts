function add(added) {
  added.style.gap = "0px";
  added.innerHTML = "";

  const plus = document.createElement("p");
  plus.style.flex = "1";
  plus.innerHTML = `+`;

  let counter = document.createElement("p");
  counter.innerHTML = `1`;

  const miuns = document.createElement("p");
  miuns.innerHTML = `-`;
  miuns.style.textAlign = "end";
  miuns.style.flex = "1";

  added.appendChild(plus);
  added.appendChild(counter);
  added.appendChild(miuns);

  plus.onclick = function (e) {
    e.stopPropagation();
    increaseOrdersTotle(counter);
    increaseOrdersTotle(shoping_totle.children[0]);
  };

  counter.onclick = function (e) {
    e.stopPropagation();
  };

  miuns.onclick = function (e) {
    e.stopPropagation();
    reductionOrdersTotle(shoping_totle.children[0]);
    if (counter.textContent == "1") {
      oldStyleOfAdd(added);
      increaseOrdersTotle(counter);
    } else reductionOrdersTotle(counter);
  };
}
