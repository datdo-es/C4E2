import LoginScreen from "./containers/login/index.js";

const app = document.getElementById("app");
const loginScreen = new LoginScreen();
app.appendChild(loginScreen.render());