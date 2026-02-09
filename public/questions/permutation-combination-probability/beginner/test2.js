export const test2 = [
  {
    question:
      "If you have 3 different shirts and 2 different pants, how many outfits can you create?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6",
    explanation:
      "The number of outfits is the product of the number of shirts and pants: 3 × 2 = 6.",
  },
  {
    question:
      "What is the probability of rolling an even number on a six-sided die?",
    options: ["1/2", "1/3", "1/6", "1/4"],
    correctAnswer: "1/2",
    explanation:
      "There are 3 even numbers (2, 4, 6) on a six-sided die out of 6 possible outcomes, so P(Even) = 3/6 = 1/2.",
  },
  {
    question: "In how many ways can you arrange the letters in the word 'CAT'?",
    options: ["3", "6", "9", "12"],
    correctAnswer: "6",
    explanation:
      "The number of arrangements of 3 letters is 3! = 3 × 2 × 1 = 6.",
  },
  {
    question:
      "If a bag contains 5 red balls and 3 blue balls, what is the probability of drawing a red ball?",
    options: ["3/8", "5/8", "1/2", "7/8"],
    correctAnswer: "5/8",
    explanation:
      "The probability of drawing a red ball is P(Red) = 5/(5+3) = 5/8.",
  },
  {
    question:
      "How many different ways can you choose 2 books from a shelf of 6 books?",
    options: ["12", "15", "20", "30"],
    correctAnswer: "15",
    explanation:
      "The number of ways to choose 2 books from 6 is C(6, 2) = 6! / (2! * 4!) = 15.",
  },
  {
    question:
      "What is the probability of drawing an ace from a standard deck of cards?",
    options: ["1/52", "1/13", "4/52", "1/26"],
    correctAnswer: "4/52",
    explanation:
      "There are 4 aces in a standard deck of 52 cards, so P(Ace) = 4/52 = 1/13.",
  },
  {
    question:
      "If a couple has 3 children, what is the probability that all of them are boys?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    correctAnswer: "1/8",
    explanation:
      "The probability of each child being a boy is 1/2, so for 3 children, the probability is (1/2)^3 = 1/8.",
  },
  {
    question: "How many ways can 5 different toys be arranged on a shelf?",
    options: ["60", "120", "180", "240"],
    correctAnswer: "120",
    explanation:
      "The number of arrangements of 5 toys is 5! = 5 × 4 × 3 × 2 × 1 = 120.",
  },
  {
    question:
      "In a class of 20 students, what is the probability that a randomly selected student is a girl, if there are 8 girls?",
    options: ["1/2", "2/5", "3/5", "4/5"],
    correctAnswer: "2/5",
    explanation:
      "The probability is the number of girls divided by the total number of students: P(Girl) = 8/20 = 2/5.",
  },
  {
    question:
      "How many different 4-digit PIN codes can be formed using the digits 0-9 if digits can be repeated?",
    options: ["1000", "5000", "10000", "100000"],
    correctAnswer: "10000",
    explanation:
      "Each digit can be any of the 10 digits (0-9), so total PIN codes = 10^4 = 10000.",
  },

  {
    question: "How many ways can you select 4 students from a class of 10?",
    options: ["210", "120", "240", "300"],
    correctAnswer: "210",
    explanation:
      "The number of ways to choose 4 students from 10 is C(10, 4) = 10! / (4! * 6!) = 210.",
  },
  {
    question:
      "What is the probability of rolling a 3 on a standard six-sided die?",
    options: ["1/6", "1/3", "1/4", "1/2"],
    correctAnswer: "1/6",
    explanation:
      "There is 1 favorable outcome (rolling a 3) out of 6 possible outcomes, so P(3) = 1/6.",
  },
  {
    question:
      "If a password consists of 3 letters followed by 2 digits, how many different passwords can be formed using 26 letters and 10 digits?",
    options: ["676000", "780000", "1000000", "500000"],
    correctAnswer: "676000",
    explanation:
      "The number of different passwords is 26^3 * 10^2 = 17576 * 100 = 1757600.",
  },
  {
    question: "How many ways can you arrange 3 books out of 7?",
    options: ["210", "504", "840", "120"],
    correctAnswer: "210",
    explanation:
      "The number of arrangements is P(7, 3) = 7! / (7-3)! = 7 * 6 * 5 = 210.",
  },
  {
    question:
      "What is the probability of drawing a red card from a standard deck of 52 cards?",
    options: ["1/2", "1/4", "1/3", "1/6"],
    correctAnswer: "1/2",
    explanation:
      "There are 26 red cards (hearts and diamonds) in a deck of 52 cards, so P(Red) = 26/52 = 1/2.",
  },
  {
    question: "In how many ways can you choose 3 desserts from a menu of 8?",
    options: ["56", "72", "84", "90"],
    correctAnswer: "56",
    explanation:
      "The number of ways to choose 3 desserts from 8 is C(8, 3) = 8! / (3! * 5!) = 56.",
  },
  {
    question:
      "How many different outcomes are possible when flipping a coin 3 times?",
    options: ["6", "8", "12", "10"],
    correctAnswer: "8",
    explanation:
      "Each flip has 2 outcomes, so for 3 flips, total outcomes = 2^3 = 8.",
  },
  {
    question:
      "What is the probability of drawing a heart from a standard deck of cards?",
    options: ["1/4", "1/13", "1/26", "1/52"],
    correctAnswer: "1/4",
    explanation:
      "There are 13 hearts in a deck of 52 cards, so P(Heart) = 13/52 = 1/4.",
  },
  {
    question: "How many ways can you arrange the letters in the word 'BANANA'?",
    options: ["60", "120", "30", "10"],
    correctAnswer: "60",
    explanation:
      "The arrangement is calculated as 6! / (3!) = 6! / (3! * 2!) = 60.",
  },
  {
    question:
      "If you roll a pair of dice, how many outcomes result in a sum of 3?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation:
      "The outcomes are (1,2) and (2,1), so there are 2 outcomes resulting in a sum of 3.",
  },
];
