import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import LoginScreen from "../login/index.js";
import {checkEmail, checkPassword, checkRepassword, isValid, check2Password} from "../../common/validation.js";
import app from "../../index.js";
import { createNewAccount } from "../../firebase/auth.js";
class Register{
    email;
    password;
    name;
    repassword;
    btnSubmit;
    link;

    container;
    imageCover;
    formRegister;
    titleScreen;
    constructor(){
        this.container = document.createElement("div");
        this.container.classList.add("row");

        this.imageCover = document.createElement("div")
        this.imageCover.classList.add("img-cover","col-8");

        this.formRegister = document.createElement("form");
        this.formRegister.classList.add("form-container", "col-4");
        this.formRegister.addEventListener("submit",this.handleSubmit);

        this.titleScreen = document.createElement("div");
        this.titleScreen.classList.add("big-title");
        this.titleScreen.innerText="Register"

        this.link = document.createElement("a");
        this.link.classList.add("title", "text-center");
        this.link.innerText="Bạn đã có tài khoản";
        this.link.addEventListener("click",this.handleChangeScreen)

        this.name = new InputComponent(
            "Full name",
            "name",
            "register-name",
            "name"
        );

        this.email = new InputComponent(
            "Email address",
            "email",
            "register-email",
            "email"
        );
        this.password = new InputComponent(
            "Password",
            "password",
            "register-password",
            "password"
        )
        this.repassword = new InputComponent(
            "Repassword",
            "repassword",
            "register-Repassword",
            "password"
        )
        this.btnSubmit = new ButtonComponent("Register", ["btn-primary","btn"])
    }
    handleChangeScreen = (e)=>{
        e.preventDefault();
        const login = new LoginScreen();
        app.changeActiveScreen(login);
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        const {name,email,password,repassword} = e.target;
        let isError =false;
        if(isValid(name.value)!==null){
            this.name.setError(isValid(name.value))
            isError = true;
        }
        if(checkEmail(email.value)!== null){
            this.email.setError(checkEmail(email.value))
            isError = true;
        }
        if(checkPassword(password.value)!==null){
            this.password.setError(checkPassword(password.value))
            isError = true;
        }
        if(checkRepassword(repassword.value)!==null){
            this.repassword.setError(checkRepassword(repassword.value))
            isError = true;
        }
        if(check2Password(password.value, repassword.value)){
            this.repassword.setError(check2Password(repassword.value,password.value))
            isError = true
        }
        if(!isError){
            createNewAccount(email.value, password.value);
        }
    }
    render(){
        this.formRegister.append(this.titleScreen,this.name.render(),this.email.render(), this.password.render(),this.repassword.render(),this.btnSubmit.render(),this.link);
        this.container.append(this.imageCover, this.formRegister);
        return this.container
    }
}
export default Register;