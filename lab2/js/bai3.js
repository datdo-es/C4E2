function numberOneTriangle(){
    let row = document.getElementById("row");
    let result= document.getElementById("result")
    let numb = parseInt(row.value)
    let number ='';
    for(let i=0; i<=numb;i++){
        number += 1;
        result.innerHTML += `<br> ${number}`
    }
}