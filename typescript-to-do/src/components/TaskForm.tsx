import { useState, ChangeEvent, FormEvent } from "react";

// interfaces
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newTask: ITask = {
      id,
      title,
      difficulty,
    };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form className="w-full max-w-xl mx-auto mb-7 px-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 items-start w-full">
        <label className="flex flex-col gap-2 w-full">
          <span className="text-xl font-medium">Título:</span>
          <input
            type="text"
            name="title"
            className="border-1 w-full h-[42px] outline-none text-lg p-3 text-[16px] focus:border-b-lightBlue focus:border-b-2 shadow-sm rounded-sm"
            placeholder="Título da Tarefa"
            onChange={handleChange}
            value={title}
            required
          />
        </label>
        <label className="flex flex-col gap-2 w-full mb-3">
          <span className="text-xl font-medium">Dificuldade:</span>
          <input
            type="number"
            placeholder="Dificuldade da Tarefa"
            className="border-1 w-full h-[42px] outline-none text-lg p-3 text-[16px] focus:border-b-lightBlue focus:border-b-2 shadow-sm rounded-sm"
            onChange={handleChange}
            value={difficulty}
            required
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
  );
};

export default TaskForm;
