function add(box, added, shoping_totle) {
  const boxesPareant = shoping_totle.children[1];
  const info = box.children[0];
  const remove = box.children[1];

  added.style.gap = "0px";
  added.innerHTML = "";

  const plus = document.createElement("p");
  plus.style.flex = "1";
  plus.innerHTML = `+`;

  const counter = document.createElement("p");
  counter.innerHTML = `1`;

  const miuns = document.createElement("p");
  miuns.innerHTML = `-`;
  miuns.style.textAlign = "end";
  miuns.style.flex = "1";

  added.appendChild(plus);
  added.appendChild(counter);
  added.appendChild(miuns);

  plus.addEventListener("click", function (e) {
    e.stopPropagation();

    increaseOrdersTotle(info.children[1]);
    increaseOrdersTotle(counter);
  });

  counter.onclick = function (e) {
    e.stopPropagation();
  };

  miuns.addEventListener("click", function (e) {
    e.stopPropagation();

    if (counter.textContent == "1") {
      oldStyleOfAdd(added);
      increaseOrdersTotle(counter);
    } else reductionOrdersTotle(counter);

    if (info.children[1].textContent == "x1") {
      boxesPareant.removeChild(box);
      reductionOrdersTotle(shoping_totle.children[0]);

      if (boxesPareant.children[0] == undefined) {
        prepareProducts(shoping_totle);
        shoping_totle.children[1].style.margin = "0px auto";
        shoping_totle.children[2].style.margin = "0px auto";
      }
    } else reductionOrdersTotle(info.children[1]);
  });

  remove.addEventListener("click", function (e) {
    e.stopPropagation();

    oldStyleOfAdd(added);

    boxesPareant.removeChild(box);
    reductionOrdersTotle(shoping_totle.children[0]);

    if (boxesPareant.children[0] == undefined) {
      prepareProducts(shoping_totle);
      shoping_totle.children[1].style.margin = "0px auto";
      shoping_totle.children[2].style.margin = "0px auto";
    }
  });
}
