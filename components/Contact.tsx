import React from 'react';
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-iima-gold">Have Questions?</h2>
            <p className="text-xl text-slate-300">
              We welcome collaboration and inquiries regarding our research on the Indian food delivery ecosystem.
            </p>
            
            <div className="space-y-4 pt-4">
              <a href="mailto:shishir.trivedi21fpm@gim.ac.in" className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="text-lg">shishir.trivedi21fpm@gim.ac.in</span>
              </a>
              
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="text-lg">8871993353</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                    <MessageCircle size={24} />
                </a>
            </div>
          </div>

          {/* QR Code Placeholder / Form */}
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-iima-blue focus:border-transparent outline-none" placeholder="Dr. John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-iima-blue focus:border-transparent outline-none" placeholder="john@university.edu" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Interest</label>
                    <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-iima-blue focus:border-transparent outline-none h-32" placeholder="I'm interested in the sensory cues dataset..."></textarea>
                </div>
                <button type="submit" className="w-full bg-iima-blue hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-all">
                    Get in Touch
                </button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2025 IMRC Conference Presentation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;