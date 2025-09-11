
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
    flashcards: [
        { id: 'fc-1-1', question: 'What were the main consequences of the disintegration of the Soviet Union?', answer: 'The end of the Cold War, the emergence of a unipolar world led by the US, the independence of 15 new countries, and a shift in international power dynamics.' },
        { id: 'fc-1-2', question: 'What is a unipolar world order?', answer: 'An international system in which one state exercises most of the cultural, economic, and military influence. After 1991, the United States was considered the sole superpower.' },
        { id: 'fc-1-3', question: 'What was the "Third Way" in post-Cold War politics?', answer: 'A political position embracing a varied blend of right-wing economic and left-wing social policies, adopted by leaders like Tony Blair in the UK and Bill Clinton in the US during the 1990s.' },
        { id: 'fc-1-4', question: 'What was the significance of the first Gulf War (1990-1991)?', answer: 'It was the first major international conflict after the Cold War, where a US-led coalition repelled the Iraqi invasion of Kuwait, reinforcing the US\'s role as a global leader.' },
        { id: 'fc-1-5', question: 'How did the role of NATO change after 1991?', answer: 'NATO transformed from a purely defensive alliance against the Soviet Union to an organization involved in crisis management and peacekeeping operations, expanding its membership to include former Warsaw Pact countries.' },
    ],
    mcqs: [
        { id: 'mcq-1-1', question: 'The dissolution of the Soviet Union officially occurred in which year?', options: ['1989', '1990', '1991', '1992'], correctAnswer: '1991' },
        { id: 'mcq-1-2', question: 'Which of these is NOT a country that emerged from the former Yugoslavia?', options: ['Serbia', 'Croatia', 'Slovakia', 'Bosnia and Herzegovina'], correctAnswer: 'Slovakia' },
        { id: 'mcq-1-3', question: 'The Maastricht Treaty, signed in 1992, led to the creation of what entity?', options: ['The United Nations', 'The European Union', 'NATO', 'The World Trade Organization'], correctAnswer: 'The European Union' },
        { id: 'mcq-1-4', question: 'The term "soft power" was coined by which political scientist?', options: ['Francis Fukuyama', 'Samuel Huntington', 'Joseph Nye', 'John Mearsheimer'], correctAnswer: 'Joseph Nye' },
        { id: 'mcq-1-5', question: 'The 9/11 terrorist attacks led to the US-led invasion of which country?', options: ['Iraq', 'Iran', 'Syria', 'Afghanistan'], correctAnswer: 'Afghanistan' },
    ],
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
    flashcards: [
        { id: 'fc-2-1', question: 'What are the three main dimensions of globalization?', answer: 'Economic globalization (flow of capital/goods), Political globalization (influence of international organizations), and Cultural globalization (spread of ideas/values).' },
        { id: 'fc-2-2', question: 'What is a Transnational Corporation (TNC)?', answer: 'A company that operates in more than one country. TNCs are key drivers of economic globalization.' },
        { id: 'fc-2-3', question: 'What are some criticisms of globalization?', answer: 'It can lead to increased inequality, erosion of local cultures, environmental degradation, and a "race to the bottom" in labor standards.' },
        { id: 'fc-2-4', question: 'What is the role of the World Trade Organization (WTO)?', answer: 'The WTO is an intergovernmental organization that regulates and facilitates international trade. It sets the rules of trade between nations.' },
        { id: 'fc-2-5', question: 'How has technology fueled globalization?', answer: 'The internet, mobile phones, and containerization have drastically reduced the costs of communication and transportation, making global interaction easier and faster.' },
    ],
    mcqs: [
        { id: 'mcq-2-1', question: 'Which of the following is an example of cultural globalization?', options: ['The establishment of the World Bank', 'The spread of McDonald\'s restaurants worldwide', 'A free trade agreement between two countries', 'A United Nations resolution'], correctAnswer: 'The spread of McDonald\'s restaurants worldwide' },
        { id: 'mcq-2-2', question: 'The "Bretton Woods" institutions, which are pillars of economic globalization, include:', options: ['The IMF and World Bank', 'NATO and the Warsaw Pact', 'The EU and ASEAN', 'Amnesty International and Greenpeace'], correctAnswer: 'The IMF and World Bank' },
        { id: 'mcq-2-3', question: 'The term "global village," describing a world made smaller by technology, was popularized by:', options: ['Karl Marx', 'Marshall McLuhan', 'Adam Smith', 'Mao Zedong'], correctAnswer: 'Marshall McLuhan' },
        { id: 'mcq-2-4', question: 'Anti-globalization protests first gained major international attention during a meeting of which organization in Seattle in 1999?', options: ['G20', 'UN', 'IMF', 'WTO'], correctAnswer: 'WTO' },
        { id: 'mcq-2-5', question: 'What is a primary characteristic of economic globalization?', options: ['Increased tariff barriers', 'Reduced international trade', 'Integration of financial markets', 'Strengthening of national currencies'], correctAnswer: 'Integration of financial markets' },
    ],
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
    flashcards: [
        { id: 'fc-3-1', question: 'What is the "Responsibility to Protect" (R2P) principle?', answer: 'A global political commitment endorsed by all UN member states in 2005 to prevent genocide, war crimes, ethnic cleansing, and crimes against humanity.' },
        { id: 'fc-3-2', question: 'What are the three pillars of R2P?', answer: '1. The state has the primary responsibility to protect its population. 2. The international community has a responsibility to assist states. 3. The international community has a responsibility to intervene if a state fails to protect its population.' },
        { id: 'fc-3-3', question: 'What is an Internally Displaced Person (IDP)?', answer: 'Someone who is forced to flee their home but remains within their country\'s borders. They are distinct from refugees, who have crossed an international border.' },
        { id: 'fc-3-4', question: 'Name a major humanitarian crisis of the 1990s.', answer: 'The Rwandan Genocide (1994), where an estimated 800,000 people were killed, is a prominent example.' },
        { id: 'fc-3-5', question: 'What is the role of the UNHCR?', answer: 'The United Nations High Commissioner for Refugees is a UN agency with the mandate to protect and support refugees at the request of a government or the UN itself.' },
    ],
    mcqs: [
        { id: 'mcq-3-1', question: 'The principle of R2P was notably applied in the international intervention in which country in 2011?', options: ['Syria', 'Iraq', 'Libya', 'Somalia'], correctAnswer: 'Libya' },
        { id: 'mcq-3-2', question: 'Which of the following is an example of a non-governmental organization (NGO) focused on humanitarian aid?', options: ['World Bank', 'Doctors Without Borders (MSF)', 'International Monetary Fund (IMF)', 'World Trade Organization (WTO)'], correctAnswer: 'Doctors Without Borders (MSF)' },
        { id: 'mcq-3-3', question: 'The term "ethnic cleansing" gained prominence during the conflict in which region in the 1990s?', options: ['The Balkans (former Yugoslavia)', 'The Middle East', 'Central Africa', 'Southeast Asia'], correctAnswer: 'The Balkans (former Yugoslavia)' },
        { id: 'mcq-3-4', question: 'What global goals were established by the United Nations in 2015 to address poverty, inequality, and climate change?', options: ['Millennium Development Goals (MDGs)', 'Sustainable Development Goals (SDGs)', 'The Earth Charter', 'The Kyoto Protocol'], correctAnswer: 'Sustainable Development Goals (SDGs)' },
        { id: 'mcq-3-5', question: 'Climate change is increasingly seen as a humanitarian issue because it can cause:', options: ['Displacement of populations', 'Food and water scarcity', 'Increased frequency of natural disasters', 'All of the above'], correctAnswer: 'All of the above' },
    ],
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
    flashcards: [
        { id: 'fc-4-1', question: 'What is Communalism in the Indian context?', answer: 'It is an ideology that promotes the interests of a particular religious group, often in opposition to the interests of other groups, posing a threat to national unity.' },
        { id: 'fc-4-2', question: 'What is the Naxalite-Maoist insurgency?', answer: 'A left-wing extremist movement primarily in rural and tribal areas of central and eastern India. They claim to be fighting for the rights of the poor and marginalized.' },
        { id: 'fc-4-3', question: 'Define Regionalism in India.', answer: 'It is a political ideology that focuses on the interests of a particular region or state over the interests of the nation as a whole. It can manifest as demands for more autonomy or separate statehood.' },
        { id: 'fc-4-4', question: 'What is Article 370 of the Indian Constitution, which was revoked in 2019?', answer: 'It granted special autonomous status to the state of Jammu and Kashmir. Its abrogation integrated the region more closely with the rest of India.' },
        { id: 'fc-4-5', question: 'What are some key challenges to India\'s national integration?', answer: 'Casteism, communalism, regionalism, linguistic diversity, and economic inequality are major challenges to maintaining unity in a highly diverse country.' },
    ],
    mcqs: [
        { id: 'mcq-4-1', question: 'The Naxalite insurgency has its ideological roots in:', options: ['The Russian Revolution', 'The Chinese Revolution led by Mao Zedong', 'The Cuban Revolution', 'The French Revolution'], correctAnswer: 'The Chinese Revolution led by Mao Zedong' },
        { id: 'mcq-4-2', question: 'Which commission was established to study Centre-State relations in India?', options: ['Mandal Commission', 'Sarkaria Commission', 'Nanavati Commission', 'Liberhan Commission'], correctAnswer: 'Sarkaria Commission' },
        { id: 'mcq-4-3', question: 'The term "Red Corridor" is often used to describe the region in India affected by:', options: ['Communal riots', 'Naxalite insurgency', 'Cross-border terrorism', 'Caste conflicts'], correctAnswer: 'Naxalite insurgency' },
        { id: 'mcq-4-4', question: 'The demand for a separate state of "Bodoland" is an example of regionalism in which Indian state?', options: ['Nagaland', 'Mizoram', 'Assam', 'Manipur'], correctAnswer: 'Assam' },
        { id: 'mcq-4-5', question: 'The primary basis for the reorganization of states in India in 1956 was:', options: ['Religion', 'Geography', 'Language', 'Economic development'], correctAnswer: 'Language' },
    ],
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
    flashcards: [
        { id: 'fc-5-1', question: 'What is "Good Governance"?', answer: 'It refers to the process of decision-making and implementation that is participatory, consensus-oriented, accountable, transparent, responsive, effective, equitable, and follows the rule of law.' },
        { id: 'fc-5-2', question: 'What is the main objective of the Right to Information (RTI) Act, 2005?', answer: 'To empower citizens to question the government and its working, thereby promoting transparency and accountability in the working of every public authority.' },
        { id: 'fc-5-3', question: 'What is E-Governance?', answer: 'The use of information and communication technology (ICT) to provide and improve government services, transactions, and interactions with citizens, businesses, and other arms of government.' },
        { id:- 'fc-5-4', question: 'What is the role of the Lokpal and Lokayuktas?', answer: 'They are anti-corruption ombudsman bodies in India. The Lokpal has jurisdiction over the central government, and Lokayuktas function at the state level.' },
        { id: 'fc-5-5', question: 'Give an example of a successful e-governance project in India.', answer: 'The Passport Seva Project, which streamlined the process of obtaining a passport, is a widely cited example of successful e-governance.' },
    ],
    mcqs: [
        { id: 'mcq-5-1', question: 'The Right to Information (RTI) Act was passed by the Indian Parliament in which year?', options: ['2001', '2005', '2009', '2013'], correctAnswer: '2005' },
        { id: 'mcq-5-2', question: 'Which of the following is a key pillar of good governance?', options: ['Secrecy', 'Autocracy', 'Transparency', 'Nepotism'], correctAnswer: 'Transparency' },
        { id: 'mcq-5-3', question: 'The concept of "Minimum Government, Maximum Governance" is associated with:', options: ['Improving bureaucratic efficiency and reducing red tape', 'Increasing the size of the government', 'Nationalizing private industries', 'Reducing the powers of the judiciary'], correctAnswer: 'Improving bureaucratic efficiency and reducing red tape' },
        { id: 'mcq-5-4', question: 'MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) is an example of a rights-based approach to what?', options: ['Education', 'Information', 'Health', 'Livelihood and social security'], correctAnswer: 'Livelihood and social security' },
        { id: 'mcq-5-5', question: 'The Aadhaar card, which provides a unique identity to residents, is a key component of which government initiative?', options: ['Digital India', 'Make in India', 'Swachh Bharat Abhiyan', 'Ayushman Bharat'], correctAnswer: 'Digital India' },
    ],
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
    flashcards: [
        { id: 'fc-6-1', question: 'What was the core principle of India\'s foreign policy during the Cold War?', answer: 'Non-Alignment, which meant not formally aligning with or against any major power bloc (USA or USSR).' },
        { id: 'fc-6-2', question: 'What is the "Act East Policy"?', answer: 'An evolution of the "Look East Policy," it aims to establish deeper and more strategic economic and security cooperation with countries in Southeast and East Asia.' },
        { id: 'fc-6-3', question: 'What is BRICS?', answer: 'An acronym for a group of five major emerging economies: Brazil, Russia, India, China, and South Africa. They seek to enhance their cooperation and influence on the world stage.' },
        { id: 'fc-6-4', question: 'What is India\'s "Neighborhood First" policy?', answer: 'A foreign policy priority that focuses on building friendly and mutually beneficial relationships with its South Asian neighbors.' },
        { id: 'fc-6-5', question: 'What are the main points of contention in the India-China relationship?', answer: 'Border disputes (especially in Ladakh and Arunachal Pradesh), China\'s strategic partnership with Pakistan, and growing economic and regional competition.' },
    ],
    mcqs: [
        { id: 'mcq-6-1', question: 'India conducted its first nuclear test, code-named "Smiling Buddha," in which year?', options: ['1962', '1971', '1974', '1998'], correctAnswer: '1974' },
        { id: 'mcq-6-2', question: 'Which of the following organizations is India NOT a permanent member of?', options: ['G20', 'BRICS', 'Shanghai Cooperation Organisation (SCO)', 'UN Security Council'], correctAnswer: 'UN Security Council' },
        { id: 'mcq-6-3', question: 'The "Panchsheel" or the Five Principles of Peaceful Co-existence were first formally enunciated in an agreement between India and which country?', options: ['Pakistan', 'China', 'Soviet Union', 'USA'], correctAnswer: 'China' },
        { id: 'mcq-6-4', question: 'India\'s "Look East Policy" was initiated in the early 1990s by which Prime Minister?', options: ['Atal Bihari Vajpayee', 'P.V. Narasimha Rao', 'Indira Gandhi', 'Manmohan Singh'], correctAnswer: 'P.V. Narasimha Rao' },
        { id: 'mcq-6-5', question: 'The Quadrilateral Security Dialogue (Quad) is a strategic forum comprising India, the United States, Japan, and which other country?', options: ['United Kingdom', 'France', 'Australia', 'South Korea'], correctAnswer: 'Australia' },
    ],
    reels: [
      { id: 'reel-6-1', title: 'Act East Policy', content: 'India\'s pivot towards Southeast and East Asia.', imageId: 'reel-6-1' },
      { id: 'reel-6-2', title: 'India in BRICS', content: 'India\'s role in the bloc of emerging economies.', imageId: 'reel-6-2' },
    ],
  },
];
