# Viral Video Prompt Generator

An intelligent web application that generates highly detailed, optimized prompts for AI video generation platforms like Sora 2. It analyzes trends and user input to craft prompts designed for maximum viral potential.

## ✨ Features

- **Guided Multi-Step Process:** A seamless workflow that takes you from a basic idea to a comprehensive, professional video prompt.
- **Trend-Informed Suggestions:** Leverages live trend indicators to ensure your video concept is relevant and has high engagement potential.
- **AI-Powered Creativity:** Generates multiple creative variations of your initial idea, each enhanced with proven viral elements.
- **Technical Optimization:** Allows you to fine-tune crucial technical details like aspect ratio, motion intensity, color grading, and soundtrack mood.
- **Expertly Structured Output:** Produces a final prompt formatted with a clear hierarchical structure, perfect for getting the best results from advanced AI video models.
- **Sleek & Responsive UI:** A modern, user-friendly interface built with React and Tailwind CSS.

## 🚀 How to Use

1.  **Phase 1: Ideation**
    -   Enter your core video concept in the text area.
    -   Select the most appropriate genre.
    -   Choose your desired video duration.
    -   Click "Generate Creative Variations" to proceed.

2.  **Phase 2: Refinement**
    -   Review the three AI-generated variations, each with a unique title, description, and set of viral elements.
    -   Choose the direction that most inspires you by clicking "Select this Direction".

3.  **Phase 3: Technical Specs**
    -   Fine-tune the technical aspects of your video using the dropdown menus for aspect ratio, motion, color, and sound.
    -   Click "Generate Final Prompt" to synthesize all your choices.

4.  **Phase 4: Output**
    -   Your final, detailed prompt is ready!
    -   Click the "Copy" button to copy it to your clipboard.
    -   Paste it into your favorite AI video generation platform (e.g., Sora 2, RunwayML, Pika).
    -   Click "Create Another Masterpiece" to start over.

## 🛠️ Tech Stack

-   **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
-   **AI:** [Google Gemini API](https://ai.google.dev/gemini-api) (`@google/genai`)

## 📁 Project Structure

```
.
├── components/         # React components
│   ├── icons/          # SVG icon components
│   ├── Header.tsx
│   ├── Loader.tsx
│   ├── PhaseOneInput.tsx
│   ├── ...
├── hooks/              # Custom React hooks
│   └── useCopyToClipboard.ts
├── services/           # API call logic
│   └── geminiService.ts
├── App.tsx             # Main application component
├── constants.ts        # App-wide constants
├── index.html          # Main HTML entry point
├── index.tsx           # React root renderer
├── metadata.json       # Project metadata
└── types.ts            # TypeScript type definitions
```

## Running the Application

This project uses import maps for its dependencies, so no build step is required. You can run it by serving the project directory with any static file server.

For example, using Python's built-in server:
```bash
python -m http.server
```
Then open your browser to `http://localhost:8000`.
