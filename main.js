let users = new Array();
let count = 0;

function openForm() {
  alert("Hello");
}
const startButton = document.getElementById("start-button");
const popup = document.getElementById("popup");
const userContainer = document.getElementById("user-container");
const sendData = document.getElementById("sendData");

startButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
  userContainer.classList.add("hidden");
  startButton.classList.add("hidden");
  // document.body.classList.add("IsBlackBackground");
  // document.body.classList.remove("IsWhiteBackground");
  document.body.style.backgroundColor = "black";
  // popup.classList.add("popupBorderColorIsWhite");
  // popup.classList.remove("popupBorderColoIsBlack");
});

sendData.addEventListener("click", () => {
  console.log("users.length is");
  console.log(users.length);
  alert("Ваши данные отправлены");
  popup.classList.add("hidden");
  userContainer.classList.remove("hidden");
  document.body.style.backgroundColor = "white";
  startButton.classList.remove("hidden");
  // let inputFirstName = document.getElementById("firstname");
  // let inputLastName = document.getElementById("lastname");
  // users.firstName = inputFirstName;
  const newUser = { id: users.length };
  newUser.firstName = document.getElementById("firstName").value;
  newUser.lastName = document.getElementById("lastName").value;
  newUser.surName = document.getElementById("surName").value;
  newUser.age = document.getElementById("age").value;
  newUser.companyName = document.getElementById("companyName").value;
  users.push(newUser);
  // без this.user?

  console.log("___________");

  console.log("FULL:");
  for (let i = 0; i < users.length; i++) {
    console.log("Пользователь №" + users[i].id);
    console.log("users[i].firstName is " + users[i].firstName);
    console.log("users[i].lastName is " + users[i].lastName);
    console.log("users[i].surName is " + users[i].surName);
    console.log("users[i].age is " + users[i].age);
    console.log("users[i].companyName is " + users[i].companyName);
  }
  console.log("____________________");
  document.getElementById("firstName").value = null;
  document.getElementById("lastName").value = null;
  document.getElementById("surName").value = null;
  document.getElementById("age").value = null;
  document.getElementById("companyName").value = null;
  // когда заново открываешь, надо сделать так, чтобы все удалялось
  //
  // for (let i = 0; i < count; i++) {
  //   for (let key in user) {
  //     // console.log("this is value?", user[key]);
  //     console.log("user[key] is" + user.i.key);
  //     // alert("свойство:" + user[key]);
  //   }
  // }
  // count = count + 1;
  // почистить поля
  // users.forEach((user) => {
  const userElement = document.createElement("div");
  // userElement.textContent = users[users.length - 1].firstName;
  let id = users.length - 1;
  userElement.textContent = `${users[id].firstName} ${users[id].lastName}`;
  // хочу вывести данные нового пользователя
  userContainer.appendChild(userElement);
  // });
});

document.addEventListener("click", (event) => {
  if (
    !popup.contains(event.target) &&
    !startButton.contains(event.target) &&
    !popup.classList.contains("hidden")
  ) {
    popup.classList.add("hidden");
    userContainer.classList.remove("hidden");
    // document.body.classList.remove("IsBlackBackground");
    // document.body.classList.add("IsWhiteBackground");
    document.body.style.backgroundColor = "white";
    // popup.classList.remove("popupBorderColorIsWhite");
    // popup.classList.add("popupBorderColoIsBlack");
    startButton.classList.remove("hidden");
  }
});

// alert("щас должно скрыться, классы попапа");
// alert(popup.classList);
// console.log(popup.classList);

function addUser() {}
