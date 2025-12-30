Create a Visual Studio Code–inspired portfolio website UI.

Overall Layout

Full-screen web app that visually resembles VS Code.

Dark theme similar to VS Code default.

No page reloads or route navigation — everything behaves like an editor UI.

Left Sidebar (Explorer Panel)

Fixed left sidebar styled like the VS Code Explorer.

Title at top: EXPLORER.

Expandable/collapsible folders using chevrons.

Example structure:

PORTFOLIO
├── home.tsx
├── about-me.tsx
├── projects
│   ├── project-1.ts
│   ├── project-2.ts
├── contact.tsx


Clicking a file opens it as a tab, not a new page.

Top Tab Bar (Editor Tabs)

Horizontal tab bar like VS Code editor tabs.

Tabs open dynamically when files are clicked.

Active tab highlighted.

Close (×) button on each tab.

Prevent duplicate tabs (clicking an open file focuses its tab).

Main Editor Area

Displays content based on the active tab.

Content should look like code editor content, not normal website sections.

Use monospaced font.

Include syntax highlighting style formatting (comments, keywords, strings).

Tab Content Examples

home.tsx: Intro, name, role, short description written like commented code.

about-me.tsx: Skills, experience, interests shown as JavaScript/TypeScript objects.

projects/*.ts: Each project shown as an exported object with name, description, tech stack.

contact.tsx: Email, GitHub, LinkedIn formatted as constants.

Behavior

Smooth animations when opening/closing tabs.

Sidebar folders expand/collapse.

Entire site behaves like a code editor, not a traditional website.

Tech Style

Modern, clean UI.

Tailwind-style spacing and colors.

Responsive layout (desktop-first).

Goal

The user should feel like they are browsing a developer’s portfolio inside VS Code.


=============================================


## 📁 Explorer Structure (Markdown Version)

```text
PORTFOLIO
├── home.md
├── about-me.md
├── projects
│   ├── project-1.md
│   ├── project-2.md
├── contact.md
```

---

## 🏠 `home.md`

````md
# home.md

```ts
/**
 * Hi, I'm John Doe 👋
 *
 * Role:
 *   Full-Stack Developer
 *
 * Description:
 *   I build modern web applications with clean architecture,
 *   strong UX, and scalable code.
 *
 * Focus Areas:
 *   - Frontend (React, Next.js)
 *   - Backend (Node.js, APIs)
 *   - Developer Experience
 */
````

---

### Quick Summary

* 💻 Passionate about clean code
* 🚀 Love building products from scratch
* 🧠 Always learning new technologies

````

> Tip: Rendering the code block **without Markdown preview** makes it feel exactly like a code editor.

---

## 👤 `about-me.md`

```md
# about-me.md

```ts
export const developerProfile = {
  name: "John Doe",
  experience: "5+ years",
  location: "Remote",

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PostgreSQL"],
    tools: ["Git", "Docker", "VS Code"]
  },

  interests: [
    "Open Source",
    "UI/UX Design",
    "Performance Optimization"
  ]
};
````

````

---

## 📂 `projects/project-1.md`

```md
# project-1.md

```ts
export const project = {
  name: "Developer Portfolio",
  description:
    "A VS Code–inspired portfolio that behaves like a real code editor.",

  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS"
  ],

  features: [
    "Editor-style navigation",
    "Dynamic tabs",
    "No page reloads"
  ]
};
````

````

---

## 📂 `projects/project-2.md`

```md
# project-2.md

```ts
export const project = {
  name: "Task Manager API",
  description:
    "A RESTful API for managing tasks with authentication.",

  techStack: [
    "Node.js",
    "Express",
    "PostgreSQL"
  ],

  highlights: [
    "JWT Authentication",
    "Role-based access",
    "Clean architecture"
  ]
};
````

````

---

## 📬 `contact.md`

```md
# contact.md

```ts
export const contact = {
  email: "john.doe@email.com",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe"
};
````

```

---

## 🎨 Styling Notes for the Web App

To keep the **VS Code illusion** strong:

- Use **monospace font** everywhere (`JetBrains Mono`, `Fira Code`)
- Render Markdown **without rich styling**
- Treat headings like file comments
- Highlight code blocks with:
  - comments → gray
  - strings → green
  - keywords → purple/blue

---

## ✅ Result

- Still feels like browsing code
- Easier to maintain content
- Works perfectly in a VS Code–style editor UI
- Markdown keeps things clean and readable

---

If you want, I can next:
- 🔧 Convert this into **actual file JSON data** for React state
- 🎨 Give you **Tailwind color tokens** matching VS Code Dark+
- 🧠 Help implement the **tab + editor logic**
- 🧩 Make a **Markdown-to-editor renderer**

Just tell me 👍
```


=====================================================================================