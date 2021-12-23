function numberOneTriangle(){
    let row = parseInt(document.getElementById("row").value);
    console.log(row)
    for(let i=0; i<row;i++){
        for(j = 1; j <= i; j++){
            result.innerText="1";
        }
        result.innerText="1"
        result.innerHTML=("<br>")
    }
}
document.getElementById("start").addEventListener("click",numberOneTriangle());