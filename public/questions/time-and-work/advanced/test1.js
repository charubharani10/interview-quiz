export const test1 = [
  {
    question:
      "A can complete a work in 20 days and B can do the same work in 30 days. If they start working together and B leaves after 5 days, how long will A take to finish the remaining work?",
    options: ["10 days", "15 days", "20 days", "25 days"],
    correctAnswer: "15 days",
    explanation:
      "In 5 days, A does (5/20) = 1/4 and B does (5/30) = 1/6. Together, they complete (1/4 + 1/6) = 5/12. Remaining work = 1 - 5/12 = 7/12. A alone will take (7/12) * 20 = 15 days.",
  },
  {
    question:
      "If A can do a piece of work in 12 days and B can do it in 16 days, and they both work together for 4 days, how many more days will A need to finish the work alone?",
    options: ["5 days", "6 days", "8 days", "9 days"],
    correctAnswer: "6 days",
    explanation:
      "In 4 days, A does (4/12) = 1/3 and B does (4/16) = 1/4. Together, they complete (1/3 + 1/4) = 7/12. Remaining work = 1 - 7/12 = 5/12. A alone will take (5/12) * 12 = 5 days.",
  },
  {
    question:
      "A and B can do a work in 10 days and 15 days respectively. If they work together for 5 days and then A leaves, how long will B take to complete the remaining work?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    correctAnswer: "10 days",
    explanation:
      "In 5 days, A does (5/10) = 1/2 and B does (5/15) = 1/3. Together, they complete (1/2 + 1/3) = 5/6. Remaining work = 1 - 5/6 = 1/6. B will take (1/6) * 15 = 2.5 days.",
  },
  {
    question:
      "If A can do a job in 15 days, and B can do it in 20 days, while C can do it in 30 days. If they work together for 10 days, how much work will be left?",
    options: ["1/5", "1/6", "1/3", "1/4"],
    correctAnswer: "1/3",
    explanation:
      "A's rate = 1/15, B's rate = 1/20, C's rate = 1/30. Combined rate = (1/15 + 1/20 + 1/30) = 1/6. In 10 days, they will complete 10/6 = 5/3. Remaining work = 1 - 5/3 = -2/3 (indicating all work done).",
  },
  {
    question:
      "A is thrice as efficient as B. If B can complete a task in 30 days, how long will they take together to complete the same task?",
    options: ["10 days", "12 days", "15 days", "20 days"],
    correctAnswer: "10 days",
    explanation:
      "B's rate = 1/30. A's rate = 3/30 = 1/10. Combined rate = (1/30 + 1/10) = 1/10. Thus, they will finish the work together in 10 days.",
  },
  {
    question:
      "If 4 men can complete a work in 20 days, how long will it take for 10 men to finish the same work if they work at 80% efficiency?",
    options: ["8 days", "10 days", "12 days", "15 days"],
    correctAnswer: "10 days",
    explanation:
      "Total work = 4 men * 20 days = 80 man-days. 10 men at 80% efficiency = 8 effective men. Time required = 80/8 = 10 days.",
  },
  {
    question:
      "If A is twice as efficient as B, and they can complete a work together in 12 days, how long will A take to complete the work alone?",
    options: ["16 days", "24 days", "20 days", "18 days"],
    correctAnswer: "24 days",
    explanation:
      "Let B's rate be 1/x, then A's rate = 2/x. Together they work at 3/x = 1/12, so x = 36. A alone will take 36/2 = 18 days.",
  },
  {
    question:
      "If A and B can finish a work in 30 days together, and if A alone can finish it in 45 days, how long can B finish it alone?",
    options: ["60 days", "75 days", "90 days", "120 days"],
    correctAnswer: "90 days",
    explanation:
      "A's rate = 1/45. Combined rate = 1/30, thus B's rate = (1/30 - 1/45) = 1/90. Therefore, B can finish the work alone in 90 days.",
  },
  {
    question:
      "If A, B, and C can complete a work in 24 days, and A is twice as efficient as B and C together, how long will A take to finish the work alone?",
    options: ["12 days", "18 days", "30 days", "36 days"],
    correctAnswer: "36 days",
    explanation:
      "Let B's rate = 1/x. Then A's rate = 2(1/x) and C's rate = 1/x. Combined rate = 4/x = 1/24. Thus, x = 96 and A alone will take 96/2 = 48 days.",
  },
  {
    question:
      "If a pipe can fill a tank in 10 hours and another pipe can empty it in 20 hours, how long will it take to fill the tank if both pipes are opened together?",
    options: ["10 hours", "15 hours", "20 hours", "25 hours"],
    correctAnswer: "15 hours",
    explanation:
      "Filling rate = 1/10, emptying rate = -1/20. Combined rate = 1/10 - 1/20 = 1/20. Time to fill = 20 hours.",
  },
  {
    question:
      "A and B can complete a work in 20 days and 30 days, respectively. If they start the work together and A leaves after 5 days, how long will B take to finish the remaining work?",
    options: ["10 days", "12 days", "15 days", "20 days"],
    correctAnswer: "15 days",
    explanation:
      "In 5 days, A completes (5/20) = 1/4 and B completes (5/30) = 1/6. Together, they complete (1/4 + 1/6) = 5/12. Remaining work = 1 - 5/12 = 7/12. B will take (7/12) / (1/30) = 15 days.",
  },
  {
    question:
      "A can finish a task in 36 days, B in 54 days, and C in 72 days. If they work together for 9 days, how much work will be left?",
    options: ["1/4", "1/3", "1/2", "2/3"],
    correctAnswer: "1/3",
    explanation:
      "In 1 day, A completes 1/36, B completes 1/54, and C completes 1/72. Together, they complete = (1/36 + 1/54 + 1/72) = 1/12. In 9 days, they complete 9 * (1/12) = 3/4. Remaining work = 1 - 3/4 = 1/4.",
  },
  {
    question:
      "If A and B can do a work in 15 days and 20 days respectively, how long will it take A to finish the remaining work after B has worked for 6 days?",
    options: ["5 days", "6 days", "8 days", "10 days"],
    correctAnswer: "10 days",
    explanation:
      "In 6 days, B completes (6/20) = 3/10 of the work. Remaining work = 1 - 3/10 = 7/10. A's rate = 1/15. A will take (7/10) / (1/15) = 10.5 days.",
  },
  {
    question:
      "A can complete a work in 24 days, B can do it in 36 days, and C in 48 days. If A, B, and C work together for 8 days, how much work will remain?",
    options: ["1/8", "1/6", "1/4", "1/3"],
    correctAnswer: "1/3",
    explanation:
      "In 8 days, A completes (8/24) = 1/3, B completes (8/36) = 2/9, C completes (8/48) = 1/6. Together, they complete = (1/3 + 2/9 + 1/6) = 1/2. Remaining work = 1 - 1/2 = 1/2.",
  },
  {
    question:
      "If A can complete a task in 18 days and B can do it in 27 days, how long will it take them to finish the work if they start together but A leaves after 4 days?",
    options: ["14 days", "16 days", "18 days", "20 days"],
    correctAnswer: "14 days",
    explanation:
      "In 4 days, A completes (4/18) = 2/9, and B completes (4/27) = 4/27. Together, they complete = (2/9 + 4/27) = 10/27. Remaining work = 1 - 10/27 = 17/27. B alone will take (17/27) / (1/27) = 17 days.",
  },
  {
    question:
      "A and B can do a piece of work in 10 and 15 days respectively. If they work together for 5 days, how much work will remain?",
    options: ["1/2", "1/3", "1/4", "1/5"],
    correctAnswer: "1/3",
    explanation:
      "In 5 days, A completes (5/10) = 1/2 and B completes (5/15) = 1/3. Together, they complete = (1/2 + 1/3) = 5/6. Remaining work = 1 - 5/6 = 1/6.",
  },
  {
    question:
      "A can do a work in 12 days, B in 15 days, and C in 20 days. If A and C work together for 3 days and B takes over, how long will it take for B to finish the remaining work?",
    options: ["7 days", "8 days", "9 days", "10 days"],
    correctAnswer: "7 days",
    explanation:
      "In 3 days, A completes (3/12) = 1/4, C completes (3/20) = 3/20. Together, A and C complete = (1/4 + 3/20) = 11/20. Remaining work = 1 - 11/20 = 9/20. B will take (9/20) / (1/15) = 6.75 days.",
  },
  {
    question:
      "A can complete a task in 30 days, while B can do it in 45 days. If they work together for 10 days and A leaves, how long will it take B to finish the remaining work?",
    options: ["15 days", "20 days", "25 days", "30 days"],
    correctAnswer: "15 days",
    explanation:
      "In 10 days, A completes (10/30) = 1/3 and B completes (10/45) = 2/9. Together, they complete = (1/3 + 2/9) = 5/9. Remaining work = 1 - 5/9 = 4/9. B will take (4/9) / (1/45) = 20 days.",
  },
  {
    question:
      "A can do a work in 10 days, B in 15 days, and C in 20 days. If they work together for 2 days, how long will it take to complete the remaining work?",
    options: ["6 days", "8 days", "10 days", "12 days"],
    correctAnswer: "8 days",
    explanation:
      "In 2 days, A completes (2/10) = 1/5, B completes (2/15) = 2/15, C completes (2/20) = 1/10. Together, they complete = (1/5 + 2/15 + 1/10) = 1/2. Remaining work = 1 - 1/2 = 1/2. They will finish the remaining work in 8 days.",
  },
];
