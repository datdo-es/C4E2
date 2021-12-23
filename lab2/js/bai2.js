let item = document.getElementById('change-color');
item.addEventListener("mouseover",change)
item.addEventListener("mouseout", undo);

function change() {
  document.getElementById('change-color')
  console.log(1)
  item.setAttribute("style", "background-color:#EF1620!important;")
}
function undo() {
  document.getElementById("change-color")
  item.setAttribute("style", "background-color: '';" )
}