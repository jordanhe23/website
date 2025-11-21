import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black relative border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 leading-relaxed">
          Interested in discussing risk modeling, actuarial data science, or just want to say hello? 
          I'm always open to connecting with fellow professionals in the insurance and analytics space.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <a href="mailto:jordanhe23@gmail.com" className="w-full md:w-auto min-w-[240px] flex items-center justify-center gap-3 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors group shadow-sm hover:shadow-md">
            <div className="p-2 bg-white dark:bg-black rounded-lg">
              <Mail className="w-5 h-5 text-neutral-900 dark:text-white" />
            </div>
            <span className="text-neutral-900 dark:text-white font-medium">jordanhe23@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/jordanhe23/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto min-w-[240px] flex items-center justify-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all text-neutral-700 dark:text-neutral-300 shadow-sm hover:shadow-md">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;