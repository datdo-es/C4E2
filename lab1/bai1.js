function createTable() {
    let row = document.getElementById("row");
    let column = document.getElementById("column");
    
    if (row.value.length == 0 || column.value.length == 0) {
        alert("Vui lòng nhập vào số dòng và số cột");
        return false;
    } else if (isNaN(row.value) || isNaN(column.value)) {
          alert("Vui lòng nhập giá trị số cho số dòng và số cột");
          return false;
    } else {
        let container = document.getElementById("container");
      
        let countRow = parseInt(row.value);
        let countColumn = parseInt(column.value);
      
        let tagTable = document.createElement("table");
        tagTable.border = 1;
      
            for (i = 0; i < countRow; i++) {
                let tagRow = document.createElement("tr");
                tagTable.appendChild(tagRow);
                
                for( j = 0; j < countColumn; j++) {
                    let tagColumn = document.createElement("td");
                    let num=j+1;
                    let textNode = document.createTextNode(i + " - " + num);
                        tagColumn.appendChild(textNode);
                        tagRow.appendChild(tagColumn);
                }
            }      
        container.appendChild(tagTable);
        return true;
    }
  }