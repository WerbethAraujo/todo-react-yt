import { useEffect, useState } from "react";
import AddTask from "./components/AddTasks";
import TaskList from "./components/TaskList";

import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskSubmit = (title, description) => {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="h-screen w-screen flex justify-center p-6 bg-slate-500 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-center text-slate-100 font-bold">
          Gerenciador de Tarefas
        </h1>
        <AddTask onTaskSubmit={handleTaskSubmit} />
        <TaskList
          tasks={tasks}
          onTaskClick={handleTaskClick}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
