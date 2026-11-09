import { ArrowUpRight, Download, Mail, Linkedin, MapPin } from 'lucide-react';
import Image from 'next/image';

const experience = [
  { role: 'Senior Data Scientist', company: 'Walmart', date: 'Sep 2025 — Present', detail: 'Predictive analytics for retail use cases including demand forecasting, inventory optimization, customer behavior, product recommendations and pricing analysis.', tools: 'Python · SQL · pandas · NumPy · Spark · Databricks' },
  { role: 'Data Scientist', company: 'MUFG', date: 'Aug 2022 — Jul 2024', detail: 'Statistical analysis and machine learning for credit risk, consumer lending and portfolio analytics. Supported feature engineering, model validation, portfolio monitoring and KPI reporting.', tools: 'Python · SQL · Apache Spark · PostgreSQL · Informatica · Tableau' },
  { role: 'Data Scientist', company: 'IKEA', date: 'Mar 2021 — Jul 2022', detail: 'Developed analytical models and reporting for customer, sales and operational data. Performed data-quality analysis and built dashboards to communicate business trends.', tools: 'Python · SQL · scikit-learn · XGBoost · Tableau · Power BI' },
];
const skills = [
  ['Programming', 'Python, SQL, R, Scala, Java'],
  ['Machine learning', 'Classification, regression, clustering, feature engineering, model evaluation'],
  ['Forecasting & risk', 'Time-series forecasting, demand planning, credit risk, roll-rate and vintage analysis'],
  ['Data engineering', 'Apache Spark, PySpark, Databricks, Informatica PowerCenter, ETL/ELT'],
  ['Libraries & BI', 'pandas, NumPy, scikit-learn, XGBoost, TensorFlow, PyTorch, Tableau, Power BI'],
  ['Development & MLOps', 'Git, GitHub, Docker, Kubernetes, MLflow, data quality, model monitoring'],
];
const projects = [
  { n: '01', type: 'FORECASTING · RETAIL', title: 'Retail demand forecasting', description: 'A planned end-to-end study using the M5 Forecasting dataset: exploratory analysis, time-based validation, baseline models and forecast evaluation.', status: 'In development' },
  { n: '02', type: 'RISK · FINANCIAL SERVICES', title: 'Credit risk analysis', description: 'A planned public-dataset case study exploring risk features, classification, validation strategy and model interpretation.', status: 'Planned case study' },
  { n: '03', type: 'BI · BUSINESS ANALYTICS', title: 'Sales & operations analysis', description: 'A planned analytical project combining SQL-based data preparation, business metrics and a concise decision-support dashboard.', status: 'Planned case study' },
];

export default function Home() {
  return <main>
    <header className="site-header wrap">
      <a className="wordmark" href="#top">OBED UR RAHMAN<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#work">Selected work</a><a href="#contact">Contact</a></nav>
      <a className="header-link" href="mailto:obedurrahman984977@gmail.com">Get in touch <ArrowUpRight size={15}/></a>
    </header>

    <section className="intro wrap" id="top">
      <div className="intro-copy">
        <p className="overline">DATA SCIENCE · MACHINE LEARNING · ANALYTICS</p>
        <h1>Obed Ur Rahman</h1>
        <p className="role-line">Data Scientist working across retail, financial services and business analytics.</p>
        <p className="intro-text">I use statistical thinking, machine learning and practical data tools to investigate business problems and turn complex datasets into useful evidence for decisions.</p>
        <div className="intro-links"><a className="solid-link" href="#work">Explore selected work <ArrowUpRight size={16}/></a><a className="text-link" href="/resume.pdf" download><Download size={16}/> Download résumé</a></div>
        <div className="location"><MapPin size={15}/> United States <span>·</span> <a href="mailto:obedurrahman984977@gmail.com">obedurrahman984977@gmail.com</a></div>
      </div>
      <aside className="intro-note"><Image className="profile-photo" src="/obed-profile.jpeg" alt="Obed Ur Rahman, professional portrait" width={420} height={560} priority/><span className="note-label">CURRENT FOCUS</span><p>Forecasting<br/>Predictive modelling<br/>Risk analytics<br/>Data products</p><span className="note-rule"/><span className="note-small">M.S. Data Science<br/>Fairfield University</span></aside>
    </section>

    <div className="fact-strip"><div className="wrap facts"><div><strong>4+ years</strong><span>Experience stated in résumé</span></div><div><strong>Retail & finance</strong><span>Industry experience</span></div><div><strong>M.S.</strong><span>Data Science · Fairfield University</span></div></div></div>

    <section className="section wrap" id="about"><div className="section-head"><span>01</span><p>ABOUT</p></div><div className="about-grid"><h2>Analytical by nature.<br/><i>Practical by design.</i></h2><div className="body-copy"><p>My experience includes demand forecasting, inventory and customer analytics, pricing-related analysis, credit-risk modelling, feature engineering and model validation.</p><p>I enjoy working across the analytical lifecycle: understanding the question, preparing reliable data, testing an appropriate approach, and communicating what the results mean to technical and business stakeholders.</p><p>Alongside industry experience, I have supported programming and algorithms courses as a Teaching Assistant at Fairfield University.</p></div></div></section>

    <section className="section wrap" id="experience"><div className="section-head"><span>02</span><p>EXPERIENCE</p></div><h2 className="section-title">Professional experience</h2><div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.company}><div className="experience-company">{item.company}</div><div className="experience-detail"><h3>{item.role}</h3><p>{item.detail}</p><div className="tools-line">{item.tools}</div></div><time>{item.date}</time></article>)}</div><div className="university-row"><div><h3>Fairfield University</h3><p>Teaching Assistant · Graduate Assistant, International Studies Program</p></div><p>Python programming, fundamentals of programming, algorithms, student support and program coordination.</p></div></section>

    <section className="section wrap" id="work"><div className="section-head"><span>03</span><p>SELECTED WORK</p></div><div className="work-heading"><h2 className="section-title">Projects & case studies</h2><p>These are current portfolio directions, not claims of completed client or production work. I’ll publish the notebooks, code and measured results as each study is completed.</p></div><div className="work-list">{projects.map((p)=><article className="work-item" key={p.n}><span className="work-number">{p.n}</span><div><p className="work-type">{p.type}</p><h3>{p.title}</h3><p className="work-description">{p.description}</p></div><span className="work-status">{p.status}</span></article>)}</div></section>

    <section className="section wrap" id="skills"><div className="section-head"><span>04</span><p>TOOLKIT</p></div><h2 className="section-title">Skills & tools</h2><div className="skills-list">{skills.map(([name, detail], i)=><div className="skill-row" key={name}><span>0{i+1}</span><h3>{name}</h3><p>{detail}</p></div>)}</div></section>

    <section className="education wrap"><div className="section-head"><span>05</span><p>EDUCATION</p></div><div className="education-row"><div><h3>M.S. in Data Science</h3><p>Fairfield University · United States</p></div><div><h3>Bachelor’s degree in Computer Science</h3><p>India</p></div></div></section>

    <section className="contact wrap" id="contact"><p className="overline">CONTACT</p><h2>Let’s talk about<br/>good data work.</h2><p className="contact-copy">For conversations about data science, machine learning, analytics and professional opportunities.</p><a className="solid-link" href="mailto:obedurrahman984977@gmail.com">Email Obed <ArrowUpRight size={16}/></a><div className="social-links"><a href="mailto:obedurrahman984977@gmail.com"><Mail size={16}/> Email</a><a href="https://www.linkedin.com/in/obed-ur-rahman-16377622a/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div></section>
    <footer className="wrap"><span>© {new Date().getFullYear()} Obed Ur Rahman</span><span>Personal portfolio · Last updated November 2026</span></footer>
  </main>;
}
