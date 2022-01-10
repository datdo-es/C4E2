import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import Register from "../register/index.js";
import {checkEmail, checkPassword} from "../../common/validation.js";
import app from "../../index.js";
import { loginWithEmailPassword } from "../../firebase/auth.js";

class LoginScreen{
    email;
    password;
    btnSubmit;
    link;

    container;
    imageCover;
    formLogin;
    titleScreen;
    constructor(){
        this.container = document.createElement("div");
        this.container.classList.add("row");

        this.imageCover = document.createElement("div");
        this.imageCover.classList.add("img-cover", "col-8");

        this.formLogin = document.createElement("form");
        this.formLogin.classList.add("form-container", "col-4");
        this.formLogin.addEventListener("submit",this.handleSubmit);

        this.titleScreen = document.createElement("div");
        this.titleScreen.classList.add("big-title");
        this.titleScreen.innerText = "Login";

        this.link = document.createElement("a");
        this.link.classList.add("title", "text-center");
        this.link.innerText="Bạn chưa có tài khoản";
        this.link.addEventListener("click",this.handleChangeScreen)

        this.email = new InputComponent(
            "Email address",
            "email",
            "login-email",
            "email"
        );
        this.password = new InputComponent(
            "Password",
            "password",
            "login-password",
            "password"
        );
        this.btnSubmit = new ButtonComponent("Sign in", ["btn-primary","btn"])
    }
    
    handleChangeScreen = (e)=>{
        e.preventDefault();
        const signUp = new Register();
        app.changeActiveScreen(signUp);
    };
    
    handleSubmit = (e)=>{
        e.preventDefault();
        const {email, password} = e.target;
        let isError =false;
        if(checkEmail(email.value)!== null){
            this.email.setError(checkEmail(email.value))
            isError = true;
        }
        if(checkPassword(password.value)!==null){
            this.password.setError(checkPassword(password.value))
            isError = true;
        }
        if(!isError){
            loginWithEmailPassword(email.value, password.value)
        }
    }
    render(){
        this.formLogin.append(this.titleScreen, this.email.render(), this.password.render(), this.btnSubmit.render(), this.link);
        this.container.append(this.imageCover, this.formLogin);
        return this.container
    }
}
export default LoginScreen;