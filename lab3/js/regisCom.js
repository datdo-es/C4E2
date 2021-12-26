class Register{
    $name;
    $email;
    $btnSubmit;
    $passwordcheck;
    $password;

    $group
    constructor(id) {
        this.$group=document.createElement("div");
        this.$group.classList.add("mb-3", "form-group")

        this.$name=document.createElement("input");
        this.$name.placeholder="Nhập tên của bạn";
        this.$name.classList.add("form-control");

        this.$email=document.createElement("input");
        this.$email.placeholder="Nhập email của bạn";
        this.$email.classList.add("form-control");

        this.$password=document.createElement("input");
        this.$password.placeholder= 'Nhập mật khẩu của bạn';
        this.$password.type = "password";
        this.$password.classList.add("form-control");

        this.$passwordcheck=document.createElement("input");
        this.$passwordcheck.placeholder= 'Nhập lại mật khẩu của bạn';
        this.$passwordcheck.type = "password";
        this.$passwordcheck.classList.add("form-control");

        this.$btnSubmit=document.createElement("button");
        this.$btnSubmit.innerText="Đăng ký";
        this.$btnSubmit.classList.add("btn","button-sign")

    }
    render(){
        this.$group.append(this.$name, this.$email,this.$password, this.$passwordcheck, this.$btnSubmit)
        return this.$group
    }
}
export default Register;