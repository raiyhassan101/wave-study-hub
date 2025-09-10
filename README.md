# Wave Study Hub

A modern AI-powered study platform designed for Pakistani students, featuring an intelligent AI assistant that provides personalized academic support with mathematical expression rendering and clean formatting.

## Features

- 🤖 **AI Study Assistant** - Powered by N8N webhook integration
- 📚 **Multiple Study Modules** - Courses, Notes, Test Prep, Project Tools
- 🧮 **Math Expression Rendering** - Clean LaTeX to readable math conversion
- 🎨 **Modern UI** - Built with React, TypeScript, and Tailwind CSS
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Optimized with Vite

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Math Rendering**: Custom MathRenderer component
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/raiyhassan101/wave-study-hub.git
cd wave-study-hub
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp env.example .env.local
```

4. Start development server
```bash
npm run dev
```

### Environment Variables

Create a `.env.local` file with:

```env
VITE_WEBHOOK_URL=https://your-n8n-webhook-url
VITE_API_BASE_URL=https://your-api-domain.com
VITE_NODE_ENV=production
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Manual Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── MathRenderer.tsx # Math expression renderer
├── pages/              # Application pages
│   ├── AIAssistant.tsx # AI chat interface
│   ├── Courses.tsx     # Course management
│   └── ...
├── lib/                # Utilities and API
│   └── api.ts          # Webhook integration
└── hooks/              # Custom React hooks
```

## AI Assistant Features

- **Webhook Integration**: Connects to N8N backend
- **Math Rendering**: Converts LaTeX to clean math expressions
- **Loading States**: Visual feedback during AI processing
- **Error Handling**: Graceful fallback for failed requests
- **Conversation Tracking**: Maintains chat history

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@wavestudyhub.com or create an issue on GitHub.