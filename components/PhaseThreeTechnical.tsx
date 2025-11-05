import React, { useState } from 'react';
import { TechnicalSpecs } from '../types';
import { ASPECT_RATIOS, MOTION_INTENSITIES, COLOR_GRADINGS, SOUNDTRACK_MOODS } from '../constants';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface PhaseThreeTechnicalProps {
  onSubmit: (specs: TechnicalSpecs) => void;
  onBack: () => void;
}

const OptionSelect = ({ label, name, options, value, onChange, helpTexts }: { label: string; name: string; options: string[]; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; helpTexts: { [key: string]: string } }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
    <select
      id={name}
      name={name}
      className="block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm p-3"
      value={value}
      onChange={onChange}
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
    <p className="mt-2 text-xs text-slate-500">{helpTexts[value]}</p>
  </div>
);


const PhaseThreeTechnical: React.FC<PhaseThreeTechnicalProps> = ({ onSubmit, onBack }) => {
  const [specs, setSpecs] = useState<TechnicalSpecs>({
    aspectRatio: Object.keys(ASPECT_RATIOS)[0],
    motionIntensity: Object.keys(MOTION_INTENSITIES)[1],
    colorGrading: Object.keys(COLOR_GRADINGS)[0],
    soundtrackMood: Object.keys(SOUNDTRACK_MOODS)[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSpecs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(specs);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Optimization</h2>
        <p className="mt-3 text-lg text-slate-400">Fine-tune the technical details. Each choice is optimized for platform performance and viewer engagement.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OptionSelect 
            label="Aspect Ratio"
            name="aspectRatio"
            options={Object.keys(ASPECT_RATIOS)}
            value={specs.aspectRatio}
            onChange={handleChange}
            helpTexts={ASPECT_RATIOS}
          />
          <OptionSelect 
            label="Motion Intensity"
            name="motionIntensity"
            options={Object.keys(MOTION_INTENSITIES)}
            value={specs.motionIntensity}
            onChange={handleChange}
            helpTexts={MOTION_INTENSITIES}
          />
          <OptionSelect 
            label="Color Grading Style"
            name="colorGrading"
            options={Object.keys(COLOR_GRADINGS)}
            value={specs.colorGrading}
            onChange={handleChange}
            helpTexts={COLOR_GRADINGS}
          />
          <OptionSelect 
            label="Soundtrack Mood"
            name="soundtrackMood"
            options={Object.keys(SOUNDTRACK_MOODS)}
            value={specs.soundtrackMood}
            onChange={handleChange}
            helpTexts={SOUNDTRACK_MOODS}
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-900 transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Refinement
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all"
          >
            Generate Final Prompt <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhaseThreeTechnical;
