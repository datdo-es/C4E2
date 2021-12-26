class InputLogin{
    $group;
    $account;
    $password;
    $btnSubmit
    constructor(id){
        this.$group=document.createElement("div");
        this.$group.classList.add("mb-3", "form-group")

        this.$account=document.createElement("input");
        this.$account.placeholder="Nhập email của bạn";
        this.$account.classList.add("form-control");

        this.$password=document.createElement("input");
        this.$password.placeholder= 'Nhập mật khẩu của bạn';
        this.$password.type = "password";
        this.$password.classList.add("form-control");

        this.$btnSubmit=document.createElement("button");
        this.$btnSubmit.innerText="Đăng nhập";
        this.$btnSubmit.classList.add("btn","button-sign")
    }

    render(){
        this.$group.append(this.$account, this.$password,this.$btnSubmit);
        return this.$group;
    }
}
export default InputLogin;