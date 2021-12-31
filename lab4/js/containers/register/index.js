import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import {checkEmail, checkPassword} from "../../common/validation.js";
class Register{
    email;
    password;
    repassword;
    btnSubmit;

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
        this.formRegister.addEventListener("submit",);

        this.titleScreen = document.createElement("div");
        this.titleScreen.classList.add("big-title");
        this.titleScreen.innerText="Register"

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
        )
        this.repassword = new InputComponent(
            "Password",
            "password",
            "login-password",
            "password"
        )
        this.btnSubmit = new ButtonComponent("Register", ["btn-primary","btn"])
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {email, password, repassword} = e.target;
        let isError = false;
        if(checkEmail(email.value)!==null){
            isError = true;
        }
        if(checkPassword(password.value)!==null){
            isError = true;
        }
        if(password.value==repassword.value){
            
        }
    }
}