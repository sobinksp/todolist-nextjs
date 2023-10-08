import { BiPlus } from "react-icons/bi";
export default function AddTask() {
  return (
    <div>
      <button className="btn btn-accent w-64">
        <BiPlus size={19} /> Add New Task
      </button>
      {/* <h1>this is a task2</h1> */}
    </div>
  );
}
