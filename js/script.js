// global variables declarations

let employeeName;
let modalBox;
let taskList = [];
let singleEmpTaskList;
const empTaskList = document.getElementById("singleEmpTasksList");

//Display all the details of the employee
//Last task assinged, count of tasks which are completed,incomplete,overdue and others
function displayEmployee(empName){
    document.getElementById("empDetails").innerHTML =`${empName}`;
    empTaskList.innerHTML="";
    if(Object.keys(taskList).length != 0){
        for(tasks of taskList){
            if(tasks.employee_name.includes(empName))
            {
                if(tasks.employee_name == empName){
                    let empTask = document.createElement("li");
                    empTask.classList.add('list-group-item');
                    empTask.innerHTML = `
                        <strong>${tasks.taskText}</strong><br><br>
                        Deadline: ${tasks.deadline}<br><br>
                        <div class="btn-group">
                            Status: <button type="button" id="taskStatus" class="btn btn-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ${tasks.status}
                            </button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item" type="button" onclick="changeStatus(tasks,0)" value="Not Started">Not Started</button>
                                <button class="dropdown-item" type="button" onclick="changeStatus(tasks,1)" value="Completed">Completed</button>
                                <button class="dropdown-item" type="button" onclick="changeStatus(tasks,2)" value="In Progress">In Progress</button>
                            </div>
                        </div>
                    `;
                    empTaskList.appendChild(empTask);
                }
            }
        }
    }
}


//assign task modal
function addContenttoTaskModal(){
    let modalBody = document.getElementById("taskModalBody");
    
    modalBody.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="form-group col-12 m-2">
                <select name="empNames" class="form-control" id="empNameforTask" required>
                    <option value="null" disabled selected>--Select the Employee--</option>
                    <option value="Sneha Bhatt">Sneha Bhatt</option>
                    <option value="Harsh Shah">Harsh Shah</option>
                    <option value="Manvendra Singh">Manvendra Singh</option>
                    <option value="Hirvi Shah">Hirvi Shah</option>
                    <option value="Jaimil Noyda">Jaimil Noyda</option>
                    <option value="Varun Patel">Varun Patel</option>
                    <option value="Divyam Goswami">Divyam Goswami</option>
                </select>
            </div>
            <div class="form-group col-12 m-2">
                <textarea name="taskName" class="form-control" id="taskTextArea" style="resize:none;" cols="105" rows="5" placeholder="Enter the task....." required></textarea>
            </div>
            <div class="form-group col-12 m-2">
                <label for="datepicker" class="form">Deadline</label>                
                <input type="date" class="form-control" id="datepicker"  name="tasksDeadline" required>
            </div>
        </div>
    </div>
    `;
}

//Task Details Submission to file
function submitTaskData(){
    let task_empName = document.getElementById("empNameforTask").value;
    let task_details = document.getElementById("taskTextArea").value;
    let task_deadline = document.getElementById("datepicker").value;
    if(task_empName.value != "null" && task_details.value != "null" && task_deadline.value != "null" ){
        let text = {
            employee_name: task_empName,
            taskText: task_details,
            deadline: task_deadline,
            status: "Not Started"
        };
        taskList.push(text);
        
        alert("Task Assigned.");

        let allTasks = document.createElement('li');
        allTasks.classList.add('list-group-item');
        allTasks.innerHTML = "<p class=\"float-left\">" + text["taskText"] + "</p><p class=\"float-right\">" + text["employee_name"] + "</p><br><em class=\"float-right\">Deadline: " + text["deadline"] + "</em>";
        document.getElementById("allTaskList").appendChild(allTasks);
    }
    else{
        alert("Fill all the fields!!!!!!");
    }
}

//edit modal box
function changeStatus(data,val){
    if(val==0){
        data.status = "Not started";
        document.getElementById("taskStatus").innerHTML = data.status;
        console.log(data);
        return data.status;
    }
    else if(val==1)
    {
        data.status = "Completed";
        document.getElementById("taskStatus").innerHTML = data.status;
        console.log(data);
        return data.status;
    }
    else
    {
        data.status = "In Progress";
        document.getElementById("taskStatus").innerHTML = data.status;
        console.log(data);
        return data.status;
    }
}