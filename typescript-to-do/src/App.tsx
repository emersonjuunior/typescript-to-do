import "./App.css";
import { useState } from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// interfaces
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: string): void => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <main className="min-h-[80vh] mb-4">
        <div>
          <h2 className="text-center text-2xl md:text-3xl font-medium mb-4">
            O que você vai fazer?
          </h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2 className="text-center text-2xl md:text-3xl font-medium mb-6">
            Suas Tarefas:
          </h2>
          <TaskList taskList={taskList} deleteTask={deleteTask} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
