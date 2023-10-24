"use client";
import { ITask } from "@/types/TaskInterface";
import { MouseEventHandler, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { editTask } from "../api/task";

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalDel, setModalDel] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.data);
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
            <h3 className="text-lg font-bold">New Task</h3>
            <div className="mt-5">
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                placeholder="Add new task"
                className="input w-full"
              />
            </div>
          </form>
          <div className="flex mt-5 justify-between">
            {/* <form method="dialog"> */}
            {/* if there is a button in form, it will close the modal */}
            <button
              // type="submit"
              className="btn bg-blue-500"
              onClick={handleEdit}
              // onClick={() => setModalState(false)}
            >
              Submit
            </button>
            <button
              className="btn bg-red-500"
              onClick={() => setModalEdit(false)}
            >
              Close
            </button>
            {/* </form> */}
          </div>
        </Modal>
        <AiFillDelete cursor={"pointer"} size={22} />
      </td>
    </tr>
  );
}
