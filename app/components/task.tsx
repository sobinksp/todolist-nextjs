"use client";
import { ITask } from "@/types/TaskInterface";
import { MouseEventHandler, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { delTask, editTask } from "../api/task";

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.data);
  const [modalDel, setModalDel] = useState<boolean>(false);
  // const [deleleTask, setDeleleTask] = useState<string>(task.data);
  const router = useRouter();
  const handleEdit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const form = document.getElementById("taskForm");
    form?.dispatchEvent(new Event("submit"));
    await editTask({
      id: task.id,
      data: editedTask,
    });

    setModalEdit(false);
    router.refresh();
  };

  const handleDel = async (id: string) => {
    // const form = document.getElementById("taskForm");
    // form?.dispatchEvent(new Event("submit"));
    await delTask(id);
    setModalDel(false);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <td className="w-full">{task.data}</td>
      <td className="flex gap-6">
        <AiFillEdit
          onClick={() => setModalEdit(true)}
          cursor={"pointer"}
          size={22}
        />
        <Modal modalState={modalEdit} setModalState={setModalEdit}>
          <form id="taskForm">
            <h3 className="text-lg font-bold">Edit Task</h3>
            <div className="mt-5">
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                placeholder="Type here"
                className="input w-full"
              />
            </div>
          </form>
          <div className="flex mt-5 justify-between">
            <button className="btn bg-blue-500" onClick={handleEdit}>
              Submit
            </button>
            <button
              className="btn bg-red-500"
              onClick={() => setModalEdit(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <AiFillDelete
          onClick={() => setModalDel(true)}
          cursor={"pointer"}
          size={22}
        />
        <Modal modalState={modalDel} setModalState={setModalDel}>
          <h3 className="text-lg font-bold">
            Do you want to remove this task?
          </h3>
          <div key={task.id} className="mt-5">
            {task.data ? task.data : "This task is empty."}
          </div>
          <div className="flex mt-5 justify-between">
            <button
              className="btn bg-blue-500"
              onClick={() => handleDel(task.id)}
            >
              Submit
            </button>
            <button
              className="btn bg-red-500"
              onClick={() => setModalDel(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
}
