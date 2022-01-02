export const checkEmail = (email)=>{
    if(!email||email.length==0){
        return "Email đang trống"
    }
    const regex= /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    if(!regex.test(email)){
        return "Email không hợp lệ";
    }
    return null
};

export const checkPassword = (pwd)=>{
    if(!pwd ||pwd.length==0){
        return "Mật khẩu đang trống"
    }
    if(!pwd||pwd.length<8||pwd.length>16){
        return "Mật khẩu yêu cầu ít nhát 8 ký tự và nhỏ hơn 16";
    }
    return null
};

export const checkRepassword = (repwd)=>{
    if(!repwd ||repwd.length==0){
        return "Mật khẩu nhập lại đang trống"
    }
    if(!repwd||repwd.length<8||repwd.length>16){
        return "Mật khẩu yêu cầu ít nhát 8 ký tự và nhỏ hơn 16";
    }
    return null
};

export const check2Password = (repwd,pwd)=>{
    if (repwd==pwd){
        return null
    }
    if (repwd!==pwd){
        return "Có nhập lần 2 cũng méo xong"
    }
};
export const isValid = (str) => {
    var re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g // regex here
    const removeAscent = (name)=>{
        if (!name|| name == 0) return "Tên chưa được điền";
        if (name==true) return null;
        name = name.toLowerCase();
        name = name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        name = name.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        name = name.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        name = name.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        name = name.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        name = name.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        name = name.replace(/đ/g, "d");
        return name;
    }
    console.log(str)
    console.log(removeAscent(str))
    if (str==false){return "Tên chưa được điền"}
    if (str==true){return null}
    return re.test(removeAscent(str))
}
