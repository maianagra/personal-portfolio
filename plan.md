# 🧑‍💻 Personal Portfolio - Design & Development Plan

## 🚀 Overview

This document outlines the design and development plan for my **personal portfolio website**. The goal is to build a modern, responsive, and highly interactive site that showcases my skills in:

- Frontend engineering (React + TypeScript)
- Data science & data engineering
- Machine learning & AI
- Financial and analytical applications

The website will start as a **static site**, but is designed to scale with future interactive components like an **AI chatbot**, **Dash dashboards**, and **Figma prototypes**.

---

## 🧱 Tech Stack

| Tech                    | Purpose                  |
| ----------------------- | ------------------------ |
| React + TypeScript      | Core UI                  |
| Tailwind CSS            | Styling and layout       |
| ShadCN UI / Radix       | Accessible components    |
| React Router or Next.js | Routing                  |
| Plotly Dash (external)  | For embedding dashboards |
| OpenAI API (future)     | AI chatbot               |
| Figma                   | Design, prototyping      |

---

## 🧭 Site Structure

### 1. `/` – **Home / Landing**

- Hero intro (name, tagline)
- Quick links to projects and about
- Animated or interactive background (particles or globe)
- Call to action: _“Explore my work”_

### 2. `/about`

- Timeline of my journey
- Skills & technologies
- Downloadable CV
- Fun fact or quote
- Optional: Mini AI assistant widget (future)

### 3. `/projects`

Projects categorized by type:

- **Frontend Projects**
- **ML & AI**
- **Data Engineering**
- **Financial Tools**

Each project includes:

- Thumbnail
- Description
- Stack
- GitHub/demo links

### 4. `/lab`

**The Playground** — future home of:

- AI Chatbot (e.g., “Ask me anything about my resume”)
- Embedded Dash dashboard
- D3/Plotly visualizations
- UI experiments
- Terminal-style CLI viewer

### 5. `/design` _(Optional now, scalable later)_

- Embedded Figma prototypes
- Design systems
- Screenshots with annotations
- Link: "Designed → Built with React"

### 6. `/contact`

- Email, GitHub, LinkedIn links
- Optional message form
- Footer with small easter egg or quote

---

## 🧩 Figma Integration Plan

### Use Cases:

- Showcase design skills alongside coding
- Build and iterate on portfolio UI before implementation
- Share public prototypes with live embeds

### How to Embed:

```tsx
<iframe
  className="w-full h-[600px] rounded-xl border"
  src="https://www.figma.com/embed?embed_host=share&url=YOUR_FILE_URL"
  allowFullScreen
></iframe>
```
