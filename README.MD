# TAHLEEL.ai Frontend

> AI-Powered Football Tactical Analysis Platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/syedabbast/tahleel-ai-frontend.git
cd tahleel-ai-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm start
```

### Environment Setup

Create `.env` file:
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

## 🏗️ Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Global styles with Tailwind
├── index.js        # React entry point
└── index.css       # Base styles
```

## 🎨 Features

- **Modern UI**: Gold/Blue/Black theme with glassmorphism
- **Responsive Design**: Works on all devices
- **Real-time Analysis**: Connected to Claude AI backend
- **Arabic Support**: Bilingual branding (تحليل)
- **Professional UX**: Smooth animations and transitions

## 📱 Pages

1. **Login Page**: Secure access with password `tahleel2025`
2. **Dashboard**: Team analysis input and feature showcase
3. **Strategy Page**: Comprehensive tactical analysis results

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

## 🚀 Deployment

### Netlify
```bash
npm run build
# Upload 'build' folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 🎯 Usage

1. Access the application
2. Login with password: `tahleel2025`
3. Enter opponent team name (e.g., "Real Madrid")
4. Wait for AI analysis (connects to backend)
5. View comprehensive tactical report

## 🔗 Backend Integration

The frontend connects to the TAHLEEL.ai backend API:
- Analysis endpoint: `POST /api/analysis`
- News endpoint: `GET /api/news/:team`

## 📦 Dependencies

- **React 18**: Modern React framework
- **Lucide React**: Beautiful icons
- **Axios**: HTTP client for API calls
- **Tailwind CSS**: Utility-first CSS framework

## 🏢 Company

**Auwire Technologies**  
Syed - Project Owner  
© 2025 All rights reserved
