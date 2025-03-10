import { ITask } from "../interfaces/Task";
import { FormEvent, useState } from "react";

interface Props {
  btnText: string;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  taskToUpdate: ITask | null;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Modal = ({
  btnText,
  setEditModal,
  taskToUpdate,
  taskList,
  setTaskList,
}: Props) => {
  const [newTitle, setNewTitle] = useState<string>(taskToUpdate!.title);
  const [newDifficulty, setNewDifficulty] = useState<number>(
    taskToUpdate!.difficulty
  );

  const updateTask = (
    e: FormEvent<HTMLFormElement>,
    title: string,
    difficulty: number,
    id: string
  ) => {
    e.preventDefault();
    const updatedTask: ITask = { title, difficulty, id };

    const tasksStorage = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasksStorage));

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    setEditModal(false);
  };

  return (
    <div className="w-full h-full inset-0 bg-black/30 border-2 fixed flex justify-center items-center z-30">
      <div className="w-full bg-gray-50 max-w-xl px-8 rounded h-[400px] flex flex-col justify-center relative">
        <span
          className="absolute top-2 right-2 text-xl font-medium cursor-pointer"
          onClick={() => setEditModal(false)}
        >
          X
        </span>
        <h3 className="text-2xl font-medium text-center mb-2 mt-6">
          Texto Modal
        </h3>
        <form
          className="w-full max-w-xl mx-auto mb-7"
          onSubmit={(e) =>
            updateTask(e, newTitle, newDifficulty, taskToUpdate!.id)
          }
        >
          <div className="flex flex-col gap-4 items-start w-full">
            <label className="flex flex-col gap-2 w-full">
              <span className="text-xl font-medium">Título:</span>
              <input
                type="text"
                name="title"
                className="border-1 w-full h-[42px] outline-none text-lg p-3 text-[16px] focus:border-b-lightBlue focus:border-b-2 shadow-sm rounded-sm"
                placeholder="Título da Tarefa"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 w-full mb-3">
              <span className="text-xl font-medium">Dificuldade:</span>
              <input
                type="number"
                placeholder="Dificuldade da Tarefa"
                className="border-1 w-full h-[42px] outline-none text-lg p-3 text-[16px] focus:border-b-lightBlue focus:border-b-2 shadow-sm rounded-sm"
                required
                value={newDifficulty}
                onChange={(e) => setNewDifficulty(parseFloat(e.target.value))}
              />
            </label>
            <button
              type="submit"
              className="self-center bg-lightBlue text-black duration-200 cursor-pointer hover:bg-sky-300 px-6 py-3 mb-4 rounded-lg w-full"
            >
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
