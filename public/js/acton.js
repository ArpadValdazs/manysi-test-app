"use strict"

$(document).ready(function(){
/*input the full height of menu*/
/*let menu = document.querySelector("#menu");
let menuElemHeight = menu.offsetHeight;
let menuTop = $("#menu").css("margin-top");
let menuBottom = $("#menu").css("margin-bottom");
let menuHeight = menuElemHeight+menuTop+menuBottom;
let fixedPos = document.getElementById('upperBlock');

let addInput = document.getElementById('inputPlacer');*/

let submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault();
    let text = document.getElementById('editableBlock').value;
    console.log(text);
    $.ajax(){
        data: 'text',
        method: 'POST',
        url: 'app/widgets/controller.php',
    }
})

/*document.body.addEventListener("click", function(){
    let hh = fixedPos.pageY;
    console.log(hh);
    })*/
let content = document.getElementById('editableBlock');
//let b = document.getElementsByClassName('editableBlock');
console.log(content)
/*Adding*/
/*content.addEventListener('click', function(){
    let a = getCursorPosition(content);
    console.log(a);
})*/


/*addInput.addEventListener("click",function(){
    document.insertAdjacentHTML
})*/

/*Function, which seeks for cursor position*/

/*function getCursorPosition(ctrl) {
    let CaretPos = 0;
    if(document.selection) {
    ctrl.focus();
    let Sel = document.selection.createRange();
    Sel.moveStart('character', -ctrl-value-length);
    CaretPos = Sel.text.length;
    }else if(ctrl.selectionStart || ctrl.selectionStart == '0') {
    CaretPos = ctrl.selectionStart
    }
    return CaretPos;
}*/


});



