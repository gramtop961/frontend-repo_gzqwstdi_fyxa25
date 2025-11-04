import { motion } from 'framer-motion';

const cakes = [
  {
    name: 'Strawberry Blossom',
    price: '$38',
    img: 'https://images.unsplash.com/photo-1541782814452-d2a8968d1d4a?q=80&w=2069&auto=format&fit=crop',
    desc: 'Fluffy vanilla sponge, strawberry compote, and whipped cream roses.',
  },
  {
    name: 'Chocolate Velvet',
    price: '$42',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476b?q=80&w=2069&auto=format&fit=crop',
    desc: 'Rich cocoa layers with silky ganache and dark chocolate shards.',
  },
  {
    name: 'Lemon Cloud',
    price: '$36',
    img: 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?q=80&w=2069&auto=format&fit=crop',
    desc: 'Zesty lemon curd, light meringue, and buttery sponge.',
  },
  {
    name: 'Blueberry Dream',
    price: '$40',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2069&auto=format&fit=crop',
    desc: 'Vanilla bean layers with blueberry compote and cream cheese frosting.',
  },
  {
    name: 'Salted Caramel Crown',
    price: '$44',
    img: 'https://images.unsplash.com/photo-1511911063855-3e3d5f29375f?q=80&w=2069&auto=format&fit=crop',
    desc: 'Moist brown sugar cake, salted caramel filling, and praline crunch.',
  },
  {
    name: 'Raspberry Pistachio',
    price: '$46',
    img: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2069&auto=format&fit=crop',
    desc: 'Pistachio sponge, raspberry jam, and rosewater buttercream.',
  },
];

const Menu = () => {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 id="menu-heading" className="text-3xl font-serif text-slate-900 sm:text-4xl">
            Our Cakes
          </h2>
          <p className="text-sm text-slate-500">Tap a cake to view details</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cakes.map((cake) => (
            <motion.article
              key={cake.name}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="group overflow-hidden rounded-2xl bg-gradient-to-b from-white to-pink-50 ring-1 ring-slate-200 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cake.img}
                  alt={`${cake.name} cake`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{cake.name}</h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                    {cake.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{cake.desc}</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-pink-600 px-4 py-2 text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  aria-label={`Order ${cake.name}`}
                  onClick={() => alert(`Added ${cake.name} to your order!`)}
                >
                  Add to Order
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
