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

type Leader = { name: string; role: string; bio: string };

const leaders: Leader[] = [
  { name: "Anubhav Shukla", role: "Co-Founder", bio: "Co-founder of Ubiquity Neethi, helping guide the organisation's direction, partnerships and long-term growth." },
  { name: "Veena Sharma", role: "Co-Founder", bio: "Co-founder of Ubiquity Neethi, supporting its strategic foundation, values and organisational development." },
  { name: "Yogendra N Sharma", role: "Managing Director", bio: "A creative director, graphic designer and senior video editor with over 22 years of experience across campaign media, political communication and visual storytelling." },
];

const glimpseImages = Array.from({ length: 28 }, (_, index) => index + 1).filter((number) => ![7, 10, 11].includes(number)).map((number) => `/images/glimpses/glimpse-${String(number).padStart(2, "0")}.webp`);

const instagramReels = [
  "https://www.instagram.com/reel/DWpoxxGDafY/?rpxt=NThmeHFmczI5YWFn",
  "https://www.instagram.com/reel/DbbOa31jwiD/?vrfl=OHFsMHVzcnNpc3Jj",
  "https://www.instagram.com/reel/DS0QBv6CNth/?srtk=OGQwcmlqYW9kcGYy",
  "https://www.instagram.com/reel/DQTJ2dPiHfE/?mdxt=MWRpMDYyOXAxeWx2aw==",
  "https://www.instagram.com/reel/DB8RgKiJe4t/?xtok=MWo1YTUwZXJmYTFpZg==",
  "https://www.instagram.com/reel/DB3MpjLKUbr/?rpxt=c2k0dWY4ODk1NXM2",
  "https://www.instagram.com/reel/DBz8xHGC6Yk/?vrfl=MTB5bjZmOW4xb2d4Yw==",
  "https://www.instagram.com/reel/DBl6yyvCAc4/?psln=MWpmaTVmY2RnMGJ0Mw==",
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
        <a className="brand" href="#top" aria-label="Ubiquity Neethi home"><Image className="brand-logo" src="/images/ubiquity-neethi-logo-cropped.png" width={2048} height={768} alt="Ubiquity Neethi" priority /></a>
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
        <div className="leader-grid leader-grid-three">{leaders.map((leader) => <article className="leader-card" key={leader.name}><div className="leader-photo leader-initials" aria-hidden="true" /><div className="leader-content"><h3>{leader.name}</h3><p className="leader-role">{leader.role}</p><span>{leader.bio}</span></div></article>)}</div>
        <div className="team-grid">{fieldTeam.map((person) => <article className="team-card" key={person.name}><Image src={person.image} width={110} height={110} alt={person.name} /><div><p>{person.role}</p><h3>{person.name}</h3><span>{person.text}</span></div></article>)}</div>
      </section>

      <section className="section work" id="work">
        <div className="work-visual" aria-label="Visual campaign workflow"><div className="work-visual-title"><span>From signal</span><strong>to public action</strong></div><div className="workflow-step"><span>01</span><div><b>Listen</b><small>Research & sentiment</small></div></div><div className="workflow-step"><span>02</span><div><b>Shape</b><small>Narrative & creative</small></div></div><div className="workflow-step"><span>03</span><div><b>Activate</b><small>Media & field delivery</small></div></div><div className="workflow-orbit" /></div>
        <div className="work-copy"><div className="section-label">04 · Featured track record</div><h2>Campaign work grounded in culture and constituency.</h2><div className="work-list"><div><strong>Social-development communication</strong><p>Creative direction and media asset production for major public-awareness initiatives.</p></div><div><strong>West Bengal campaign operations</strong><p>Grassroots management, targeted digital drives and voter sentiment mapping across five assembly segments.</p></div><div><strong>Maharashtra political portfolios</strong><p>Image building, digital PR, event management and crisis communication for political candidates.</p></div></div><a className="text-link" href="#contact">Discuss a similar mandate <ArrowRight size={18} /></a></div>
      </section>

      <section className="section glimpses" id="glimpses">
        <div className="section-heading"><div><div className="section-label">05 · Glimpses</div><h2>People, programmes and moments from the field.</h2></div><p>A selection of public programmes, community engagement, cultural events and campaign activity captured across our work.</p></div>
        <div className="glimpses-grid">{glimpseImages.map((src, index) => <figure className="glimpse-card" key={src}><Image src={src} fill sizes="(max-width: 760px) 50vw, 25vw" alt={`Ubiquity Neethi work glimpse ${index + 1}`} /></figure>)}</div>
        <div className="reels"><div className="reels-heading"><Clapperboard size={22} /><div><span>Instagram reels</span><strong>Watch more from the field</strong></div></div><div className="reels-grid">{instagramReels.map((url, index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{String(index + 1).padStart(2, "0")}</span>Watch reel <ArrowRight size={17} /></a>)}</div></div>
      </section>

      <section className="section why-us"><div className="section-label">06 · Why Ubiquity Neethi</div><h2>Clear insight. Strong creative. Ground-ready execution.</h2><div className="why-grid"><article><Users /><h3>Single-window team</h3><p>Research, messaging, production, digital delivery and on-ground execution under one accountable partner.</p></article><article><BarChart3 /><h3>Data becomes narrative</h3><p>We translate sentiment and demographic inputs into communications people can understand and remember.</p></article><article><Target /><h3>Built for the ground</h3><p>Campaign thinking informed by real field operations across highly competitive regional portfolios.</p></article></div></section>

      <section className="contact" id="contact">
        <div className="contact-copy"><div className="section-label">Start a conversation</div><h2>Have a campaign, film or story that needs momentum?</h2><p>Tell us what you are building. We will help shape the strategy, production plan and next move.</p><address><strong>M/s Bapan Advertisers</strong><span>Main Road Mahavir Chowk, Near Singari Jodiya,</span><span>Chas, Bokaro, Jharkhand - 827013</span><a href="tel:+916203879397">Contact number - +91 6203879397</a></address></div>
        <form className="contact-form" onSubmit={submitEnquiry}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Phone<input name="phone" type="tel" placeholder="Your contact number" /></label><label>What can we help with?<textarea name="message" required rows={4} placeholder="Tell us about your project or campaign" /></label><button className="button button-primary" type="submit">Send enquiry <ArrowRight size={18} /></button>{sent && <p className="form-success" role="status">Thank you. Form delivery will be enabled when contact details are added.</p>}</form>
      </section>

      <footer><a className="brand footer-brand" href="#top"><Image className="brand-logo" src="/images/ubiquity-neethi-logo-cropped.png" width={2048} height={768} alt="Ubiquity Neethi" /></a><span>© {new Date().getFullYear()} Ubiquity Neethi.</span></footer>
    </main>
  );
}
