import * as _noti from "../common/notify.js"
const config= {
    url: "http://127.0.0.1/",
    handleCodeInApp:true,
};
const createNewAccount = (email,password) =>{
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        let user = userCredential.user;
        return user.sendEmailVerification(config);
    })
    .catch((error)=>{
        let errorCode = error.code;
        let errorMessage = error.message;
        _noti.error(errorCode,errorMessage)
    });
};
const loginWithEmailPassword =(email,password)=>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        let user = userCredential.user;
    })
    .catch((error)=>{
        let errorCode = error.code;
        let errorMessage = error.message;
        _noti.error(errorCode,errorMessage)
    });
};
export {createNewAccount, loginWithEmailPassword}