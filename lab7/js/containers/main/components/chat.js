import SidebarItem from "./item.js";
import { isValid } from "../../../common/validation.js";
import * as _noti from "../../../common/notify.js";

class ChatComponent {
  container;

  title;
  paper;
  listContainer;


  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("col-8", "chat-main");

    this.title = document.createElement("div");
    this.title.classList.add("sidebar-title");
    this.title.innerText = "Name Chat";

    this.paper = document.createElement("div");
    this.paper.classList.add("cs-list");

  }

  render(parentContainer) {
    parentContainer.append(this.container);
    this.container.append(
      this.title,
      this.paper,
      this.listContainer,
    );
  }
}

export default ChatComponent;