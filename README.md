# SteamCore AI Chatbot & Website

This project contains the SteamCore Energy Engineering LLP website along with a fully integrated, production-ready AI Chatbot. The chatbot runs 100% locally and completely free using Ollama and a custom Hybrid RAG (Retrieval-Augmented Generation) pipeline.

## Features

- **Hybrid RAG Pipeline**: Answers instantly from local FAQs using `Fuse.js`. If a direct answer isn't found, queries `Ollama` using the company knowledge base.
- **Lead Generation Engine**: Automatically detects intent for quotations or consultations and pops up an embedded Lead Form.
- **Admin Dashboard**: Analytics panel at `/admin` tracking visitors, conversations, leads, and average chat length.
- **Email Notifications**: Integrated with Nodemailer to email generated leads directly to the company inbox.
- **Offline Capable AI**: Runs entirely on a local instance, requiring no paid APIs.

---

## 🚀 Installation & Setup

### 1. MongoDB Setup
You need a running MongoDB database. 
If you don't have MongoDB installed, you can download MongoDB Community Edition or use a free cluster on MongoDB Atlas.

### 2. Ollama Setup (AI Engine)
1. Download and install Ollama from [ollama.com](https://ollama.com/).
2. Once installed, open your terminal and pull the Llama 3 model:
   ```bash
   ollama run llama3
   ```
3. Keep Ollama running in the background. It will serve the API at `http://localhost:11434`.

### 3. Backend Setup

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Edit `.env` with your actual MongoDB URI and SMTP (Email) credentials if you want to receive lead emails.
5. Start the backend server:
   ```bash
   npm run dev
   ```
   *The server should run on `http://localhost:5000`.*

### 4. Frontend Setup

1. Open a new terminal and navigate to the root folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The website should run on `http://localhost:5173`.*

---

## 🌐 Admin Dashboard
Visit `http://localhost:5173/admin` to view the Admin Dashboard. Here you can see analytics and manage all the generated leads.

## 🛠 Deployment (Ubuntu VPS)

For a production environment, you should use `PM2` for the backend and `Nginx` as a reverse proxy.

### PM2 Setup (Backend)
```bash
cd backend
npm install -g pm2
pm2 start server.js --name steamcore-ai-backend
pm2 save
pm2 startup
```

### Nginx Setup
Build the frontend:
```bash
npm run build
```
Copy the contents of the `dist` folder to `/var/www/html`.

Configure Nginx to proxy `/api` requests to port 5000:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        root /var/www/html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Use `certbot` to secure the domain with SSL.

---
**Powered by SteamCore AI Architecture**
