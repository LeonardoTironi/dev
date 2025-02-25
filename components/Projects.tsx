export default function Projects() {
    const projects = [
      { name: "DeCor App", description: "App that allows users to take notes and record audio to assist in memorizing speeches for presentations." },
      { name: "Kappa", description: "A small forum for IFPR students" },
    ]
  
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Projects</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.name} className="px-4 py-4 sm:px-6">
                <div className="text-sm font-medium text-indigo-600">{project.name}</div>
                <div className="mt-1 text-sm text-gray-500">{project.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  