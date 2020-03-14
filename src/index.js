// document.addEventListener("DOMContentLoaded", () => {
  // });
  
//STEP 1. 
const main = document.querySelector('#main-content')
console.log(main);
  
const taskForm = document.querySelector('#create-task-form')
console.log(taskForm);

const taskList = document.querySelector('#tasks');

taskForm.addEventListener('submit', function(e) {
  // to prevent the submit button from tring to submit a POST (by default), use .preventDefault on the even variable 'e'
e.preventDefault()
 // now we need to grab the user input from the form when it's submitted. to do this, assign a variable to the id of the html id for the input field in the html. once you have grabbed the html element, you can obtain the value that was subitted via tacking on .value use .value when you need to grab user input from a form field.
const newTask = document.querySelector('#new-task-description').value 
// now that we have the user input, we need to take it and create a new task. there is an unordered list with an id of 'tasks' under the h2 'My Todos'. we need to grab the ul element so that we can add our user input to this section of html. do this with document.querySelector('#tasks'). but since we are inside the event listener for the submit, we shouldn't need to re-find the tasks ul every time we hit the submit button. we can define the tasks ul on the global scope and have access to it here.

// in order to add a new list item to the unordered list, we need to first create the li.





/////////////////////////////////////////// THERE IS A WAY TO CONDENSE THE CODE OF THE BELOW CONST TASKITEM AND NEWTASK
//----- to do this DRYer, you can concatinate (add +) the new task as innerHTML. This is a different way to do this but there are security issues associated with this method so stick to 

// UNSAFE METHOD

// taskList.innerHTML += `
//     <li> ${newTask} 
//       <button> X for delete</button>
//     </li>
//   `
///////////////////////////////////////////

// SAFE METHOD

//this is the created li
const taskItem = document.createElement('li')
const delBtn = document.createElement('button')
const edtBtn = document.createElement('button')

edtBtn.addEventListener("click", function(e){

});

//assign the task item inner text (not innerHTML because the content that is being inserted is text not a <p> tag or any other HTML tag)  
delBtn.innerText = "Delete"
edtBtn.innerText = "Edit"
delBtn.id = 'delete'
edtBtn.id = 'edit'
debugger;

taskItem.innerText = newTask
taskItem.appendChild(delBtn)
taskItem.appendChild(edtBtn)

////////////////////////////////////////////////////////////////////////////////////////



// now we append the newly created and assigned data to the unordered list that was captured in the taskList variable

 
taskList.appendChild(taskItem)

// we are now able to update the task list li html with whatever we submit. the user input will linger if the form is not reset and JS offers up the .reset() function to clear the form. we just need to tac it onto the form that we set to the variable taskForm
taskForm.reset() 

});



taskList.addEventListener("click", function(e){
  
});







