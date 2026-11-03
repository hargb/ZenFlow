 ZenFlow
Your AI chief of staff for Gmail, Instagram & Google Calendar

Tell an AI agent what you want in plain language. It handles the rest, and asks for your approval before doing anything risky.
📌 Overview

Most of us lose hours every week to repetitive digital chores: replying to emails, moderating Instagram comments, juggling meeting schedules.

ZenFlow replaces that with one chat window. You describe what you want, and an AI agent plans the steps, calls the right tools, and shows you a draft to approve before anything is sent or posted.

💬 "Summarise my unread emails and draft replies to the important ones." 📅 "Schedule a meeting with Rahul tomorrow at 4 PM." 📸 "Show me new comments on my latest post and suggest replies."
✨ Features
	Feature	Description
💬	Chat-first control	Manage all your apps from a single conversational interface
📧	Gmail agent	Read, summarise, draft and send emails
📸	Instagram agent	Manage posts and comments via the Meta Graph API
📅	Calendar agent	Create, view and update Google Calendar events
🛠️	Custom agent builder	Build your own agents with custom instructions and tools
✅	Human-in-the-loop	The agent pauses for your approval before sending or posting
🔐	Secure by design	Firebase Authentication and protected API routes
🎨	Modern dashboard	Responsive UI built with Shadcn UI and Tailwind

🧰 Tech Stack
Layer	Technology
Frontend	React, Vite, React Router, Redux Toolkit, Shadcn UI, Tailwind CSS
Backend	Node.js, Express.js
AI / Agents	LangChain, LangGraph, Model Context Protocol (MCP)
Database	MongoDB
Auth	Firebase Authentication
Integrations	Gmail API, Google Calendar API, Instagram (Meta Graph API)
Payments	Razorpay (optional, remove if unused)
📁 Project Structure

ZenFlow/
├── backend/
│   ├── routes/          # agents, chat, integrations
│   ├── middleware/      # Firebase auth guard
│   ├── agents/          # LangGraph graphs and nodes
│   ├── tools/           # MCP tools: Gmail, Instagram, Calendar
│   ├── models/          # MongoDB schemas
│   └── .env.example
│
├── frontend/
│   └── src/
│       ├── pages/       # Home and other pages
│       ├── components/  # Shadcn UI components
│       ├── features/    # agents, chat and auth API layers
│       └── redux/       # store and slices
│
└── README.md

🚀 Getting Started
Prerequisites
Node.js 18 or higher
MongoDB (local or Atlas)
Firebase project with Authentication enabled
Google Cloud project with Gmail and Calendar APIs enabled
Meta developer app with Instagram access
LLM provider API key


Installation
bash
# 1. Clone
git clone https://github.com/hargb/ZenFlow.git
cd ZenFlow

# 2. Backend
cd backend
npm install
cp .env.example .env      # fill in your values
npm run dev

# 3. Frontend (new terminal)
cd frontend
npm install
cp .env.example .env      # fill in your values
npm run dev

Frontend runs at http://localhost:5173.


Environment Variables

PORT=
MONGO_URI=

# Firebase Admin
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# LLM
LLM_API_KEY=

# Google (Gmail + Calendar)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

# Meta (Instagram)
META_APP_ID=
META_APP_SECRET=
META_REDIRECT_URI=

# Razorpay (optional)
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

VITE_API_URL=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_APP_ID=

🔗 OAuth Setup
Provider	What to configure
Meta / Instagram	Add https://<backend>/api/integrations/instagram/callback to Valid OAuth Redirect URIs. Strict Mode needs an exact match. In Development mode only app-role users can log in.
Google	Add the frontend origin and backend redirect URI under Credentials in Google Cloud Console.
Firebase	Add your deployed domain under Authentication → Settings → Authorized domains.


🗺️ Roadmap
 Gmail, Instagram and Calendar agents
 Human-in-the-loop approvals
 Custom agent builder
 Scheduled Instagram posts
 Slack and Notion integrations
 Agent template marketplace
 Usage analytics dashboard

 🙌 Acknowledgements

The foundation was learned from the Virtual Code tutorial on building an AI automation platform with MERN, LangChain, LangGraph and MCP. The Instagram and Google Calendar integrations and other customisations were built on top.

👨‍💻 Author

Harsh Aggarwal · GitHub @hargb

If you like this project, give it a ⭐ on GitHub!
