function finishOrders(boxesPareant, p, com) {
  const dialog = document.createElement("dialog");

  dialog.innerHTML = `
  <div style=" display:grid; gap:10px; height: fit-content;"> 
    <img style="width:50px; height:50px; margin-bottom:10px;" src="images-Folder/icon-order-confirmed.svg" />
    <h1 style="color:rgb(0, 140, 140); margin:0px;">Order Confirm</h1>
    <p style="opacity: 75%; color: rgb(0, 140, 140);">I Hope You Enjoy Your Food!</p>
  </div>
  <div style="color:rgb(0, 140, 140); border-radius: 2px; display:grid; gap:10px; height:fit-content; padding:8px; background-color:rgb(0 140 140 / 17%);">
  </div> 
  `;

  const father = dialog.children[1];

  for (let x = 0; x < boxesPareant.children.length; x++) {
    const box = document.createElement("div");
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.gap = "5px";
    box.style.padding = "5px";
    box.style.borderBottom = "rgb(0, 140, 140) 1px solid";

    let epmty = boxesPareant.children[x];

    const content = epmty.children[0];

    for (let s = 0; s < p.length; s++) {
      if (content.children[0].textContent == p[s].name) {
        box.innerHTML = `
        <img src="${p[s].img}"/>
        <div style="display:grid; gap:10px;"> 
          <p style="font-weight: bold;">${p[s].name}</p>
          <div style="display: flex; gap:15px;">
            <p>${content.children[1].textContent}</p>
            <p>@ $${p[s].price}</p>
          </div>
        </div>
        <h2 style="margin-left:auto;"> $${
          Number(p[s].price) * Number(content.children[1].textContent[1])
        }</h2>
        `;
        father.appendChild(box);
      }
    }
  }

  const ordersTotle = document.createElement("div");
  ordersTotle.style.display = "flex";
  ordersTotle.style.alignItems = "center";
  ordersTotle.style.marginTop = "10px";
  ordersTotle.style.justifyContent = " space-between";

  const w = com.children[0];

  ordersTotle.innerHTML = `<p style="font-weight: bold;">Order Totle</p> <h2> ${w.children[1].textContent} </h2>`;

  father.appendChild(ordersTotle);

  const finish = document.createElement("h3");
  finish.appendChild(document.createTextNode("Start New Order"));
  finish.style.padding = "10px";
  finish.style.color = "#eee";
  finish.style.backgroundColor = "rgb(0, 140, 140)";
  finish.style.margin = "5px";
  finish.style.borderRadius = "20px";
  finish.style.textAlign = "center";

  dialog.appendChild(finish);

  const successful = document.createElement("img");
  successful.src = "images-Folder/icon-order-confirmed.svg";
  successful.style.width = "200px";
  successful.style.position = "absolute";
  successful.style.top = "35%";
  successful.style.left = "40%";
  successful.style.height = "200px";
  successful.style.zIndex = "50";
  successful.style.opacity = "0%";

  finish.onclick = function () {
    successful.style.opacity = "100%";

    document.body.appendChild(successful);

    elementParent.style.transition = ".5s";
    elementParent.style.opacity = "0%";
    dialog.style.transition = "1s";
    dialog.style.opacity = "0%";

    setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  document.body.appendChild(dialog);
  dialog.showModal();
}
