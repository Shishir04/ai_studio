import React from 'react';
import { Database, BrainCircuit, BarChart3, MessageSquare } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
          {/* Left Column: Stats & Data */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-iima-blue mb-6">Methodology & Data</h2>
            <p className="text-slate-600 mb-8 text-lg">
              We employed a robust moderated regression framework on a massive dataset to extract linguistic cues.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <Database className="text-iima-blue mb-4 w-8 h-8" />
                    <h4 className="text-2xl font-bold text-slate-900">3.2M</h4>
                    <p className="text-slate-500">Zomato Reviews from 18 Cities</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <BrainCircuit className="text-iima-blue mb-4 w-8 h-8" />
                    <h4 className="text-xl font-bold text-slate-900">Topic Modeling</h4>
                    <p className="text-slate-500">Linguistic & Sentiment Analysis</p>
                </div>
            </div>
          </div>

          {/* Right Column: Framework Visualization */}
          <div className="relative p-8 bg-gradient-to-br from-slate-900 to-iima-blue rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center border-b border-white/20 pb-4">Conceptual Framework</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative">
                
                {/* Input */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 w-full md:w-32 text-center">
                    <MessageSquare className="mx-auto mb-2 text-iima-gold" />
                    <span className="font-semibold text-sm">Online Reviews</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:block w-12 h-0.5 bg-white/50"></div>

                {/* Dimensions */}
                <div className="bg-white text-slate-900 p-6 rounded-xl shadow-lg w-full md:w-64 z-10">
                    <h4 className="font-bold text-iima-blue mb-3 text-center text-sm uppercase tracking-wide">Info Dimensions</h4>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Cognitive</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Affective</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Sensory</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Social</li>
                    </ul>
                </div>

                {/* Arrow */}
                <div className="hidden md:block w-12 h-0.5 bg-white/50"></div>

                {/* Output */}
                <div className="bg-iima-gold p-4 rounded-lg shadow-lg w-full md:w-32 text-center">
                    <BarChart3 className="mx-auto mb-2 text-white" />
                    <span className="font-bold text-sm">Perceived Helpfulness</span>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-blue-200">
                Moderated by: Service Mode & Sentiment Polarity
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;