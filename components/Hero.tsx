import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Author } from '../types';

const authors: Author[] = [
  { name: "Shishir Trivedi", institution: "Goa Institute of Management" },
  { name: "Dr. Alekh Gour", institution: "IIM Sirmaur" },
  { name: "Dr. Yukti Sharma", institution: "IIM Tiruchirappalli" },
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-iima-blue to-slate-900 text-white">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 rounded-full px-4 py-1.5 border border-blue-400/30">
              <span className="w-2 h-2 rounded-full bg-iima-gold animate-pulse"></span>
              <span className="text-sm font-medium text-blue-100">Track 10: Data Science & AI</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
              Information Dimensionality in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-iima-gold">
                Dine-in vs Delivery Reviews
              </span>
            </h1>

            <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
              Exploring the cognitive, affective, sensory, and social cues in the Indian food delivery ecosystem. 
              A comprehensive study analyzing 3.2M Zomato reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#motivation" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-iima-blue bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore Findings
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <div className="flex items-center space-x-6 px-4 text-sm text-blue-200">
                 <div className="flex items-center"><Calendar size={16} className="mr-2" /> Dec 5-7, 2025</div>
                 <div className="flex items-center"><MapPin size={16} className="mr-2" /> IIM Ahmedabad</div>
              </div>
            </div>
          </div>

          {/* Authors Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-6">Presented By</h3>
            <div className="space-y-6">
              {authors.map((author, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-iima-gold to-yellow-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{author.name}</p>
                    <p className="text-blue-200 text-sm">{author.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;