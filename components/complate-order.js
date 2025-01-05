function complate(t) {
  const complateing = document.createElement("div");
  complateing.style.display = "grid";
  complateing.style.color = "rgb(0, 140, 140)";
  complateing.style.backgroundColor = "white";
  complateing.style.gap = "5px";
  complateing.style.padding = "5px";

  complateing.innerHTML = `
  <div style="align-items: center; display: flex; justify-content: space-between; padding: 0 15px;">
    <h4>Order Totle</h4>
    <h2>$${t.totle}</h2>
  </div>
  <div style="padding:5px; justify-content: center; display: flex;gap:5px; background-color:rgb(0 140 140 / 18%);">
    <img src="images-Folder/icon-carbon-neutral.svg" style="width: 20px; height: 20px;"/>
    <p>This is a Carbon-Neutral Delivery</p>
  </div>
  <p style="font-size: 20px; padding:10px; background-color:rgb(0, 140, 140); color:#eee; text-align: center; border-radius: 10px;">Confirm Order</p>
  `;

  return complateing;
}