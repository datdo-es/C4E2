import Counter from "./counter.js";

const c1 = new Counter.Counter("c1","btn-primary","btn-secondary");
const c2 = new Counter.Counter("c2","btn-outline-warning","btn-outline-success")

const btnStopAll = new Counter.clearAll('btnStopAll')
const btnStartAll = new Counter.startAll('btnStartAll') 

document.getElementById("app").append(c1.render(),c2.render(),btnStopAll.render(),btnStartAll.render())