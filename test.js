/***** global console, *****/



 /*********** to do list **************/
 //collect data
 let input =document.querySelector(".addTask input"),
     plus = document.querySelector(".addTask .plus"),
     allTasks = document.querySelector(".allTasks"),
     taskCount = document.querySelector(".taskCount span"),
     taskCompleted = document.querySelector(".taskCompleted span");
//functions
window.onload = function () {
    input.focus();
};
plus.onclick = function () {
    if (input.value === '') {
        input.setAttribute('placeholder','enter a valid task');
       // console.log('enter task');
     } else {
        let noTask = document.querySelector(".noTasks");
        if (document.body.contains(noTask)) {
            noTask.remove();
        }
       /* let task =document.querySelector('.taskBox');
        if (task.nodeValue == input.value) {
            console.log('exist');
        }*/
        
        //create span element
        let span = document.createElement('span');
        span.setAttribute('class','taskBox');
        span.textContent = input.value; //or document.createTextNode()
        let deleteSpan = document.createElement('span');
        deleteSpan.setAttribute('class','delete');//or .className = delete
        deleteSpan.textContent = 'Delete';
        span.appendChild(deleteSpan);
        allTasks.appendChild(span);
        input.value = '';
        input.focus();
        span.setAttribute('dataContent', input.value);
        calculateTasks();
    }  
};
document.addEventListener('click', function (e) {
    // Delete Task
    if (e.target.className == 'delete') {
    // Remove Current Task
    e.target.parentNode.remove();
    if (allTasks.childElementCount == 0) {
        createNoTasks();
    }
}
    // Finish Task
    if (e.target.classList.contains('taskBox')) {
         
      // Toggle Class 'finished'
      e.target.classList.toggle("finished");
    }
    calculateTasks();
}); 

function createNoTasks () {
    let span2 = document.createElement('span');
    span2.className = 'noTasks';
    span2.textContent = 'No Tasks to show';
    allTasks.appendChild(span2);
}
function calculateTasks() {
    taskCount.innerHTML = document.querySelectorAll('.allTasks .taskBox').length;
    taskCompleted.innerHTML = document.querySelectorAll('.allTasks .finished').length;
 }

