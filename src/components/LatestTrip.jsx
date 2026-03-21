import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Globe } from 'lucide-react';

const LatestTrip = () => {
  // 这里填入你最近一次旅行的真实数据
  const latest = {
    city: "Toronto",
    date: "March 2026",
    desc: "Exploring the foggy skyline and lakeside serenity.",
    // 建议直接引用你 travel 项目里的图片地址，或者主站本地的一张精美缩略图
    image: "https://images.unsplash.com", 
    link: "https://li-il.github.io"
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* 左侧：精美大图 */}
          <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
            <img 
              src={latest.image} 
              alt={latest.city}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* 右侧：文字介绍 */}
          <div className="w-full md:w-1/2 p-10 md:p-16 relative">
            <div className="absolute top-10 right-10 opacity-10">
              <Globe size={120} className="text-blue-500" />
            </div>

            <div className="flex items-center space-x-3 text-blue-400 font-mono text-xs tracking-widest uppercase mb-6">
              <span className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Latest Footprint</span>
              <span className="text-slate-600">/</span>
              <div className="flex items-center"><Calendar size={12} className="mr-1"/> {latest.date}</div>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6 flex items-center italic">
              <MapPin className="mr-3 text-blue-500" size={32} /> {latest.city}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-10 text-lg font-light">
              {latest.desc}
            </p>

            <a 
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white font-bold group/btn"
            >
              <span className="border-b-2 border-blue-500 pb-1 group-hover/btn:border-blue-400 transition-colors">
                View Full Adventure
              </span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestTrip;
