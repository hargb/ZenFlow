ZenFlow

AI agents that manage your Gmail, Instagram and Google Calendar through a simple chat interface.

ZenFlow is a full-stack agentic AI platform. Instead of switching between apps, you tell an AI agent what you want in plain language, and it reads and drafts emails, handles Instagram comments, and schedules calendar events. Sensitive actions such as sending an email require your approval first (human-in-the-loop).


Features
Chat-based control: manage everything from one conversational interface
Gmail agent: read, summarise, draft and send emails, with approval before sending
Instagram agent: manage posts and comments through the Meta Graph API
Google Calendar agent: create, view and update events
Custom agent builder: create your own agents with their own tools and instructions
Human-in-the-loop approvals: the agent pauses and waits for your confirmation on risky actions
Secure authentication: Firebase Authentication with protected backend routes
Modern dashboard: React, Shadcn UI and Redux Toolkit
Architecture
External Services
Data & Auth
Backend (Node.js + Express)
Frontend (React + Vite)
Agent Layer
HTTPS + Bearer token
Sign in
Verify token
Home / Chat UIShadcn UI + Tailwind
Redux ToolkituserSlice, chat, agents
Auth MiddlewareFirebase token verification
REST API/api/agents, /api/chat,/api/integrations
LangGraphAgent workflow + state
LangChainLLM + prompts
MCP ToolsGmail, Instagram, Calendar
Approval Nodehuman-in-the-loop
MongoDBusers, agents, chats
Firebase Auth
Gmail API
Instagram / Meta Graph API
Google Calendar API
LLM Provider
Request flow
The user signs in with Firebase Authentication and the frontend receives an ID token.
Every API request carries the token, and the auth middleware verifies it before anything else runs.
A chat message hits the chat endpoint, which starts (or resumes) a LangGraph run for the selected agent.
The agent decides which MCP tools to call (Gmail, Instagram, Calendar) and calls the LLM through LangChain.
For sensitive actions (for example sending an email), the graph pauses at the approval node. The UI shows a draft, and the user approves or rejects it.
On approval, the graph resumes, executes the tool, and streams the result back to the chat.
Chats, agents and integration tokens are stored in MongoDB.
Tech Stack
Layer	Technology
Frontend	React, Vite, React Router, Redux Toolkit, Shadcn UI, Tailwind CSS, Lucide Icons
Backend	Node.js, Express.js
AI / Agents	LangChain, LangGraph, Model Context Protocol (MCP)
Database	MongoDB
Auth	Firebase Authentication
Integrations	Gmail API, Google Calendar API, Instagram (Meta Graph API)
Payments	Razorpay (optional, remove this row if not used)
Project Structure
ZenFlow/
├── backend/
│   ├── src/
│   │   ├── routes/          # API routes (agents, chat, integrations)
│   │   ├── middleware/      # Firebase auth / protect middleware
│   │   ├── agents/          # LangGraph graphs and nodes
│   │   ├── tools/           # MCP tools (Gmail, Instagram, Calendar)
│   │   └── models/          # MongoDB schemas
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/           # Home.jsx and other pages
│   │   ├── components/ui/   # Shadcn UI components
│   │   ├── features/        # agents, chat, auth API layers
│   │   ├── redux/           # store and slices
│   │   └── firebase.js
│   ├── .env.example
│   └── package.json
│
└── README.md

Adjust folder names above if your structure differs.

Getting Started
Prerequisites
Node.js 18+
A MongoDB database (local or Atlas)
A Firebase project (Authentication enabled)
A Google Cloud project with Gmail and Calendar APIs enabled
A Meta developer app with Instagram access
An API key for your LLM provider
1. Clone the repo
bash
git clone https://github.com/hargb/ZenFlow.git
cd ZenFlow
2. Backend setup
bash
cd backend
npm install
cp .env.example .env     # then fill in the values
npm run dev
3. Frontend setup
bash
cd frontend
npm install
cp .env.example .env     # then fill in the values
npm run dev

The frontend runs on http://localhost:5173 and the backend on the port set in your .env.

Environment Variables
Backend (backend/.env)
env
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
Frontend (frontend/.env)
env
VITE_API_URL=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_APP_ID=

Never commit real .env files. Only .env.example belongs in the repo.

OAuth Setup Notes
Meta / Instagram: add your callback URL (for example https://<your-backend>/api/integrations/instagram/callback) to Valid OAuth Redirect URIs. With Strict Mode on, the URI must match exactly. In Development mode only users with an app role can log in.
Google: add your frontend origin and backend redirect URI in Google Cloud Console under Credentials.
Firebase: add your deployed domain under Authentication → Settings → Authorized domains.
Deployment
Part	Suggested platform
Frontend	Vercel or Netlify
Backend	Render or Railway (use an always-on plan if you rely on webhooks or scheduled jobs)
Database	MongoDB Atlas
Auth	Firebase

After deploying, update the redirect URIs, CORS origin and VITE_API_URL to the production URLs.

Roadmap
 Scheduled Instagram posts
 More integrations (Slack, Notion)
 Agent templates marketplace
 Usage analytics dashboard
Acknowledgements

The foundation of this project was learned from the Virtual Code tutorial on building an AI automation platform with MERN, LangChain, LangGraph and MCP. The Instagram and Google Calendar integrations and further customisations were built on top of it.

Author

Harsh Aggarwal GitHub: @hargb

License

This project is licensed under the MIT License.
