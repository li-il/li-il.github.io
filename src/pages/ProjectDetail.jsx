import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Code2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectDetail() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* 返回按钮 */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition mb-12 group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </Link>
        </motion.div>

        {/* 标题区域 */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 animate-gradient-text"
          >
            Jabberwocky
          </motion.h1>
          <p className="text-xl text-slate-400 font-serif italic">
            "A nonsense poem by Lewis Carroll, brought to life with React."
          </p>
        </header>

        {/* 核心展示：诗歌卡片 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/40 border border-slate-700 p-8 md:p-16 rounded-[2rem] shadow-2xl mb-20"
        >
          <div className="flex items-center mb-8 text-blue-400/60">
            <BookOpen size={24} className="mr-3" />
            <span className="font-mono text-sm tracking-widest uppercase">The Stanza</span>
          </div>
          <pre className="text-xl md:text-3xl leading-relaxed font-serif text-white whitespace-pre-wrap">
{`'Twas brillig, and the slithy toves
    Did gyre and gimble in the wabe:
All mimsy were the borogoves,
    And the mome raths outgrabe.`}
          </pre>
        </motion.div>

        {/* 项目详情网格 */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Code2 size={20} className="mr-2 text-emerald-400" /> Technical Stack
            </h3>
            <ul className="space-y-2 text-slate-400 font-mono text-sm">
              <li>• React 18 (Functional Components)</li>
              <li>• Tailwind CSS (Responsive Design)</li>
              <li>• Framer Motion (Orchestrated Animations)</li>
              <li>• Vite (Lightning Fast Build Tool)</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4">The Challenge</h3>
            <p className="text-slate-400 leading-relaxed">
              The goal was to maintain exact formatting and indentation of the original text while 
              integrating it into a modern, reactive user interface.
            </p>
          </motion.div>
        </div>

        {/* 底部按钮 */}
        <div className="flex space-x-6 border-t border-slate-800 pt-12">
          <a href="https://github.com" className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
            <Github size={20} className="mr-2" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
