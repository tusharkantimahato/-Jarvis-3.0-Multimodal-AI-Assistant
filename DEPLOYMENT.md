# 🚀 JARVIS 3.0 - Complete Deployment Guide

## 🎯 Project Status: PRODUCTION READY ✅

JARVIS 3.0 is a multimodal AI assistant with both web and desktop interfaces, powered by Google Gemini AI.

---

## 📋 Quick Start

### Prerequisites
- Python 3.8+ (tested with 3.14.3)
- Node.js 16+ (for React frontend)
- Google Gemini API key

### 1. Clone & Setup

```bash
# Clone repository
git clone https://github.com/tusharkantimahato7/Jarvis-3.0-Multimodal-AI-Assistant.git
cd Jarvis-3.0-Multimodal-AI-Assistant

# Setup environment
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY
```

### 2. Install Dependencies

```bash
# Backend dependencies
pip install -r requirements.txt

# Frontend dependencies
npm install
```

### 3. Run Application

```bash
# Set Python path
set PYTHONPATH=%cd%\src

# Run web interface
python run_web.py

# Or run desktop interface
python run_desktop.py
```

---

## 🏗️ Architecture Overview

```
JARVIS 3.0/
├── src/jarvis/           # Python backend
│   ├── api/             # REST API endpoints
│   ├── web/             # Flask web server
│   ├── desktop/         # Desktop GUI (Tkinter)
│   └── config/          # Configuration management
├── react/               # React frontend (Vite)
├── static/              # Static web assets
└── templates/           # HTML templates
```

### Key Components

- **Backend**: Flask + Python
- **Frontend**: React 18 + Vite
- **AI Engine**: Google Gemini (HTTP API)
- **Desktop UI**: Tkinter with camera/voice support
- **Web UI**: Modern chat interface

---

## 🔧 Configuration

### Environment Variables (.env)

```bash
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
FLASK_ENV=development
FLASK_DEBUG=true
PORT=5000
```

### Getting API Key

1. Visit: https://makersuite.google.com/app/apikey
2. Create new API key
3. Add to `.env` file

---

## 🚀 Running the Application

### Web Interface

```bash
# Terminal 1: Backend
set PYTHONPATH=%cd%\src
python run_web.py

# Terminal 2: Frontend (optional, for development)
npm run dev
```

Access: http://localhost:5000

### Desktop Interface

```bash
set PYTHONPATH=%cd%\src
python run_desktop.py
```

---

## 🛠️ Development

### Project Structure

```
src/jarvis/
├── api/
│   ├── routes.py         # API endpoints
│   ├── gemini_client.py  # AI integration
│   └── cli.py           # Command line tools
├── web/
│   └── app.py           # Flask application
├── desktop/
│   ├── app.py           # Desktop application
│   ├── camera/          # Camera controls
│   ├── voice/           # Voice recognition
│   └── gui/             # GUI components
├── config/
│   └── settings.py      # Configuration
└── utils/
    └── helpers.py       # Utility functions
```

### Adding New Features

1. **API Endpoints**: Add to `src/jarvis/api/routes.py`
2. **Frontend**: Modify `react/src/App.jsx`
3. **Desktop**: Update `src/jarvis/desktop/`

### Testing

```bash
# Run Python tests
python -m pytest tests/

# Run React tests
cd react
npm test
```

---

## 🔒 Security

### Safe Sharing
- ✅ `.env` files ignored by git
- ✅ No sensitive data in commits
- ✅ Comprehensive `.gitignore`
- ✅ Secure API key handling

### Security Checklist
- [x] Environment variables protected
- [x] Git history clean
- [x] Dependencies secure
- [x] Error handling safe

---

## 📦 Deployment Options

### Option 1: Local Development

```bash
# Install all dependencies
pip install -r requirements.txt
cd react && npm install && cd ..

# Run both services
set PYTHONPATH=%cd%\src
python run_web.py
```

### Option 2: Docker (Recommended)

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
ENV PYTHONPATH=/app/src

EXPOSE 5000
CMD ["python", "run_web.py"]
```

#### Build & Run

```bash
# Build image
docker build -t jarvis-3.0 .

# Run container
docker run -p 5000:5000 --env-file .env jarvis-3.0
```

### Option 3: Heroku (Free)

1. **Create Heroku account** at [heroku.com](https://www.heroku.com)

2. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   heroku login
   ```

3. **Create Procfile** in project root:
   ```
   web: python run_web.py
   ```

4. **Create runtime.txt:**
   ```
   python-3.11.0
   ```

5. **Deploy:**
   ```bash
   heroku create your-app-name
   heroku config:set GEMINI_API_KEY=your_key_here
   git push heroku main
   heroku logs --tail
   ```

### Option 4: Railway (Easy Deploy)

1. **Connect GitHub** repository
2. **Set environment variables** in dashboard
3. **Deploy automatically** on push

### Option 5: Vercel + Railway

**Frontend (Vercel):**
```bash
cd react
vercel --prod
```

**Backend (Railway):**
- Deploy Python app to Railway
- Set environment variables
- Get backend URL

**Update frontend** to use production backend URL.

### Option 6: GitHub Pages (Frontend Only)

The React frontend can be deployed to GitHub Pages:

```bash
npm run build
```

- **Deployed at:** `https://tusharkantimahato7.github.io/Jarvis-3.0-Multimodal-AI-Assistant/`
- **Configuration:** `.github/workflows/deploy.yml`
- GitHub Pages hosts the frontend only. The Flask backend and Gemini API calls still need a server deployment such as Railway or another Python-capable host.

---

## 🔧 Troubleshooting

### Common Issues

**"Module not found" errors:**
```bash
# Ensure PYTHONPATH is set
set PYTHONPATH=%cd%\src
```

**API Key issues:**
```bash
# Check .env file exists and has correct key
cat .env
```

**Port conflicts:**
```bash
# Change port in .env
PORT=5001
```

**React build issues:**
```bash
npm install
npm run build
```

### Debug Mode

```bash
# Enable debug logging
set FLASK_DEBUG=true
python run_web.py
```

---

## 📚 API Documentation

### Endpoints

#### POST `/api/chat`
Send message to AI assistant.

**Request:**
```json
{
  "message": "Hello JARVIS",
  "context": {}
}
```

**Response:**
```json
{
  "response": "Hello! How can I help you today?",
  "status": "success"
}
```

#### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "version": "3.0.0"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Make changes and test
4. Commit: `git commit -m "Add new feature"`
5. Push: `git push origin feature/new-feature`
6. Create Pull Request

### Code Standards

- Use type hints in Python
- Follow React best practices
- Add tests for new features
- Update documentation

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file.

---

## 🆘 Support

### Issues
- Check [Troubleshooting](#troubleshooting) section
- Search existing GitHub issues
- Create new issue with detailed description

### Community
- GitHub Discussions for questions
- Issues for bug reports
- Pull Requests for contributions

---

## 🎯 Roadmap

### Version 3.1
- [ ] Voice commands in web interface
- [ ] File upload support
- [ ] Conversation history
- [ ] Multi-language support

### Version 3.2
- [ ] Mobile app (React Native)
- [ ] Plugin system
- [ ] Advanced AI features
- [ ] Cloud deployment templates

---

## 📊 Project Stats

- **Language**: Python 3.14.3 + JavaScript
- **Framework**: Flask + React 18
- **AI**: Google Gemini
- **License**: MIT
- **Status**: Production Ready ✅

---

*Built with ❤️ for AI enthusiasts*

---

## 🔗 Links

- [GitHub Repository](https://github.com/tusharkantimahato7/Jarvis-3.0-Multimodal-AI-Assistant)
- [Documentation](README.md)
- [Security Guide](SECURITY.md)
- [API Docs](#api-documentation)
   ```

### Option 2: Railway.app (Simple)

1. Go to [railway.app](https://railway.app/)
2. Connect GitHub repository
3. Set `GEMINI_API_KEY` environment variable
4. Deploy!

### Option 3: Render.com

1. Sign up at [render.com](https://render.com/)
2. Create new Web Service
3. Connect GitHub repository
4. Set environment variables
5. Deploy!

### Option 4: AWS/Digital Ocean (Production)

For production use, consider containerization:

**Create Dockerfile:**
```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
ENV PYTHONPATH=/app/src

EXPOSE 5000
CMD ["python", "run_web.py"]
```

**Build and deploy:**
```bash
docker build -t jarvis .
docker run -e GEMINI_API_KEY=your_key -p 5000:5000 jarvis
```

## Environment Variables

Deploy these via your hosting platform's environment variable settings:

```
GEMINI_API_KEY=your_api_key_here
FLASK_ENV=production
FLASK_DEBUG=false
FLASK_HOST=0.0.0.0
FLASK_PORT=5000
```

## CORS Configuration

For frontend-backend communication, CORS is already enabled in `src/jarvis/api/routes.py`. Update the allowed origin if needed:

```python
CORS(app, origins=["https://yourdomain.com"])
```

## Monitoring

Set up simple monitoring:

```bash
# View logs
heroku logs --tail  # Heroku
railway logs        # Railway
```

## Database (Future)

When adding database support, consider:
- **SQLite** for simple deployments
- **PostgreSQL** for production
- **MongoDB** for flexible schema

---

Need help? Check [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue!
