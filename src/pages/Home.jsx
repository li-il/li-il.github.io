import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { 
  Github, Mail, Linkedin, Globe, Cpu, 
  MapPin, Calendar, ArrowRight, Camera 
} from 'lucide-react'; // 合并了所有图标引用

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* 1. 导航栏 */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero 区域 */}
      <header id="about" className="pt-48 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono mb-4 text-lg"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight animate-gradient-text"
          >
            Your Name. <br />
            <span className="text-slate-500 italic text-5xl md:text-7xl block mt-2">
              I build quality & security experiences.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-lg text-slate-400 leading-relaxed mb-12"
          >
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </motion.p>
        </div>
      </header>

      {/* 3. 新增：最新足迹 (Latest Footprint) */}
      <motion.section 
        {...fadeInUp}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-800/40 border border-white/5 backdrop-blur-sm shadow-2xl transition-all hover:border-blue-500/20">
          <div className="flex flex-col md:flex-row">
            {/* 左侧大图 - 建议替换为你真实的旅行封面 */}
            <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com" 
                alt="Latest Trip"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* 右侧内容 */}
            <div className="w-full md:w-7/12 p-8 md:p-12 relative flex flex-col justify-center">
              <div className="flex items-center space-x-3 text-blue-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-6">
                <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Latest Footprint</span>
                <span className="text-slate-700">/</span>
                <span className="flex items-center"><Calendar size={12} className="mr-2"/> March 2026</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-4 flex items-center italic tracking-tighter">
                <MapPin className="mr-3 text-blue-500" size={28} /> Toronto
              </h3>

              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md font-light">
                Exploring the foggy skyline and lakeside serenity. A visual diary of my latest journey through the North.
              </p>

              <a 
                href="https://li-il.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group/btn text-white font-bold"
              >
                <span className="border-b-2 border-blue-600 pb-1 group-hover/btn:border-blue-400 transition-all">
                  Explore Travel Log
                </span>
                <ArrowRight size={18} className="ml-3 group-hover/btn:translate-x-2 transition-transform text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. 项目展示区域 */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h3 {...fadeInUp} className="text-3xl font-bold mb-16 flex items-center">
            <span className="text-blue-400 font-mono text-xl mr-4">01.</span> 
            Some Things I’ve Built
            <div className="h-[1px] bg-slate-700 flex-grow ml-8 hidden md:block"></div>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              id="jabberwocky"
              title="Jabberwocky Poem"
              desc="'Twas brillig, and the slithy toves did gyre and gimble in the wabe..."
              tags={["React", "Vite", "GitHub Pages"]}
              icon={<Globe size={20} />}
            />
            <ProjectCard 
              id="placeholder"
              title="Personal Portfolio"
              desc="A modern, dark-themed portfolio website built with Framer Motion."
              tags={["Tailwind", "Framer Motion", "Lucide"]}
              icon={<Cpu size={20} />}
            />
          </div>
        </div>
      </section>

      {/* 5. 联系我 */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="p-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 shadow-2xl"
          >
            <div className="bg-slate-900 rounded-[23px] p-12 md:p-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h3>
              <p className="text-slate-400 text-lg mb-12">
                I'm currently looking for new opportunities. My inbox is always open!
              </p>

              <motion.a
                href="mailto:yourname@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all mb-12"
              >
                Say Hello <Mail className="ml-2" size={20} />
              </motion.a>

              <div className="flex justify-center space-x-10">
                <SocialIcon href="https://github.com" icon={<Github />} />
                <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 text-sm font-mono border-t border-slate-800">
        <p>© {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

function ProjectCard({ id, title, desc, tags, icon }) {
  return (
    <Link to={`/project/${id}`}>
      <motion.div 
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group p-8 rounded-2xl bg-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl h-full flex flex-col"
      >
        <div className="text-blue-400 mb-4">{icon}</div>
        <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">{title}</h4>
        <p className="text-slate-400 mb-8 leading-relaxed italic font-serif flex-grow">
            {desc}
        </p>
        <div className="flex flex-wrap gap-3">
            {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-800 text-blue-300 text-xs font-mono rounded-full border border-slate-700">
                {tag}
            </span>
            ))}
        </div>
      </motion.div>
    </Link>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, color: '#60a5fa' }}
      className="text-slate-400 transition-colors"
    >
      {React.cloneElement(icon, { size: 28 })}
    </motion.a>
  );
}

export default Home;
