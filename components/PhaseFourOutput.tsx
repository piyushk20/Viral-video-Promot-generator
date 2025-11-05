import React from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface PhaseFourOutputProps {
  prompt: string;
  onReset: () => void;
}

const PhaseFourOutput: React.FC<PhaseFourOutputProps> = ({ prompt, onReset }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Your Viral Prompt is Ready!</h2>
        <p className="mt-3 text-lg text-slate-400">Copy this expertly crafted prompt and paste it into Sora 2 or your favorite AI video generator.</p>
      </div>

      <div className="relative bg-slate-900 rounded-lg border border-slate-700">
        <div className="p-6">
          <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {prompt}
          </pre>
        </div>
        <button
          onClick={() => handleCopy(prompt)}
          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 focus:ring-offset-slate-900 transition-all"
          aria-label="Copy prompt to clipboard"
        >
          {isCopied ? (
            <>
              <CheckIcon className="w-4 h-4 text-emerald-400" />
              Copied!
            </>
          ) : (
            <>
              <ClipboardIcon className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      
      <div className="pt-4 text-center">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all"
        >
          <SparklesIcon className="w-5 h-5" />
          Create Another Masterpiece
        </button>
      </div>
    </div>
  );
};

export default PhaseFourOutput;
