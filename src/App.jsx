import AddTask from "./componets/addTasks";
import TaskList from "./componets/taskList";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
