import { getTasks } from "./api/task";
import AddTask from "./components/add-task";
import TodoList from "./components/todo-list";

export default async function Home() {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex flex-col gap-4 text-black p-5 items-center">
        <h1 className="text-2xl">Todo List</h1>
        <TodoList tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
}
