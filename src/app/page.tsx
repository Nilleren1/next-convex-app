"use client";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const [text, setText] = useState('');
  const createTask = useMutation(api.todos.createTodo);
  const todos = useQuery(api.todos.getTodos);

  return (
  
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex row-start-2 items-center sm:items-start gap-5">
        <form className="flex flex-col gap-2 items-center" onSubmit={(e) => {
          e.preventDefault();
          //convex mutation displayed here
          if (!text.trim()) { return; }
          createTask({ text: text.trim() });
          setText('');
        }}>
          <input className="border border-black dark:border-white rounded-md px-2 py-1" value={text} onChange={(e) => setText(e.target.value)} />
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 border border-blue-500 hover:border-transparent rounded w-1/2">Create</button>
        </form>
        <div className="flex flex-col divide-y divide-gray-200">
          {todos?.map(todo => (
            <div className="py-2" key={todo._id}>
              {todo.text}
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
