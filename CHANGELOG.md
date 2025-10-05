# Changelog

All notable changes to 7K Political Science will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive key terms with textbook-aligned definitions (41 terms total)
- Professional README.md with features, installation guide, and project information
- CONTRIBUTING.md with detailed contribution guidelines
- MIT LICENSE
- CHANGELOG.md for tracking project history

### Changed
- Enhanced keyTerms type to include definitions
- All key terms now have detailed, Maharashtra State Board textbook-aligned definitions

---

## [1.0.0] - 2025-10-05

### Added
- **Complete Textbook Alignment**: 100% alignment with Maharashtra State Board HSC Political Science (Standard XII) textbook
- **250 Flashcards**: 50 flashcards per chapter across 5 chapters
- **250 MCQs**: 50 multiple-choice questions per chapter
- **41 Key Terms**: Comprehensive glossary with detailed definitions
- **Video Integration**: Google Drive video integration for all chapters
- **Progress Tracking**: Track completion of flashcards and MCQs
- **PWA Support**: Progressive Web App with offline capabilities
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Content Quality Improvements
- **150 Items Replaced**: 30% of content transformed for textbook alignment
- **Chapter 1**: 33 items replaced - Challenges of Nation Building
- **Chapter 2**: 16 items replaced - India and the Contemporary World
- **Chapter 3**: 80 items replaced - Politics in India
- **Chapter 4**: 6 items replaced - India's Challenges
- **Chapter 5**: 15 items replaced - Good Governance

### Removed
- Modern initiatives not in 2020 textbook (GST, Digital India, Make in India, etc.)
- Economic jargon not in student textbook (Washington Consensus, Tobin tax, etc.)
- Author names not emphasized in curriculum (McLuhan, Friedman, Ritzer, etc.)
- Wrong-chapter content misplacements (PIL in Chapter 5, Bretton Woods in Chapter 2)
- Generic content without textbook specifics

### Technical Stack
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Content Alignment History

### Chapter 2: India and the Contemporary World
**Date**: October 2025  
**Items Replaced**: 16 (8 flashcards + 8 MCQs)  
**Textbook Pages**: 25-34

**Removed**:
- Washington Consensus, Tobin tax, precariat, deglobalization, digital silk road
- Battle for Seattle, Bretton Woods (wrong chapter)
- Author names: McLuhan, Friedman, Ritzer, Stiglitz, Barber

**Added**:
- GATT→WTO 1995, TRIPs, GATS
- India's economic liberalism model
- CNN 1990 Gulf War coverage
- Narmada Bachao Andolan (Medha Patkar)
- Arab Spring 2010
- Third World human rights perspective
- Market economy types (US/Europe/China/India)
- NGO examples (Amnesty International, Green Peace)
- Foreign investment examples (Tata's Jaguar Land Rover, ONGC Videsh)
- Cultural celebrations (Mother's Day, Father's Day, Friendship Day)

### Chapter 4: India's Challenges
**Date**: October 2025  
**Items Replaced**: 6 (3 flashcards + 3 MCQs)  
**Textbook Pages**: 35-47

**Removed**:
- Mandal Commission, creamy layer (OBC-specific, not Chapter 4 focus)
- PIL, judicial activism (Chapter 4 is challenges/integration, not judiciary)

**Added**:
- National Integration Council 1961 (founding, objectives)
- NIC objectives: common citizenship, unity in diversity, secularism, equality, justice, fraternity
- Psychological integration symbols: National Song, Flag, Anthem, Emblem, Bird, Animal
- Uri 2016 Jaish-e-Mohammed attack
- 73rd/74th Amendments local self-government

### Chapter 5: Good Governance
**Date**: October 2025  
**Items Replaced**: 15 (11 flashcards + 4 MCQs)  
**Textbook Pages**: 48-58

**Removed**:
- Modern post-2014 initiatives: GST, Make in India, Digital India, Aadhaar, DBT, Aspirational Districts Programme
- "Minimum Government Maximum Governance" slogan
- NITI Aayog/cooperative federalism (brief mention only)
- PIL, judicial activism (wrong chapter)
- MGNREGA, Anna Hazare Movement, CAG (not in Ch5 textbook)

**Added**:
- 8 Values Framework details: Participatory, Consensus Oriented, Responsiveness, Equity & Inclusiveness, Effectiveness & Efficiency, Transparency
- Maharashtra State Good Governance Framework: 4 Acts (RTI 2005, Public Records 2005, Prevention of Delay 2005, Guarantee of Services 2015)
- Lokpal Act 2013 specifics: passed 2013, force 2014, first Lokpal Pinaki Chandra Ghose 2019, Maharashtra first state 1972
- E-Governance 6 pillars: Capacity Building example
- Citizen participation: bottom-up approach
- All 8 Special Commissions: SCs, STs, Human Rights, Women (1990), Child Rights, Backward Classes, Minorities, Consumer Disputes Redressal

### Chapter 1: Challenges of Nation Building
**Date**: Earlier Session  
**Items Replaced**: 33 items  
**Textbook Pages**: 14-24

**Key Changes**:
- Removed generic partition/linguistic reorganization content
- Added textbook-specific details: Princely states integration, States Reorganisation Commission 1953, Fazl Ali Commission
- Enhanced language policy evolution content
- Added specific princely states examples

### Chapter 3: Politics in India
**Date**: Earlier Session  
**Items Replaced**: 80 items (largest transformation)

**Key Changes**:
- Removed excessive focus on modern initiatives not in textbook depth
- Added comprehensive textbook-aligned content covering Indian political landscape
- Enhanced party system, electoral politics, federalism content
- Improved constitutional mechanisms coverage

---

## Technical Improvements

### October 2025
- Fixed Vercel deployment configuration
- Optimized vercel.json for subdirectory deployment
- Enhanced video streaming with Google Drive integration
- Improved PWA manifest and service worker
- Added comprehensive TypeScript types for all data structures

---

## Documentation

### October 2025
- Created comprehensive README.md with badges, features, installation guide
- Added CONTRIBUTING.md with contribution guidelines
- Added MIT LICENSE
- Added CHANGELOG.md for version tracking
- Enhanced inline code documentation

---

## Known Issues

### Current
None reported

### Resolved
- ✅ Vercel deployment subdirectory path issue (October 2025)
- ✅ Video streaming optimization (October 2025)
- ✅ Content alignment with 2020 textbook (October 2025)

---

## Future Roadmap

### Planned Features
- [ ] Spaced repetition algorithm for flashcards
- [ ] Export/import progress data
- [ ] Marathi language support
- [ ] Offline mode improvements
- [ ] Advanced search functionality
- [ ] Bookmark favorite flashcards/MCQs
- [ ] Practice test mode with timer
- [ ] Performance analytics dashboard
- [ ] Community-contributed content moderation system

### Under Consideration
- [ ] Mobile app (React Native)
- [ ] Voice-over for visually impaired students
- [ ] Integration with Maharashtra Board exam patterns
- [ ] Peer-to-peer study groups
- [ ] AI-powered doubt resolution

---

## Contributors

### Core Team
- **Kundan Kumar** ([@kunu2009](https://github.com/kunu2009)) - Creator & Lead Developer

### Special Thanks
- Maharashtra State Board for the official curriculum
- HSC students and teachers for feedback
- Open source community for tools and libraries

---

## Support

For support, please:
- 📧 Create an [issue](https://github.com/kunu2009/7kpoliticalscience/issues)
- 💬 Start a [discussion](https://github.com/kunu2009/7kpoliticalscience/discussions)
- ⭐ Star the repository if you find it helpful!

---

**Last Updated**: October 5, 2025
