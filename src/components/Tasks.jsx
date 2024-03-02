import { useState } from "react";
import NewTask from "./NewTask";
import Task from "./Task";

export default function Tasks() {
  const [enteredTasks, setEnteredTasks] = useState([])

  const handleAddTask = (task) => {
    const taskObj = {
      text: task,
      id: task[0] + Math.random()
    }
    setEnteredTasks(prev => [...prev, taskObj])
  }

  const handleDeleteTask = (deletedTask) => {
    setEnteredTasks(prev => {
      const filteredTasks = prev.filter(task => task.id != deletedTask.id)
      return filteredTasks
    })
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-600 mb-4">Tasks</h2>
      <NewTask onAddTask={handleAddTask}/>
      {enteredTasks.length > 0 ?
      <ul className="text-stone-600 my-4">
        {enteredTasks.map(task => <Task key={task.id} taskData={task} onDelete={handleDeleteTask}/>)}
      </ul> :
      <p className="text-stone-600 my-4">This project doesn't have any tasks yet.</p>}

    </section>
  )
}