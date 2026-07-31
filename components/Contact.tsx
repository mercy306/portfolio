'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Quote, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const testimonials = [
    {
      author: 'Academic Advisor',
      role: 'Department of Computer Science',
      company: 'Haramaya University',
      quote:
        'Mihiret demonstrated exceptional technical problem-solving skills and leadership throughout her capstone full-stack project, producing top-tier clean code.',
    },
    {
      author: 'IT Lead',
      role: 'Software Division',
      company: 'Ethiopian Road Administration',
      quote:
        'Highly responsive, organized, and proactive during her software internship. Delivered great front-end UI implementations connected to SQL backends.',
    },
  ];

  return (
    <section id="contact" className="py-28 relative bg-[#0b0c10] overflow-hidden">
      {/* Background Orbs */}
      <div className="glowing-orb glowing-orb-magenta w-[600px] h-[600px] top-0 left-0" />
      <div className="glowing-orb glowing-orb-cyan w-[500px] h-[500px] bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Big Email */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Available for select <br />
                <span className="text-[#66D9ED]">opportunities</span>
              </h2>
              <div className="w-16 h-1 bg-[#DF058D] rounded-full mb-6" />
              <p className="text-slate-300 font-sans text-base leading-relaxed">
                Have an exciting project, front-end role, or full-stack opportunity? Send me an email or connect with me via social channels!
              </p>
            </div>

            {/* Oversized Email Link with Chonky Underline */}
            <div className="pt-2">
              <span className="text-xs font-mono-code text-slate-500 uppercase tracking-widest block mb-2">
                // Send an email
              </span>
              <a
                href="mailto:mihirettsegaye307@gmail.com"
                className="chonky-underline-violet chonky-underline-hover font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-white transition-all"
              >
                mihirettsegaye307@gmail.com
              </a>
            </div>

            {/* Social Links List */}
            <div className="space-y-4 pt-4 border-t border-[#181b2c]">
              <span className="text-xs font-mono-code text-slate-500 uppercase tracking-widest block mb-2">
                // Direct Connect
              </span>
              <div className="flex flex-wrap gap-4 font-mono-code text-sm">
                <a
                  href="https://www.linkedin.com/in/mihiret-tsegaye-586bba39b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#141624] border border-[#23273e] text-slate-200 hover:text-[#66D9ED] hover:border-[#66D9ED] transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#66D9ED]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/mercy306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#141624] border border-[#23273e] text-slate-200 hover:text-[#66D9ED] hover:border-[#66D9ED] transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-[#66D9ED]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="tel:+251952734066"
                  className="px-4 py-2 rounded-lg bg-[#141624] border border-[#23273e] text-slate-200 hover:text-[#FF6B2B] hover:border-[#FF6B2B] transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FF6B2B]" />
                  <span>0952734066</span>
                </a>
              </div>
            </div>

            {/* Recommendations / Quotes */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-mono-code text-slate-500 uppercase tracking-widest block">
                // Endorsements
              </span>
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="tamal-card p-5 rounded-xl border border-[#1f2233] relative"
                >
                  <Quote className="w-6 h-6 text-[#DF058D]/40 mb-2" />
                  <p className="text-slate-300 text-xs italic leading-relaxed mb-3">
                    "{t.quote}"
                  </p>
                  <div className="font-mono-code text-xs">
                    <span className="text-white font-bold">{t.author}</span>
                    <span className="text-slate-400"> - {t.role}, {t.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="tamal-card p-8 rounded-2xl border border-[#1f2233] relative">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#66D9ED]" />
                <span>Send a Message</span>
              </h3>
              <p className="text-slate-400 text-sm mb-6 font-sans">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono-code text-slate-300 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0b0c10] border ${
                      errors.name ? 'border-red-500' : 'border-[#23273e]'
                    } text-white font-mono-code text-sm focus:border-[#66D9ED] focus:outline-none transition-colors`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono-code">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono-code text-slate-300 uppercase mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0b0c10] border ${
                      errors.email ? 'border-red-500' : 'border-[#23273e]'
                    } text-white font-mono-code text-sm focus:border-[#66D9ED] focus:outline-none transition-colors`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono-code">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono-code text-slate-300 uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0b0c10] border ${
                      errors.message ? 'border-red-500' : 'border-[#23273e]'
                    } text-white font-mono-code text-sm focus:border-[#66D9ED] focus:outline-none transition-colors resize-none`}
                    placeholder="Write your project details or message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono-code">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-[#14291f] border border-emerald-600/40 rounded-lg flex items-center gap-2 font-mono-code text-xs text-emerald-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Message sent successfully! I will reply soon.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-[#2C49D8] text-white font-mono-code font-bold text-sm hover:bg-[#3856ed] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2C49D8]/30 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>// send_message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
