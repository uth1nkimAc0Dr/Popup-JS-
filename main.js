function openForm() {
  alert("Hello");
}
const startButton = document.getElementById("start-button");
const popup = document.getElementById("popup");
const sendData = document.getElementById("sendData");

startButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

sendData.addEventListener("click", () => {
  popup.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !popup.contains(event.target) &&
    !startButton.contains(event.target) &&
    !popup.classList.contains("hidden")
  ) {
    popup.classList.add("hidden");
  }
});

// alert("щас должно скрыться, классы попапа");
// alert(popup.classList);
// console.log(popup.classList);
