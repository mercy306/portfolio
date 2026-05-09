'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
      newErrors.email = 'Please enter a valid email';
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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Integrate with EmailJS, Formspree, or your backend API
    // Example with Formspree:
    // try {
    //   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitSuccess(true);
    //     setFormData({ name: '', email: '', message: '' });
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-slate-100 to-cyan-100 dark:from-slate-900 dark:via-slate-950/10 dark:to-slate-950 -z-10"></div>

      {/* Decorative glow effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                Have a project in mind or just want to say hi? Feel free to reach out.
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all transform group-hover:scale-110">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
                  <a href="mailto:mihirettsegaye307@gmail.com" className="text-lg text-slate-900 dark:text-slate-100 font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text transition-all">
                    mihirettsegaye307@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all transform group-hover:scale-110">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Phone</p>
                  <a href="tel:+251952734066" className="text-lg text-slate-900 dark:text-slate-100 font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all">
                    0952734066
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all transform group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</p>
                  <p className="text-lg text-slate-900 dark:text-slate-100 font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:bg-clip-text transition-all">Open to remote</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-700 focus:ring-blue-500 focus:border-transparent'
                    } bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-all focus:shadow-lg focus:shadow-blue-500/20`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-700 focus:ring-blue-500 focus:border-transparent'
                    } bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-all focus:shadow-lg focus:shadow-blue-500/20`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-700 focus:ring-blue-500 focus:border-transparent'
                    } bg-gradient-to-br from-gray-900 to-black text-white transition-all focus:shadow-lg focus:shadow-blue-500/20 resize-none`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900 border border-green-700 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-300">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 inline-block mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
