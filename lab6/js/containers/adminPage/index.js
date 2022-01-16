class MainScreen{
    container;
    menu;
    dashboard;
    constructor(){
        this.container = document.createElement("div");
        this.container.classList.add("row");
        this.container.innerHTML="Admin Page"
    }
    render(appEle){
        appEle.appendChild(this.container);
    }
}
export default MainScreen;