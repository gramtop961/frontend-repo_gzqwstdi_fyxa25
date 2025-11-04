import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <h2 id="about-heading" className="text-3xl font-serif text-slate-900 sm:text-4xl">
              The SweetPie Story
            </h2>
            <p className="mt-4 text-slate-600">
              SweetPie began as a family kitchen dream, where weekend bakes turned into a passion for
              exquisite flavors and timeless designs. Today, our bakers craft every cake by hand, using
              premium ingredients and artisanal techniques to ensure beauty in every bite.
            </p>
            <p className="mt-4 text-slate-600">
              From birthdays to weddings, we believe celebrations deserve cakes that are both stunning and
              unforgettable. Your moments inspire our masterpieces.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616512655378-45e0743b3a03?q=80&w=2069&auto=format&fit=crop"
              alt="Baker decorating a layered cake with fresh berries"
              className="w-full rounded-2xl shadow-xl ring-1 ring-slate-200"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
