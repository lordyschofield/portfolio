# Modern React Portfolio

A sleek, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and email functionality.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth animations and micro-interactions
- **AI Chatbot**: Intelligent assistant powered by Together AI
- **Email Integration**: Contact form with EmailJS integration
- **TypeScript**: Fully typed for better development experience
- **Performance**: Optimized with Vite and modern React patterns

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI Chatbot**: WebLLM (Local AI in Browser - 100% Free)
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📋 Sections

1. **Hero**: Dynamic typing animation, social links, call-to-action
2. **About**: Personal introduction, experience highlights, statistics
3. **Skills**: Interactive skill visualization with progress bars
4. **Projects**: Project showcase with filtering and hover effects
5. **Contact**: Contact form with email sending functionality

## 🤖 AI Chatbot (WebLLM)

This portfolio features an **intelligent AI chatbot** powered by **WebLLM** that runs entirely in the browser:

### 🎯 How It Works
- **Local AI**: Uses WebLLM to run AI models directly in your browser
- **No External APIs**: Completely self-contained, no server dependencies
- **100% Free**: No API keys, subscriptions, or costs required
- **GitHub Pages Compatible**: Works perfectly on static hosting

### 🧠 AI Capabilities
- **Comprehensive Profile**: Complete knowledge of Lord Reinier's background, education, experience, and achievements
- **Professional History**: Detailed information about INGCOPH Traders role and McDonald's service experience
- **Technical Expertise**: In-depth knowledge of full-stack development skills and technologies
- **Project Portfolio**: Complete details about all major projects and systems developed
- **Personal Details**: Education, contact information, awards, and character references
- **Conversational AI**: Natural, helpful responses to any questions about Lord Reinier's background

### 🔧 Technical Implementation
- **Model**: TinyLlama-1.1B-Chat-v0.4 (700MB) - Official WebLLM model
- **Loading Time**: Pre-cached on page load (instant chat!), 30-45 seconds first visit
- **Local AI**: Runs entirely in browser using WebAssembly/WebGPU
- **Smart Caching**: Model loads in background when page opens
- **Instant Chat**: AI ready immediately after pre-loading completes
- **Fallback**: On-demand loading if pre-cache fails

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### EmailJS Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)

2. Create a new email service (Gmail, Outlook, etc.)

3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name

4. Update the EmailJS configuration in `src/components/ContactSection.tsx`:
```typescript
const serviceId = 'your_service_id';
const templateId = 'your_template_id';
const publicKey = 'your_public_key';
```

### AI Chatbot Setup (Optional)

The portfolio includes an **intelligent conversational AI chatbot** that provides **instant, context-aware responses** about Lord Reinier's portfolio!

#### 🚀 **No Setup Required!**

**The AI chatbot works out-of-the-box with zero configuration!**

- ✅ **Completely free** - No API keys, no costs, no signup
- ✅ **Runs locally** - AI model loads in your browser
- ✅ **Works offline** - Once loaded, no internet needed
- ✅ **GitHub Pages compatible** - No server required

#### 💰 **WebLLM Pricing**

- **100% FREE** - No costs ever
- **No API keys required** - Everything built-in
- **No rate limits** - Runs on your device
- **Privacy focused** - Conversations stay local

#### 🧠 **How It Works**

1. **WebLLM loads AI model** - Tries Llama-2-7B, Mistral-7B, or Phi-2 automatically
2. **Context-aware responses** - Knows about Lord Reinier's portfolio
3. **Intelligent conversations** - Natural, helpful responses
4. **Smart fallbacks** - Works immediately while model loads

#### ⚡ **AI Capabilities**

The chatbot can intelligently answer questions about:
- Lord Reinier's experience and background
- Technical skills and proficiency levels
- Project portfolio and detailed case studies
- Technology stack and expertise areas
- Career highlights and professional journey
- Contact information and collaboration opportunities

#### 🧪 **Test Your AI Chatbot**

1. **No setup needed** - Works immediately
2. **Run locally**: `npm run dev`
3. **Open**: http://localhost:5173/portfolio/
4. **Click chat button** and ask: "Tell me about Lord Reinier"
5. **First time**: Wait ~30 seconds for AI model to load
6. **After loading**: Get instant AI responses!

#### 🎯 **Features**

- ✅ **Works on GitHub Pages** deployment
- ✅ **Powered by Llama-3-8B** (professional AI model)
- ✅ **Context-aware responses** about your portfolio
- ✅ **100% Free** - No costs or API keys ever
- ✅ **Runs locally** - Private and secure

**Your portfolio now has true AI conversations running directly in visitors' browsers!** 🤖✨

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section** (`src/components/HeroSection.tsx`):
  - Name, title, and description
  - Social media links
  - Profile image/emoji

- **About Section** (`src/components/AboutSection.tsx`):
  - Personal description and experience
  - Statistics and highlights

- **Contact Section** (`src/components/ContactSection.tsx`):
  - Contact information (email, phone, location)
  - Social media links

### Projects

Update the projects array in `src/components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    image: "🛒", // Emoji or image URL
    technologies: ["Tech1", "Tech2", "Tech3"],
    category: "fullstack", // fullstack, frontend, backend, other
    github: "https://github.com/your-project",
    live: "https://your-project.com",
    featured: true // Set to true for featured projects
  },
  // Add more projects...
];
```

### Skills

Customize the skills in `src/components/SkillsSection.tsx`:

```typescript
const skillCategories = [
  {
    title: "Your Skill Category",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "Skill Name",
        level: 95, // 0-100
        description: "Skill description"
      },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### Styling

The design uses Tailwind CSS. Key color variables:
- Primary gradient: `from-purple-500 to-pink-500`
- Background gradient: `from-purple-900 via-blue-900 to-indigo-900`
- Accent colors: Various gradient combinations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to GitHub Pages with AI Chatbot

1. **Setup OpenAI API**:
```bash
# Get your API key from: https://platform.openai.com/api-keys
VITE_OPENAI_API_KEY=sk-your-openai-api-key-here
```

2. **Build for production**:
```bash
npm run build
```

3. **Deploy to GitHub Pages**:
   - Push to GitHub
   - Go to Repository Settings → Pages
   - Select "GitHub Actions" or upload `dist` folder
   - Your GPT-powered chatbot will work automatically!

### Alternative: Deploy to Netlify/Vercel

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting platform.

### Environment Variables

For production deployments:

```bash


## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Lucide](https://lucide.dev/) for icons

---

**Made with ❤️ using React & TypeScript**