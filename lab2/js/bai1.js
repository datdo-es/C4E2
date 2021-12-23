let num = Math.floor(Math.random()*20)
let arr =[]
let result= document.getElementById("result")
function findEven(){
    if(num > 4){
        for(let i = 4 ; i < num ; i++){
            if (i % 2 == 0) {
                arr.push(i)
            }
        }
    }
}
findEven()
result.innerText= arr