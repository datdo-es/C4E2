class ButtonComponent{
    btn;
    constructor(text, classList, callback){
        this.btn = document.createElement("button");
        this.btn.type = "type";
        this.btn.innerText = text;
        this.btn.classList.add(...classList);
        if (callback){
            this.btn.addEventListener("click", callback);
        }
    }
    render(){
        return this.btn
    }
}
export default ButtonComponent;