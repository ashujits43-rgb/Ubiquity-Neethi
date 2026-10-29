"use client";

import Image from "next/image";
import {
  ArrowRight, BarChart3, Clapperboard, Mail, MapPin, Menu,
  MessageSquareText, Phone, Target, Users, X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const capabilities = [
  { icon: Clapperboard, title: "Commercial Media & Filmmaking", text: "High-end TVCs, ad films, corporate documentaries, launch videos and digital-first campaign assets." },
  { icon: Target, title: "Strategic Political Campaigning", text: "End-to-end election strategy, voter profiling, ground-level perception alignment and political advertising." },
  { icon: BarChart3, title: "Data-led Digital PR", text: "Sentiment analysis, micro-targeted outreach, rapid-response communication and reputation management." },
  { icon: MessageSquareText, title: "Narrative Engineering", text: "Script doctoring, speech writing, slogans and manifestos shaped to move people—not just fill screens." },
];

const leaders = [
  { name: "Yogendra Sharma", role: "Partner & Managing Director", image: "/images/yogendra-sharma.jpg", bio: "A creative director, graphic designer and senior video editor with over 22 years of experience. He leads operations across campaign media, political communication and high-impact visual storytelling." },
  { name: "Vishal Khare", role: "Leadership Member · Chief Strategist", image: "/images/vishal-khare.jpg", bio: "A media and campaign strategist with a 21-year career across Mumbai film, television and advertising. His work spans campaign architecture, political films, documentaries and audience-focused narratives." },
];

const fieldTeam = [
  { name: "Shilpa Panja", role: "Operations Associate", image: "/images/shilpa-panja.jpg", text: "Former I-PAC associate with experience across Tripura and West Bengal campaign teams." },
  { name: "Raj Kumar Bairagya", role: "Campaign Operations", image: "/images/raj-kumar-bairagya.jpg", text: "Former I-PAC professional with campaign experience across West Bengal, Bihar, Rajasthan, Tripura and Maharashtra." },
  { name: "Munshi Akramul", role: "Field Leadership", image: "/images/munshi-akramul.jpg", text: "Field specialist with 7+ years in leader management across Maharashtra, West Bengal, Rajasthan, Himachal Pradesh and Uttarakhand." },
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
        <a className="brand" href="#top" aria-label="Vibrant Creations home">
          <Image src="/images/logo.png" width={320} height={90} alt="Vibrant Creations" priority />
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <p className="eyebrow">Media production · Political strategy · Digital PR</p>
          <h1>We turn complex ideas into <span>stories that move people.</span></h1>
          <p className="hero-text">Vibrant Creations combines Mumbai-grade cinematic craft with data-led campaign strategy—delivered from an agile, cost-efficient Central India base.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Plan your campaign <ArrowRight size={18} /></a>
            <a className="button button-ghost" href="#services">Explore capabilities</a>
          </div>
          <div className="hero-proof">
            <div><strong>22+</strong><span>years of media experience</span></div>
            <div><strong>50+</strong><span>completed projects</span></div>
            <div><strong>360°</strong><span>strategy to execution</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><Image src="/images/story-team.jpg" fill sizes="(max-width: 900px) 90vw, 44vw" alt="Vibrant Creations strategy team" priority /></div>
          <div className="floating-card"><span>Built for impact</span><strong>Insight → Narrative → Action</strong></div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="section-label">01 · About us</div>
        <div className="intro-grid">
          <h2>From roots in Bhopal to relevance across India.</h2>
          <div><p className="lead">We are a multi-sector MSME built at the intersection of premium filmmaking, public communication and strategic political campaigning.</p><p>Our experience spans mainstream television, corporate storytelling, voter sentiment mapping, grassroots activation and crisis communication—giving every campaign both emotional clarity and operational depth.</p></div>
        </div>
        <div className="story-strip">
          <article><span>01</span><h3>The Genesis</h3><p>Founded in Bhopal to deliver high-production-value media without metro-city overheads.</p></article>
          <article><span>02</span><h3>The Mumbai Edge</h3><p>Two decades of core experience in mainstream television, advertising and premium media.</p></article>
          <article><span>03</span><h3>Pan-India Execution</h3><p>Campaign and public-relations experience across Maharashtra, Madhya Pradesh and West Bengal.</p></article>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div><div className="section-label">02 · What we do</div><h2>One team. Every layer of the narrative.</h2></div>
          <p>From a raw insight to a broadcast-ready story, we connect research, strategy, craft and field execution.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, text }, index) => <article className="capability-card" key={title}><div className="capability-top"><Icon size={24} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="service-band"><p>Specialist services</p><div><span>Election management</span><span>Political advertisements</span><span>Speech writing</span><span>Script doctoring</span><span>Corporate films</span><span>Social media content</span></div></div>
      </section>

      <section className="section leadership" id="leadership">
        <div className="section-heading">
          <div><div className="section-label">03 · Leadership</div><h2>Strategic minds. Production discipline.</h2></div>
          <p>Experienced leadership shaped by newsroom precision, film craft and high-stakes electoral execution.</p>
        </div>
        <div className="leader-grid">
          {leaders.map((leader) => <article className="leader-card" key={leader.name}><div className="leader-photo"><Image src={leader.image} fill sizes="(max-width: 800px) 100vw, 38vw" alt={leader.name} /></div><div className="leader-content"><p>{leader.role}</p><h3>{leader.name}</h3><span>{leader.bio}</span></div></article>)}
        </div>
        <div className="team-grid">
          {fieldTeam.map((person) => <article className="team-card" key={person.name}><Image src={person.image} width={110} height={110} alt={person.name} /><div><p>{person.role}</p><h3>{person.name}</h3><span>{person.text}</span></div></article>)}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="work-image"><Image src="/images/campaign-work.jpg" fill sizes="(max-width: 900px) 100vw, 48vw" alt="Selected political campaign work" /></div>
        <div className="work-copy">
          <div className="section-label">04 · Featured track record</div><h2>Campaign work grounded in culture and constituency.</h2>
          <div className="work-list">
            <div><strong>Beti Bachao initiatives</strong><p>Creative direction and media asset production for major social-development campaigns in Madhya Pradesh.</p></div>
            <div><strong>West Bengal campaign operations</strong><p>Grassroots management, targeted digital drives and voter sentiment mapping across five assembly segments.</p></div>
            <div><strong>Maharashtra political portfolios</strong><p>Image building, digital PR, event management and crisis communication for high-profile candidates.</p></div>
          </div>
          <a className="text-link" href="#contact">Discuss a similar mandate <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="section why-us">
        <div className="section-label">05 · Why Vibrant</div><h2>Mumbai quality. Bhopal economics. India-wide execution.</h2>
        <div className="why-grid">
          <article><Users /><h3>Single-window team</h3><p>Research, messaging, production, digital delivery and on-ground execution under one accountable partner.</p></article>
          <article><BarChart3 /><h3>Data becomes narrative</h3><p>We translate sentiment and demographic inputs into communications people can understand and remember.</p></article>
          <article><Target /><h3>Built for the ground</h3><p>Campaign thinking informed by real field operations across highly competitive regional portfolios.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <div className="section-label">Start a conversation</div><h2>Have a campaign, film or story that needs momentum?</h2><p>Tell us what you are building. We will help shape the strategy, production plan and next move.</p>
          <div className="contact-details"><a href="tel:+919669631505"><Phone /> +91 96696 31505</a><a href="tel:+918452822141"><Phone /> +91 84528 22141</a><a href="mailto:vibrantc7@gmail.com"><Mail /> vibrantc7@gmail.com</a><span><MapPin /> Bhopal · Mumbai</span></div>
        </div>
        <form className="contact-form" onSubmit={submitEnquiry}>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Phone<input name="phone" type="tel" placeholder="Your contact number" /></label>
          <label>What can we help with?<textarea name="message" required rows={4} placeholder="Tell us about your project or campaign" /></label>
          <button className="button button-primary" type="submit">Send enquiry <ArrowRight size={18} /></button>
          {sent && <p className="form-success" role="status">Thank you. Your enquiry is ready for the Vibrant Creations team.</p>}
        </form>
      </section>

      <footer><Image src="/images/logo.png" width={260} height={74} alt="Vibrant Creations" /><p>We turn brands into stories.</p><span>© {new Date().getFullYear()} Vibrant Creations. Registered MSME enterprise.</span></footer>
    </main>
  );
}
