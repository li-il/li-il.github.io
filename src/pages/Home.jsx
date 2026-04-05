import React, { useState, useEffect } from 'react'; // 修复 1: 必须包含 useState 和 useEffect
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { 
  Github, Mail, Linkedin, Globe, Cpu, 
  MapPin, Calendar, ArrowRight, Camera 
} from 'lucide-react';
import { geoContains } from "d3-geo"; // 修复 2: 确保已安装 d3-geo
import { feature } from "topojson-client"; // 修复 3: 确保已安装 topojson-client
import { travelSpots } from '../data/travelData'; 

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // 修复 4: 自动计算逻辑
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // 确保你的主站 public 文件夹里也有一份 world.json
    fetch("./world.json") 
      .then(res => res.json())
      .then(worldData => {
        const countries = feature(worldData, worldData.objects.countries).features;
        const visitedSet = new Set();

        travelSpots.forEach(spot => {
          const country = countries.find(c => geoContains(c, spot.coordinates));
          if (country) visitedSet.add(country.id || country.properties.name);
        });

        const calculated = ((visitedSet.size / 195) * 100).toFixed(1);
        setPercent(calculated);
      })
      .catch(() => setPercent(1.5)); // 失败时的保底显示
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* 1. 导航栏 */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
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
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-blue-400 font-mono mb-4 text-lg">Hi, this is</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight animate-gradient-text">
            LI. <br />
            <span className="text-slate-500 italic text-5xl md:text-7xl block mt-2">Engineering Quality.</span> 
            <span className="text-slate-500 italic text-5xl md:text-7xl block mt-2">Securing Trust.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-xl text-lg text-slate-400 leading-relaxed mb-12">
          Drive quality & security through automation.     </motion.p>
        </div>
      </header>
      {/* 4. 项目展示 */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 情况 A: 站内子页面项目 */}
        <ProjectCard 
          id="jabberwocky"
          title="place holder"
          desc="'Twas brillig, and the slithy toves did gyre and gimble in the wabe..."
          tags={["React", "Vite", "GitHub Pages"]}
          icon={<Globe size={20} />}
        />

        {/* 情况 B: 外部独立部署项目 (Travel Map) */}
        <ProjectCard 
          externalUrl="https://li-il.github.io/travel/#/"
          title="Interactive Travel Map"
          desc="A global footprint tracker built with React-Simple-Maps."
          tags={["React", "D3", "Framer Motion"]}
          icon={<Globe size={20} />}
        />
      </div>

      </section>
      {/* 3. 最新足迹 */}
      <motion.section {...fadeInUp} className="max-w-6xl mx-auto px-6 py-12">
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-800/40 border border-white/5 backdrop-blur-sm shadow-2xl transition-all hover:border-blue-500/20">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
              <img src="https://unsplash.com" alt="Latest Trip" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="w-full md:w-7/12 p-8 md:p-12 relative flex flex-col justify-center">
              <div className="flex items-center space-x-3 text-blue-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-6">
                <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Latest Footprint</span>
                <span className="text-slate-700">/</span>
                <span className="flex items-center"><Calendar size={12} className="mr-2"/> March 2026</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 flex items-center italic tracking-tighter"><MapPin className="mr-3 text-blue-500" size={28} /> Toronto</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-4 max-w-md font-light">Exploring the foggy skyline and lakeside serenity. A visual diary of my latest journey through the North.</p>
              
              {/* 自动计算的进度条 */}
              <div className="mb-10 max-w-xs">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Global Footprint</span>
                  <span className="text-xl font-black text-white">{percent}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-blue-600 to-emerald-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                </div>
              </div>

              {/* 修复 5: 完整的外部链接地址 */}
              <a href="https://li-il.github.io/travel/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center group/btn text-white font-bold">
                <span className="border-b-2 border-blue-600 pb-1 group-hover/btn:border-blue-400 transition-all">Explore Travel Log</span>
                <ArrowRight size={18} className="ml-3 group-hover/btn:translate-x-2 transition-transform text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      

      {/* 5. 页脚 */}
      <footer className="py-12 text-center text-slate-500 text-sm font-mono border-t border-slate-800">
        <p>© {new Date().getFullYear()} Li </p>
      </footer>
    </div>
  );
}

function ProjectCard({ id, title, desc, tags, icon, externalUrl }) {
  // 定义卡片主体 UI
  const CardContent = (
    <motion.div 
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-8 rounded-2xl bg-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl h-full flex flex-col cursor-pointer"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">{title}</h4>
      <p className="text-slate-400 mb-8 leading-relaxed italic font-serif flex-grow">
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

  // 逻辑判断：
  // 1. 如果有 externalUrl，使用 <a> 标签跳转到外部项目 (如 Travel Map)
  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
        {CardContent}
      </a>
    );
  }

  // 2. 如果有 id，使用 <Link> 跳转到本站子页面 (如 Jabberwocky)
  if (id) {
    return (
      <Link to={`/project/${id}`} className="no-underline">
        {CardContent}
      </Link>
    );
  }

  // 3. 兜底返回
  return CardContent;
}


export default Home;
