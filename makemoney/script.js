const coinForm = document.getElementById("coin-form");
const coinContainer = document.getElementById("coin-container");

coinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const count = parseInt(document.getElementById("count").value);
  const coinType = document.getElementById("coin-type").value;

  for (let i = 0; i < count; i++) {
    const coin = document.createElement("div");
    coin.textContent = coinType;
    coin.className = "coin";
    coinContainer.appendChild(coin);

    coin.addEventListener("click", function () {
      coinContainer.removeChild(coin);
    });
  }
});
