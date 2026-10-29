"use client";

import Image from "next/image";
import { ArrowRight, BarChart3, Clapperboard, Menu, MessageSquareText, Target, Users, X } from "lucide-react";
import { FormEvent, useState } from "react";

const capabilities = [
  { icon: Clapperboard, title: "Commercial Media & Filmmaking", text: "High-end TVCs, ad films, corporate documentaries, launch videos and digital-first campaign assets." },
  { icon: Target, title: "Strategic Political Campaigning", text: "End-to-end election strategy, voter profiling, ground-level perception alignment and political advertising." },
  { icon: BarChart3, title: "Data-led Digital PR", text: "Sentiment analysis, micro-targeted outreach, rapid-response communication and reputation management." },
  { icon: MessageSquareText, title: "Narrative Engineering", text: "Script development, speech writing, campaign messaging and manifestos shaped to move people." },
];

type Leader = { name: string; role: string; bio: string; image?: string; initials?: string };

const leaders: Leader[] = [
  { name: "Abhinav Shukla", role: "Co-Founder", initials: "AS", bio: "Co-founder of Ubiquity Neethi, helping guide the organisation's direction, partnerships and long-term growth." },
  { name: "Veena Sharma", role: "Co-Founder", initials: "VS", bio: "Co-founder of Ubiquity Neethi, supporting its strategic foundation, values and organisational development." },
  { name: "Yogendra Sharma", role: "Managing Director", image: "/images/yogendra-sharma.jpg", bio: "A creative director, graphic designer and senior video editor with over 22 years of experience across campaign media, political communication and visual storytelling." },
];

const fieldTeam = [
  { name: "Shilpa Panja", role: "Operations Associate", image: "/images/shilpa-panja.jpg", text: "Former I-PAC associate with experience across Tripura and West Bengal campaign teams." },
  { name: "Raj Kumar Bairagya", role: "Campaign Operations", image: "/images/raj-kumar-bairagya.jpg", text: "Former I-PAC professional with campaign experience across West Bengal, Bihar, Rajasthan, Tripura and Maharashtra." },
  { name: "Vishal Khare", role: "Creative Field Manager", image: "/images/vishal-khare.jpg", text: "Media and campaign professional with extensive experience in creative direction, political films, field communication and audience-focused visual narratives." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ubiquity Neethi home"><span className="brand-mark">UN</span><span className="brand-name">Ubiquity Neethi</span></a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <p className="eyebrow">Media production · Political strategy · Digital PR</p>
          <h1>Ideas become <span>influence.</span></h1>
          <p className="hero-text">Ubiquity Neethi connects research, campaign intelligence and visual communication to build narratives that reach the right people and create measurable momentum.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Plan your campaign <ArrowRight size={18} /></a><a className="button button-ghost" href="#services">Explore capabilities</a></div>
          <div className="hero-proof"><div><strong>22+</strong><span>years of media experience</span></div><div><strong>50+</strong><span>completed projects</span></div><div><strong>360°</strong><span>strategy to execution</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Campaign intelligence visual">
          <div className="signal-card signal-card-main">
            <div className="signal-heading"><span>Campaign intelligence</span><span className="live-dot">Live signal</span></div>
            <div className="signal-score"><strong>74</strong><span>Audience resonance</span></div>
            <div className="signal-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="signal-legend"><span><i className="legend-orange" />Engaged</span><span><i />Undecided</span></div>
          </div>
          <div className="signal-card signal-card-segments"><span>Priority segments</span><div><b>Youth</b><i style={{ width: "82%" }} /></div><div><b>Urban</b><i style={{ width: "68%" }} /></div><div><b>Women</b><i style={{ width: "76%" }} /></div></div>
          <div className="signal-card signal-card-message"><MessageSquareText /><div><span>Message direction</span><strong>Local voice. Clear action.</strong></div></div>
          <div className="network-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="section-label">01 · About us</div>
        <div className="intro-grid"><h2>Strategy, creativity and field insight in one place.</h2><div><p className="lead">Ubiquity Neethi is a multi-sector enterprise working at the intersection of premium filmmaking, public communication and strategic political campaigning.</p><p>Our experience spans mainstream television, corporate storytelling, voter sentiment mapping, grassroots activation and crisis communication—giving every campaign both emotional clarity and operational depth.</p></div></div>
        <div className="story-strip"><article><span>01</span><h3>Research First</h3><p>Audience signals, constituency context and communication gaps shape every strategic decision.</p></article><article><span>02</span><h3>Creative Precision</h3><p>Film, design and message architecture turn complex information into memorable narratives.</p></article><article><span>03</span><h3>Field Relevance</h3><p>Campaign experience across multiple Indian states keeps every idea grounded in real voter behaviour.</p></article></div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading"><div><div className="section-label">02 · What we do</div><h2>One team. Every layer of the narrative.</h2></div><p>From a raw insight to a broadcast-ready story, we connect research, strategy, craft and field execution.</p></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }, index) => <article className="capability-card" key={title}><div className="capability-top"><Icon size={24} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="service-band"><p>Specialist services</p><div><span>Election management</span><span>Political advertisements</span><span>Speech writing</span><span>Script development</span><span>Corporate films</span><span>Social media content</span></div></div>
      </section>

      <section className="section leadership" id="leadership">
        <div className="section-heading"><div><div className="section-label">03 · Leadership</div><h2>Strategic minds. Production discipline.</h2></div><p>Leadership shaped by organisational vision, media craft and high-stakes campaign execution.</p></div>
        <div className="leader-grid leader-grid-three">{leaders.map((leader) => <article className="leader-card" key={leader.name}><div className={leader.image ? "leader-photo" : "leader-photo leader-initials"}>{leader.image ? <Image src={leader.image} fill sizes="(max-width: 800px) 100vw, 32vw" alt={leader.name} /> : <span>{leader.initials}</span>}</div><div className="leader-content"><p>{leader.role}</p><h3>{leader.name}</h3><span>{leader.bio}</span></div></article>)}</div>
        <div className="team-grid">{fieldTeam.map((person) => <article className="team-card" key={person.name}><Image src={person.image} width={110} height={110} alt={person.name} /><div><p>{person.role}</p><h3>{person.name}</h3><span>{person.text}</span></div></article>)}</div>
      </section>

      <section className="section work" id="work">
        <div className="work-visual" aria-label="Visual campaign workflow"><div className="work-visual-title"><span>From signal</span><strong>to public action</strong></div><div className="workflow-step"><span>01</span><div><b>Listen</b><small>Research & sentiment</small></div></div><div className="workflow-step"><span>02</span><div><b>Shape</b><small>Narrative & creative</small></div></div><div className="workflow-step"><span>03</span><div><b>Activate</b><small>Media & field delivery</small></div></div><div className="workflow-orbit" /></div>
        <div className="work-copy"><div className="section-label">04 · Featured track record</div><h2>Campaign work grounded in culture and constituency.</h2><div className="work-list"><div><strong>Social-development communication</strong><p>Creative direction and media asset production for major public-awareness initiatives.</p></div><div><strong>West Bengal campaign operations</strong><p>Grassroots management, targeted digital drives and voter sentiment mapping across five assembly segments.</p></div><div><strong>Maharashtra political portfolios</strong><p>Image building, digital PR, event management and crisis communication for political candidates.</p></div></div><a className="text-link" href="#contact">Discuss a similar mandate <ArrowRight size={18} /></a></div>
      </section>

      <section className="section why-us"><div className="section-label">05 · Why Ubiquity Neethi</div><h2>Clear insight. Strong creative. Ground-ready execution.</h2><div className="why-grid"><article><Users /><h3>Single-window team</h3><p>Research, messaging, production, digital delivery and on-ground execution under one accountable partner.</p></article><article><BarChart3 /><h3>Data becomes narrative</h3><p>We translate sentiment and demographic inputs into communications people can understand and remember.</p></article><article><Target /><h3>Built for the ground</h3><p>Campaign thinking informed by real field operations across highly competitive regional portfolios.</p></article></div></section>

      <section className="contact" id="contact">
        <div className="contact-copy"><div className="section-label">Start a conversation</div><h2>Have a campaign, film or story that needs momentum?</h2><p>Tell us what you are building. We will help shape the strategy, production plan and next move.</p></div>
        <form className="contact-form" onSubmit={submitEnquiry}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Phone<input name="phone" type="tel" placeholder="Your contact number" /></label><label>What can we help with?<textarea name="message" required rows={4} placeholder="Tell us about your project or campaign" /></label><button className="button button-primary" type="submit">Send enquiry <ArrowRight size={18} /></button>{sent && <p className="form-success" role="status">Thank you. Form delivery will be enabled when contact details are added.</p>}</form>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">UN</span><span className="brand-name">Ubiquity Neethi</span></a><span>© {new Date().getFullYear()} Ubiquity Neethi.</span></footer>
    </main>
  );
}
