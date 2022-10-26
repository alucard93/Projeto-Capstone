import LoginRequest from "../controller/login.controller.js";

const formIndex = document.querySelector("form");
formIndex.addEventListener("submit", async (event) => {
  event.preventDefault();
  const loginData = {};
  [...event.target].forEach((element) => {
    if (element.value) {
      loginData[element.name] = element.value;
    }
  });
  await LoginRequest.login(loginData);
});
