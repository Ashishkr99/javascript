const todoList=[{
        name:'make dinner',
        dueDate:'22-12-2022'
    },
    {
        name:'wash dishes',
        dueDate:'23-12-2022'
    }  
];

renderTodoList();
function renderTodoList(){
    let todoListHTML='';

    for(let i=0;i<todoList.length;i++)
    {
        const todoName=todoList[i].name;
        const todoDate=todoList[i].dueDate;
        const html=`
            <div>${todoName} </div>
            <div> ${todoDate}</div> 
            <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML+=html;
    }

    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}


function addTodo()
{
   const inputElement= document.querySelector('.js-name-input');
   const name=inputElement.value;
   const inputDate= document.querySelector('.js-date-input');

   const mydate=inputDate.value;

   todoList.push({ name: name,
   dueDate: mydate});
   inputElement.value='';

   renderTodoList();
}