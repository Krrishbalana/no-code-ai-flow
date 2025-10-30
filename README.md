# 🚀 No-Code AI Workflow Builder & Chat App

A full-stack **No-Code / Low-Code AI Workflow Builder** built with **React + Tailwind + React Flow (Frontend)** and **Node.js + Express + MongoDB (Backend)**. It lets users connect blocks like → `User Query → Knowledge Base → LLM Engine → Output`.

---

## ⚙️ Tech Stack

| Layer            | Technology                                  |
| ---------------- | ------------------------------------------- |
| Frontend         | React.js (Vite) + Tailwind CSS + React Flow |
| Backend          | Node.js + Express                           |
| Database         | MongoDB                                     |
| LLM & Embeddings | OpenAI API                                  |
| Search           | SerpAPI                                     |
| PDF Parsing      | pdf-parse                                   |
| Containerization | Docker & Docker Compose                     |

---

## 📂 Folder Structure

no-code-ai-flow/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── styles/globals.css
│ ├── package.json
│ └── Dockerfile
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── config/db.js
│ │ └── server.js
│ ├── package.json
│ ├── Dockerfile
│ └── .env.example
│
├── docker-compose.yml
└── README.md

---

## 🔑 Environment Variables

Create a `.env` file in the `backend/` folder (copy from `.env.example`).

```bash
PORT=5001
MONGODB_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/ai-flow
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SERPAPI_KEY=your_serp_api_key


🧱 Setup & Run (Local without Docker)

1️⃣ Install dependencies

cd backend && npm install
cd ../frontend && npm install

2️⃣ Run MongoDB (local or Atlas)

If local:
brew services start mongodb-community

If Atlas: just set your MongoDB connection string in .env

3️⃣ Start backend
cd backend
npm run dev

Backend runs on: http://localhost:5001

4️⃣ Start frontend
cd frontend
npm run dev

Frontend runs on: http://localhost:5173


🐳 Run with Docker (recommended)

1️⃣ Build & Start all containers
docker-compose up --build
```

2️⃣ Visit

Frontend → http://localhost:5173

Backend API → http://localhost:5001

💬 API Endpoints
Method Endpoint Description
POST /api/chat/execute Execute workflow with chat input
POST /api/upload/pdf Upload and parse PDF
GET /api/workflows List saved workflows
POST /api/workflows Create new workflow
GET /api/chat/history Get chat history

📘 How It Works (Simple Explanation)

1️⃣ You upload PDFs → backend extracts text → creates embeddings → stores in MongoDB.
2️⃣ You connect workflow nodes (User Query, KnowledgeBase, LLM Engine, Output) in UI.
3️⃣ When you chat, the system:

Takes your message,

Finds relevant chunks from knowledgebase using cosine similarity,

Sends query + context to OpenAI API,

Returns AI response and saves it in chat history.

🧠 Testing Your OpenAI API Key

Run this in terminal (replace your key):

curl https://api.openai.com/v1/models \
-H "Authorization: Bearer sk-your_api_key_here"

🧰 Docker Commands

Action Command

Build & Run

docker-compose up --build

Stop all

docker-compose down

View logs

docker logs backend -f

Rebuild backend only

docker-compose build backend

🧾 Notes & Tradeoffs

MongoDB is used instead of Postgres for simplicity and native JSON/vector support.

Vector search implemented manually with cosine similarity — simple but effective.

Chroma / FastAPI replaced with Node.js + MongoDB stack for unified JS dev.

All secrets stored in .env, not in code or Docker image.

CORS enabled for http://localhost:5173.

🧪 Quick Test Inputs
Chat Example:

“Summarize the uploaded PDF.”

“What is the main topic of the document?”

“Who is mentioned in the knowledge base?”

PDF Example:

Upload a small 2–3 page PDF (e.g., a resume or research abstract).

🧑‍💻 Default Ports

Service Port

Frontend 5173

Backend 5001

MongoDB 27017

🛡️ Troubleshooting

Problem Fix
Port 5000/5001 in use

lsof -i :5001 → kill process

Chat not responding Check if OpenAI key is valid

PDF not embedding Ensure file < 10MB

Docker build fails Run docker system prune -f and rebuild
