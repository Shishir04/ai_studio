import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Check, X, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { StatData, Hypothesis } from '../types';

const descriptiveStats: StatData[] = [
  { name: 'Sensory', mean: 0.36, sd: 1.22 },
  { name: 'Cognitive', mean: 0.10, sd: 0.51 },
  { name: 'Affective', mean: 0.11, sd: 0.47 },
  { name: 'Social', mean: 0.24, sd: 0.95 },
];

const hypotheses: Hypothesis[] = [
  { id: 'H1', statement: 'Cognitive information ↑ helpfulness', result: 'Supported', coefficient: 0.120 },
  { id: 'H2', statement: 'Sensory information ↑ helpfulness', result: 'Supported', coefficient: 0.120 },
  { id: 'H3', statement: 'Social information ↑ helpfulness', result: 'Supported', coefficient: 0.082 },
  { id: 'H4', statement: 'Affective information ↓ helpfulness', result: 'Supported', coefficient: -0.161 }, 
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-iima-blue">Key Findings</h2>
          <p className="mt-4 text-slate-600">Analysis of 1.6M observations revealing the impact of information dimensions.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Chart Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <BarChart3 className="mr-2 text-iima-gold" />
              Information Dimensions (Mean Presence)
            </h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={descriptiveStats} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={80} tick={{fill: '#475569', fontWeight: 600}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="mean" radius={[0, 4, 4, 0]} barSize={30}>
                    {descriptiveStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#3b82f6', '#6366f1', '#a855f7', '#14b8a6'][index % 4]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-400 mt-4 text-center">Fig 1. Mean distribution of review content types (Scale 0-1)</p>
          </div>

          {/* Hypotheses Grid */}
          <div className="grid grid-cols-1 gap-4">
            {hypotheses.map((h) => (
              <div key={h.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-iima-blue hover:shadow-lg transition-all flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{h.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${h.result === 'Supported' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {h.result}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-800 text-lg">{h.statement}</h4>
                </div>
                <div className={`p-3 rounded-full ${h.statement.includes('↓') ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                    {h.statement.includes('↓') ? <TrendingDown size={24} /> : <TrendingUp size={24} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implications */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-iima-blue text-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 font-serif">For Platforms</h4>
                <p className="text-blue-100">Highlight sensory and cognitive cues in UI to drive helpfulness votes and engagement.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="text-xl font-bold mb-4 font-serif text-slate-800">For Restaurants</h4>
                <p className="text-slate-600">Encourage descriptive feedback from diners. Sensory details matter significantly in the Indian context.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="text-xl font-bold mb-4 font-serif text-slate-800">Policy</h4>
                <p className="text-slate-600">Promote information-rich reviews over simple star ratings to build a trustworthy ecosystem.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Results;