import { ITask } from "@/types/TaskInterface";
import Task from "./task";

// props are a type of object where the value of attribute of a tag is stored.
// the word props implies properties
interface TodoListProps {
  tasks: ITask[];
}
export default function TodoList({ tasks }: TodoListProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
