import { useState } from "react";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Revisar trabalho do Assis",
      description:
        "Verificar a formatação da atividade de segunda-feira de Engenharia de Software I",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar AFN e AFD",
      description: "Verificar conteúdo novo de Compiladores",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer frontend do trabalho de G1",
      description:"Fazer o frontend em React da aplicação de carros e usuário para a disciplina de Dev. FullStack 2",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-blue-500 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
