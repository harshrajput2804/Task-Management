import { useEffect, useState } from "react";

function TaskList({ tasks }) {
    const [taskList, setTasksList] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : tasks;
    });
    const [newTask, setNewTask] = useState("");   // new task using input field

    // save task to Local Storage whenever taskList changes(on update)
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }, [taskList]);


    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasksList([...taskList, newTask]);
            setNewTask("");
        }
    };
    return (
        <div>
            <div className="section1">

                <h2>My Tasks</h2><hr />

                <input
                    type="text"
                    placeholder="Enter New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <button onClick={addTask} disabled={!newTask.trim()}>
                    Add Task
                </button>

                <ul>
                    {taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default TaskList;