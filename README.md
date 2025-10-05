# 7K Political Science - Maharashtra State Board HSC App

<div align="center">

![7K Political Science Logo](public/7kpol-512x512.png)

**A comprehensive study companion for Maharashtra State Board HSC Political Science (Standard XII)**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Features](#features) • [Getting Started](#getting-started) • [Curriculum Alignment](#curriculum-alignment) • [Contributing](#contributing)

</div>

---

## 📚 About

**7K Political Science** is a modern, interactive learning platform designed specifically for Maharashtra State Board HSC Political Science (Standard XII) students. The app provides **100% textbook-aligned content** with interactive flashcards, multiple-choice questions, video lectures, and comprehensive study materials.

### Why 7K Political Science?

- ✅ **100% Curriculum Compliant** - All content aligned with Maharashtra State Board textbook (First Edition 2020)
- 🎯 **Exam-Focused** - Questions and materials designed for HSC exam preparation
- 📱 **PWA Support** - Install as an app on any device, works offline
- 🎥 **Video Lectures** - Chapter-wise video explanations integrated with Google Drive
- 🃏 **Interactive Flashcards** - 250 flashcards across 5 chapters for quick revision
- ❓ **250 MCQs** - Comprehensive multiple-choice questions for practice
- 📖 **Key Terms** - Detailed definitions of important concepts
- 🎞️ **Short Reels** - Bite-sized concept explanations
- 🌙 **Dark Mode** - Easy on the eyes during late-night study sessions
- 📊 **Progress Tracking** - Monitor your learning progress across chapters

---

## 🎓 Curriculum Coverage

The app covers all 5 chapters from the Maharashtra State Board HSC Political Science (Standard XII) textbook:

| Chapter | Title | Flashcards | MCQs | Key Terms | Videos |
|---------|-------|------------|------|-----------|---------|
| **1** | Challenges of Nation Building | 50 | 50 | 8 | ✅ |
| **2** | India and the Contemporary World | 50 | 50 | 9 | ✅ |
| **3** | Politics in India | 50 | 50 | 6 | ✅ |
| **4** | India's Challenges | 50 | 50 | 8 | ✅ |
| **5** | Good Governance | 50 | 50 | 10 | ✅ |
| **Total** | **5 Chapters** | **250** | **250** | **41** | **All** |

### Textbook Alignment

All content is meticulously aligned with the official Maharashtra State Board textbook:
- **Textbook**: HSC Political Science (Standard XII), First Edition 2020
- **Page Coverage**: Pages 14-58
- **Alignment**: 100% (verified through systematic cross-checking)

---

## ✨ Features

### 📖 Study Materials

- **Chapter Content**: Full textbook content organized by chapters
- **Summaries**: Quick chapter overviews for rapid revision
- **Key Terms**: Comprehensive glossary with textbook-aligned definitions
- **Visual Learning**: Placeholder images and icons for better engagement

### 🎯 Practice Tools

- **Flashcards**: 50 cards per chapter (250 total) with question-answer format
- **MCQs**: 50 multiple-choice questions per chapter (250 total) with instant feedback
- **Reels**: Short, engaging concept summaries
- **All Flashcards/MCQs**: Dedicated pages to practice across all chapters

### 🎥 Video Integration

- **Google Drive Integration**: Seamlessly embedded chapter videos
- **Chapter-wise Organization**: Videos organized by chapter and subtopics
- **Streaming Optimized**: Efficient video delivery with download options
- **Placeholder Support**: Graceful fallbacks if videos are unavailable

### 📊 Progress Tracking

- **Chapter Progress**: Track completion of flashcards and MCQs per chapter
- **Overall Progress**: View your study progress across all chapters
- **Visual Dashboard**: Clean, intuitive progress visualization

### 🎨 User Experience

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes for comfortable reading
- **Modern UI**: Clean interface built with shadcn/ui components
- **Smooth Navigation**: Sidebar navigation with chapter organization
- **PWA**: Install as a Progressive Web App for offline access

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunu2009/7kpoliticalscience.git
   cd 7kpoliticalscience
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional for video features)
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Google Drive configuration if needed:
   ```env
   NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   ```
   http://localhost:9002
   ```

### Building for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Video Player**: Custom enhanced video player with Google Drive integration
- **PWA**: Workbox for offline support
- **Deployment**: Optimized for Vercel

---

## 📂 Project Structure

```
7kpoliticalscience/
├── src/
│   ├── app/
│   │   ├── (main)/              # Main application routes
│   │   │   ├── [chapterId]/     # Dynamic chapter pages
│   │   │   ├── all-flashcards/  # All flashcards page
│   │   │   ├── all-mcqs/        # All MCQs page
│   │   │   ├── all-reels/       # All reels page
│   │   │   ├── all-videos/      # All videos page
│   │   │   └── progress/        # Progress tracking page
│   │   ├── api/                 # API routes
│   │   ├── globals.css          # Global styles
│   │   └── layout.tsx           # Root layout
│   ├── components/              # Reusable React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── enhanced-video-player.tsx
│   │   ├── progress-dashboard.tsx
│   │   └── theme-provider.tsx
│   ├── lib/
│   │   ├── data.ts              # Chapter content and study materials
│   │   ├── google-drive-videos.ts
│   │   ├── progress.ts          # Progress tracking logic
│   │   └── utils.ts             # Utility functions
│   └── hooks/                   # Custom React hooks
├── public/                      # Static assets
│   ├── manifest.json            # PWA manifest
│   ├── sw.js                    # Service worker
│   └── *.png                    # App icons
├── docs/                        # Documentation
│   ├── blueprint.md
│   └── google-drive-setup.md
├── .gitignore
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

---

## 📊 Content Quality

### Textbook Alignment Project

The app underwent a comprehensive textbook alignment project to ensure **100% accuracy**:

- **Items Reviewed**: 500 (flashcards, MCQs, key terms)
- **Items Replaced**: 150 (30% of content)
- **Alignment Achievement**: 100% across all 5 chapters

**What was removed**:
- ❌ Modern initiatives not in 2020 textbook (GST, Digital India, Make in India, etc.)
- ❌ Economic jargon not in student textbook
- ❌ Author names not emphasized in curriculum
- ❌ Wrong-chapter content misplacements
- ❌ Generic content without textbook specifics

**What was added**:
- ✅ Textbook-specific examples and details
- ✅ Maharashtra State-specific content
- ✅ Exact dates, names, and mechanisms from textbook
- ✅ Proper context for all concepts
- ✅ Comprehensive key term definitions

---

## 🤝 Contributing

We welcome contributions from the community! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Maharashtra State Board** for the official HSC Political Science textbook
- **Students and Teachers** who provided feedback during development
- **Open Source Community** for amazing tools and libraries
- **Next.js Team** for the incredible framework
- **Vercel** for hosting and deployment platform
- **shadcn/ui** for beautiful UI components

---

## 📧 Contact & Support

- **Developer**: Kundan Kumar (kunu2009)
- **Repository**: [github.com/kunu2009/7kpoliticalscience](https://github.com/kunu2009/7kpoliticalscience)
- **Issues**: [Report an Issue](https://github.com/kunu2009/7kpoliticalscience/issues)
- **Discussions**: [Join Discussion](https://github.com/kunu2009/7kpoliticalscience/discussions)

---

## 🌟 Show Your Support

If this project helped you in your studies, please give it a ⭐ on GitHub!

---

<div align="center">

**Made with ❤️ for Maharashtra HSC Students**

*Last Updated: October 2025*

</div>
