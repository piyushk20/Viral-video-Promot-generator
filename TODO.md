# Project Implementation Plan: Viral Video Prompt Generator

This document outlines the development tasks for the project. Tasks will be checked off as they are completed.

## Milestone 1: Project Setup & Core Structure
- [x] Initialize project with `index.html`, `index.tsx`, and `metadata.json`.
- [x] Use import maps for dependency management (React, @google/genai).
- [x] Set up Tailwind CSS via CDN for styling.
- [x] Create the primary directory structure (`components`, `services`, `hooks`, `types`).
- [x] Define all necessary TypeScript types in `types.ts` (Phase, InitialInput, Variation, etc.).
- [x] Create the main `App.tsx` component.
- [x] Implement the core state management logic in `App.tsx` for handling phases, loading, and errors.

## Milestone 2: Phase 1 - Ideation UI
- [x] Create `PhaseOneInput.tsx` component.
- [x] Build the main form with `textarea` for the idea, `select` for genre, and radio buttons for duration.
- [x] Populate form options from `constants.ts`.
- [x] Implement the "Live Trend Indicators" side panel.
- [x] Style the entire component using Tailwind CSS for a modern, responsive layout.
- [x] Add form validation (e.g., disable submit button if the idea is empty).

## Milestone 3: Gemini Integration for Variations
- [x] Create `services/geminiService.ts` to encapsulate API calls.
- [x] Implement the `generateVariations` function.
- [x] Engineer the system prompt for the Gemini model to generate 3 creative variations.
- [x] Define a strict JSON `responseSchema` for the expected output.
- [x] Wire the `onSubmit` handler in `PhaseOneInput.tsx` to call `generateVariations`.
- [x] Integrate the `Loader.tsx` component to display a loading state during the API call.
- [x] Implement error handling to display a message if the API call fails.

## Milestone 4: Phase 2 & 3 - Refinement & Technical UI
- [x] Create `PhaseTwoRefinement.tsx` component.
- [x] Design responsive cards to display the title, description, and viral elements for each variation.
- [x] Implement the `onSelect` handler to capture the user's choice and transition to the next phase.
- [x] Add a "Back" button to allow the user to return to the initial ideation phase.
- [x] Create `PhaseThreeTechnical.tsx` component.
- [x] Build the form with `select` dropdowns for aspect ratio, motion intensity, color grading, and soundtrack mood.
- [x] Use `constants.ts` to populate dropdown options and display associated help text.
- [x] Implement the `onSubmit` handler to capture technical specs and trigger final prompt generation.
- [x] Add a "Back" button to return to the refinement phase.

## Milestone 5: Gemini Integration for Final Prompt
- [x] Implement the `generateFinalPrompt` function in `geminiService.ts`.
- [x] Engineer a detailed, hierarchical system prompt to guide the Gemini model in structuring the final output (Vision, Scene Descriptions, Technical Directives, etc.).
- [x] Pass all collected data (initial, refined, technical) from the `App.tsx` state to the function.
- [x] Ensure the function returns the final prompt as a formatted string.
- [x] Handle loading and error states for this second API call.

## Milestone 6: Phase 4 - Output & Finalization
- [x] Create `PhaseFourOutput.tsx` component.
- [x] Display the final generated prompt within a `<pre>` tag to preserve formatting.
- [x] Create a `hooks/useCopyToClipboard.ts` custom hook for copy functionality.
- [x] Add a "Copy" button that uses the hook and provides user feedback (e.g., changes to "Copied!").
- [x] Add a "Create Another Masterpiece" button that calls the `onReset` function to return the app to its initial state.

## Milestone 7: UI/UX Polish & Documentation
- [x] Create a dedicated `components/icons` directory for all SVG icons.
- [x] Create the shared `Header.tsx` component.
- [x] Refine the `Loader.tsx` component with phase-specific loading messages.
- [x] Add subtle entrance animations (`animate-fade-in`) for a smoother user experience.
- [x] Perform a full review to ensure responsiveness across mobile, tablet, and desktop screen sizes.
- [x] Write a comprehensive `README.md` detailing project features, tech stack, and setup instructions.
- [x] Create this `TODO.md` file to serve as the implementation plan.
- [x] Final code cleanup and review for clarity and performance.
