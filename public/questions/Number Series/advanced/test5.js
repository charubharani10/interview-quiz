export const test5 = [
  {
    question: "What is the next number in the series: 2, 4, 8, 16, ...?",
    options: ["30", "32", "34", "36"],
    correctAnswer: "32",
    explanation:
      "Each number is multiplied by 2: 2 x 2 = 4, 4 x 2 = 8, 8 x 2 = 16, so the next is 16 x 2 = 32.",
  },
  {
    question: "What is the next number in the series: 1, 2, 4, 8, 16, ...?",
    options: ["24", "32", "64", "128"],
    correctAnswer: "32",
    explanation:
      "These numbers are powers of 2: 2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, so the next is 2^5 = 32.",
  },
  {
    question: "What is the next number in the series: 5, 10, 20, 40, ...?",
    options: ["70", "80", "90", "100"],
    correctAnswer: "80",
    explanation:
      "Each number is multiplied by 2: 5 x 2 = 10, 10 x 2 = 20, 20 x 2 = 40, so the next is 40 x 2 = 80.",
  },
  {
    question: "What is the next number in the series: 1, 1, 2, 6, 24, ...?",
    options: ["120", "125", "130", "135"],
    correctAnswer: "120",
    explanation:
      "These numbers are factorials: 0! = 1, 1! = 1, 2! = 2, 3! = 6, 4! = 24, so the next is 5! = 120.",
  },
  {
    question: "What is the next number in the series: 100, 98, 95, 89, ...?",
    options: ["84", "85", "86", "87"],
    correctAnswer: "84",
    explanation:
      "The differences are -2, -3, -6. The pattern suggests the next difference is -5, so 89 - 5 = 84.",
  },
  {
    question: "What is the next number in the series: 2, 3, 5, 7, 11, ...?",
    options: ["12", "13", "14", "15"],
    correctAnswer: "13",
    explanation:
      "These are prime numbers, and the next prime number after 11 is 13.",
  },
  {
    question: "What is the next number in the series: 1, 4, 10, 19, ...?",
    options: ["29", "30", "31", "32"],
    correctAnswer: "30",
    explanation:
      "The differences are 3, 6, 9, which increase by 3 each time. The next difference is 12, so 19 + 12 = 30.",
  },
  {
    question: "What is the next number in the series: 6, 11, 18, 27, ...?",
    options: ["38", "39", "40", "41"],
    correctAnswer: "38",
    explanation:
      "The differences are 5, 7, 9, which increase by 2 each time. The next difference is 11, so 27 + 11 = 38.",
  },
  {
    question: "What is the next number in the series: 4, 16, 36, 64, ...?",
    options: ["100", "121", "144", "169"],
    correctAnswer: "100",
    explanation:
      "These numbers are perfect squares: 2^2, 4^2, 6^2, 8^2. The next is 10^2 = 100.",
  },
  {
    question: "What is the next number in the series: 1, 3, 6, 10, ...?",
    options: ["14", "15", "16", "17"],
    correctAnswer: "15",
    explanation:
      "These are triangular numbers: 1, 3, 6, 10, which represent the sum of the first n natural numbers. The next is 15.",
  },
];
