function add(added, boxCard, price) {
  let totleing = boxCard.children[0];
  let removeCard = boxCard.children[1];

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

    increaseOrdersTotle(counter);

    if (added.children[0] instanceof HTMLParagraphElement) {
    } else {
      increaseOrdersTotle(shoping_totle.children[0]);
    }

    increaseOrdersTotle(totleing.children[1]);

    productsTotle.totle += price;
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

    if (totleing.children[1].textContent == "x1") {
      shoping_totle.removeChild(boxCard);
      reductionOrdersTotle(shoping_totle.children[0]);
    } else {
      reductionOrdersTotle(totleing.children[1]);
    }

    if (shoping_totle.children[1] == undefined) {
      shoping_totle.style.justifyContent = "center";
      prepareProducts(shoping_totle);
      shoping_totle.children[1].style.margin = "0 auto";
    }

    productsTotle.totle -= price;
  });

  removeCard.onclick = function (e) {
    e.stopPropagation();

    for (let q = 1; q <= Number(counter.textContent); q++) {
      productsTotle.totle -= price;
    }

    shoping_totle.removeChild(boxCard);
    oldStyleOfAdd(added);
    reductionOrdersTotle(shoping_totle.children[0]);

    if (shoping_totle.children[1] == undefined) {
      shoping_totle.style.justifyContent = "center";
      prepareProducts(shoping_totle);
      shoping_totle.children[1].style.margin = "0 auto";
    }
  };
}
