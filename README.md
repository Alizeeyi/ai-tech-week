# AI-Era Technology One-Week Bootcamp

## Live Demo

Open the website here: [AI-Era Technology One-Week Bootcamp](https://alizeeyi.github.io/ai-tech-week/)

A public, static Chinese learning website for beginners who want to build technical judgment in the AI era. It can be opened locally, hosted on GitHub Pages, or deployed to Vercel.

The goal is not to turn someone into a software engineer in seven days. The goal is to help non-technical learners understand the basic structure behind AI products:

- How computers, browsers, servers, databases, APIs, and AI models connect.
- How to read simple Python code snippets.
- What prompts, tokens, context windows, hallucinations, RAG, agents, and tool calling mean.
- What common abbreviations stand for, including API, DNS, HTTP, JSON, LLM, and RAG.
- How to use AI more reliably at work by breaking down tasks, writing clearer prompts, verifying outputs, and recognizing risks.

This project is a pure static website. It does not call real AI APIs, does not contain API keys, does not upload user input, and does not collect user data.

## File Structure

```text
ai-tech-week/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

## Open Locally

Open `index.html` directly in a browser.

No Node.js, build tool, package manager, or local server is required.

## What Is Included

- A complete 7-day curriculum with learning goals, concept lessons, exercises, and chapter quizzes.
- A structured learning path: goal, foundation concepts, core terms, lesson content, practice, and quiz.
- Foundation concept cards before each exercise section, explaining what each concept is, common forms, concrete examples, AI tool usage, common confusion, and a self-check question.
- Core concept cards with English full names, Chinese translations, and beginner-friendly explanations.
- A two-layer learning method: read the short explanation first; open the card for deeper examples, analogies, distinctions, and self-check questions if needed.
- Bilingual learning content: Chinese as the main explanation, with English support shown alongside.
- Acronym quick reference for API, RAG, LLM, DNS, JSON, DOM, and more.
- Concept maps for API request flow, RAG workflow, AI application architecture, and the path from a static prototype to a real AI product.
- Local exercise grading for single-choice, multiple-choice, ordering, fill-in-the-blank, code-reading, scenario judgment, acronym matching, concept distinction, and risk judgment questions.
- A wrong-answer notebook that stores incorrect questions, correct answers, explanations, error counts, and last error time.
- A final quiz covering networking, Python code reading, AI model logic, RAG/Agent concepts, and AI workflow methods.
- A learning dashboard with progress, accuracy, XP, level, wrong-answer count, and a personal learning commitment.
- Two simulated tools: an article summary simulator and an AI work assistant prototype.
- A grouped knowledge base covering computer basics, networking/API, Python programming basics, web concepts, AI basics, AI application architecture, and engineering safety.

## Privacy And Safety

This public version is designed as a safe static learning demo:

- It does not send user input to any remote service.
- It does not call real AI APIs.
- It does not include real API keys, access tokens, private backend URLs, or secrets.
- The article summarizer and AI work assistant are browser-side simulators.
- Learning progress, exercise answers, wrong answers, XP, theme preference, and learning commitment are stored only in each visitor's own browser `localStorage`.
- Learning data is not shared between visitors.
- The project author cannot see visitor input or progress.

If a visitor wants to clear their own progress, they can clear the site `localStorage` in browser developer tools or open the site in a private/incognito window.

## Grading Boundaries

This project only grades objective or semi-structured exercises with local browser rules:

- Single-choice questions
- Multiple-choice questions
- Ordering questions
- Fill-in-the-blank questions
- Code-reading questions
- Scenario judgment questions
- Acronym matching questions
- Concept distinction questions
- Risk judgment questions

Open-ended reflection questions are not graded as if they were AI-reviewed. They provide a reference answer and a self-check list instead. This avoids false precision and keeps the learning experience honest.

## Deploy To GitHub Pages

To publish the current static bootcamp without a real AI API:

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and `.gitignore` to the repository root.
3. Open the repository `Settings`.
4. Go to `Pages`.
5. Set `Source` to `Deploy from a branch`.
6. Select the `main` branch and `/root` folder.
7. Save and wait for the public URL to be generated.

Before publishing, search the repository again for secrets, private files, local paths, screenshots, or internal documents.

## Deploy To Vercel

This project has no build step:

1. Upload the project to a GitHub repository.
2. Import the repository into Vercel.
3. Choose `Other` as the framework preset.
4. Leave the build command empty.
5. Leave the output directory empty or use the project root.
6. Deploy and verify that the homepage, course sections, exercises, wrong-answer notebook, and simulators work correctly.

## Safely Extending To A Real AI API

Do not put an API key in `index.html` or `script.js`.

If you later want to turn the simulated tools into real AI tools, use this safer architecture:

1. Add a backend API.
2. Store the AI API key in backend environment variables.
3. Let the frontend or Python script call your own backend only.
4. Let the backend call the AI model provider.
5. Add input limits, error handling, logging, cost controls, privacy notices, and human review for important outputs.

## License

Code in this repository is licensed under the MIT License.

Educational content, including course text, explanations, exercises, quizzes, and learning design, is licensed under CC BY-NC 4.0.

## Future Improvements

- Add more exercises and randomized practice.
- Add knowledge-point filters for questions.
- Add a wrong-answer-only practice mode.
- Add a real API version with a secure backend.
- Add a RAG demo with local document retrieval, source snippets, and answer generation.
- Add an export feature for learning progress as JSON.
