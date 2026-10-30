import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Layout from '../components/Layout'
import Section, { Count } from '../components/Section'
import ShowMore from '../components/ShowMore'
import ProjectCard from '../components/ProjectCard'
import { ArrowRight } from '../components/icons'
import { profile } from '../data/profile'
import { achievements } from '../data/achievements'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import { fadeUp, listItem, stagger } from '../lib/motion'

const NAV = [
  { id: 'about', label: 'About me' },
  { id: 'achievement', label: 'Achievement' },
  { id: 'project', label: 'Project' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const IDS = NAV.map((n) => n.id)

const linkClass =
  'text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <Layout navItems={NAV} ids={IDS} note={`Personal design log. Updated ${profile.updated}.`}>
      {/* About: muncul bergantian saat halaman dibuka */}
      <Section id="about" animate={false}>
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.img
            variants={fadeUp}
            whileHover={{ scale: 1.08, rotate: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover shadow-sm mb-4 cursor-pointer"
          />
          <motion.h1 variants={fadeUp} className="text-[19px] font-semibold text-gray-900 tracking-tight">{profile.name}</motion.h1>
          <motion.p variants={fadeUp} className="text-[14.5px] text-gray-500 mt-0.5 flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role}
          </motion.p>
          <div className="text-[14.5px] text-gray-600 mt-5 leading-[1.6] space-y-4 max-w-[600px]">
            <motion.p variants={fadeUp}>{profile.intro}</motion.p>
            <motion.p variants={fadeUp}>
              Previously, I worked at {profile.previously}. You can find me on{' '}
              <a href={profile.instagram.url} target="_blank" rel="noopener" data-sfx className={linkClass}>
                {profile.instagram.handle}
              </a>{' '}
              and via{' '}
              <a href="#contact" data-sfx className={linkClass}>email</a>.
            </motion.p>
          </div>
        </motion.div>
      </Section>

      {/* Achievement */}
      <Section id="achievement" title="Achievement" aside={<Count>{achievements.length} awards</Count>}>
        <ShowMore items={achievements} limit={3} sectionId="achievement">
          {(items) => (
            <ul className="divide-y divide-gray-100">
              <AnimatePresence initial={false}>
              {items.map((a, i) => (
                <motion.li key={a.title} {...listItem(i - 3)} className="py-5 first:pt-0">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-medium text-[15px] text-gray-900 leading-[1.5]">{a.title}</h3>
                    <span className="text-gray-400 text-[13px] whitespace-nowrap mt-0.5">{a.date}</span>
                  </div>
                  <div className="text-[13.5px] text-gray-500 mt-0.5">{a.issuer}</div>
                  <p className="text-[14.5px] text-gray-600 leading-[1.6] mt-2">{a.description}</p>
                </motion.li>
              ))}
              </AnimatePresence>
            </ul>
          )}
        </ShowMore>
      </Section>

      {/* Projects */}
      <Section
        id="project"
        title="Projects"
        aside={
          <Link to="/projects" data-sfx className="group inline-flex items-center gap-1 text-[13.5px] text-gray-500 hover:text-gray-900 transition-colors">
            View all <span className="transition-transform duration-200 group-hover:translate-x-0.5"><ArrowRight /></span>
          </Link>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" aside={<Count>{experience.length} roles</Count>}>
        <ShowMore items={experience} limit={4} sectionId="experience" buttonClass="mt-6">
          {(items) => (
            <div className="flex flex-col gap-8">
              <AnimatePresence initial={false}>
              {items.map((e, i) => (
                <motion.div key={e.company + e.period} {...listItem(i - 4)}>
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h3 className="font-medium text-[15px] text-gray-900">{e.role}</h3>
                    <span className="bg-gray-100/80 text-gray-500 text-[13px] px-2.5 py-1 rounded-md whitespace-nowrap">{e.period}</span>
                  </div>
                  <div className="text-[14.5px] text-gray-700 font-medium">{e.company}</div>
                  {e.description && <p className="text-[14.5px] text-gray-500 leading-[1.6] mt-2">{e.description}</p>}
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
          )}
        </ShowMore>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" className="mb-16">
        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50/50">
          <p className="text-[14.5px] text-gray-600 leading-[1.6]">{profile.contactText}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <a href={`mailto:${profile.email}`} data-sfx className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-[8px] hover:bg-gray-700 transition-colors">
              Send email
            </a>
            <a href={profile.instagram.url} target="_blank" rel="noopener" data-sfx className="px-4 py-2 border border-gray-200 bg-white text-gray-700 text-sm font-medium rounded-[8px] hover:border-gray-300 hover:text-gray-900 transition-colors">
              {profile.instagram.handle}
            </a>
          </div>
        </div>
        <p className="text-[13px] text-gray-400 mt-10">© 2026 {profile.name}</p>
      </Section>
    </Layout>
  )
}
