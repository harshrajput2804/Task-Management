import TaskList from "./components/TaskList"; 

function App() {
    // props to pass to TaskList component
    const tasks = [
        "Learn React Basics",
        "Understand Components",
        "Build First Project",
        "Add One more Task",
        "Add Second Task"
    ];
    
    return (
        <div>
          <h1>React Task Management</h1>
          <TaskList tasks={tasks} />
        </div>
    );
}
export default App;