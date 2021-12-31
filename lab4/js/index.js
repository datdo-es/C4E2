import LoginScreen from "./containers/login/index.js";
// import Register from "./containers/register/index.js";

const app = document.getElementById("app");
const loginScreen = new LoginScreen();
app.appendChild(loginScreen.render());

// const register = document.getElementById("register");
// const registerScreen = new Register();
// register.appendChild(registerScreen.render()); 