
export type Flashcard = {
  id: string;
  question: string;
  answer: string;
};

export type MCQ = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Reel = {
  id: string;
  title: string;
  content: string;
  imageId: string;
};

export type Chapter = {
  id: string;
  title: string;
  content: string;
  summary: string;
  keyTerms: { term: string }[];
  flashcards: Flashcard[];
  mcqs: MCQ[];
  reels: Reel[];
};

const generateItems = <T>(count: number, generator: (index: number) => Omit<T, 'id'>): T[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    ...generator(i),
  } as T));
};

export const syllabus: Chapter[] = [
  {
    id: 'the-world-since-1991',
    title: 'The World since 1991',
    content: `
The world has changed dramatically since 1991, marked by the end of the Cold War and the dissolution of the Soviet Union. This era saw the rise of the United States as the sole superpower, leading to a unipolar world order. Key events include the Gulf War, the rise of the internet, and the expansion of NATO.
Concepts like {globalization} have become central, describing the increased interconnectedness of societies.
    `,
    summary: 'An overview of the major political, economic, and social transformations that have shaped the world since the end of the Cold War in 1991.',
    keyTerms: [{ term: 'globalization' }],
    flashcards: generateItems<Flashcard>(10, i => ({
      question: `What was a key event of the 1990s? (${i + 1})`,
      answer: `Explanation of a key event from the 1990s.`,
    })),
    mcqs: generateItems<MCQ>(10, i => ({
      question: `Which treaty was signed in the post-1991 era? (${i + 1})`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A',
    })),
    reels: [
      { id: 'reel-1-1', title: 'End of Cold War', content: 'The collapse of the Soviet Union reshaped global politics.', imageId: 'reel-1-1' },
      { id: 'reel-1-2', title: 'Rise of Internet', content: 'Digital revolution connecting the world.', imageId: 'reel-1-2' },
    ],
  },
  {
    id: 'globalisation',
    title: 'Key Concepts and Issues since 1991: Globalisation',
    content: `
{Globalisation} refers to the process of interaction and integration among people, companies, and governments worldwide. It has been accelerated by advances in transportation and communication technology. It has economic, political, and cultural manifestations. Economic globalization involves the integration of international financial markets and the growth of transnational corporations.
    `,
    summary: 'This chapter explores the multifaceted concept of globalization, examining its economic, political, and cultural impacts on the modern world.',
    keyTerms: [{ term: 'Globalisation' }],
    flashcards: generateItems<Flashcard>(10, i => ({
      question: `What is an aspect of economic globalization? (${i + 1})`,
      answer: `Detail about an aspect of economic globalization.`,
    })),
    mcqs: generateItems<MCQ>(10, i => ({
      question: `What organization is associated with globalization? (${i + 1})`,
      options: ['WTO', 'NATO', 'ASEAN', 'NAFTA'],
      correctAnswer: 'WTO',
    })),
    reels: [
      { id: 'reel-2-1', title: 'Economic Integration', content: 'How global markets are more connected than ever.', imageId: 'reel-2-1' },
      { id: 'reel-2-2', title: 'Cultural Exchange', content: 'The spread of ideas, customs, and media across borders.', imageId: 'reel-2-2' },
    ],
  },
  {
    id: 'humanitarian-issues',
    title: 'Key Concepts and Issues since 1991: Humanitarian Issues',
    content: `
The post-Cold War era has seen numerous {humanitarian_crises}, from genocides to natural disasters. The international community has grappled with the principle of {Responsibility_to_Protect} (R2P), which holds that states have a responsibility to protect their populations from mass atrocities. The role of non-governmental organizations (NGOs) has also grown significantly.
    `,
    summary: 'Examines major humanitarian challenges since 1991, including conflicts, refugees, and the international response to crises.',
    keyTerms: [{ term: 'humanitarian crises' }, { term: 'Responsibility to Protect' }],
    flashcards: generateItems<Flashcard>(10, i => ({
      question: `What is a major humanitarian issue? (${i + 1})`,
      answer: `Explanation of a major humanitarian issue.`,
    })),
    mcqs: generateItems<MCQ>(10, i => ({
      question: `Which UN agency deals with refugees? (${i + 1})`,
      options: ['UNHCR', 'UNICEF', 'WHO', 'WFP'],
      correctAnswer: 'UNHCR',
    })),
    reels: [
      { id: 'reel-3-1', title: 'Refugee Crisis', content: 'Understanding the causes and impacts of global displacement.', imageId: 'reel-3-1' },
      { id: 'reel-3-2', title: 'R2P', content: 'The principle of Responsibility to Protect explained.', imageId: 'reel-3-2' },
    ],
  },
  {
    id: 'india-challenges',
    title: 'Contemporary India: Challenges to Peace, Stability, and National Integration',
    content: `
Contemporary India faces numerous challenges. These include regionalism, communalism, and terrorism. The issue of {Kashmir} remains a significant source of conflict with Pakistan. Internally, Naxalite-Maoist insurgency affects several states. The challenge of maintaining national integration in a diverse country is a constant theme in Indian politics.
    `,
    summary: 'An analysis of the internal and external challenges facing India, including regional conflicts, security threats, and issues of national unity.',
    keyTerms: [{ term: 'Kashmir' }],
    flashcards: generateItems<Flashcard>(10, i => ({
      question: `What is a challenge to Indian national integration? (${i + 1})`,
      answer: `Details on a specific challenge.`,
    })),
    mcqs: generateItems<MCQ>(10, i => ({
      question: `Which of these is an internal security challenge for India? (${i + 1})`,
      options: ['Naxalism', 'Cyber warfare', 'Piracy', 'None of the above'],
      correctAnswer: 'Naxalism',
    })),
    reels: [
      { id: 'reel-4-1', title: 'Kashmir Conflict', content: 'A brief overview of the long-standing issue.', imageId: 'reel-4-1' },
      { id: 'reel-4-2', title: 'National Integration', content: 'The challenges of unity in a diverse nation.', imageId: 'reel-4-2' },
    ],
  },
  {
    id: 'india-governance',
    title: 'Contemporary India: Good Governance',
    content: `
{Good_governance} in India is a major focus. Initiatives like the Right to Information (RTI) Act have aimed to increase transparency and accountability. E-governance projects seek to improve public service delivery. However, corruption remains a significant challenge, and civil society organizations play a crucial role in advocating for reforms.
    `,
    summary: 'This chapter covers the concept of good governance in India, including key reforms, challenges like corruption, and the role of civil society.',
    keyTerms: [{ term: 'Good governance' }],
    flashcards: generateItems<Flashcard>(10, i => ({
      question: `What is an example of a good governance initiative in India? (${i + 1})`,
      answer: `Explanation of an initiative.`,
    })),
    mcqs: generateItems<MCQ>(10, i => ({
      question: `The RTI Act is related to what? (${i + 1})`,
      options: ['Transparency', 'Education', 'Health', 'Defense'],
      correctAnswer: 'Transparency',
    })),
    reels: [
      { id: 'reel-5-1', title: 'Right to Information', content: 'Empowering citizens to demand accountability.', imageId: 'reel-5-1' },
      { id: 'reel-5-2', title: 'E-Governance', content: 'Using technology to deliver public services.', imageId: 'reel-5-2' },
    ],
  },
  {
    id: 'india-and-the-world',
    title: 'India and the World',
    content: `
India's foreign policy has evolved since the Cold War. The {Look_East_Policy} (now Act East) signifies a strategic shift towards Southeast Asia. India has also deepened its relationship with the United States and plays a key role in multilateral forums like BRICS and the G20. Its relationship with China and other neighbors remains a central foreign policy challenge.
    `,
    summary: "An exploration of India's foreign policy, its strategic partnerships, and its role in global and regional politics.",
    keyTerms: [{ term: 'Look East Policy' }],
    flashcards: generateItems<Flashcard>(10, i => ({
      question: `What is a key feature of India's foreign policy? (${i + 1})`,
      answer: `Detail about India's foreign policy.`,
    })),
    mcqs: generateItems<MCQ>(10, i => ({
      question: `BRICS includes which countries? (${i + 1})`,
      options: ['Brazil, Russia, India, China, South Africa', 'Britain, Russia, India, Canada, Spain', 'None of the above', 'All of the above'],
      correctAnswer: 'Brazil, Russia, India, China, South Africa',
    })),
    reels: [
      { id: 'reel-6-1', title: 'Act East Policy', content: 'India\'s pivot towards Southeast and East Asia.', imageId: 'reel-6-1' },
      { id: 'reel-6-2', title: 'India in BRICS', content: 'India\'s role in the bloc of emerging economies.', imageId: 'reel-6-2' },
    ],
  },
];
