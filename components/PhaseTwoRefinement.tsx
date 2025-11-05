import React from 'react';
import { Variation } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface PhaseTwoRefinementProps {
  variations: Variation[];
  onSelect: (variation: Variation) => void;
  onBack: () => void;
}

const PhaseTwoRefinement: React.FC<PhaseTwoRefinementProps> = ({ variations, onSelect, onBack }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Guided Refinement</h2>
        <p className="mt-3 text-lg text-slate-400">Here are a few variations of your concept, enhanced with proven viral elements. Pick the one that inspires you most.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variations.map((variation, index) => (
          <div key={index} className="flex flex-col bg-slate-800/50 rounded-lg border border-slate-700 shadow-lg transition-all hover:border-violet-500 hover:shadow-violet-500/10">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-violet-400">{variation.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{variation.description}</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Viral Elements:</p>
                <div className="flex flex-wrap gap-2">
                  {variation.viralElements.map((element, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded-full">{element}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-800 rounded-b-lg mt-auto">
                 <div className="flex justify-between items-center text-sm mb-4">
                    <span className="font-semibold text-slate-400">Engagement Potential:</span>
                    <span className="font-bold text-emerald-400">{variation.engagementPotential}</span>
                </div>
              <button
                onClick={() => onSelect(variation)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all"
              >
                Select this Direction <SparklesIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-900 transition-all"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Idea
        </button>
      </div>
    </div>
  );
};

export default PhaseTwoRefinement;
