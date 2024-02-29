import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelectedState from "./components/NoProjectSelectedState";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    })
  }

  function handleAddNewProject(newProjectData) {
    const newProject = {
      ...newProjectData,
      id: Math.random()
    }

    setProjectsState(prev => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId: undefined
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      }
    })
  }

  function handleProjectSelect(project) {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: project.id
      }
    })
  }

  function handleProjectDelete() {

    setProjectsState(prev => {
      return {
        selectedProjectId: undefined,
        projects: prev.projects.filter(project => project.id !== prev.selectedProjectId)
      }
    })
  }

  let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onProjectDelete={handleProjectDelete}/>

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddNewProject={handleAddNewProject} onCancelAddProject={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelectedState onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projectsState={projectsState} onProjectSelect={handleProjectSelect}/>
      {content}
    </main>
  );
}

export default App;
