document.getElementById("showDateBtn").addEventListener("click", function () {
  const now = new Date();
  document.getElementById("dateOutput").innerText = now.toLocaleString();
});
