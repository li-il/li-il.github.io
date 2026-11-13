import { NavLink } from 'react-router-dom';

export default function SiteNav() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-blue-400">LI.</NavLink>
        <div className="flex gap-5 md:gap-8 text-sm font-medium">
          {['About', 'Projects', 'Contact'].map(label => (
            <NavLink key={label} to={`/${label.toLowerCase()}`} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400 transition'}>{label}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
