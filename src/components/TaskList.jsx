import { CheckCheck, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskList = ({ tasks, onTaskClick, onDeleteTask }) => {
  const navigate = useNavigate();

  const handleSeeDetails = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left flex gap-2 ${
              task.isCompleted && "line-through"
            }`}
          >
            {" "}
            {task.isCompleted && <CheckCheck className="text-green-400" />}
            {task.title}
          </button>
          <button
            onClick={() => handleSeeDetails(task)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="bg-red-400 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
