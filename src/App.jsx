import { useState } from 'react'
import './index.css'

const modules = [
  { id: 'crm', eyebrow: '01 / CRM', title: 'CRM', body: 'Unify conversations, context and customer momentum in one intelligent workspace.', metric: '360°', metricLabel: 'customer view', color: 'violet', href: 'https://crm.aitsind.com/' },
  { id: 'calling', eyebrow: '02 / AI CALLING', title: 'AI calling', body: 'Let AI agents handle repeatable conversations while your team focuses on what matters.', metric: '24/7', metricLabel: 'voice coverage', color: 'cyan', href: 'http://aicalls.aitsind.com/' },
  { id: 'ivr', eyebrow: '03 / IVR', title: 'IVR', body: 'Build intuitive call journeys that get every customer to the right outcome faster.', metric: '< 1m', metricLabel: 'to resolution', color: 'amber', href: 'http://ivr.aitsind.com/' },
  { id: 'helpdesk', eyebrow: '04 / HELPDESK', title: 'Helpdesk', body: 'Give every agent the signal they need to turn support into customer trust.', metric: '1 hub', metricLabel: 'all channels', color: 'coral', href: 'https://helpdesk.aitsind.com/' },
]

function Glyph({ type }) {
  const paths = { crm: <><circle cx="12" cy="8" r="3"/><path d="M5 20c.5-3.5 2.8-5.5 7-5.5s6.5 2 7 5.5"/><path d="M17 7h3M18.5 5.5v3"/></>, calling: <><path d="M7 4.5 4.8 6.7c-.7.7-.8 1.8-.3 2.7 2.3 4.2 5.8 7.7 10 10 .9.5 2 .4 2.7-.3l2.2-2.2-3.4-3.4-2 1.4a13.5 13.5 0 0 1-3.9-3.9l1.4-2L7 4.5Z"/><path d="M15.5 5.5a4 4 0 0 1 3 3M16 2.5A7.2 7.2 0 0 1 21.5 8"/></>, ivr: <><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01M12 17h.01"/></>, helpdesk: <><path d="M5 12a7 7 0 0 1 14 0v3a2 2 0 0 1-2 2h-2v-5h4M5 12v5h2v-5H3"/><path d="M8.5 20h5"/></> }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const sendInquiry = (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`ConverseIQ enquiry — ${data.get('topic')}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\n\nMessage:\n${data.get('message')}`); window.location.href = `mailto:kuldeep@aitsind.com?subject=${subject}&body=${body}`; setFormOpen(false) }
  const followPointer = (event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--mouse-x', `${((event.clientX - rect.left) / rect.width) * 100}%`); event.currentTarget.style.setProperty('--mouse-y', `${((event.clientY - rect.top) / rect.height) * 100}%`) }
  return <main onPointerMove={followPointer}>
    <div className="color-spot spot-one"/><div className="color-spot spot-two"/><div className="color-spot spot-three"/>
    <nav className="nav shell"><a className="brand combined-brand" href="#suite" aria-label="ConverseIQ by AITS"><img src="/aits-logo.jpeg" alt="AITS"/>Converse<span>IQ</span></a><div className={`nav-links ${menuOpen ? 'show' : ''}`}><a href="#suite">Products</a><button onClick={() => setFormOpen(true)}>Contact</button></div><button className="nav-cta" onClick={() => setFormOpen(true)}>Start a conversation <b>↗</b></button><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><span/><span/></button></nav>
    <section id="suite" className="suite shell">
      <div className="suite-intro"><div><p className="eyebrow"><i/> THE COMMUNICATION SUITE</p><h1>Everything your<br/><em>conversations need.</em></h1></div><p>Choose a product to enter its workspace. Together, they create one connected customer operation.</p></div>
      <div className="suite-stage">
        <div className="stage-orbit orbit-a"/><div className="stage-orbit orbit-b"/>
        <div className="suite-core"><img src="/aits-logo.jpeg" alt="AITS"/><strong>Converse<span>IQ</span></strong><small>ONE CONNECTED SUITE</small></div>
        <div className="product-grid">{modules.map((item) => <a key={item.id} className={`product-card ${item.color} card-${item.id}`} href={item.href} target="_blank" rel="noreferrer"><span className="pin"/><div className="card-top"><span>{item.eyebrow}</span><span className="open">↗</span></div><div className="card-icon"><Glyph type={item.id}/></div><h2>{item.title}</h2><p>{item.body}</p><div className="card-line"/><div className="card-footer"><span>{item.metric}<small>{item.metricLabel}</small></span><b>Open product <em>↗</em></b></div></a>)}</div>
        <p className="stage-caption">CRM · VOICE · ROUTING · SUPPORT — <b>ONE INTELLIGENT CUSTOMER OPERATION.</b></p>
      </div>
    </section>
    <section id="contact" className="contact"><div className="shell contact-inner"><div><p className="eyebrow"><i/> CONNECTED BY DESIGN</p><h2>One suite.<br/><em>Every signal.</em></h2><p className="contact-copy">CRM, AI calling, IVR and helpdesk — connected to help your team respond with context, speed and confidence.</p></div><button className="button bright" onClick={() => setFormOpen(true)}>Start a conversation <span>↗</span></button></div></section>
    <footer className="footer shell"><a className="brand combined-brand" href="#suite"><img src="/aits-logo.jpeg" alt="AITS"/>Converse<span>IQ</span></a><p>Communication, connected.</p><span>© 2025 ConverseIQ</span></footer>
    {formOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setFormOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setFormOpen(false)} aria-label="Close contact form">×</button><p className="eyebrow"><i/> START A CONVERSATION</p><h2 id="contact-title">Tell us what<br/><em>you’re building.</em></h2><p>We’ll open a pre-addressed email to Kuldeep with your enquiry.</p><form onSubmit={sendInquiry}><div className="form-row"><label>Your name<input name="name" required autoComplete="name" placeholder="Jane Smith"/></label><label>Work email<input name="email" type="email" required autoComplete="email" placeholder="jane@company.com"/></label></div><div className="form-row"><label>Company <input name="company" autoComplete="organization" placeholder="Your company"/></label><label>Topic<select name="topic" defaultValue="Product enquiry"><option>Product enquiry</option><option>Demo request</option><option>Support question</option><option>Partnership</option></select></label></div><label>How can we help?<textarea name="message" required placeholder="Tell us a little about your requirements…" rows="4"/></label><button className="button submit" type="submit">Open email to Kuldeep <span>↗</span></button></form></section></div>}
  </main>
}
