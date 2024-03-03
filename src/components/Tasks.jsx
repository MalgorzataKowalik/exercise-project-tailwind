import { useState } from "react";
import NewTask from "./NewTask";
import Task from "./Task";

export default function Tasks({tasks, onAddTask, onDeleteTask}) {

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-600 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask}/>
      {tasks.length > 0 ?
      <ul className="text-stone-600 my-4">
        {tasks.map(task => <Task key={task.id} taskData={task} onDelete={onDeleteTask}/>)}
      </ul> :
      <p className="text-stone-600 my-4">This project doesn't have any tasks yet.</p>}

    </section>
  )
}