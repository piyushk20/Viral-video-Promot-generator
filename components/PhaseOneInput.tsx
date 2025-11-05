import React, { useState } from 'react';
import { InitialInput, Genre } from '../types';
import { GENRES, DURATIONS, TREND_DATA } from '../constants';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';

interface PhaseOneInputProps {
  onSubmit: (data: InitialInput) => void;
}

const PhaseOneInput: React.FC<PhaseOneInputProps> = ({ onSubmit }) => {
  const [idea, setIdea] = useState('');
  const [genre, setGenre] = useState<Genre>(GENRES[0]);
  const [duration, setDuration] = useState(DURATIONS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit({ idea, genre, duration });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's craft a viral video</h2>
        <p className="mt-3 text-lg text-slate-400">Start with your core concept. We'll analyze current trends to supercharge it.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <div>
            <label htmlFor="idea" className="block text-sm font-medium text-slate-300 mb-2">1. What's your video idea?</label>
            <textarea
              id="idea"
              rows={4}
              className="block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm placeholder-slate-500 focus:ring-violet-500 focus:border-violet-500 sm:text-sm p-3"
              placeholder="e.g., A golden retriever learning to skateboard in a futuristic city"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-slate-300 mb-2">2. Choose a genre</label>
            <select
              id="genre"
              className="block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm p-3"
              value={genre}
              onChange={(e) => setGenre(e.target.value as Genre)}
            >
              {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          
          <div>
            <span className="block text-sm font-medium text-slate-300 mb-2">3. Preferred duration</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {DURATIONS.map((d) => (
                <label key={d} className={`flex items-center justify-center p-3 text-sm font-medium rounded-md cursor-pointer border transition-colors ${duration === d ? 'bg-violet-600 border-violet-500 text-white' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}>
                  <input
                    type="radio"
                    name="duration"
                    value={d}
                    checked={duration === d}
                    onChange={(e) => setDuration(e.target.value)}
                    className="sr-only"
                    aria-labelledby={`duration-label-${d}`}
                  />
                  <span id={`duration-label-${d}`}>{d}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!idea.trim()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all"
          >
            Generate Creative Variations <ArrowRightIcon className="w-5 h-5" />
          </button>
        </form>

        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
                <TrendingUpIcon className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Live Trend Indicators</h3>
            </div>
            <div className="space-y-4">
                {TREND_DATA.map(trend => (
                    <div key={trend.genre} className="bg-slate-900 p-3 rounded-md border border-slate-700">
                        <p className="font-semibold text-slate-300">{trend.genre}</p>
                        <div className="flex justify-between items-baseline mt-1">
                            <p className="text-xs text-slate-400">Engagement:</p>
                            <p className="text-sm font-medium text-emerald-400">{trend.engagementRate}</p>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <p className="text-xs text-slate-400">Virality Score:</p>
                            <p className="text-sm font-medium text-slate-200">{trend.viralityScore}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseOneInput;
