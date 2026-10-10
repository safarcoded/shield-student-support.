import { useState, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleHelp, HeartHandshake, LockKeyhole, Menu, ShieldCheck, Sparkles, WalletCards, X } from 'lucide-react'
import { demoCases, demoMetrics, principles } from './data/demo'

const navItems = [
  { label: 'Our work', to: '/students' },
  { label: 'Transparency', to: '/fund' },
  { label: 'About us', to: '/about' },
]

function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="SHIELD home">
    <span className="brand-mark"><ShieldCheck size={23} strokeWidth={2.1} /></span>
    <span className="brand-word">SHIELD<span className="brand-dot">.</span><small>STUDENT SUPPORT INITIATIVE</small></span>
  </Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navItems.map(item => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
        <Link className="button button-dark nav-cta" to="/support" onClick={() => setOpen(false)}>Support the mission <ArrowUpRight size={16} /></Link>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {location.pathname !== '/' && <div className="route-progress" />}
  </header>
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>
}

function HeroArtwork() {
  return <div className="hero-art" aria-label="Illustration of a protective shield and student support">
    <div className="art-glow" />
    <div className="art-orbit orbit-one" />
    <div className="art-orbit orbit-two" />
    <div className="art-card card-back"><span className="mini-label">SUPPORT REQUEST</span><span className="fake-line long" /><span className="fake-line" /><span className="fake-line short" /><div className="fake-status"><span /> REVIEW IN PROGRESS</div></div>
    <div className="art-shield"><ShieldCheck size={116} strokeWidth={1.1} /><span className="shield-spark"><Sparkles size={19} /></span></div>
    <div className="art-card card-front"><div className="front-icon"><HeartHandshake size={20} /></div><div><strong>A little support.</strong><span>A meaningful difference.</span></div><span className="front-check"><Check size={15} /></span></div>
    <span className="floating-note note-top"><span className="note-icon"><LockKeyhole size={15} /></span> Privacy comes first</span>
    <span className="floating-note note-bottom"><span className="note-icon note-icon-amber"><WalletCards size={15} /></span> Transparent by design</span>
    <span className="art-index">01 / THE SHIELD APPROACH</span>
  </div>
}

function Home() {
  return <>
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>STUDENT-LED · COMMUNITY-POWERED</Eyebrow>
            <h1>Unexpected charges.<br /><em>You're not</em> on your own.</h1>
            <p className="hero-lede">A student support initiative built to help with unexpected institute fines, replacement ID cards, and essential administrative charges — with dignity, care, and accountability.</p>
            <div className="hero-actions">
              <Link to="/students" className="button button-primary">See how support works <ArrowRight size={17} /></Link>
              <Link to="/about" className="text-link">Meet SHIELD <ArrowUpRight size={16} /></Link>
            </div>
            <div className="trust-row"><div className="avatar-stack"><span>S</span><span>H</span><span>+</span></div><div><strong>Small help. Real breathing room.</strong><small>Designed around student dignity, not publicity.</small></div></div>
          </div>
          <HeroArtwork />
        </div>
        <div className="hero-bottom container"><span>BUILT FOR THE MOMENTS STUDENTS DIDN'T PLAN FOR</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={15} /></span></div>
      </section>

      <section className="metrics-section">
        <div className="container">
          <div className="demo-banner"><span className="demo-pulse" /> PRE-LAUNCH PREVIEW <span>All figures and examples below are illustrative. No funds are being accepted.</span></div>
          <div className="metrics-grid">{demoMetrics.map((m, i) => <div className="metric" key={m.label}><span className="metric-index">0{i + 1}</span><strong>{m.value}</strong><b>{m.label}</b><small>{m.note}</small></div>)}</div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading split-heading"><div><Eyebrow>THE REASON WE EXIST</Eyebrow><h2>One unexpected bill<br />shouldn't <em>derail a student.</em></h2></div><p>Not every financial problem is a tuition problem. Sometimes it's a fine, a replacement card, or a sudden administrative cost that arrives at the worst possible time.</p></div>
          <div className="principles-grid">{principles.map(p => <article className="principle-card" key={p.number}><span className="principle-number">{p.number}</span><div className="principle-icon">{p.number === '01' ? <HeartHandshake /> : p.number === '02' ? <ShieldCheck /> : <WalletCards />}</div><h3>{p.title}</h3><p>{p.text}</p><ArrowUpRight className="principle-arrow" size={18} /></article>)}</div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="section-heading light-heading"><Eyebrow>SMALL, SPECIFIC, VERIFIABLE</Eyebrow><h2>Support that stays<br /><em>focused on the need.</em></h2><p>Our planned first pilot is for students at Matrix Institute. We intend to start small, test the process carefully, and expand only when the safeguards work.</p></div>
          <div className="case-grid">{demoCases.map((c, i) => <article className="case-card" key={c.id}><div className="case-top"><span className="case-icon">{i === 0 ? <WalletCards /> : i === 1 ? <CircleHelp /> : <LockKeyhole />}</span><span className="demo-tag">DEMO ONLY</span></div><span className="case-category">{c.category}</span><h3>{c.title}</h3><p>{c.description}</p><div className="case-bottom"><strong>{c.amount}</strong><span>{c.status}</span></div></article>)}</div>
          <div className="demo-note"><LockKeyhole size={17} /><span>These are fictional examples, not real students or active requests.</span><Link to="/students">How review will work <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container closing-panel"><div className="closing-icon"><ShieldCheck size={34} /></div><div className="closing-copy"><Eyebrow>BUILT ON TRUST</Eyebrow><h2>Help should feel safe<br />to ask for — and safe to give.</h2><p>We're building the checks, privacy protections, and public reporting before inviting real applications or contributions.</p></div><div className="closing-actions"><Link to="/about" className="button button-primary">Our principles <ArrowRight size={17} /></Link><Link to="/fund" className="text-link">Transparency plan <ArrowUpRight size={16} /></Link></div><div className="closing-orb" /></div>
      </section>
    </main>
  </>
}

const pageCopy: Record<string, { eyebrow: string; title: string; intro: string; points: string[] }> = {
  students: { eyebrow: 'STUDENT SUPPORT', title: 'Specific needs. Thoughtful review.', intro: 'This page will list eligible support requests after the verification process is ready. For now, all examples are fictional and there is no application intake.', points: ['Requests will be reviewed by authorised reviewers.', 'Private evidence will never appear on public case pages.', 'No request is guaranteed approval; applicants can clarify missing information.'] },
  helped: { eyebrow: 'COMMUNITY IMPACT', title: 'A record of help, handled with care.', intro: 'Once the pilot is live, this page will share anonymised, consent-aware summaries of completed support. There are no real cases to report yet.', points: ['No student names or documents by default.', 'Published totals will reconcile with internal records.', 'Corrections and reporting periods will be clearly labelled.'] },
  fund: { eyebrow: 'FINANCIAL TRANSPARENCY', title: 'Trust needs a paper trail.', intro: 'The planned fund view will distinguish received contributions, approved assistance, processing costs, and available balance. Nothing here is a live financial statement.', points: ['Only confirmed and reconciled transactions count.', 'Amounts will be shown with a clear reporting period.', 'Adjustments will be recorded rather than silently overwritten.'] },
  transactions: { eyebrow: 'PUBLIC LEDGER', title: 'Every published number needs context.', intro: 'This is a preview of the transparency approach. The ledger is not connected to any bank, UPI account, or payment provider.', points: ['Demo entries will be removed before launch.', 'Personal payment details will not be published.', 'Finance review and reconciliation are planned before real contributions.'] },
  about: { eyebrow: 'WHY SHIELD EXISTS', title: 'A little protection when plans change.', intro: 'SHIELD stands for Student Help Initiative for Education, Liability and Dues. We are designing a small, student-focused support initiative for unexpected administrative expenses — not coaching tuition fees.', points: ['The first proposed pilot is Matrix Institute; no official affiliation is implied.', 'Dignity, privacy, and fair review guide the process.', 'We will not accept real funds until governance and safeguards are ready.'] },
  support: { eyebrow: 'SUPPORT THE MISSION', title: 'Help us build the safeguards first.', intro: 'SHIELD is in pre-launch development. This page is informational only: there is no donation checkout, UPI QR, or payment collection enabled.', points: ['Review the planned policies and transparency approach.', 'Help test the website and accessibility.', 'Real contributions will only be considered after financial controls and legal checks.'] },
  contact: { eyebrow: 'REACH US', title: 'Questions, concerns, or ideas?', intro: 'A contact form will be added after we decide how to handle messages securely. This preview does not submit or store any information.', points: ['Do not send private student documents through public channels.', 'Report confusing or misleading content before launch.', 'We plan to publish a monitored contact route before opening the pilot.'] },
  privacy: { eyebrow: 'POLICY PREVIEW', title: 'Privacy is part of the product.', intro: 'This is a design summary, not the final privacy policy or legal advice. A complete policy must be reviewed before collecting personal information.', points: ['Collect only information necessary to review a request.', 'Restrict evidence to authorised reviewers.', 'Define retention, deletion, consent, and incident-response procedures before launch.'] },
  terms: { eyebrow: 'POLICY PREVIEW', title: 'Clear expectations, before participation.', intro: 'This is not the final terms of service. Final terms and eligibility criteria require operational and legal review before the project accepts real cases.', points: ['Support is not guaranteed.', 'False claims and conflicts of interest require a fair review process.', 'The initiative will not claim institute endorsement without permission.'] },
  cookies: { eyebrow: 'POLICY PREVIEW', title: 'Keep tracking to a minimum.', intro: 'This Phase 1 preview does not include analytics or an advertising tracker. Cookie disclosures will be updated if the final product uses optional technologies.', points: ['Essential security/session technologies will be explained.', 'Optional analytics should be disabled until consent requirements are understood.', 'A preference control will be added if non-essential cookies are introduced.'] },
  accessibility: { eyebrow: 'ACCESSIBILITY', title: 'A helpful service should work for more people.', intro: 'Accessibility is part of the build, not a last-minute polish pass. This is an early prototype and still needs testing with keyboard and assistive technology.', points: ['Responsive layouts and visible keyboard focus.', 'Semantic headings, labels, and meaningful link text.', 'Reduced-motion support and contrast checks before launch.'] },
}

function InfoPage({ page }: { page: string }) {
  const data = pageCopy[page]
  return <main className="subpage section-paper"><div className="container subpage-layout"><div className="subpage-main"><Eyebrow>{data.eyebrow}</Eyebrow><h1>{data.title}</h1><p className="subpage-intro">{data.intro}</p><div className="info-list">{data.points.map((point, i) => <div className="info-row" key={point}><span>{String(i + 1).padStart(2, '0')}</span><p>{point}</p><Check size={17} /></div>)}</div><div className="page-callout"><ShieldCheck size={21} /><div><strong>Pre-launch preview</strong><p>This page contains planning information and does not represent an operating fund or completed service.</p></div></div><Link to="/" className="text-link">Back to home <ArrowRight size={16} /></Link></div><aside className="subpage-aside"><div className="aside-shield"><ShieldCheck size={58} strokeWidth={1.2} /></div><span className="aside-label">THE SHIELD STANDARD</span><h3>Carefully built.<br />Honestly explained.</h3><p>Trust isn't a slogan. It's the process behind every decision.</p><div className="aside-foot"><span>SHIELD / PRE-LAUNCH</span><ArrowUpRight size={17} /></div></aside></div></main>
}

function NotFound() {
  return <main className="subpage section-paper"><div className="container not-found"><span>404</span><Eyebrow>WRONG TURN, NO WORRIES</Eyebrow><h1>This page isn't here.<br /><em>Let's get you back.</em></h1><Link to="/" className="button button-primary">Back to SHIELD <ArrowRight size={17} /></Link></div></main>
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Brand light /><p>Standing between students and unexpected burdens.</p><span className="footer-status"><span /> PRE-LAUNCH · DEMO DATA ONLY</span></div><div className="footer-links"><div><b>Explore</b><Link to="/students">Student support</Link><Link to="/helped">Previously helped</Link><Link to="/fund">Fund transparency</Link><Link to="/transactions">Transactions</Link></div><div><b>SHIELD</b><Link to="/about">About us</Link><Link to="/support">Support the mission</Link><Link to="/contact">Reach us</Link></div><div><b>Information</b><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/cookies">Cookies</Link><Link to="/accessibility">Accessibility</Link></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SHIELD · Concept preview</span><span>Not affiliated with Matrix Institute unless formally authorised.</span><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top <ArrowUpRight size={13} /></a></div></div></footer>
}

export default function App() {
  const location = useLocation()
  const [showNotice, setShowNotice] = useState(true)
  return <div id="top" className="app-shell">
    {showNotice && <div className="preview-strip"><span><Sparkles size={14} /> SHIELD IS IN PRE-LAUNCH DEVELOPMENT</span><span>Demo content only — no real applications or payments. <button onClick={() => setShowNotice(false)} aria-label="Dismiss preview notice"><X size={14} /></button></span></div>}
    <Header />
    <div key={location.pathname} className="route-content">
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.keys(pageCopy).map(page => <Route key={page} path={`/${page}`} element={<InfoPage page={page} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </div>
}