function calculateTotle(t, p) {
  const sanatizedPrice = t.textContent.replace("$", "");
  t.textContent = "$" + (parseInt(sanatizedPrice) + Number(p));
}
