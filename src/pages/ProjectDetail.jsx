import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import ProjectMedia from '../components/ProjectMedia'
import { ArrowRight } from '../components/icons'
import { getProject, projects } from '../data/projects'
import { fadeUp, stagger } from '../lib/motion'

// Menu sidebar: hanya section yang ada isinya
const SECTIONS = [
  { id: 'overview', label: 'Overview', key: 'overview' },
  { id: 'challenge', label: 'Challenge', key: 'challenge' },
  { id: 'outcome', label: 'Outcome', key: 'outcome' },
  { id: 'gallery', label: 'Gallery', key: 'gallery' },
  { id: 'tools', label: 'Tools', key: 'tools' },
]

const Paragraphs = ({ items }) => (
  <div className="space-y-4 text-[14.5px] text-gray-600 leading-[1.7]">
    {items.map((t) => <p key={t}>{t}</p>)}
  </div>
)

const Chip = ({ children }) => (
  <span className="text-[12.5px] text-gray-600 bg-gray-100/80 px-2.5 py-1 rounded-md">{children}</span>
)

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)
  const [zoom, setZoom] = useState(null)

  const nav = useMemo(
    () => (project ? SECTIONS.filter((s) => project[s.key]?.length) : []),
    [project]
  )
  const ids = useMemo(() => ['top', ...nav.map((n) => n.id)], [nav])

  if (!project) return <Navigate to="/projects" replace />

  const index = projects.findIndex((p) => p.id === id)
  const next = projects[(index + 1) % projects.length]

  return (
    <Layout
      key={id}
      navItems={nav}
      ids={ids}
      back={{ to: '/projects', label: 'All projects' }}
      note={`${project.name}${project.year ? ` · ${project.year}` : ''}`}
    >
      {/* Breadcrumb + hero */}
      <motion.header id="top" variants={stagger} initial="hidden" animate="show" className="scroll-mt-24 mb-14">
        <motion.nav variants={fadeUp} className="text-[13px] text-gray-400 mb-4">
          <Link to="/projects" data-sfx className="hover:text-gray-900 transition-colors">Work</Link>
          <span className="mx-1.5">›</span>
          <span className="text-gray-600">{project.name}</span>
        </motion.nav>

        <motion.h1 variants={fadeUp} className="text-[26px] font-semibold text-gray-900 tracking-tight">
          {project.name}
        </motion.h1>
        <motion.p variants={fadeUp} className="text-[15px] text-gray-500 mt-1.5 leading-[1.6] max-w-[560px]">
          {project.description}
        </motion.p>

        {project.tags?.length > 0 && (
          <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((t) => <Chip key={t}>{t}</Chip>)}
          </motion.div>
        )}

        <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-[1.25rem] border border-gray-200/80 bg-gray-50 aspect-video">
          <ProjectMedia media={project.media} alt={project.name} />
        </motion.div>

        {/* Info singkat */}
        <motion.dl variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 text-[14px]">
          {project.year && (
            <div>
              <dt className="text-gray-400 text-[13px]">Year</dt>
              <dd className="text-gray-900 mt-1">{project.year}</dd>
            </div>
          )}
          {project.services?.length > 0 && (
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-gray-400 text-[13px]">Services</dt>
              <dd className="text-gray-900 mt-1 leading-[1.6]">{project.services.join(', ')}</dd>
            </div>
          )}
          {project.url && project.url !== '#' && (
            <div>
              <dt className="text-gray-400 text-[13px]">Live</dt>
              <dd className="mt-1">
                <a href={project.url} target="_blank" rel="noopener" data-sfx className="group inline-flex items-center gap-1 text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors">
                  Visit website <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </dd>
            </div>
          )}
        </motion.dl>
      </motion.header>

      {project.overview?.length > 0 && (
        <Section id="overview" title="Overview" className="mb-14">
          <Paragraphs items={project.overview} />
          {project.result && (
            <p className="mt-6 pl-4 border-l-2 border-gray-900 text-[14.5px] text-gray-900 leading-[1.6]">{project.result}</p>
          )}
        </Section>
      )}

      {project.challenge?.length > 0 && (
        <Section id="challenge" title="Challenge" className="mb-14">
          <Paragraphs items={project.challenge} />
        </Section>
      )}

      {project.outcome?.length > 0 && (
        <Section id="outcome" title="Outcome" className="mb-14">
          <Paragraphs items={project.outcome} />
        </Section>
      )}

      {project.gallery?.length > 0 && (
        <Section id="gallery" title="Gallery" aside={<span className="text-[13px] text-gray-400">{project.gallery.length} images</span>} className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => (
              <button
                key={img.src}
                type="button"
                data-sfx
                onClick={() => setZoom(i)}
                className={`group text-left ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="overflow-hidden rounded-xl border border-gray-200/80 bg-gray-50 aspect-video">
                  <img
                    src={img.src}
                    alt={img.caption || project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                {img.caption && <p className="text-[13px] text-gray-400 mt-2">{img.caption}</p>}
              </button>
            ))}
          </div>
        </Section>
      )}

      {project.tools?.length > 0 && (
        <Section id="tools" title="Tools" className="mb-14">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((t) => <Chip key={t}>{t}</Chip>)}
          </div>
        </Section>
      )}

      {/* Next project */}
      {next && next.id !== project.id && (
        <Link
          to={`/projects/${next.id}`}
          data-sfx
          className="group flex items-center justify-between gap-4 border-t border-gray-100 pt-8 mt-4 mb-16"
        >
          <div>
            <p className="text-[13px] text-gray-400">Next project</p>
            <p className="text-[18px] font-medium text-gray-900 mt-1">{next.name}</p>
          </div>
          <span className="text-gray-400 group-hover:text-gray-900 transition-all duration-200 group-hover:translate-x-1">
            <ArrowRight size={18} />
          </span>
        </Link>
      )}

      {/* Lightbox galeri */}
      <AnimatePresence>
        {zoom !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
          >
            <motion.img
              key={project.gallery[zoom].src}
              src={project.gallery[zoom].src}
              alt={project.gallery[zoom].caption || ''}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
              onClick={(e) => {
                e.stopPropagation()
                setZoom((zoom + 1) % project.gallery.length)
              }}
            />
            <p className="text-white/80 text-[14px] mt-4">
              {project.gallery[zoom].caption} <span className="text-white/40">· {zoom + 1}/{project.gallery.length}</span>
            </p>
            <p className="text-white/40 text-[12px] mt-1">Klik gambar untuk berikutnya, klik di luar untuk menutup</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
