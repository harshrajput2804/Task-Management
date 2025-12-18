import { useState } from "react";

function TaskList({ tasks }) {
    const [taskList, setTasksList] = useState(tasks);

    // new task using input field
    const [newTask, setNewTask] = useState("");

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

                {/* input field to add new task when keyboard 'Enter' is pressed */}
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