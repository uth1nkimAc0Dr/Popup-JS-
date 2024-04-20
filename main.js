let users = [];

const userContainer = document.querySelector("#user-container");
const popup = document.querySelector("#popup");
const startButton = document.querySelector("#popup-form__start-button");
const bg = document.querySelector(".bg");
// placeholder style Отдельно поменять потом шрифты внутри input
startButton.addEventListener("click", () => {
  toggleClassVisibility(true, popup);
  bg.classList.add("bg_open");
  toggleClassVisibility(false, userContainer);
  toggleClassVisibility(false, startButton);
});

function toggleClassVisibility(isVisible, className) {
  if (isVisible) {
    className.classList.remove("hidden");
  } else {
    className.classList.add("hidden");
  }
}

// нажатие кнопки Отправить
document.querySelector("#sendData").addEventListener("click", () => {
  const inputs = document.querySelectorAll(".popup__input");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  if (!allFilled) {
    alert("Заполните все поля");
    return;
  }

  toggleClassVisibility(false, popup);
  toggleClassVisibility(true, userContainer);
  toggleClassVisibility(true, startButton);
  bg.classList.remove("bg_open");
  alert("Данные пользователя отправлены");
  const newUser = { id: users.length };
  newUser.firstName = document.querySelector("#firstName").value;
  newUser.lastName = document.querySelector("#lastName").value;
  newUser.surName = document.querySelector("#surName").value;
  newUser.age = document.querySelector("#age").value;
  newUser.companyName = document.querySelector("#companyName").value;
  users.push(newUser);
  document.querySelector("#firstName").value = null;
  document.querySelector("#lastName").value = null;
  document.querySelector("#surName").value = null;
  document.querySelector("#age").value = null;
  document.querySelector("#companyName").value = null;
  const userElement = document.querySelector(".user-container__content");
  let json = JSON.stringify(users);
  userElement.textContent = `${json}`;
});

document.addEventListener("click", (event) => {
  if (
    !popup.contains(event.target) &&
    !startButton.contains(event.target) &&
    !popup.classList.contains("hidden")
    // если это не попап && не Start && попап видно
  ) {
    toggleClassVisibility(false, popup);
    // toggleBodyBackground(false);
    toggleClassVisibility(true, userContainer);
    toggleClassVisibility(true, startButton);
    bg.classList.remove("bg_open");
  }
});

// document.addEventListener("DOMContentLoaded", adjustPopupBoxFlexDirection);
// window.addEventListener("resize", adjustPopupBoxFlexDirection);

// function adjustPopupBoxFlexDirection() {
//   const popupForm = document.querySelector(".popup-form");
//   const popupBox = document.querySelector(".popup__box");
//   if (popupForm.offsetWidth < 450) {
//     popupBox.style.flexDirection = "row";
//   } else {
//     popupBox.style.flexDirection = "column";
//   }
// }
