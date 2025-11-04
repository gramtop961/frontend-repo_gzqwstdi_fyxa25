import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" aria-label="SweetPie hero" className="relative">
      <div
        className="bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604342180115-88d918b4100f?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="bg-gradient-to-b from-pink-100/70 via-white/70 to-white/90">
          <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="inline-block rounded-full bg-pink-50 px-4 py-1 text-pink-700 ring-1 ring-pink-200">
                Welcome to SweetPie
              </p>
              <h1 className="mt-6 text-4xl font-serif leading-tight text-slate-900 sm:text-6xl">
                Handcrafted Cakes, Baked with Love
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                From delicate florals to decadent layers, every slice is a sweet story.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="#menu"
                  className="rounded-full bg-pink-600 px-6 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  aria-label="Order cakes online"
                >
                  Order Online
                </a>
                <a
                  href="#about"
                  className="rounded-full bg-white px-6 py-3 text-pink-700 ring-1 ring-pink-200 transition-colors hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  Our Story
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
