import Register from "./containers/register/index.js";

const register = document.getElementById("register");
const registerScreen = new Register();
register.appendChild(registerScreen.render()); 