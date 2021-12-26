export function renderTextBySeconds(timer){
    let sec = timer %60;
    let min = Math.floor(timer/60);
    if (sec<10){
        sec = "0" +sec
    }
    if (min<10){
        min= "0"+min
    }
    return `${min}:${sec}`;
}