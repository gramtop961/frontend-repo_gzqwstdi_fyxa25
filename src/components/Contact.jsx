import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-gradient-to-b from-pink-50/60 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="contact-heading" className="text-3xl font-serif text-slate-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Questions, custom orders, or event inquiries? We’d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Custom cake for Saturday"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Tell us about your occasion, flavors, and size preferences."
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-pink-600 px-4 py-3 font-medium text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              aria-label="Send message"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">Visit Us</h3>
              <p className="mt-2 flex items-start gap-3 text-slate-700">
                <MapPin className="mt-0.5 h-5 w-5 text-blue-700" aria-hidden />
                123 Sweet Street, Pâtisserie District, Dessert City
              </p>
              <p className="mt-2 flex items-center gap-3 text-slate-700">
                <Phone className="h-5 w-5 text-blue-700" aria-hidden />
                (555) 123-4567
              </p>
              <p className="mt-2 flex items-center gap-3 text-slate-700">
                <Mail className="h-5 w-5 text-blue-700" aria-hidden />
                hello@sweetpie.com
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-pink-50"
                  aria-label="SweetPie on Instagram"
                >
                  <Instagram className="h-4 w-4 text-pink-600" aria-hidden /> Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-blue-50"
                  aria-label="SweetPie on Facebook"
                >
                  <Facebook className="h-4 w-4 text-blue-700" aria-hidden /> Facebook
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                alt="Cozy bakery interior with warm lighting and display of cakes"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
