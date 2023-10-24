"use client";
// Everything in app is server component by default.
// Server component is not supported `useState`.

import { BiPlus } from "react-icons/bi";
import Modal from "./modal";
import { MouseEventHandler, useState } from "react";
import { addNewTask } from "../api/task";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
  const [modalState, setModalState] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const router = useRouter();

  const handleSubmitButton: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    const form = document.getElementById("taskForm");
    form?.dispatchEvent(new Event("submit"));
    await addNewTask({
      id: uuidv4(),
      data: newTask,
    });
    setNewTask("");
    setModalState(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalState(true)}
        className="btn btn-accent w-80 flex "
      >
        <BiPlus size={19} /> Add New Task
      </button>
      <Modal modalState={modalState} setModalState={setModalState}>
        <form id="taskForm">
          <h3 className="text-lg font-bold">New Task</h3>
          <div className="mt-5">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
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
            onClick={handleSubmitButton}
            // onClick={() => setModalState(false)}
          >
            Submit
          </button>
          <button
            className="btn bg-red-500"
            onClick={() => setModalState(false)}
          >
            Close
          </button>
          {/* </form> */}
        </div>
      </Modal>
    </div>
  );
}
