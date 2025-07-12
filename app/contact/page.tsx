// ./app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "@/app/actions";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ error: '', success: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ error: '', success: '' });

    const result = await sendContactMessage(formData);

    setIsLoading(false);
    if (result.error) {
      setStatus({ ...status, error: result.error });
    } else {
      setStatus({ ...status, success: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a question or want to collaborate? Drop us a line.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-neutral">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="input-style" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-neutral">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="input-style" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-neutral">Subject</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="input-style" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-neutral">Message</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="input-style"></textarea>
            </div>
            <button type="submit" disabled={isLoading} className="w-full py-3 px-4 bg-brand-gold text-brand-black font-semibold rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50">
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {status.success && <p className="text-green-500 text-center mt-4">{status.success}</p>}
            {status.error && <p className="text-red-500 text-center mt-4">{status.error}</p>}
          </form>

          {/* Embedded Map */}
          <div className="w-full h-full min-h-[400px] bg-[#111] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816911295383!2d36.82194631526495!3d-1.283838999064047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b6392376!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1678886512345!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}