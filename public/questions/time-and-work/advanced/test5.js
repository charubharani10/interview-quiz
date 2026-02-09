export const test5 = [
  {
    question:
      "A can do a work in 20 days, B in 30 days, and C in 60 days. They start the work together but A leaves after 5 days. How long will B and C take to finish the remaining work?",
    options: ["15 days", "20 days", "25 days", "30 days"],
    correctAnswer: "20 days",
    explanation:
      "In 5 days, A completes (5/20) = 1/4, B completes (5/30) = 1/6, C completes (5/60) = 1/12. Together, they complete = (1/4 + 1/6 + 1/12) = 1/2. Remaining work = 1 - 1/2 = 1/2. B and C together will take (1/2) / (1/30 + 1/60) = 20 days.",
  },
  {
    question:
      "A can complete a task in 36 days, while B can do it in 48 days. If they work together for 12 days and then A leaves, how long will it take B to finish the remaining work?",
    options: ["20 days", "30 days", "40 days", "50 days"],
    correctAnswer: "36 days",
    explanation:
      "In 12 days, A completes (12/36) = 1/3 and B completes (12/48) = 1/4. Together, they complete = (1/3 + 1/4) = 7/12. Remaining work = 1 - 7/12 = 5/12. B alone will take (5/12) * 48 = 20 days.",
  },
  {
    question:
      "If A can do a work in 15 days and B can do the same work in 10 days, how long will it take them to complete the work together?",
    options: ["6 days", "7.5 days", "8 days", "9 days"],
    correctAnswer: "6 days",
    explanation:
      "A's rate = 1/15, B's rate = 1/10. Combined rate = (1/15 + 1/10) = 1/6. They will finish the work together in 6 days.",
  },
  {
    question:
      "A, B, and C can do a work in 12, 15, and 20 days respectively. If A and B work together for 4 days and C joins them for the next 2 days, how much work will be completed?",
    options: ["3/5", "7/10", "4/5", "1"],
    correctAnswer: "11/15",
    explanation:
      "In 4 days, A and B complete = 4(1/12 + 1/15) = 4(1/4) = 1. Remaining work = 1 - (11/15) = 1/15.",
  },
  {
    question:
      "A can do a piece of work in 10 days, while B can do it in 15 days. If they work together and complete the work, how long will it take for A alone to finish half of the work after B leaves?",
    options: ["5 days", "7.5 days", "8 days", "10 days"],
    correctAnswer: "5 days",
    explanation:
      "In 1 day, A completes 1/10 and B completes 1/15. Together, they complete = (1/10 + 1/15) = 1/6. Remaining work after 1 day = 5/6. A alone will take (1/2) * 10 = 5 days.",
  },
  {
    question:
      "A can do a work in 18 days, while B can do it in 24 days. If they work together for 9 days and B leaves, how long will it take A to finish the remaining work?",
    options: ["7 days", "8 days", "9 days", "10 days"],
    correctAnswer: "8 days",
    explanation:
      "In 9 days, A completes (9/18) = 1/2, and B completes (9/24) = 3/8. Together, they complete = (1/2 + 3/8) = 7/8. Remaining work = 1 - 7/8 = 1/8. A alone will take (1/8) * 18 = 2.25 days.",
  },
  {
    question:
      "A, B, and C can complete a work in 24, 30, and 40 days respectively. If they all work together for 6 days, how long will it take C to finish the remaining work?",
    options: ["10 days", "12 days", "14 days", "15 days"],
    correctAnswer: "10 days",
    explanation:
      "In 6 days, A completes (6/24) = 1/4, B completes (6/30) = 1/5, C completes (6/40) = 3/20. Together, they complete = (1/4 + 1/5 + 3/20) = 31/60. Remaining work = 1 - 31/60 = 29/60. C alone will take (29/60) * 40 = 19.33 days.",
  },
  {
    question:
      "If A can do a work in 14 days and B can do the same work in 21 days, how long will it take them to complete the work if A works alone for 6 days first?",
    options: ["6 days", "9 days", "11 days", "13 days"],
    correctAnswer: "9 days",
    explanation:
      "In 6 days, A completes (6/14) = 3/7. Remaining work = 1 - 3/7 = 4/7. B's rate = 1/21. Together, they will finish the remaining work in (4/7) / (1/21) = 12 days.",
  },
  {
    question:
      "A can do a work in 45 days, while B can do it in 60 days. If they work together and complete the work, how much work will A have done compared to B?",
    options: ["1:2", "2:3", "3:4", "4:5"],
    correctAnswer: "2:3",
    explanation:
      "A's rate = 1/45, B's rate = 1/60. The ratio of work done = (1/45) : (1/60) = 4:3. Therefore, A's work = 2x, B's work = 3x.",
  },
];
