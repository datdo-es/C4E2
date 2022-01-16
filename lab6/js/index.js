import LoginScreen from "./containers/login/index.js";
import Register from "./containers/register/index.js";
import CheckEmailScreen  from "./containers/checkEmail/index.js";
import MainScreen from "./containers/adminPage/index.js";
import InfoScreen from "./containers/info/index.js";

class App{
    $activeScreen;
    constructor(){
        this.setUpAuthListener();
    }
    setUpAuthListener() {
        firebase.auth().onAuthStateChanged((user) => {
            let screen;
            if (user && user.emailVerified) {
                screen = new InfoScreen();
            } else if (user && !user.emailVerified) {
                screen = new CheckEmailScreen();
            } else {
                screen = new LoginScreen();
            }
            this.changeActiveScreen(screen);
        });
    }
    changeActiveScreen(screen) {
        const appEle = document.getElementById("app");
        if (appEle) {
            if (this.$activeScreen) {
                appEle.innerHTML = "";
            }
            this.$activeScreen = screen;
            screen.render(appEle);
        }
    }
}
const app = new App();
export default app;