function createNumber(){
    let a= document.getElementById("numA");
    let b= document.getElementById("numB");
    a =parseInt(a.value)
    b =parseInt(b.value)
    if (numA.value.length==0||numB.value.length==0){
        alert("Chưa nhập số má ơi");
        return false;
    } else if(isNaN(numA.value)||isNaN(numB.value)){
        alert ("Có biết nhập số không vậy. Bảo số mà.")
        return false;
    }
    checkNumber = (n)=>{
        if (n<2){
            return false;
        }
        for (let i=2;i<n-1;i++){
            if (n%i==0){
                return false;
            }
        }
        return true
    };
    
    
    if (a>b){
        console.log("Số đầu tiên lớn hơn số thứ hai")
        for (let i=b;i <=a; i++){
            if(checkNumber(i)){
                document.getElementById("print").innerHTML +=i+"<br>"
            }
        }
        
    } else{
        console.log("Số thứ hai lớn hơn số đầu tiên")
        for (i=a;i <=b; i++){
            if(checkNumber(i)){
                document.getElementById("print").innerHTML +=i+"<br>"
            }
        }
    }
}
    