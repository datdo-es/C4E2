import SidebarComponent from "./components/sidebar.js";
import chatComponent from "./components/chat.js"
class MainScreen {
  container;

  paper;
  sidebarComponent;
  chatComponent;
  chatComponent
  informationComponent;
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("main", "d-flex");

    this.paper = document.createElement("div");
    this.paper.classList.add("row", "chat");

    this.sidebarComponent = new SidebarComponent();

    this.chatComponent = new chatComponent();
  }
  render(appEle) {
    appEle.appendChild(this.container);

    this.container.append(this.paper);
    this.sidebarComponent.render(this.paper);
    this.chatComponent.render(this.paper)
  }
}

export default MainScreen;