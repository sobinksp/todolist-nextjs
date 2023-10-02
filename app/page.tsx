import AddTask from "./components/add-task";

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen">
      <div className="text-center text-black">
        <h1 className="text-2xl pt-5">Todo List</h1>
        <AddTask />
      </div>
    </div>
  );
}
