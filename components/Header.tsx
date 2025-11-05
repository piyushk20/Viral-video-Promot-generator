import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-violet-600 p-2 rounded-lg">
            <SparklesIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
            Viral Video Prompt Generator
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
