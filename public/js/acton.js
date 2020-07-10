"use strict"

$(document).ready(function(){

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


let content = document.getElementById('editableBlock');

console.log(content)

});



