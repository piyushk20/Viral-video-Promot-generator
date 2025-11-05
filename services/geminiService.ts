import { GoogleGenAI, Type } from "@google/genai";
import { InitialInput, PromptGenerationData, Variation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateVariations(input: InitialInput): Promise<Variation[]> {
  const model = "gemini-2.5-flash";
  const systemInstruction = `You are a viral video strategist and expert prompt engineer for AI video generation platforms like Sora 2. Your goal is to transform a user's basic idea into several distinct, highly engaging video concepts with strong viral potential.

For each concept, you must:
1.  Create a short, catchy title.
2.  Write a compelling one-sentence description.
3.  Identify 3-4 specific, proven viral elements (e.g., "Pattern Interrupt," "High-Stakes Moment," "Satisfying Loop," "Nostalgic Callback," "ASMR Audio").
4.  Provide a qualitative "Engagement Potential" score (e.g., "High," "Very High," "Extreme").

Generate 3 distinct variations based on the user's input.`;

  const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        description: { type: Type.STRING },
        viralElements: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        engagementPotential: { type: Type.STRING },
      },
      required: ["title", "description", "viralElements", "engagementPotential"],
    },
  };

  const userPrompt = `
    User Idea: "${input.idea}"
    Genre: ${input.genre}
    Desired Duration: ${input.duration}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as Variation[];
  } catch (error) {
    console.error("Error generating variations:", error);
    throw new Error("Failed to communicate with the AI model to generate variations.");
  }
}

export async function generateFinalPrompt(data: PromptGenerationData): Promise<string> {
    const model = "gemini-2.5-flash";
    const systemInstruction = `You are an expert-level prompt engineer for advanced AI video generation platforms like Sora 2. Your task is to synthesize user-provided information into a single, comprehensive, and highly-detailed prompt. The prompt must be structured, clear, and optimized to produce a high-quality, viral video.

Follow this exact hierarchical structure for the output:

**1. Vision Statement:** A concise, 1-2 sentence summary of the video's emotional and aesthetic core.

**2. Scene Descriptions:** Break the video into logical segments (e.g., Scene 1, Scene 2). For each scene, describe:
    - **Visuals:** What is happening? Key subjects, actions, environment details.
    - **Camera:** Specific camera movements (e.g., "dolly zoom," "slow pan left," "dynamic tracking shot"), lens choices (e.g., "wide-angle," "macro shot").
    - **Lighting:** Mood and style (e.g., "dramatic chiaroscuro," "golden hour glow," "neon-drenched").

**3. Technical Directives:**
    - **Aspect Ratio:** The specified aspect ratio.
    - **Motion & Pacing:** Translate the motion intensity into a description (e.g., "high-energy with rapid cuts," "serene with long, flowing shots").
    - **Color Grade:** Describe the desired color palette and mood from the user's selection.

**4. Audio Guidance:**
    - **Soundtrack:** Describe the mood, genre, and tempo of the music.
    - **Sound Design:** Suggest key sound effects (SFX) that would enhance the scene.

**5. Style References:** Name specific visual styles, artistic movements, or filmmakers that exemplify the desired aesthetic.

**6. Engagement Hooks:** Briefly note the key moments designed for maximum viewer retention and sharing.`;

    const userPrompt = `Synthesize the following data into a final video prompt.

### Initial Idea
- Concept: "${data.initial.idea}"
- Genre: ${data.initial.genre}
- Duration: ${data.initial.duration}

### Selected Creative Direction
- Title: "${data.refined.title}"
- Description: "${data.refined.description}"
- Key Viral Elements: ${data.refined.viralElements.join(', ')}

### Technical Specifications
- Aspect Ratio: ${data.technical.aspectRatio}
- Motion Intensity: ${data.technical.motionIntensity}
- Color Grading: ${data.technical.colorGrading}
- Soundtrack Mood: ${data.technical.soundtrackMood}
`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: { systemInstruction },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating final prompt:", error);
    throw new Error("Failed to communicate with the AI model to generate the final prompt.");
  }
}
