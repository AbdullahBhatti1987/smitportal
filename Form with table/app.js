var reportBox = document.getElementById('result');
var mainTable = document.getElementById('table');
reportBox.appendChild(mainTable);

function showDetail(){
    var row = document.createElement('tr');
    mainTable.appendChild(row);    
    var allInputs = document.getElementsByTagName('input');
    for(i=0;i<allInputs.length;i++){
        var currentInput = allInputs[i];
        if(currentInput.type!=='button'){
        var td = document.createElement('td');
        row.appendChild(td);        
        td.innerText=currentInput.value;
        currentInput.value= null;
        } 
     }
    //  checkboxes();
    reset(); 
}


function reset(){
    var allInputs = document.getElementsByTagName('input');
    for(i=0;i<allInputs.length;i++){
        var currentInput = allInputs[i];
        if(currentInput.type!=='button' && currentInput.type==='radio' || currentInput.type==='checkbox'){
            currentInput.value="";    
            currentInput.checked = false;    
        }
        }
    }  

// function checkboxes(){
//     var allInputs = document.getElementsByTagName('input');
//     for(i=0,allInputs.length,i++){
//         var currentInput = allInputs[i];
//         if(currentInput.type('checkbox').checked!=='false'){

// }
// }
// }