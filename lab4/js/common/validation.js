export const checkEmail = (email)=>{
    email = email.toLowerCase();
    email = email.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    email = email.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    email = email.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    email = email.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    email = email.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    email = email.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    email = email.replace(/đ/g, "d");
    if(!email||email.length==0){
        return true
    }
    if (email === null || email === undefined){
        return true
    };
    const regex= /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    if(!regex.test(email)){
        return true;
    }
    return console.log("Email có sai" +email)
};

export const checkPassword = (pwd)=>{
    if(!pwd ||pwd.length==0){
        return "Nhap pass di"
    }
    if(!pwd||pwd.length<8||pwd.length>16){
        return "Pass chua du 8 ky tu va nho hon 16";
    }
    return null
};

// export con