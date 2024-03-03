import Tasks from "./Tasks"

export default function SelectedProject({project, onProjectDelete, onAddTask, onDeleteTask}) {
  const formatedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  const handleAddTask = (task) => {
    const taskObj = {
      text: task,
      id: task[0] + Math.random(),
      projectId: project.id
    }
    onAddTask(taskObj)
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <button
            onClick={onProjectDelete}
            className="px-6 py-2 rounded-md bg-[#7918F2] text-stone-50 hover:bg-[#4801FF]">
            delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={project.tasks} onAddTask={handleAddTask} onDeleteTask={onDeleteTask}/>
    </div>
  )
}