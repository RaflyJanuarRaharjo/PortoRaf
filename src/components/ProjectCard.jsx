import { Link } from 'react-router-dom'
import ProjectMedia from './ProjectMedia'

// Kartu project di halaman utama -> menuju detail di /projects
export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects#${project.id}`}
      data-sfx
      className="sm:col-span-2 border border-gray-200/80 rounded-[1.25rem] p-3 flex flex-col hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 transition-all duration-300 group"
    >
      <div className="overflow-hidden rounded-[0.85rem] bg-gray-100 aspect-video">
        <ProjectMedia
          media={project.media}
          alt={project.name}
          className="group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <div className="flex items-end justify-between gap-3 px-3 pt-4 pb-2">
        <div>
          <h3 className="font-medium text-[15px] text-gray-900">{project.name}</h3>
          <p className="text-gray-500 text-[14px] mt-1">{project.description}</p>
        </div>
        <span className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
      </div>
    </Link>
  )
}
