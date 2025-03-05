import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
  deleteTask(id: string): void;
}

const TaskList = ({ taskList, deleteTask }: Props) => {
  return (
    <div>
      {taskList.length > 0 ? (
        <div className="flex flex-col gap-7 w-full max-w-xl mx-auto">
          {taskList.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center border-b-1 border-gray-400 pb-5 pt-3 px-2"
            >
              <div className="flex flex-col gap-3">
                <h4 className="font-medium text-xl">{task.title}</h4>
                <p>
                  Dificuldade:{" "}
                  <span className="font-medium text-lg">{task.difficulty}</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button>
                  <i className="fa-solid fa-pencil text-xl bg-black text-white px-2 py-2 rounded cursor-pointer hover:bg-gray-800 duration-200"></i>
                </button>
                <button>
                  <i
                    className="fa-solid fa-trash text-xl bg-black text-white px-2 py-2 rounded cursor-pointer hover:bg-gray-800 duration-200"
                    onClick={() => deleteTask(task.id)}
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full items-center">
          <p className="text-xl">Não há tarefas cadastradas!</p>
          <img src="/empty.png" alt="Nenhuma tarefa cadastrada" className="md:w-sm w-xs" />
        </div>
      )}
    </div>
  );
};

export default TaskList;
