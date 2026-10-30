import Layout from '../components/Layout'
import Section from '../components/Section'
import ProjectMedia from '../components/ProjectMedia'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const NAV = projects.map((p) => ({ id: p.id, label: p.name }))
const IDS = NAV.map((n) => n.id)

export default function Projects() {
  return (
    <Layout
      navItems={NAV}
      ids={IDS}
      back={{ to: '/', label: 'Back' }}
      note={`${projects.length} projects. Updated ${profile.updated}.`}
    >
      <header className="mb-10">
        <h1 className="text-[19px] font-semibold text-gray-900 tracking-tight">Projects</h1>
        <p className="text-[14.5px] text-gray-500 mt-0.5">Selected work by {profile.name}.</p>
      </header>

      {projects.map((p) => (
        <Section key={p.id} id={p.id} className="mb-16">
          <div className="overflow-hidden rounded-[1.25rem] border border-gray-200/80 bg-gray-50 aspect-video">
            <ProjectMedia media={p.media} alt={p.name} />
          </div>
          <div className="flex items-start justify-between gap-4 mt-5">
            <div>
              <h2 className="font-medium text-[16px] text-gray-900">{p.name}</h2>
              <p className="text-gray-500 text-[14.5px] mt-1 leading-[1.6]">{p.description}</p>
              {p.stack && <p className="text-gray-400 text-[13px] mt-2">{p.stack}</p>}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener"
              data-sfx
              className="flex-shrink-0 inline-flex items-center gap-1 text-[14px] text-gray-500 hover:text-gray-900 transition-colors"
            >
              Visit <span>↗</span>
            </a>
          </div>
        </Section>
      ))}

      <p className="text-[13px] text-gray-400 mt-4 mb-16">© 2026 {profile.name}</p>
    </Layout>
  )
}
