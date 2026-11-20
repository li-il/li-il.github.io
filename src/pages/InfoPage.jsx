import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import SiteNav from '../components/SiteNav';

const pageCopy = {
  about: ['About', 'Curious by default.', 'A few edge cases, a little experimentation, and plenty of “what if?”'],
  projects: ['Projects', 'Things I build & explore.', 'A growing collection of projects, experiments, and places.'],
  contact: ['Contact', 'Let’s connect.', 'Find my work and follow along on GitHub.'],
};

export default function InfoPage({ page }) {
  const [label, title, description] = pageCopy[page];
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <SiteNav />
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <p className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-5">{label}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{title}</h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12">{description}</p>
        {page === 'about' && (
          <section className="max-w-3xl rounded-2xl border border-slate-700 bg-slate-800/40 p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-5">Hi, I’m Li.</h2>
            <p className="text-slate-300 leading-relaxed mb-5">I’m a quality engineer with a soft spot for awkward edge cases and the question “what happens if…?” Making things work is fun. Making sure they still work when someone clicks twice, skips a step, or takes the scenic route? Even better.</p>
            <p className="text-slate-400 leading-relaxed mb-5">I like turning repetitive checks into automation and mysterious bugs into repeatable steps. Fewer surprises for users, more little “aha!” moments for me.</p>
            <p className="text-slate-400 leading-relaxed mb-8">This corner of the web holds small experiments, travel snapshots, and things I’m figuring out along the way. Same curiosity, different tabs.</p>
            <Link to="/projects" className="inline-flex items-center gap-2 text-blue-400 font-medium">Explore my projects <ArrowUpRight size={18} /></Link>
          </section>
        )}
        {page === 'projects' && (
          <section aria-label="Project collection" className="grid md:grid-cols-2 gap-6">
            <a href="https://li-il.github.io/travel/#/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-700 bg-slate-800/40 p-8 hover:border-blue-400 transition">
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest">Live project</span>
              <h2 className="text-2xl font-bold mt-4 mb-3">Interactive Travel Map</h2>
              <p className="text-slate-400 leading-relaxed mb-6">Explore a global footprint tracker and the places behind my travels.</p>
              <span className="inline-flex items-center gap-2 text-blue-400">Open travel map <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></span>
            </a>
            <Link to="/project/jabberwocky" className="rounded-2xl border border-slate-700 bg-slate-800/40 p-8 hover:border-blue-400 transition">
              <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">Web experiment</span>
              <h2 className="text-2xl font-bold mt-4 mb-3">Jabberwocky</h2>
              <p className="text-slate-400 leading-relaxed mb-6">A small poetry page exploring typography and motion with React.</p>
              <span className="inline-flex items-center gap-2 text-blue-400">View project <ArrowUpRight size={18} /></span>
            </Link>
            {[1, 2].map(number => (
              <article key={number} className="rounded-2xl border border-dashed border-slate-700 p-8">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">Coming soon</span>
                <h2 className="text-2xl font-bold mt-4 mb-3">Future project {String(number).padStart(2, '0')}</h2>
                <p className="text-slate-400 leading-relaxed">A space for a future project. Details and a link will be added here when it’s ready.</p>
              </article>
            ))}
          </section>
        )}
        {page === 'contact' && (
          <section className="max-w-2xl rounded-2xl border border-slate-700 bg-slate-800/40 p-8 md:p-10">
            <Github size={28} className="text-blue-400 mb-6" />
            <h2 className="text-2xl font-bold mb-3">Find me on GitHub</h2>
            <p className="text-slate-400 leading-relaxed mb-8">Browse my public repositories and explore what I’m working on.</p>
            <a href="https://github.com/li-il" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500 transition">Visit @li-il <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
          </section>
        )}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mt-12"><ArrowLeft size={18} /> Back to home</Link>
      </main>
    </div>
  );
}
