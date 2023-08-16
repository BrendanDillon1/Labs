function main() {
  const growMeParagraph = document.getElementById("grow-me");
  growMeParagraph.classList.add("big");

  const shrinkMeParagraph = document.getElementById("shrink-me");
  shrinkMeParagraph.classList.remove("big");

  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    console.log(item.textContent);
  });

  const link = document.querySelector(".link");
  link.href = "https://www.example.com";
  link.textContent = "somewhere";

  const hideMeParagraph = document.getElementById("hide-me");
  hideMeParagraph.style.display = "none";

  const showMeParagraph = document.getElementById("show-me");
  showMeParagraph.style.display = "block";

  const nameInput = document.getElementById("name");
  const welcomeHeading = document.querySelector("h1");
  const userName = nameInput.value;
  welcomeHeading.textContent = `Welcome ${userName}!`;
}
