(function() {
  let tasks = [];
  const tasksList = document.getElementById('list');
  const addTaskInput = document.getElementById('add');
  const tasksCounter = document.getElementById('tasks-counter');

  // Using GET Request

  // function fetchTodos() {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then(function(response){
  //       return response.json()
  //     })
  //     .then(function(data) {
  //       tasks = data.slice(0, 10)
  //       renderList()
  //       console.log(tasks)
  //     })
  //     .catch(function(error) {
  //         console.log("Error In Fetching Data : ", error)
  //     })
  // }

  // Using Async Await

  async function fetchTodos() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      tasks = data.slice(0, 10)
      renderList()
    } catch (error) {
      console.log("Error In Fetching Data : ", error)
    }
  }

  function addTaskToDom(task){
    const li = document.createElement("li")

    li.innerHTML = `<input type="checkbox" id=${task.id} ${task.completed ? "checked" : ""} class="custom-checkbox">
    <label for=${task.id}> ${task.title} </label>
    <i class="fa-solid fa-trash delete" data-id=${task.id}></i>`

    tasksList.append(li)
  }


  function renderList () {
    tasksList.innerHTML = ""

    for (let i = 0; i < tasks.length; i++)
    {
      addTaskToDom(tasks[i])
    }
    tasksCounter.innerText = tasks.length
  }

  function toggleTask (taskId) {
    const task = tasks.filter(function(task) {
      return task.id === Number(taskId)
    })

    // Checking If Task With The TaskId Is Found Or Not
    if(task.length == 1){
      task[0].completed = !task[0].completed
      renderList()
      showNotification("Task Toggled Successfully")
      return
    }
    showNotification("Error In Toggleing Task")
  }

  function deleteTask (taskId) {
    const newTasks = tasks.filter(function(task) {
      return task.id != taskId
    })

    tasks = newTasks
    renderList()
    showNotification("Task Deleted Successfully")
  }

  // Post Request

  // function addTask (task) {
  //   if(task)
  //   {
  //     fetch("https://jsonplaceholder.typicode.com/todos", {
  //       method: "POST", 
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(task)
  //     }).then(function(response){
  //       return response.json
  //     }).then(function(data){
  //       tasks.push(task)
  //       showNotification("'"+ task.title + "' Added Successfully")
  //       renderList()
  //     }).catch(function(error) {
  //       showNotification("Error In Adding Task")
  //     })
  //   }
  // }

  function addTask (task) {
    if(task)
    {
      tasks.push(task)
      showNotification("'"+ task.title + "' Added Successfully")
      renderList()
      return
    }
    showNotification("Error In Adding Task")
  }

  function showNotification(title) {
    alert(title)
  }

  function handleInputKeypress(e) {
    if (e.key === "Enter") {
      const title = e.target.value

      if(!title) {
        showNotification("Task Cannot Be Empty")
        return
      }
    
      const task = {
        title,
        id: Date.now(),
        completed: false
      }
    
      e.target.value = "",
      addTask(task)
    }
  }

  function handleEventListener(e) {
    const target = e.target
    if(target.className === "custom-checkbox"){
      const taskId = target.id
      toggleTask(taskId)
      return
    }
    if(target.className === "fa-solid fa-trash delete"){
      const taskId = target.dataset.id
      deleteTask(taskId)
      return
    }
  }

  function initializeApp() {
    fetchTodos()
    addTaskInput.addEventListener("keyup", handleInputKeypress)
    document.addEventListener("click", handleEventListener)
  }

  initializeApp()
})()