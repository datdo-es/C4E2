class InputComponent{
    container;
    label;
    containerInput;
    input;

    error;

    name;
    type;
    id;

    constructor(label,name,id,type){
        this.container = document.createElement("div");
        this.container.classList.add();

        this.containerInput = document.createElement("div");
        this.containerInput.classList.add();

        this.label = document.createElement("label");
        this.label.classList.add("label-text");
        this.label.innerText = label

        this.input = document.createElement("input");
        this.input.classList.add("label-input","form-control");
        this.input.type=type;
        this.input.id = id;
        this.input.name=name;

        this.error = document.createElement("div");
        this.error.classList.add("mt-2","error");
    }
    
    render(){
        this.container.append(this.label,this.containerInput);
        this.containerInput.append(this.input,this.error)
        return this.container
    }
}
export default InputComponent;