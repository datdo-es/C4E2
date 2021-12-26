import {renderTextBySeconds} from './helper.js'
class Counter{
    $container;
    $label;
    $btnStart;
    $btnStop;
    $btnClear;
    $counter;
    $holdTime;
    $check
    constructor(id,classStart,classStop){
        this.$counter=0;
        this.$container=document.createElement("div");
        this.$container.id=id;
        this.$container.classList.add("text-center");

        this.$label=document.createElement("div");
        this.$label.innerText="00:00";
        this.$label.classList.add("label");

        this.$btnStart=document.createElement("button");
        this.$btnStart.innerText= "Start";
        this.$btnStart.classList.add(classStart,"btn","start");
        this.$btnStart.addEventListener("click", this.handleStart);

        this.$btnStop=document.createElement("button");
        this.$btnStop.innerText="Stop";
        this.$btnStop.classList.add(classStop,"btn","stop")
        this.$btnStop.addEventListener("click", this.handleStop);

        this.$btnClear=document.createElement("button");
        this.$btnClear.innerText="Clear";
        this.$btnClear.classList.add("btn-primary","btn","stop")
        this.$btnClear.addEventListener("click", this.handleclear);
    }
    handleStart=()=>{
        this.$holdTime=setInterval(() => {
            this.$counter++;
            this.$label.innerText=renderTextBySeconds(this.$counter);
        }, 1000);
    }
    handleStop=()=>{
        clearInterval(this.$holdTime)
        this.holdTime = null
    } 
    handleclear=()=>{
        this.handleStop();
        this.$label.innerText = '00:00'
        this.counter = 0
    }
    render(){
        this.$container.append(this.$label,this.$btnStart, this.$btnStop,this.$btnClear);
        return this.$container;
    }
}
class stopAll extends Counter{
    $btnStopAll;
    constructor(id){
        super(id)
        this.$btnStopAll = document.createElement('button')
        this.$btnStopAll.classList.add("btn-success","btn", "col-3","p-2")
        this.$btnStopAll.innerText = "Clear All"
        this.$btnStopAll.addEventListener("click",this.handleBtnStopAll)
    }
    handleBtnStopAll=()=>{
        let butttonCreated = document.querySelectorAll(".stop")
        for(let i = 0; i <butttonCreated.length; i++){
            butttonCreated[i].click()
        }
    }
    render(){
        this.$container.append(this.$btnStopAll)
        return this.$container
    }
}
class startAll extends Counter{
    $btnStartAll;
    constructor(id){
        super(id)
        this.$btnStartAll = document.createElement("button")
        this.$btnStartAll.classList.add("btn-success","btn","col-3","p-2")
        this.$btnStartAll.innerText = "Start All"
        this.$btnStartAll.addEventListener("click",this.handleBtnStartAll)
    }
    handleBtnStartAll=()=>{
        let startAll = document.querySelectorAll(".start")
        for(let i = 0; i <startAll.length; i++){
            startAll[i].click()
        }
    }
    render(){
        this.$container.append(this.$btnStartAll)
        return this.$container
    }

}
export default {Counter,startAll,stopAll}