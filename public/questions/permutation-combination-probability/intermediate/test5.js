export const test5 = [
  {
    question:
      "A box contains 3 white, 4 black, and 5 green balls. If 3 balls are drawn at random, what is the probability that all are of different colors?",
    options: ["60/286", "15/286", "30/286", "45/286"],
    correctAnswer: "60/286",
    explanation:
      "Total ways to choose 3 balls = C(12, 3) = 220. Ways to choose 1 from each color = 3 * 4 * 5 = 60. P(All different) = 60/220 = 60/286.",
  },
  {
    question:
      "In a race of 10 participants, how many ways can the first, second, and third places be awarded?",
    options: ["720", "5040", "100", "120"],
    correctAnswer: "720",
    explanation:
      "The number of ways to award the first three places from 10 participants is 10 * 9 * 8 = 720.",
  },
  {
    question: "How many different ways can 5 books be arranged on a shelf?",
    options: ["120", "60", "24", "100"],
    correctAnswer: "120",
    explanation: "The number of arrangements of 5 books is 5! = 120.",
  },
  {
    question:
      "From a standard deck of cards, what is the probability of drawing a heart or a queen?",
    options: ["13/52", "4/52", "1/13", "17/52"],
    correctAnswer: "17/52",
    explanation:
      "There are 13 hearts and 4 queens. However, one queen is a heart, so P(Heart or Queen) = (13 + 4 - 1) / 52 = 16/52.",
  },
  {
    question: "How many ways can you select 4 people from a group of 10?",
    options: ["210", "100", "50", "120"],
    correctAnswer: "210",
    explanation: "The number of ways to choose 4 from 10 is C(10, 4) = 210.",
  },
  {
    question:
      "In how many ways can the letters of the word 'MATH' be arranged?",
    options: ["24", "12", "16", "36"],
    correctAnswer: "24",
    explanation: "The arrangement of 4 distinct letters is 4! = 24.",
  },
  {
    question:
      "If a coin is tossed 3 times, what is the probability of getting exactly 2 heads?",
    options: ["3/8", "1/4", "1/2", "5/8"],
    correctAnswer: "3/8",
    explanation: "The probability is calculated as C(3, 2) * (1/2)^3 = 3/8.",
  },
  {
    question:
      "How many different 3-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
    options: ["60", "120", "100", "90"],
    correctAnswer: "60",
    explanation:
      "The number of arrangements of 3 digits from 5 is 5 * 4 * 3 = 60.",
  },
  {
    question:
      "A bag contains 2 red, 3 blue, and 4 green balls. If 2 balls are drawn, what is the probability that at least one ball is blue?",
    options: ["11/36", "5/12", "1/4", "7/18"],
    correctAnswer: "11/36",
    explanation:
      "The total ways to draw 2 balls = C(9, 2) = 36. The ways to draw 2 non-blue = C(6, 2) = 15. So, P(At least one blue) = 1 - (15/36) = 11/36.",
  },
  {
    question:
      "In how many different ways can 6 different gifts be distributed to 3 children if each child can receive more than one gift?",
    options: ["729", "216", "180", "120"],
    correctAnswer: "729",
    explanation:
      "Each gift has 3 choices (for each child), so total ways = 3^6 = 729.",
  },
];
