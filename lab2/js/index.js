
import cal from "./calculate.js"
let result =document.querySelector('#result');
const app = {
    handle: function () {
        let cong = document.querySelector('#cong');
        let tru  = document.querySelector('#tru');
        let nhan = document.querySelector('#nhan');
        let chia = document.querySelector('#chia');

        cong.addEventListener('click', () => {
            app.calculate(cal.cong)
        })
        tru.addEventListener('click', () => {
            app.calculate(cal.tru)
        })
        nhan.addEventListener('click', () => {
            app.calculate(cal.nhan) 
        })
        chia.addEventListener('click', () => {
            app.calculate(cal.chia)
        })
        clear.addEventListener('click',()=>{
            document.querySelector('#numA').value = '';
            document.querySelector('#numB').value = '';
            document.querySelector('#result').innerText = '';
        })
    },
    calculate: function(callback){
        let a= document.getElementById("numA").value;
        let b= document.getElementById("numB").value;
        a = parseInt(numA.value)
        b = parseInt(numB.value)
        
        if (numA.value.length==0||numB.value.length==0){
            alert("Chưa nhập số má ơi");
            console.log(a,b)
            return false;
        } else if(isNaN(numA.value)||isNaN(numB.value)){
            alert ("Có biết nhập số không vậy. Bảo số mà.")
            console.log(a,b)
            return false;
        }
       
        result.innerText = callback(+a, +b)
    }
}
app.handle()