
# ResumeForge AI – AI-Powered Resume Builder

<p align="center">
  <img src="client/public/favicon.svg" alt="ResumeForge AI Logo" width="80" />
</p>

<p align="center">
  <strong>Build professional, ATS-optimized resumes in minutes — powered by AI.</strong>
</p>

<p align="center">
  <a href="https://resume-forge-ai-seven.vercel.app" target="_blank">🌐 Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-reference">API Reference</a> •
  <a href="#-deployment">Deployment</a>
</p>

---

## 📖 Overview

**ResumeForge AI** is a full-stack web application that combines a modern React frontend with an Express/Node.js backend and OpenAI integration to streamline resume creation. Users can build and manage multiple resumes, upload existing PDFs for AI-powered auto-fill, have AI enhance their professional summaries and job descriptions, choose from multiple templates, and share or export their resumes as PDFs.

---

## ✨ Features

### 🤖 AI-Powered Assistance
- **PDF Auto-Fill** – Upload an existing resume PDF and AI extracts all your data automatically.
- **Summary Enhancement** – One-click AI improvement of your professional summary using compelling, ATS-friendly language.
- **Job Description Enhancement** – AI rewrites experience bullet points with strong action verbs and quantifiable achievements.

### 📝 Resume Builder
- **Section-Based Editing** – Dedicated, guided forms for:
  - Personal Information (name, contact, LinkedIn, website, profile photo)
  - Professional Summary
  - Work Experience (with current-job toggle)
  - Education (degree, GPA, graduation date)
  - Projects (name, type, description)
  - Skills (tag-based input)
- **Real-Time Preview** – See your resume update live as you type.
- **Multiple Resumes** – Create, edit, and manage multiple resumes from one dashboard.

### 🎨 Templates & Customization
- **4 Professional Templates** – Classic, Modern, Minimal, and Minimal with Image.
- **Accent Color Picker** – Personalize template colors to match your style.
- **Profile Image Upload** – Supports background removal via ImageKit.

### 🔒 Authentication & Sharing
- Secure registration and login with JWT and bcrypt password hashing.
- Make resumes **public** for easy sharing via a unique URL.
- **PDF Export** – Download your resume as a print-ready PDF.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite 7, Tailwind CSS 4 |
| **State Management** | Redux Toolkit |
| **Routing** | React Router DOM v7 |
| **HTTP Client** | Axios |
| **Backend** | Node.js, Express 5 |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **AI** | OpenAI API (GPT-4) / Google GenAI |
| **Image Hosting** | ImageKit |
| **File Uploads** | Multer |
| **Notifications** | React Hot Toast |
| **Icons** | Lucide React |
| **Dev Tooling** | Nodemon, ESLint |

---

## 📁 Project Structure

```
ResumeForge-AI/
├── client/                    # React + Vite frontend
│   ├── public/                # Static assets
│   └── src/
│       ├── app/               # Redux store & auth slice
│       ├── components/        # Reusable UI components
│       │   ├── Home/          # Landing page sections
│       │   └── templates/     # Resume template renderers
│       ├── configs/           # Axios client config
│       └── pages/             # Route-level pages
│           ├── Home.jsx
│           ├── Login.jsx
│           ├── Dashboard.jsx
│           ├── ResumeBuilder.jsx
│           └── Preview.jsx
│
└── server/                    # Node.js + Express backend
    ├── configs/               # DB, AI, ImageKit, Multer configs
    ├── controllers/           # Business logic
    ├── middlewares/           # JWT auth middleware
    ├── models/                # Mongoose schemas (User, Resume)
    ├── routes/                # API route definitions
    └── utils/                 # ApiError, ApiResponse, AsyncHandler
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A **MongoDB** connection string (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- An **OpenAI API** key
- An **ImageKit** account (for image hosting)

### 1. Clone the Repository

```bash
git clone https://github.com/aryanghugare/ResumeForge-AI.git
cd ResumeForge-AI
```

### 2. Configure Environment Variables

#### Server (`server/.env`)

Create a file at `server/.env` with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/resumeforge
JWT_SECRET=your_super_secret_jwt_key

# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4-turbo

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

#### Client (`client/.env.local`)

Create a file at `client/.env.local`:

```env
VITE_BASE_URL=http://localhost:3000
```

### 3. Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 4. Run in Development Mode

Open two terminals:

**Terminal 1 – Backend:**
```bash
cd server
npm run server      # Starts Express on http://localhost:3000
```

**Terminal 2 – Frontend:**
```bash
cd client
npm run dev         # Starts Vite dev server on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
# Build the frontend
cd client
npm run build       # Output goes to client/dist/

# Run the backend in production mode
cd ../server
npm start
```

---

## 📡 API Reference

All protected routes require an `Authorization: <token>` header with a valid JWT.

### User Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/users/register` | ❌ | Register a new user |
| `POST` | `/api/users/login` | ❌ | Log in and receive a JWT |
| `GET` | `/api/users/data` | ✅ | Get current user info |
| `GET` | `/api/users/resumes` | ✅ | List all resumes for the user |

### Resume Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/resumes/create` | ✅ | Create a new resume |
| `PUT` | `/api/resumes/update` | ✅ | Update a resume (supports image upload) |
| `DELETE` | `/api/resumes/delete/:resumeId` | ✅ | Delete a resume |
| `GET` | `/api/resumes/get/:resumeId` | ✅ | Get a specific resume |
| `GET` | `/api/resumes/public/:resumeId` | ❌ | View a public resume (no auth required) |

### AI Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/ai/enhance-pro-sum` | ✅ | AI-enhance professional summary |
| `POST` | `/api/ai/enhance-job-desc` | ✅ | AI-enhance a job description |
| `POST` | `/api/ai/upload-resume` | ✅ | Upload PDF and auto-extract resume data |

---

## 🗄 Data Models

### User
```js
{
  name: String,
  email: String,       // unique
  password: String,    // bcrypt hashed
  createdAt, updatedAt
}
```

### Resume
```js
{
  userId: ObjectId,
  title: String,
  public: Boolean,
  template: String,        // "classic" | "modern" | "minimal" | "minimal-image"
  accent_color: String,
  professional_summary: String,
  skills: [String],
  personal_info: {
    image, full_name, profession, email, phone, location, linkedin, website
  },
  experience: [{
    company, position, start_date, end_date, description, is_current
  }],
  education: [{
    institution, degree, field, graduation_date, gpa
  }],
  project: [{
    name, type, description
  }],
  createdAt, updatedAt
}
```

---

## ☁️ Deployment

### Frontend – Vercel (Recommended)

1. Push your code to GitHub.
2. Import the repo in [Vercel](https://vercel.com) and set the **Root Directory** to `client`.
3. Add environment variable `VITE_BASE_URL` pointing to your deployed backend URL.
4. Deploy.

### Backend – Render / Railway / Heroku

1. Deploy the `server/` directory to your chosen platform.
2. Add all server environment variables from `server/.env`.
3. Set the start command to `npm start`.
4. Update the CORS `allowedOrigins` in `server/server.js` to include your frontend URL.

### Database – MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Whitelist your backend server IP.
3. Copy the connection string into `MONGODB_URI`.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

---

## 📄 License

This project is open source. See the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ by <a href="https://github.com/aryanghugare">Aryan Ghugare</a></p>

