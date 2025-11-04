import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = 'SweetPie • Handcrafted Cakes & Desserts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'SweetPie bakery offers handcrafted cakes, custom designs, and decadent desserts for every celebration.';
      document.head.appendChild(m);
    } else {
      metaDesc.setAttribute(
        'content',
        'SweetPie bakery offers handcrafted cakes, custom designs, and decadent desserts for every celebration.'
      );
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const k = document.createElement('meta');
      k.name = 'keywords';
      k.content = 'SweetPie, cakes, bakery, desserts, custom cakes, wedding cakes, birthday cakes';
      document.head.appendChild(k);
    } else {
      metaKeywords.setAttribute(
        'content',
        'SweetPie, cakes, bakery, desserts, custom cakes, wedding cakes, birthday cakes'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2" aria-label="SweetPie home">
            <span className="text-2xl font-serif text-pink-700">SweetPie</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 sm:flex">
            <a href="#about" className="text-sm text-slate-700 hover:text-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">About</a>
            <a href="#menu" className="text-sm text-slate-700 hover:text-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">Menu</a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">Contact</a>
            <a href="#menu" className="rounded-full bg-pink-600 px-4 py-2 text-white shadow-sm transition-transform duration-150 hover:scale-[1.03] hover:bg-pink-700">Order</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-pink-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} SweetPie. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#about" className="hover:text-pink-700">About</a>
              <a href="#menu" className="hover:text-pink-700">Menu</a>
              <a href="#contact" className="hover:text-pink-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
