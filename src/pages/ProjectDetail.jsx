import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import ProjectMedia from '../components/ProjectMedia'
import ToolLogos from '../components/ToolLogos'
import { getProject } from '../data/projects'
import { fadeUp, stagger } from '../lib/motion'

// Menu sidebar: hanya section yang ada isinya yang muncul
const SECTIONS = [
  { id: 'overview', label: 'Overview', key: 'overview' },
  { id: 'challenge', label: 'Challenge', key: 'challenge' },
  { id: 'goals', label: 'Goals', key: 'goals' },
  { id: 'process', label: 'Process', key: 'process' },
  { id: 'features', label: 'Key features', key: 'features' },
  { id: 'visual', label: 'Visual style', key: 'palette' },
  { id: 'outcome', label: 'Outcome', key: 'outcome' },
  { id: 'learnings', label: 'Learnings', key: 'learnings' },
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

const Info = ({ label, children }) => (
  <div>
    <dt className="text-gray-400 text-[13px]">{label}</dt>
    <dd className="text-gray-900 mt-1 leading-[1.6]">{children}</dd>
  </div>
)

const num = (i) => String(i + 1).padStart(2, '0')

// Teks gelap/terang otomatis sesuai warna swatch
const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return (r * 299 + g * 587 + b * 114) / 1000 > 160
}

function Swatch({ name, hex }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }
  const light = isLight(hex)
  return (
    <button
      type="button"
      data-sfx
      onClick={copy}
      title="Copy hex"
      className="group text-left rounded-xl border border-gray-200/80 overflow-hidden hover:border-gray-300 transition-colors"
    >
      <div className="h-20 flex items-end p-2.5" style={{ background: hex }}>
        <span className={`text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity ${light ? 'text-gray-900' : 'text-white'}`}>
          {copied ? 'Copied' : 'Copy'}
        </span>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-[13px] text-gray-900">{name}</p>
        <p className="text-[12px] text-gray-400 uppercase mt-0.5">{hex}</p>
      </div>
    </button>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)
  const [zoom, setZoom] = useState(null)

  const nav = useMemo(
    () => (project ? SECTIONS.filter((s) => project[s.key]?.length) : []),
    [project]
  )
  const ids = useMemo(() => ['top', ...nav.map((n) => n.id)], [nav])

  // Tutup gambar besar dengan Esc
  useEffect(() => {
    if (zoom === null) return
    const onKey = (e) => e.key === 'Escape' && setZoom(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  if (!project) return <Navigate to="/projects" replace />

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
        <motion.dl variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mt-8 text-[14px]">
          {project.year && <Info label="Year">{project.year}</Info>}
          {project.type && <Info label="Type">{project.type}</Info>}
          {project.role && <Info label="Role">{project.role}</Info>}
          {project.services?.length > 0 && <Info label="Services">{project.services.join(', ')}</Info>}
        </motion.dl>

        {project.url && (
          <motion.a
            variants={fadeUp}
            href={project.url}
            target="_blank"
            rel="noopener"
            data-sfx
            className="group mt-8 flex w-full items-center justify-center gap-1.5 px-4 py-3 bg-gray-900 text-white text-[14.5px] font-medium rounded-xl hover:bg-gray-700 transition-colors"
          >
            Visit site
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </motion.a>
        )}
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

      {project.goals?.length > 0 && (
        <Section id="goals" title="Goals" className="mb-14">
          <ol className="divide-y divide-gray-100 border-y border-gray-100">
            {project.goals.map((g, i) => (
              <li key={g} className="flex gap-4 py-4 text-[14.5px] leading-[1.6]">
                <span className="text-gray-400 tabular-nums">{num(i)}</span>
                <span className="text-gray-700">{g}</span>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {project.process?.length > 0 && (
        <Section id="process" title="Process" className="mb-14">
          <ol className="relative">
            {project.process.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                {/* garis timeline */}
                {i < project.process.length - 1 && (
                  <span className="absolute left-[13px] top-8 bottom-0 w-px bg-gray-200" />
                )}
                <span className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[11.5px] text-gray-500 tabular-nums">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[15px] font-medium text-gray-900">{step.title}</h3>
                  <p className="text-[14.5px] text-gray-600 leading-[1.7] mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {project.features?.length > 0 && (
        <Section
          id="features"
          title="Key features"
          aside={<span className="text-[13px] text-gray-400">{project.features.length} highlights</span>}
          className="mb-14"
        >
          <div className="space-y-12">
            {project.features.map((f, i) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {f.image && (
                  <button
                    type="button"
                    data-sfx
                    onClick={() => setZoom(f)}
                    className="group block w-full overflow-hidden rounded-xl border border-gray-200/80 bg-gray-50 aspect-video"
                  >
                    <img
                      src={f.image}
                      alt={f.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </button>
                )}
                <div className="flex gap-4 mt-4">
                  <span className="text-[13px] text-gray-400 tabular-nums pt-0.5">{num(i)}</span>
                  <div>
                    <h3 className="text-[15px] font-medium text-gray-900">{f.title}</h3>
                    <p className="text-[14.5px] text-gray-600 leading-[1.7] mt-1">{f.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>
      )}

      {project.palette?.length > 0 && (
        <Section id="visual" title="Visual style" className="mb-14">
          <p className="text-[14.5px] text-gray-600 leading-[1.7] mb-5">Main colors used across the page. Click a color to copy its hex code.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.palette.map((c) => <Swatch key={c.hex + c.name} {...c} />)}
          </div>
        </Section>
      )}

      {project.outcome?.length > 0 && (
        <Section id="outcome" title="Outcome" className="mb-14">
          <Paragraphs items={project.outcome} />
        </Section>
      )}

      {project.learnings?.length > 0 && (
        <Section id="learnings" title="Learnings" className="mb-14">
          <ul className="space-y-3">
            {project.learnings.map((l) => (
              <li key={l} className="flex gap-3 text-[14.5px] text-gray-600 leading-[1.7]">
                <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.tools?.length > 0 && (
        <Section id="tools" title="Tools" className="mb-20">
          <ToolLogos tools={project.tools} />
        </Section>
      )}

      {/* Gambar besar */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
          >
            <motion.img
              src={zoom.image}
              alt={zoom.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-full max-h-[82vh] rounded-lg object-contain"
            />
            <p className="text-white/80 text-[14px] mt-4">{zoom.title}</p>
            <p className="text-white/40 text-[12px] mt-1">Klik di mana saja atau tekan Esc untuk menutup</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
