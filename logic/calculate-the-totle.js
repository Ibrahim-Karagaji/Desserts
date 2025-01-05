function calculateTotle(t, p) {
  t.textContent = t.textContent.replace(/\d+/, (match) => parseInt(match) + p);
}
