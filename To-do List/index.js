let addToButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToButton.addEventListener('click',function(e){
         let paragraph=document.createElement('p');
         paragraph.classList.add('paragraph-styling');
         paragraph.innerText=inputField.value;
         toDoContainer.appendChild(paragraph);
         inputField.value="";
         paragraph.addEventListener('click',function(e){
            paragraph.style.textDecoration="line-through";
        })
        paragraph.addEventListener('dblclick',function(e){
            toDoContainer.removeChild(paragraph);
        })
})
