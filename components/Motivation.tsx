import React from 'react';
import { Search, ListFilter, CheckCircle, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Research",
    stat: "83% Google",
    desc: "Top platforms consumers use for reading reviews.",
    color: "bg-blue-500"
  },
  {
    icon: <ListFilter className="w-8 h-8 text-white" />,
    title: "Shortlist",
    stat: "36%",
    desc: "Consumers watch video content of businesses posting their products.",
    color: "bg-indigo-500"
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "Verify",
    stat: "89%",
    desc: "Expect business owners to respond to all types of reviews.",
    color: "bg-purple-500"
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    title: "Decision",
    stat: "74%",
    desc: "Check at least 2 review sites before making decisions.",
    color: "bg-teal-500"
  }
];

const Motivation: React.FC = () => {
  return (
    <section id="motivation" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-iima-blue mb-4">Research Motivation</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Review text contains deeper informational cues beyond simple ratings. The Indian review ecosystem is still at an exploratory level.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className={`${step.color} w-24 h-24 mx-auto rounded-2xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 duration-300 mb-6`}>
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 h-full text-center hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <div className="text-3xl font-bold text-iima-gold mb-3">{step.stat}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-iima-blue">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Problem Statement</h3>
            <ul className="space-y-4">
                <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full mr-4"></span>
                    <span className="text-slate-700">Existing research treats reviews as unidimensional, missing the nuance of content.</span>
                </li>
                <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full mr-4"></span>
                    <span className="text-slate-700">Limited insights into cognitive, affective, sensory, and social cues in the Indian context.</span>
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Motivation;