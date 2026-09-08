'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, MoveUpRight, Mail } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Solution = { name: string; image: string; description: string; items: string[] };
export function ServiceExplorer({solutions, onEnquire}: {solutions: Solution[]; onEnquire: (index: number) => void}) {
 return <Tabs defaultValue="0" className="service-explorer"><TabsList className="explorer-list" aria-label="Explore protection services">{solutions.map((s,i) => <TabsTrigger key={s.name} value={String(i)}><span className="explorer-index">0{i+1}</span><span>{s.name}</span><ArrowUpRight /></TabsTrigger>)}</TabsList><div className="explorer-panels">{solutions.map((s,i) => <TabsContent value={String(i)} key={s.name} className="explorer-panel"><div className="explorer-photo"><img src={`/images/${s.image}.webp`} alt={s.name} loading="lazy" /><span className="image-label">AGNIRAJ / {String(i+1).padStart(2,'0')}</span></div><div className="explorer-copy"><span className="eyebrow">Protection, considered.</span><h3>{s.name}</h3><p>{s.description}</p><ul>{s.items.map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul><button className="button" onClick={() => onEnquire(i)}>Discuss this solution <ArrowUpRight size={19}/></button></div></TabsContent>)}</div></Tabs>;
}
const stageDetails = [
 ['Start with a clearer picture.', 'We assess your premises, review existing systems and identify the areas that need attention.', 'Site assessment · System review · Practical guidance'],
 ['A system shaped around your space.', 'We turn the audit findings into a coordinated plan for the fire protection and safety systems your facility needs.', 'System planning · Equipment selection · Layout coordination'],
 ['The right equipment for the job.', 'We source the equipment specified for your project, bringing fire protection and safety requirements together.', 'Fire systems · Protective equipment · Security devices'],
 ['From the plan to your premises.', 'Our team coordinates installation and system integration so your facility is prepared for everyday operation.', 'Installation · Integration · Handover'],
 ['Readiness is an ongoing commitment.', 'Regular maintenance and servicing help keep your fire protection systems ready throughout their working life.', 'System maintenance · Servicing · Extinguisher refilling'],
 ['Confidence starts with preparation.', 'Practical safety training helps your people understand the equipment, procedures and responsibilities in their workplace.', 'Fire safety training · Equipment awareness · Safety signages'],
];
export function Journey({steps}: {steps: {name:string; text:string; icon: React.ElementType}[]}) {
 return <Tabs defaultValue="0" className="journey"><TabsList className="journey-list" aria-label="Project lifecycle stages">{steps.map(({name,icon:Icon},i) => <TabsTrigger key={name} value={String(i)}><Icon/><span>0{i+1}</span><strong>{name}</strong></TabsTrigger>)}</TabsList>{stageDetails.map(([title,copy,deliverables],i) => <TabsContent value={String(i)} key={title} className="journey-panel"><span className="journey-number">0{i+1}</span><div><h3>{title}</h3><p>{copy}</p><span className="journey-deliverables">{deliverables}</span></div><MoveUpRight size={35}/></TabsContent>)}</Tabs>;
}
export function ExperienceEffects() {
 const [progress,setProgress] = useState(0);
 const [active,setActive] = useState('');
 useEffect(() => {
  let frame=0;
  const update=()=> { cancelAnimationFrame(frame); frame=requestAnimationFrame(()=> {const max=document.documentElement.scrollHeight-innerHeight;setProgress(max>0?scrollY/max:0);}); };
  addEventListener('scroll',update,{passive:true}); update();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('main>section:not(.hero), .pillars').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});
  const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);}),{rootMargin:'-20% 0px -55% 0px'});
  document.querySelectorAll('main>section[id]').forEach(el=>navObserver.observe(el));
  return ()=> {removeEventListener('scroll',update);cancelAnimationFrame(frame);observer.disconnect();navObserver.disconnect();document.querySelectorAll('.reveal-ready').forEach(el=>el.classList.remove('reveal-ready'));};
 },[]);
 useEffect(()=>{document.querySelectorAll('.header-inner nav a').forEach(el=>{if(el.getAttribute('href')==='#'+active)el.setAttribute('aria-current','location');else el.removeAttribute('aria-current');});},[active]);
 return <><div className="reading-progress" style={{transform:`scaleX(${progress})`}} aria-hidden="true"/>{progress>.16 && <a className="back-top" href="#home" aria-label="Back to top"><ArrowRight size={20}/></a>}</>;
}
export function EnquiryBrief({subject}: {subject: string}) {
 const [name,setName]=useState(''); const [brief,setBrief]=useState('');
 const body=`Hello Agniraj,\n\nI would like to discuss ${subject || 'my facility requirements'}.\n\n${brief.trim()}\n\n${name.trim() ? 'Regards,\n'+name.trim() : ''}`;
 return <div className="enquiry-brief"><div className="brief-label"><Mail size={19}/><span>Start a conversation</span></div><label htmlFor="enquiry-name">Your name <span>(optional)</span></label><Input id="enquiry-name" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="How should we address you?" maxLength={100}/><label htmlFor="enquiry-brief">Tell us about your facility <span>(optional)</span></label><Textarea id="enquiry-brief" value={brief} onChange={e=>setBrief(e.target.value)} placeholder="Your location, the systems you need, or what you’d like help with…" maxLength={1500}/><a className="button" href={`mailto:support@agniraj.in?subject=${encodeURIComponent('Enquiry: '+(subject||'Facility protection'))}&body=${encodeURIComponent(body)}`}>Continue in your email app <ArrowUpRight size={19}/></a><p className="brief-note">Review and send from your email app. Nothing is submitted here.</p></div>;
}
