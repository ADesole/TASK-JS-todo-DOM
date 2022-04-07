// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
// add task
let count = 0 
document.getElementById("taskSub").addEventListener("click",
 function(){ tasks.push( {id: count ,title: document.getElementById("new-task").value , category: document.getElementById("categories-list").value, done: false})
renderTasks(tasks, "tasks-list");
count++
document.getElementById("new-task").value = "";
})

tasks = [
  // { id: 0, title: "Game of thrones", category: "Movies", done: false },
  // { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];


categories = ["Movies", "Groceries",];
// add category 
document.getElementById("catgSub").addEventListener("click",
 function(){ categories.push( document.getElementById("new-category").value )
 renderCategories(categories, CATEGORY_SELECTOR);
 renderCategories(categories, CATEGORY_FILTER);
document.getElementById("new-category").value = "";

;})

//filter based on category and check box
document.getElementById("catgfilt").addEventListener("click",
function(){ let taskfilt = [] 

  if(document.getElementById("done").checked){
    tasks.forEach(x=> {
      if(x.category===document.getElementById("categories-list-filter").value && x.done)
      taskfilt.push(x)})
  }
  else{
  tasks.forEach(x=> {
    if(x.category===document.getElementById("categories-list-filter").value)
    taskfilt.push(x)})
  }


    renderTasks(taskfilt, "tasks-list");
;})





// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  if(checked){
    tasks.forEach(x=> {
      if(x.id===taskId)
        x.done = true
    })
  }
  else 
    tasks.forEach(x=> {
     if(x.id===taskId)
        x.done = false
  })
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
