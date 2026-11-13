import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import InfoPage from './pages/InfoPage';
import SiteNav from './components/SiteNav';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {['about', 'projects', 'contact'].map(page => <Route key={page} path={`/${page}`} element={<InfoPage page={page} />} />)}
        {/* :id 是动态参数，可以匹配 /project/jabberwocky 等 */}
        <Route path="/project/jabberwocky" element={<><SiteNav /><ProjectDetail /></>} />
        <Route path="*" element={<div className="min-h-screen bg-slate-900 text-slate-100"><SiteNav /><main className="max-w-6xl mx-auto px-6 pt-36"><h1 className="text-4xl font-bold mb-6">Page not found</h1><a href="#/" className="text-blue-400">Back to home</a></main></div>} />
      </Routes>
    </Router>
  );
}

export default App;
