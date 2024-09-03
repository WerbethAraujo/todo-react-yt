import { useState } from "react";

const AddTask = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 rounded-md flex flex-col w-full bg-slate-200">
      <input
        className="border border-slate-300 outline-none px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Uma breve descrição da tarefa..."
        className="border border-slate-300 outline-none px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha os dados da tarefa!");
          }
          onTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 font-bold uppercase text-white px-4 py-2 rounded-md"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};

export default AddTask;
