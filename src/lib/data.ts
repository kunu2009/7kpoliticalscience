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
    id: 'introduction-to-political-science',
    title: 'Intro to Political Science',
    content: `
Political science is the systematic study of governance by the application of empirical and generally scientific methods of analysis. It is traditionally divided into distinct sub-fields, including comparative politics, international relations, political theory, public administration, public policy, and political methodology.

At its core, political science examines the state and its organs and institutions. A key concept is {sovereignty}, which refers to the full right and power of a governing body over itself, without any interference from outside sources or bodies. Another fundamental principle is the {separation_of_powers}, an idea most famously elaborated by Montesquieu, which divides governmental authority into three branches: legislative, executive, and judicial. This structure is designed to prevent the concentration of power and is complemented by a system of {checks_and_balances}.

The study also delves into {federalism}, a system of government in which entities such as states or provinces share power with a national government. This contrasts with a unitary system, where the central government holds the majority of power. Understanding these structures is crucial to analyzing how different countries are governed.
    `,
    summary: 'This chapter introduces the foundational concepts of political science, including its sub-fields, the nature of the state, and core principles like sovereignty, separation of powers, and federalism. It sets the stage for understanding different systems of governance.',
    keyTerms: [
      { term: 'sovereignty' },
      { term: 'separation of powers' },
      { term: 'checks and balances' },
      { term: 'federalism' },
    ],
    flashcards: generateItems<Flashcard>(30, i => ({
      question: `What is the definition of political concept ${i + 1}?`,
      answer: `This is the detailed explanation for political concept ${i + 1}.`,
    })),
    mcqs: generateItems<MCQ>(30, i => ({
      question: `Which of the following best describes principle ${i + 1}?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option B',
    })),
    reels: [
      {
        id: 'reel-1-1',
        title: 'Separation of Powers',
        content: 'Dividing government into legislative, executive, and judicial branches to prevent tyranny.',
        imageId: 'reel-1-1',
      },
      {
        id: 'reel-1-2',
        title: 'Checks and Balances',
        content: 'Each branch has powers to limit or "check" the other two, creating a balance of power.',
        imageId: 'reel-1-2',
      },
      {
        id: 'reel-1-3',
        title: 'Federalism',
        content: 'A system where power is divided between a central government and regional entities.',
        imageId: 'reel-1-3',
      },
    ],
  },
  {
    id: 'political-behavior',
    title: 'Political Behavior',
    content: `
Political behavior is the study of how individuals think, feel, and act in the political sphere. A central theme is {political_ideology}, a coherent set of ethical ideals, principles, and doctrines that explains how society should work and offers a political and cultural blueprint for a certain social order. Major ideologies include liberalism, conservatism, and socialism.

Understanding {public_opinion} is vital for politicians and scholars alike. It represents the collective attitudes of citizens on a given issue or leader. Public opinion is shaped through a lifelong process known as {political_socialization}, where individuals develop their political attitudes, values, and beliefs. Key agents of socialization include family, schools, media, and peer groups.

Electoral systems and voting behavior are also critical areas. Different systems, such as plurality, majority, or proportional representation, can have profound impacts on political outcomes and party systems.
    `,
    summary: 'This chapter explores the factors that influence individual political actions and beliefs. It covers political ideology, the formation and measurement of public opinion, the process of political socialization, and how electoral systems affect voting behavior.',
    keyTerms: [
      { term: 'political ideology' },
      { term: 'public opinion' },
      { term: 'political socialization' },
    ],
    flashcards: generateItems<Flashcard>(30, i => ({
      question: `How does political behavior concept ${i + 1} manifest?`,
      answer: `Here is the analysis of how political behavior concept ${i + 1} is observed in society.`,
    })),
    mcqs: generateItems<MCQ>(30, i => ({
      question: `What is the primary driver of behavior ${i + 1}?`,
      options: ['Economic factors', 'Social factors', 'Psychological factors', 'All of the above'],
      correctAnswer: 'All of the above',
    })),
    reels: [
      {
        id: 'reel-2-1',
        title: 'Political Ideology',
        content: 'Your guide to the beliefs and ideas that shape political systems and policies.',
        imageId: 'reel-2-1',
      },
      {
        id: 'reel-2-2',
        title: 'Public Opinion',
        content: 'The collective voice of the people. How is it measured and what does it influence?',
        imageId: 'reel-2-2',
      },
      {
        id: 'reel-2-3',
        title: 'Political Socialization',
        content: 'The lifelong process of acquiring political beliefs from family, school, and media.',
        imageId: 'reel-2-3',
      },
    ],
  },
];
