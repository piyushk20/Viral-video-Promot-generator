
import React, { useState, useCallback } from 'react';
import { Phase, InitialInput, Variation, TechnicalSpecs } from './types';
import { generateVariations, generateFinalPrompt } from './services/geminiService';
import Header from './components/Header';
import PhaseOneInput from './components/PhaseOneInput';
import PhaseTwoRefinement from './components/PhaseTwoRefinement';
import PhaseThreeTechnical from './components/PhaseThreeTechnical';
import PhaseFourOutput from './components/PhaseFourOutput';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [phase, setPhase] = useState<Phase>(Phase.INITIAL);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [initialInput, setInitialInput] = useState<InitialInput | null>(null);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(null);
  const [technicalSpecs, setTechnicalSpecs] = useState<TechnicalSpecs | null>(null);
  const [finalPrompt, setFinalPrompt] = useState<string>('');

  const handlePhase1Submit = useCallback(async (data: InitialInput) => {
    setIsLoading(true);
    setError(null);
    setInitialInput(data);
    try {
      const generatedVariations = await generateVariations(data);
      setVariations(generatedVariations);
      setPhase(Phase.REFINEMENT);
    } catch (e) {
      setError('Failed to generate creative variations. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handlePhase2Submit = useCallback((variation: Variation) => {
    setSelectedVariation(variation);
    setPhase(Phase.TECHNICAL);
  }, []);

  const handlePhase3Submit = useCallback(async (specs: TechnicalSpecs) => {
    if (!initialInput || !selectedVariation) return;
    setIsLoading(true);
    setError(null);
    setTechnicalSpecs(specs);
    try {
      const prompt = await generateFinalPrompt({
        initial: initialInput,
        refined: selectedVariation,
        technical: specs,
      });
      setFinalPrompt(prompt);
      setPhase(Phase.FINAL);
    } catch (e) {
      setError('Failed to generate the final prompt. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [initialInput, selectedVariation]);

  const handleReset = useCallback(() => {
    setPhase(Phase.INITIAL);
    setInitialInput(null);
    setVariations([]);
    setSelectedVariation(null);
    setTechnicalSpecs(null);
    setFinalPrompt('');
    setError(null);
    setIsLoading(false);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <Loader phase={phase} />;
    }

    switch (phase) {
      case Phase.INITIAL:
        return <PhaseOneInput onSubmit={handlePhase1Submit} />;
      case Phase.REFINEMENT:
        return <PhaseTwoRefinement variations={variations} onSelect={handlePhase2Submit} onBack={handleReset} />;
      case Phase.TECHNICAL:
        return <PhaseThreeTechnical onSubmit={handlePhase3Submit} onBack={() => setPhase(Phase.REFINEMENT)} />;
      case Phase.FINAL:
        return <PhaseFourOutput prompt={finalPrompt} onReset={handleReset} />;
      default:
        return <PhaseOneInput onSubmit={handlePhase1Submit} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
