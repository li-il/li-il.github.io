import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ExternalLink, Code2, Cpu, Globe } from 'lucide-react';

function App() {
  // 动画配置：统一的淡入上滑效果
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* 1. 导航栏 (带模糊效果) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Dev.Portfolio
          </motion.span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero 区域 (首屏介绍) */}
      <header id="about" className="pt-48 pb-32 px-6">
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
            {/* 将类名合并到这里，注意去掉多余的 h1 标签 */}
            className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight animate-gradient-text"
          >
            Your Name. <br />
            <span className="text-slate-500 italic">I build digital experiences.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-lg text-slate-400 leading-relaxed mb-12"
          >
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products with <span className="text-blue-400">React</span> and <span className="text-emerald-400">Tailwind</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-4"
          >
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
              View My Work
            </a>
          </motion.div>
        </div>
      </header>

      {/* 3. 项目展示区域 */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h3 {...fadeInUp} className="text-3xl font-bold mb-16 flex items-center">
            <span className="text-blue-400 font-mono text-xl mr-4">01.</span> 
            Some Things I’ve Built
            <div className="h-[1px] bg-slate-700 flex-grow ml-8 hidden md:block"></div>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 项目 1: Jabberwocky */}
            <ProjectCard 
              title="Jabberwocky Poem"
              desc="'Twas brillig, and the slithy toves did gyre and gimble in the wabe..."
              tags={["React", "Vite", "GitHub Pages"]}
              icon={<Globe size={20} />}
            />

            {/* 项目 2: 占位项目 */}
            <ProjectCard 
              title="Personal Portfolio"
              desc="A modern, dark-themed portfolio website built with Framer Motion for smooth animations."
              tags={["Tailwind", "Framer Motion", "Lucide"]}
              icon={<Cpu size={20} />}
            />
          </div>
        </div>
      </section>

      {/* 4. 联系我区域 (带渐变边框效果) */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="p-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 shadow-2xl"
          >
            <div className="bg-slate-900 rounded-[23px] p-12 md:p-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h3>
              <p className="text-slate-400 text-lg mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
              </p>

              <motion.a
                href="mailto:yourname@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all mb-12"
              >
                Say Hello <Mail className="ml-2" size={20} />
              </motion.a>

              {/* 底部社交链接 */}
              <div className="flex justify-center space-x-10">
                <SocialIcon href="https://github.com" icon={<Github />} />
                <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. 页脚 */}
      <footer className="py-12 text-center text-slate-500 text-sm font-mono border-t border-slate-800">
        <p>Built with React & Tailwind CSS</p>
        <p className="mt-2">© {new Date().getFullYear()} Your Name</p>
      </footer>

    </div>
  );
}

// 辅助组件：项目卡片
function ProjectCard({ title, desc, tags, icon }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-8 rounded-2xl bg-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl relative overflow-hidden"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">{title}</h4>
      <p className="text-slate-400 mb-8 leading-relaxed italic font-serif">
        {desc}
      </p>
      <div className="flex flex-wrap gap-3 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-slate-800 text-blue-300 text-xs font-mono rounded-full border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// 辅助组件：社交图标
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

export default App;
