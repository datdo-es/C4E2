import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import { getCurrentUser } from "../../firebase/auth.js";
import { createUser, getUserByEmail } from "../../firebase/store.js";
import {isValid, checkNumber} from "../../common/validation.js";

class InfoScreen {
  container;

  paper;
  avatarContainer;
  avatar;

  form;
  title;
  email;
  name;
  phone;
  imageUrl;

  btnSubmit;

  existUser;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("info-screen");

    this.paper = document.createElement("div");
    this.paper.classList.add("paper", "row");

    this.avatarContainer = document.createElement("div");
    this.avatarContainer.classList.add("avatar-container", "col-4");
    this.avatar = document.createElement("div");
    this.avatar.classList.add("avatar");

    this.form = document.createElement("form");
    this.form.classList.add("form-container", "col-8");
    this.form.addEventListener("submit", this.handleSubmit);

    this.title = document.createElement("h2");
    this.title.classList.add("big-title", "text-center");
    this.title.innerText = "Thông tin của bạn";

    const user = getCurrentUser();

    this.email = new InputComponent(
      "Email",
      "email",
      "info-email",
      "text"
    );

    this.email.setAttribute("value", user.email);
    this.email.setAttribute("disabled", true);

    this.name = new InputComponent("Full name", "name", "info-name", "text");
    this.phone = new InputComponent(
      "Số điện thoại",
      "phone",
      "info-phone",
      "text"
    );
    this.imageUrl = new InputComponent(
      "Đường dẫn ảnh",
      "imageUrl",
      "info-imageUrl",
      "text"
    );

    this.imageUrl.setEventListener("input", this.handleChangeAvatar);

    this.btnSubmit = new ButtonComponent(
      "Xác nhận thông tin",
      ["btn", "btn-primary", "d-block", "mt-3"],
      "submit"
    );

    this.handleFetchUserByEmail();
  }

  async handleFetchUserByEmail() {
    const user = getCurrentUser();
    const userStore = await getUserByEmail(user.email);
    if (userStore) {
      this.existUser = true;

      this.name.setAttribute("value", userStore.name);
      this.phone.setAttribute("value", userStore.phone);
      this.imageUrl.setAttribute("value", userStore.imageUrl);

      this.avatar.style.backgroundImage = `url(${userStore.imageUrl})`;
    } else {
      this.existUser = false;
    }
  }

  handleChangeAvatar = (e) => {
    this.avatar.style.backgroundImage = `url(${e.target.value})`;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, imageUrl } = e.target;
    const user = getCurrentUser();
    createUser(user.email, "", name.value, phone.value, imageUrl.value);
    
    if(isValid(name.value)!==null){
      this.name.setError(isValid(name.value))
      isError = true;
    }
    if(checkNumber(phone.value)!==null){
      this.phone.setError(checkNumber(phone.value))
      isError = true;
    }
    if(imageUrl.value!==null){
      this.imageUrl.setError("Đường dẫn ảnh của bạn không hợp lệ")
      isError = true;
    }

  };

  render(appEle) {
    appEle.appendChild(this.container);
    this.container.append(this.paper);
    this.paper.append(this.title, this.form, this.avatarContainer);

    this.form.append(
      this.email.render(), this.name.render(), this.phone.render(),
      this.imageUrl.render(), this.btnSubmit.render()
    );

    this.avatarContainer.appendChild(this.avatar);
  }
}

export default InfoScreen;