import { useState } from "react";
import AddTask from "./components/AddTasks";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fazer café",
      description: "Fazer café para tomar estudando!",
      isCompleted: false,
    },

    {
      id: 2,
      title: "Estudar react",
      description: "Fazer react para aprender a fazer telinha bonita!!",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar tailwind",
      description:
        "Estudar tailwindpara usar nos projetos react de telinha bonita!",
      isCompleted: true,
    },
  ]);

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

  return (
    <div className="h-screen w-screen flex justify-center p-6 bg-slate-500">
      <div className="w-[500px]">
        <h1 className="text-3xl text-center text-slate-100 font-bold">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
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
