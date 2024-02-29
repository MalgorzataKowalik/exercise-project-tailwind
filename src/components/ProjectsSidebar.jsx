import Button from "./Button";

export default function ProjectsSidebar({onStartAddProject, projectsState, onProjectSelect, ...props}) {

  const projects = projectsState.projects
  const selectedProjectId = projectsState.selectedProjectId

  return (
    <aside className="w-1/3 px-8 py-16 bg-[linear-gradient(-225deg,#AC32E4_0%,#7918F2_48%,#4801FF_100%)] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-3">
        {projects.map(project => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-50 hover:bg-[#fafaf922]"
          if (project.id === selectedProjectId) {
            cssClasses += " text-stone-50 bg-[#fafaf922]"
          }
          else {
            cssClasses += " text-[#fafaf9aa] bg-[#fafaf911]"
          }

          return (
            <li key={project.id}>
              <button 
                onClick={() => {onProjectSelect(project)}} 
                className={cssClasses}>
                  {project.title}
              </button>
            </li>
          )
        }
        )}
      </ul>
    </aside>
  )
}
