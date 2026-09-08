'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Check, ClipboardCheck, DraftingCompass, Package, Wrench, Settings, Presentation, Flame, HardHat, ShieldCheck, Leaf, Mail, Phone, MapPin, Menu } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';
const solutions = [
 { name: 'Fire protection systems', image: 'fire-option3.png', description: 'Hydrants, sprinklers, detection, alarms and suppression.', items: ['Fire audit & consultancy', 'Hydrant & sprinkler systems', 'Detection & alarm systems', 'CO₂ & fire suppression systems', 'Fire extinguishers: supply & refilling', 'Annual maintenance contracts (AMC)', 'Fire safety training & signages'] },
 { name: 'Safety & PPE', image: 'ppe-option3.png', description: 'The equipment and knowledge to protect your people.', items: ['Safety audit & consultancy', 'Personal protective equipment', 'Safety training', 'Safety signages'] },
 { name: 'CCTV surveillance', image: 'cctv.webp', description: 'Practical monitoring solutions for your premises.', items: ['Analog camera systems', 'Digital IP camera systems'] },
 { name: 'Biometric access', image: 'biometric.webp', description: 'Secure, convenient access for authorised personnel.', items: ['Face recognition devices', 'Fingerprint access devices'] },
 { name: 'Environmental audit', image: 'environment-option3.png', description: 'Expert guidance for a more responsible environment.', items: ['Environmental audit', 'Environmental consultancy'] },
];
const steps = [
 { name: 'Audit', text: 'Understand your risk', icon: ClipboardCheck },
 { name: 'Design', text: 'Plan the right system', icon: DraftingCompass },
 { name: 'Supply', text: 'Source reliable equipment', icon: Package },
 { name: 'Install', text: 'Deliver with precision', icon: Wrench },
 { name: 'Maintain', text: 'Keep systems ready', icon: Settings },
 { name: 'Train', text: 'Prepare your people', icon: Presentation },
];
const navigation = ['Solutions', 'Capabilities', 'Industries', 'About'];
const phones = ['7045143272', '9325505974', '9820818400'];
const phoneLabels = ['+91 70451 43272', '+91 93255 05974', '+91 98208 18400'];
function Brand({ footer = false }: { footer?: boolean }) {
 return <a href="#home" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Agniraj home"><img src="/images/agniraj-logo.png" width="690" height="315" alt="Agniraj — Life Secure System India Pvt. Ltd." /></a>;
}
export default function Home() {
 const [contact, setContact] = useState(false);
 const [contactContext, setContactContext] = useState('');
 const [selected, setSelected] = useState(0);
 const [menu, setMenu] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const service = solutions[selected];
 const talk = () => { setContactContext(''); setContact(true); };
 const talkIndustry = (industry: string) => {
  setContactContext(`Let’s protect your ${industry.toLowerCase()} space.`);
  setContact(true);
 };
 const chooseSolution = (index: number, scroll = false) => {
  setSelected(index);
  if (scroll) requestAnimationFrame(() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }));
 };
 useEffect(() => {
  const revealObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
     entry.target.classList.add('is-visible');
     revealObserver.unobserve(entry.target);
    }
   });
  }, { threshold: 0.14, rootMargin: '0px 0px -55px' });
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => revealObserver.observe(element));
  let frame = 0;
  const onScroll = () => {
   cancelAnimationFrame(frame);
   frame = requestAnimationFrame(() => {
    const y = window.scrollY;
    setScrolled(y > 42);
    document.documentElement.style.setProperty('--hero-shift', `${Math.min(y * .035, 22)}px`);
   });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => {
   revealObserver.disconnect();
   cancelAnimationFrame(frame);
   window.removeEventListener('scroll', onScroll);
  };
 }, []);
 return <>
 <a className="skip-link" href="#main">Skip to content</a>
 <div id="home" className="contact-strip"><div className="container strip-inner"><span><MapPin size={14} /> BKC, Mumbai</span><div><a href="mailto:support@agniraj.in"><Mail size={14} /> support@agniraj.in</a><a href="tel:+917045143272"><Phone size={14} /> +91 70451 43272</a></div></div></div>
 <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="container header-inner"><Brand /><nav aria-label="Main navigation">{navigation.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav><button className="button header-cta" onClick={talk}>Discuss your requirement <ArrowRight size={18} /></button><button className="menu-button" onClick={() => setMenu(true)} aria-label="Open navigation" aria-expanded={menu}><Menu /></button></div></header>
 <main id="main">
 <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow hero-eyebrow">Fire protection / Safety / Security</p><h1 id="hero-title">Protection that’s built<br />around <em>your risk.</em></h1><p className="hero-description">Complete fire protection and safety solutions for commercial, industrial and residential spaces.</p><div className="hero-actions"><a className="button" href="#solutions">Explore solutions <ArrowRight size={21} /></a><button className="text-button" onClick={talk}>Talk to our team</button></div><div className="hero-promise"><ShieldCheck size={35} strokeWidth={1.3} /><span>Protecting lives. Securing futures.</span></div></div><div className="hero-photo"><img src="/images/hero-option3-wide.png" alt="Safety engineer inspecting an overhead sprinkler and fire protection pipework" fetchPriority="high" /><div className="photo-caption">Ready for every day.<br />Prepared for the unexpected.</div></div></section>
 <div className="pillars"><div className="container pillars-inner" data-reveal>{[{ icon: Flame, name: 'Fire protection' }, { icon: HardHat, name: 'Safety & PPE' }, { icon: ShieldCheck, name: 'Security systems' }, { icon: Leaf, name: 'Environmental care' }].map(({icon: Icon,name}, i) => <div key={name} style={{'--delay': `${i * 80}ms`} as React.CSSProperties}><Icon size={42} strokeWidth={1.3} /><span>{name}</span></div>)}</div></div>
 <section id="solutions" className="section solutions-section"><div className="container"><div className="section-heading" data-reveal><p className="eyebrow">Our solutions</p><h2>Explore protection built around your risk.</h2><p className="section-intro">Select a solution to see how Agniraj can support your facility.</p></div><div className="solution-explorer" data-reveal><div className="solution-tabs" role="tablist" aria-label="Agniraj solutions" onKeyDown={event => { if (event.key === 'ArrowDown' || event.key === 'ArrowRight') chooseSolution((selected + 1) % solutions.length); if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') chooseSolution((selected - 1 + solutions.length) % solutions.length); }}>{solutions.map((s,i) => <button key={s.name} id={`solution-tab-${i}`} role="tab" aria-selected={selected === i} aria-controls="solution-panel" tabIndex={selected === i ? 0 : -1} className={`solution-tab ${selected === i ? 'is-active' : ''}`} onClick={() => chooseSolution(i)}><span className="solution-index">0{i+1}</span><span className="solution-tab-copy"><strong>{s.name}</strong><small>{s.description}</small></span><ArrowRight size={21} /></button>)}</div><article id="solution-panel" key={selected} role="tabpanel" aria-labelledby={`solution-tab-${selected}`} className="solution-panel"><div className="solution-visual"><img src={`/images/${service.image}`} alt={`${service.name} by Agniraj`} /><span className="solution-watermark">0{selected+1}</span></div><div className="solution-detail"><div><p className="eyebrow">Selected solution</p><h3>{service.name}</h3><p>{service.description}</p></div><ul>{service.items.map(item => <li key={item}><Check size={18} />{item}</li>)}</ul><button className="button solution-cta" onClick={talk}>Discuss this solution <ArrowRight size={19} /></button></div></article></div></div></section>
 <section id="capabilities" className="capabilities"><div className="container" data-reveal><p className="eyebrow">From first audit to long-term support</p><h2>Complete care. At every stage.</h2><ol className="process">{steps.map(({name,text,icon: Icon},i) => <li key={name} style={{'--delay': `${i * 95}ms`} as React.CSSProperties}><Icon className="process-icon" size={47} strokeWidth={1.25} /><div className="process-track"><span /></div><div className="process-copy"><span className="step-number">0{i+1}</span><h3>{name}</h3><p>{text}</p></div></li>)}</ol></div></section>
 <section id="industries" className="industries"><div className="container industry-layout" data-reveal><div><p className="eyebrow">Industries we serve</p><h2>Different spaces.<br />The same<br />commitment.</h2></div><div className="industry-cards">{[{name:'Commercial',image:'commercial-option3.png'},{name:'Industrial',image:'industrial.webp'},{name:'Residential',image:'residential.webp'}].map(({name,image}, i) => <button type="button" className="industry-card" key={name} style={{'--delay': `${i * 100}ms`} as React.CSSProperties} onClick={() => talkIndustry(name)} aria-label={`Discuss fire protection and safety for ${name.toLowerCase()} spaces`}><img src={`/images/${image}`} alt={`${name} buildings`} loading="lazy" /><div className="industry-shade" /><h3><span>0{i+1}</span>{name}<ArrowRight size={19} /></h3></button>)}</div></div></section>
 <section id="about" className="about container" data-reveal><div className="about-photo"><img src="/images/about-option3.png" alt="Fire protection engineer conducting an inspection" loading="lazy" /><span>Preparedness<br />without compromise.</span></div><div className="about-copy"><p className="eyebrow">About Agniraj</p><h2>Engineered readiness.<br />Built on integrity.</h2><p>We bring fire protection, safety and security together to help organisations create safer environments. Our mission is to provide dependable, one-stop guidance through integrity, rapid response and lifelong protection—from consultation and installation to maintenance and training.</p><div className="values">{['Quality assured', 'Safety first', 'Expert team'].map((v, i) => <span key={v} style={{'--delay': `${i * 90}ms`} as React.CSSProperties}><Check size={22} />{v}</span>)}</div></div></section>
 <section className="cta-band"><div className="container cta-inner" data-reveal><div><h2>Let’s make your facility safer.</h2><p>Start with a conversation about your requirements.</p></div><button className="button button-white" onClick={talk}>Talk to our team <ArrowRight size={23} /></button></div></section>
 </main>
 <footer><div className="container footer-grid"><div><Brand footer /><p className="footer-tagline">Protecting lives.<br />Securing futures.</p></div><div><h3>Explore</h3>{navigation.map(n => <a href={`#${n.toLowerCase()}`} key={n}>{n}</a>)}<button onClick={talk}>Contact</button></div><div><h3>Solutions</h3>{solutions.map((s,i) => <button onClick={() => chooseSolution(i, true)} key={s.name}>{s.name}</button>)}</div><div className="footer-contact"><h3>Get in touch</h3><a href="mailto:support@agniraj.in"><Mail size={17} />support@agniraj.in</a>{phones.map((p,i) => <a key={p} href={`tel:+91${p}`}><Phone size={16} />{phoneLabels[i]}</a>)}<p><MapPin size={18} /><span>B-04A, Balarama Bldg, E-Block,<br />BKC, Bandra (E), Mumbai 400051</span></p></div></div><div className="container footer-bottom">© {new Date().getFullYear()} Agniraj Life Secure Systems India Pvt. Ltd. All rights reserved.</div></footer>
 <Sheet open={menu} onOpenChange={setMenu}><SheetContent className="mobile-sheet"><SheetTitle>Explore Agniraj</SheetTitle><SheetDescription>Fire protection, safety and security.</SheetDescription><nav aria-label="Mobile navigation">{navigation.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenu(false)}>{n}<ArrowRight size={19} /></a>)}</nav><button className="button" onClick={() => { setMenu(false); talk(); }}>Discuss your requirement <ArrowRight size={18} /></button></SheetContent></Sheet>
 <Dialog open={contact} onOpenChange={setContact}><DialogContent className="contact-dialog"><p className="eyebrow">Let’s talk safety</p><DialogTitle>{contactContext || 'Tell us what you need.'}</DialogTitle><DialogDescription>{contactContext ? 'Speak with our team about a protection plan tailored to your facility and operating requirements.' : 'Contact our team for enquiries, consultations or service requirements.'}</DialogDescription><a className="contact-email" href={`mailto:support@agniraj.in?subject=${encodeURIComponent(contactContext || 'Website enquiry')}`}><Mail size={23} /><span><small>Email our team</small>support@agniraj.in</span><ArrowRight size={20} /></a><div className="contact-phones">{phones.map((p,i) => <a key={p} href={`tel:+91${p}`}><Phone size={19} />{phoneLabels[i]}<ArrowRight size={18} /></a>)}</div><p className="contact-address"><MapPin size={20} /><span>B-04A, Balarama Bldg, E-Block,<br />BKC, Bandra (E), Mumbai 400051</span></p></DialogContent></Dialog>
 </>;
}
