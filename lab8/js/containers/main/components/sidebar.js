import SidebarItem from "./item.js";
import { isValid } from "../../../common/validation.js";
import * as _noti from "../../../common/notify.js";
import { getUserByEmail, createConverstaion, updateConversation, deleteConversation } from "../../../firebase/store.js";
import { getCurrentUser } from "../../../firebase/auth.js";
import db from "../../../firebase/index.js";

class SidebarComponent {
  container;

  group;
  title;
  avatar;

  btnCreate;
  icon;
  listContainer;
  listItems;
  search;

  objItems={};

  updateConversation;

  modal;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("sidebar", "d-flex", "col-4");

    this.group = document.createElement("div");
    this.group.classList.add("group-sidebar")

    this.title = document.createElement("div");
    this.title.classList.add("sidebar-title");
    this.title.innerText = "Chat App - CI70";

    this.avatar = document.createElement("div");
    this.avatar.classList.add("avatar-sidebar");

    this.search = document.createElement("input");
    this.search.classList.add("input-group-prepend", "search-input-sidebar", "mb-1", "mt-1")
    this.search.placeholder = "Tìm kiếm trò chuyện"

    this.btnCreate = document.createElement("button");
    this.btnCreate.classList.add("btn-create");
    this.btnCreate.setAttribute("data-bs-toggle", "modal");
    this.btnCreate.setAttribute("data-bs-target", "#conversationModal");
    this.btnCreate.addEventListener("click", this.resetDataModal);

    this.icon = document.createElement("i");
    this.icon.classList.add( "far");
    this.icon.innerText=`+`

    this.listContainer = document.createElement("div");
    this.listContainer.classList.add("cs-list");

    this.handleinfo();
    this.renderModal();
    this.setUpConversationLister();
  }

  handleUpdateCon = (currentUpdateCon) => {
    this.updateConversation = currentUpdateCon;
    const titleModal = document.getElementById("modalTittle");
    const btnSubmitModal = document.getElementById("btn-create-converstation");
    if (titleModal) {
      titleModal.innerText = currentUpdateCon.name;
    }

    if (btnSubmitModal) {
      btnSubmitModal.setAttribute("id-update", currentUpdateCon.id);
    }
    this.btnCreate.click();
  };

  handleDeleteCon = (id, name) => {
    _noti.confirm(
      `Are you sure you want to delete ${name}`,
      "Your item has been deleted.",
      () => deleteConversation(id)
    );
  };

  setUpConversationLister() {
    const user = getCurrentUser();
    db.collection("conversations")
      .where("users", "array-contains", user.email)
      .orderBy("users", "desc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const newConversation = {
              ...change.doc.data(),
              id: change.doc.id,
            };
            const addedConver = new SidebarItem(
              newConversation,
              this.handleUpdateCon,
              this.handleDeleteCon
            );
            // this.listItems.push(addedConver);
            this.objItems[change.doc.id] = addedConver;

            this.listContainer.append(addedConver.render());
          }
          if (change.type === "modified") {
            if (this.objItems[change.doc.id]) {
              this.objItems[change.doc.id].setUpData(
                {
                  ...change.doc.data(),
                  id: change.doc.id,
                },
                this.handleUpdateCon,
                this.handleDeleteCon
              );
            }
          }
          if (change.type === "removed") {
            this.objItems[change.doc.id].unMount();
          }
        });
      });
  }

  renderModal() {
    this.modal = document.createElement("div");
    this.modal.classList.add("modal", "fade");
    this.modal.setAttribute("id", "conversationModal");
    this.modal.setAttribute("tabindex", "-1");
    this.modal.setAttribute("aria-labelledby", "conversationModal");
    this.modal.setAttribute("aria-hidden", "true");

    this.modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" id="modalTittle">Tạo mới</h5>
          <button id="btn-icon-close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="title">
            Tên<span class="caution">*</span>
          </div>
          <div class="input-group mb-3">
              <input id="name-conversation" type="text" class="form-control modal-input " placeholder="New conversation" aria-label="new_conversation" aria-describedby="basic-addon1">
          </div>
          <div class="title">
            Ảnh đại diện
          </div>
          <div class="input-group mb-3">
              <input id="img-conversation" type="text" class="form-control modal-input " placeholder="Đường dẫn ảnh" aria-label="new_conversation" aria-describedby="basic-addon1">
          </div>
          </div>
          <button id="btn-close-modal" type="button" class="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
          <div class="modal-footer" id="modal-footer">
              <button id="btn-create-converstation" type="button" class="btn-linear">Lưu</button>
          </div>
      </div>
    </div>
    `;
  }

  handleClose = () => {
    const name = document.getElementById("name-conversation");
    const imageURL = document.getElementById("img-conversation");
    const btnClose = document.getElementById("btn-icon-close");

    name.value = "";
    imageURL.value = "";
    this.updateConversation = null;

    const titleModal = document.getElementById("modalTittle");
    const btnSubmitModal = document.getElementById("btn-create-converstation");

    titleModal.innerText = "Create new conversation";
    if (btnSubmitModal.hasAttribute("id-update")) {
      btnSubmitModal.removeAttribute("id-update");
    }
    btnClose.click();
  };

  handleinfo = async () => {
    const user = getCurrentUser();
    const userStore = await getUserByEmail(user.email);
    if (userStore) {
      this.avatar.style.backgroundImage = `url(${userStore.imageUrl})`;
    }
  };

  handleSubmit = async () => {
    try {
      const name = document.getElementById("name-conversation");
      const imageURL = document.getElementById("img-conversation");
      let desc;
      const btnSubmitModal = document.getElementById(
        "btn-create-converstation"
      );

      const user = getCurrentUser();
      if (isValid(name.value)) {
        _noti.warning("Conversation name", isValid(name.value));
        return;
      }

      if (btnSubmitModal.hasAttribute("id-update")) {
        await updateConversation(
          this.updateConversation.id,
          name.value,
          imageURL.value,
          desc="desc",
          this.updateConversation.users,
          this.updateConversation.createdBy
        );
        
      } else {
        console.log(desc)
        await createConverstaion(
          name.value,
          imageURL.value,
          desc="desc",
          [user.email],
          user.email
        );
      }
      this.handleClose();
    } catch (error) {
      _noti.error(error.code, error.message);
    }
  };

  render(parentContainer) {
    parentContainer.append(this.container);
    this.container.append(
      this.group,
      this.search,
      this.listContainer,
      this.modal
    );
    this.btnCreate.append(this.icon)
    this.group.append(this.avatar, this.title, this.btnCreate)

    document
      .getElementById("btn-create-converstation")
      .addEventListener("click", this.handleSubmit);

    document
      .getElementById("btn-icon-close")
      .addEventListener("click", this.handleClose);
  }
}

export default SidebarComponent;