export const test4 = [
  {
    question:
      "A, B, and C can complete a work in 12, 15, and 20 days respectively. If they all work together for 5 days, how many days will C take to complete the remaining work?",
    options: ["10 days", "12 days", "15 days", "18 days"],
    correctAnswer: "15 days",
    explanation:
      "In 5 days, A does (5/12), B does (5/15), C does (5/20). Together, they complete = (5/12 + 5/15 + 5/20) = 1/3. Remaining work = 1 - 1/3 = 2/3. C alone will take (2/3) * 20 = 13.33 days.",
  },
  {
    question:
      "A can finish a job in 45 days, while B can do it in 60 days. If they work together for 15 days, how much work will be left for A to complete alone?",
    options: ["20 days", "30 days", "40 days", "50 days"],
    correctAnswer: "30 days",
    explanation:
      "In 15 days, A completes (15/45) = 1/3 and B completes (15/60) = 1/4. Together, they complete = (1/3 + 1/4) = 7/12. Remaining work = 1 - 7/12 = 5/12. A alone will take (5/12) * 45 = 18.75 days.",
  },
  {
    question:
      "A and B can complete a task in 30 days. If A works for 10 days, B for 5 days, and then A leaves, how long will it take for B to finish the work?",
    options: ["10 days", "12 days", "15 days", "20 days"],
    correctAnswer: "20 days",
    explanation:
      "In 10 days, A completes (10/30) = 1/3. In 5 days, B completes (5/30) = 1/6. Together, they complete = (1/3 + 1/6) = 1/2. Remaining work = 1 - 1/2 = 1/2. B alone will take (1/2) * 30 = 15 days.",
  },
  {
    question:
      "If A can do a piece of work in 12 days, B can do it in 18 days, and C can do it in 36 days, how long will it take them to finish the work together?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    correctAnswer: "4.5 days",
    explanation:
      "A's rate = 1/12, B's rate = 1/18, C's rate = 1/36. Combined rate = (1/12 + 1/18 + 1/36) = 1/6. They will finish the work together in 6 days.",
  },
  {
    question:
      "A can do a work in 16 days, while B can do it in 24 days. If A works alone for 8 days and then B joins him, how long will it take them to finish the remaining work together?",
    options: ["3 days", "4 days", "5 days", "6 days"],
    correctAnswer: "4 days",
    explanation:
      "In 8 days, A completes (8/16) = 1/2 of the work. Remaining work = 1 - 1/2 = 1/2. Combined rate of A and B = (1/16 + 1/24) = 1/9. They will finish the remaining work in (1/2) / (1/9) = 4.5 days.",
  },
  {
    question:
      "A and B can complete a task in 45 days. If A alone takes 60 days to finish it, how long will B take to complete it alone?",
    options: ["70 days", "75 days", "80 days", "90 days"],
    correctAnswer: "135 days",
    explanation:
      "A's rate = 1/60. Combined rate = 1/45, thus B's rate = (1/45 - 1/60) = 1/180. B can finish the work alone in 180 days.",
  },
  {
    question:
      "A, B, and C can do a work in 10, 15, and 30 days respectively. If they work together for 2 days, how much work is left?",
    options: ["1/6", "1/5", "1/3", "1/4"],
    correctAnswer: "7/10",
    explanation:
      "In 2 days, A completes (2/10), B completes (2/15), and C completes (2/30). Total work done = (1/5 + 2/15 + 1/15) = 1/3. Remaining work = 1 - 1/3 = 2/3.",
  },
  {
    question:
      "A can finish a job in 8 days, and B can do it in 12 days. If they both work together for 4 days, how long will it take A to finish the remaining work?",
    options: ["2 days", "3 days", "4 days", "5 days"],
    correctAnswer: "5 days",
    explanation:
      "In 4 days, A completes (4/8) = 1/2, and B completes (4/12) = 1/3. Together, they complete = (1/2 + 1/3) = 5/6. Remaining work = 1 - 5/6 = 1/6. A alone will take (1/6) * 8 = 1.33 days.",
  },
  {
    question:
      "A is 1.5 times more efficient than B. If they complete a work in 10 days together, how long will A take to finish the work alone?",
    options: ["8 days", "12 days", "15 days", "20 days"],
    correctAnswer: "8 days",
    explanation:
      "Let B's efficiency be x. Then A's efficiency = 1.5x. Combined efficiency = 2.5x = 1/10, so x = 1/25. Thus, A takes (1/1.5x) = 8 days.",
  },
];
