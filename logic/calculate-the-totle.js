function increaseTotle(t, p) {
  const sanatizedPrice = t.textContent.replace("$", "");
  t.textContent = "$" + (parseInt(sanatizedPrice) + Number(p));
}

function reductionTotle(t, p) {
  const sanatizedPrice = t.textContent.replace("$", "");
  t.textContent = "$" + (parseInt(sanatizedPrice) - Number(p));
}
