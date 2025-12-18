import TaskList from "../components/TaskList";

function Tasks() {
    // props to pass to TaskList component
    const defaultTasks = [
        "Learn React Basics",
        "Understand Components",
        "Build First Project"
    ];
    
    return (
        <div>
          <h1>React Task Management</h1>
          <TaskList tasks={defaultTasks} />
        </div>
    );
}

export default Tasks;