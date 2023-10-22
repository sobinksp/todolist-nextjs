import { ITask } from "@/types/TaskInterface";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// AiFillEdit;
interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  return (
    <tr key={task.id}>
      <td className="w-full">{task.data}</td>
      <td className="flex gap-6">
        <AiFillEdit size={22} />
        <AiFillDelete size={22} />
      </td>
    </tr>
  );
}
