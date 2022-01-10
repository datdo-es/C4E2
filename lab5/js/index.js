import LoginScreen from "./containers/login/index.js";
import Register from "./containers/register/index.js";
import CheckEmailScreen  from "./containers/checkEmail/index.js";

class App{
    $activeScreen;
    constructor(){}
    changeActiveScreen(screen){
        const appEle = document.getElementById("app");
        if(appEle){
            if (this.$activeScreen){
                appEle.innerHTML="";
            }
            this.$activeScreen = screen;
            appEle.appendChild(screen.render());
        }
    }
    alert(){
        this.$activeScreen.alert();
    }
}
const app = new App();
const signUp = new Register();
const checkEmailScreen = new CheckEmailScreen();
app.changeActiveScreen(signUp)
export default app;