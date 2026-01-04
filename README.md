# Modern React Portfolio

A sleek, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and email functionality.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth animations and micro-interactions
- **Email Integration**: Contact form with EmailJS integration
- **TypeScript**: Fully typed for better development experience
- **Performance**: Optimized with Vite and modern React patterns

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
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

### Deploy to GitHub Pages

1. **Build for production**:
```bash
npm run build
```

2. **Deploy to GitHub Pages**:
   - Push to GitHub
   - Go to Repository Settings → Pages
   - Select "GitHub Actions" or upload `dist` folder

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