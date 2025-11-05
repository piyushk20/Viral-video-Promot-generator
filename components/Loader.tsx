import React from 'react';
import { Phase } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface LoaderProps {
  phase: Phase;
}

const getLoadingMessage = (phase: Phase): string => {
  switch (phase) {
    case Phase.INITIAL:
      return 'Analyzing trends & crafting creative variations...';
    case Phase.REFINEMENT:
      return 'Preparing technical optimization options...';
    case Phase.TECHNICAL:
      return 'Synthesizing all data into the final expert-level prompt...';
    default:
      return 'Processing your request...';
  }
};

const Loader: React.FC<LoaderProps> = ({ phase }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-slate-800/50 rounded-lg border border-slate-700">
      <div className="relative mb-4">
        <SparklesIcon className="w-16 h-16 text-violet-400" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-slate-600 rounded-full animate-ping opacity-50"></div>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-slate-200 mb-2">Generating...</h2>
      <p className="text-slate-400 max-w-sm">{getLoadingMessage(phase)}</p>
    </div>
  );
};

export default Loader;
