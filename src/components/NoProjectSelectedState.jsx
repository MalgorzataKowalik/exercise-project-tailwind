import image from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelectedState({onStartAddProject, ...props}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={image} className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-gray-700 text-xl font-bold my-4">No project selected</h2>
      <p className="text-gray-500 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button style="color" onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  )
}