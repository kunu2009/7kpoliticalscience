# Contributing to 7K Political Science

First off, thank you for considering contributing to 7K Political Science! It's people like you that make this a great tool for Maharashtra HSC students.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Content Guidelines](#content-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guides](#style-guides)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all. By participating, you are expected to uphold high standards of respect and professionalism.

### Our Standards

- **Be respectful** and inclusive in your language and actions
- **Be collaborative** - this is a community project
- **Be patient** with newcomers and those learning
- **Focus on what is best** for the students using this app
- **Show empathy** towards other community members

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - Device: [e.g., iPhone 12, Desktop]
 - OS: [e.g., iOS 15, Windows 11]
 - Browser: [e.g., Chrome 120, Safari]
 - App Version: [e.g., 1.0.0]

**Additional context**
Add any other context about the problem.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

**Enhancement Template:**
```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions or features you've considered.

**Additional context**
Screenshots, mockups, or examples.
```

### Content Contributions

#### Types of Content Contributions

1. **Textbook Alignment Fixes**
   - Correcting content that doesn't match Maharashtra State Board textbook
   - Adding missing textbook-specific examples
   - Removing non-textbook content

2. **Question Improvements**
   - Fixing incorrect flashcard answers
   - Improving MCQ options for clarity
   - Adding more relevant questions

3. **Key Terms**
   - Adding definitions for important terms
   - Improving existing definitions
   - Ensuring definitions match textbook

4. **Video Content**
   - Creating chapter explanations
   - Recording concept videos
   - Improving video descriptions

### Pull Requests

Pull requests are welcome! Follow these steps:

1. Fork the repository
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

---

## 🛠️ Development Setup

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Local Development

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/7kpoliticalscience.git
   cd 7kpoliticalscience
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   App will be available at `http://localhost:9002`

4. **Build for Production** (test before submitting PR)
   ```bash
   npm run build
   ```

5. **Run Type Checking**
   ```bash
   npm run type-check
   ```

---

## 📚 Content Guidelines

### Maharashtra State Board Alignment

**CRITICAL**: All content MUST align with the official Maharashtra State Board HSC Political Science (Standard XII) textbook (First Edition 2020).

#### What to Include

✅ **DO include:**
- Content from textbook pages 14-58
- Textbook-specific examples and details
- Maharashtra State-specific content
- Exact dates, names, and mechanisms from textbook
- Concepts emphasized in the curriculum

❌ **DO NOT include:**
- Modern initiatives not in 2020 textbook (e.g., GST, Digital India, Make in India)
- Content from post-2020 developments
- Author names not emphasized in textbook
- Economic jargon not in student textbook
- Content from other chapters or subjects
- Wikipedia-sourced content without textbook verification

### Content Standards

#### Flashcards

Format:
```typescript
{
  id: 'fc-X-Y',  // X = chapter number, Y = card number
  question: 'What is [concept]?',
  answer: 'Brief, textbook-aligned answer (2-3 sentences max)'
}
```

**Guidelines:**
- Questions should be clear and specific
- Answers should be concise (50-100 words)
- Use textbook terminology
- Include page references in comments when possible

#### MCQs

Format:
```typescript
{
  id: 'mcq-X-Y',
  question: 'Question text',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 'Option B'
}
```

**Guidelines:**
- All 4 options should be plausible
- Avoid "All of the above" / "None of the above" unless appropriate
- Correct answer must be unambiguous
- Distractors should test understanding, not trick students
- Use textbook examples in questions

#### Key Terms

Format:
```typescript
{
  term: 'Term Name',
  definition: 'Textbook-aligned definition'
}
```

**Guidelines:**
- Use exact textbook definitions when available
- Keep definitions to 1-2 sentences
- Include context if term is ambiguous
- Use simple, student-friendly language

---

## 🔄 Pull Request Process

### Before Submitting

1. **Test Your Changes**
   - Run `npm run dev` and test manually
   - Run `npm run build` to ensure production build works
   - Check on mobile and desktop if UI changes

2. **Code Quality**
   - Ensure TypeScript compiles without errors
   - Follow existing code style
   - Add comments for complex logic
   - Update types if data structure changes

3. **Documentation**
   - Update README.md if adding features
   - Add JSDoc comments for new functions
   - Update CHANGELOG.md if applicable

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Content update
- [ ] Documentation update
- [ ] Performance improvement

## Checklist
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Changes tested locally
- [ ] Production build successful
- [ ] Content aligned with textbook (if applicable)

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Textbook Reference (for content changes)
Page numbers and textbook quotes supporting your changes
```

### Review Process

1. **Automated Checks**: GitHub Actions will run automatically
2. **Code Review**: Maintainer will review your code
3. **Testing**: Changes will be tested
4. **Textbook Verification**: Content changes will be verified against textbook
5. **Approval**: Once approved, your PR will be merged

---

## 🎨 Style Guides

### TypeScript Style Guide

- Use **TypeScript** for all new code
- Define types for all props and state
- Use `const` for immutable values
- Use descriptive variable names
- Follow existing naming conventions

Example:
```typescript
// Good
export type Flashcard = {
  id: string;
  question: string;
  answer: string;
};

const getFlashcardById = (id: string): Flashcard | undefined => {
  return flashcards.find(card => card.id === id);
};

// Bad
export type fc = {
  i: string;
  q: string;
  a: string;
};

var getCard = (x) => {
  return cards.find(c => c.i == x);
};
```

### React Component Style Guide

- Use **functional components** with hooks
- Keep components small and focused
- Use **descriptive prop names**
- Export types along with components
- Add JSDoc comments for complex components

Example:
```typescript
/**
 * Displays a flashcard with question and answer
 * @param flashcard - The flashcard data to display
 * @param onNext - Callback when user clicks next
 */
export function FlashcardDisplay({ 
  flashcard, 
  onNext 
}: FlashcardDisplayProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  
  return (
    // Component JSX
  );
}
```

### CSS/Tailwind Style Guide

- Use **Tailwind CSS** classes preferably
- Follow existing spacing patterns
- Use theme colors from `tailwind.config.ts`
- Ensure dark mode compatibility
- Test on mobile and desktop

### Git Commit Messages

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `content`: Content updates (flashcards, MCQs, etc.)

**Examples:**
```bash
feat(flashcards): add Chapter 2 flashcards

fix(video): resolve streaming issue on mobile

content(chapter-4): align MCQs with textbook pages 35-47

docs(readme): update installation instructions
```

---

## 📖 Content Verification Process

### For Content Contributors

When submitting content changes:

1. **Textbook Reference**
   - Always cite specific page numbers
   - Quote relevant textbook sections
   - Provide context for your changes

2. **Verification Checklist**
   - [ ] Content matches textbook pages 14-58
   - [ ] No post-2020 content included
   - [ ] Maharashtra State Board specific
   - [ ] Terminology matches textbook
   - [ ] Examples are from textbook
   - [ ] Dates and names verified

3. **Pull Request Evidence**
   - Include textbook page screenshots (if possible)
   - Reference official Maharashtra Board documents
   - Explain why previous content was incorrect

---

## 🧪 Testing Guidelines

### Manual Testing

Before submitting a PR, test:

1. **Navigation**
   - All chapter pages load
   - Sidebar navigation works
   - Breadcrumbs are correct

2. **Features**
   - Flashcards flip correctly
   - MCQs show correct answers
   - Videos play smoothly
   - Progress tracking updates

3. **Responsive Design**
   - Test on mobile (< 768px)
   - Test on tablet (768px - 1024px)
   - Test on desktop (> 1024px)

4. **Dark Mode**
   - Toggle between themes
   - Check all colors are readable
   - Verify icons display correctly

5. **Performance**
   - Page load times
   - Video loading
   - Smooth scrolling

---

## 🎯 Priority Areas

We especially welcome contributions in these areas:

1. **Content Quality**
   - Verifying textbook alignment
   - Improving question quality
   - Adding Maharashtra-specific examples

2. **Accessibility**
   - Adding ARIA labels
   - Keyboard navigation
   - Screen reader compatibility

3. **Performance**
   - Optimizing images
   - Reducing bundle size
   - Improving video streaming

4. **Features**
   - Spaced repetition for flashcards
   - Export/import progress
   - Offline mode improvements
   - Marathi language support

---

## 🌟 Recognition

Contributors will be recognized in:
- README.md Contributors section
- Release notes
- Special thanks in app (for significant contributions)

---

## 📞 Getting Help

Need help with your contribution?

- **Discord/Chat**: [Coming soon]
- **GitHub Discussions**: [Ask a question](https://github.com/kunu2009/7kpoliticalscience/discussions)
- **Email**: [Create an issue for support]

---

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to help Maharashtra HSC students succeed! 🎓**
