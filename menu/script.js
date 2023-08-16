document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const menuOptions = document.getElementById("menuOptions");
  const lettersLink = document.getElementById("lettersLink");
  const numbersLink = document.getElementById("numbersLink");
  const lettersContent = document.getElementById("lettersContent");
  const numbersContent = document.getElementById("numbersContent");

  menuButton.addEventListener("click", function () {
    menuOptions.style.display = "block";
  });

  lettersLink.addEventListener("click", function (event) {
    event.preventDefault();
    menuOptions.style.display = "none";
    lettersContent.style.display = "block";
    numbersContent.style.display = "none";
  });

  numbersLink.addEventListener("click", function (event) {
    event.preventDefault();
    menuOptions.style.display = "none";
    lettersContent.style.display = "none";
    numbersContent.style.display = "block";
  });
});
