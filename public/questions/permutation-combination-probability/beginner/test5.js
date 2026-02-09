export const test5 = [
  {
    question:
      "If there are 10 students in a class and 4 are selected for a committee, how many different committees can be formed?",
    options: ["210", "240", "100", "120"],
    correctAnswer: "210",
    explanation:
      "The number of ways to choose 4 students from 10 is given by C(10, 4) = 10! / (4! * 6!) = 210.",
  },
  {
    question:
      "What is the probability of rolling a number greater than 4 on a standard six-sided die?",
    options: ["1/6", "1/3", "1/2", "1/4"],
    correctAnswer: "1/3",
    explanation:
      "The favorable outcomes are 5 and 6, so P(Greater than 4) = 2/6 = 1/3.",
  },
  {
    question:
      "How many different ways can you arrange the letters in the word 'MATH'?",
    options: ["12", "16", "24", "36"],
    correctAnswer: "24",
    explanation:
      "The number of arrangements of 4 different letters is 4! = 24.",
  },
  {
    question:
      "In a bag of 12 balls, 5 are green, 3 are red, and 4 are blue. What is the probability of drawing a red ball?",
    options: ["1/3", "1/4", "3/12", "1/4"],
    correctAnswer: "1/4",
    explanation:
      "The probability of drawing a red ball is P(Red) = 3/12 = 1/4.",
  },
  {
    question:
      "If you flip a coin twice, what is the probability of getting at least one tail?",
    options: ["1/4", "1/2", "3/4", "1/8"],
    correctAnswer: "3/4",
    explanation:
      "The probability of getting no tails (both heads) is (1/2)^2 = 1/4, so the probability of at least one tail = 1 - 1/4 = 3/4.",
  },
  {
    question:
      "How many different ways can you choose 2 flavors from 5 ice cream flavors?",
    options: ["5", "10", "15", "20"],
    correctAnswer: "10",
    explanation:
      "The number of ways to choose 2 flavors from 5 is given by C(5, 2) = 5! / (2! * 3!) = 10.",
  },
  {
    question:
      "What is the probability of drawing a face card (Jack, Queen, King) from a standard deck of cards?",
    options: ["1/13", "3/52", "1/17", "1/4"],
    correctAnswer: "3/52",
    explanation:
      "There are 12 face cards in a standard deck of 52 cards, so P(Face Card) = 12/52 = 3/52.",
  },
  {
    question:
      "If you have 5 different books and want to arrange them on a shelf, how many arrangements are possible?",
    options: ["60", "120", "180", "240"],
    correctAnswer: "120",
    explanation: "The number of arrangements of 5 different books is 5! = 120.",
  },
  {
    question:
      "In a group of 8 friends, how many ways can you choose a leader and a secretary?",
    options: ["56", "64", "72", "80"],
    correctAnswer: "56",
    explanation:
      "The number of ways to choose a leader and a secretary is 8 (for leader) × 7 (for secretary) = 56.",
  },
  {
    question:
      "What is the probability of drawing a green ball from a bag containing 2 green, 3 red, and 5 blue balls?",
    options: ["1/5", "1/4", "1/3", "1/2"],
    correctAnswer: "1/5",
    explanation:
      "The probability of drawing a green ball is P(Green) = 2/10 = 1/5.",
  },

  {
    question:
      "How many ways can you arrange 3 letters chosen from the word 'CAT'?",
    options: ["3", "6", "9", "12"],
    correctAnswer: "6",
    explanation: "The number of arrangements of 3 letters is 3! = 6.",
  },
  {
    question:
      "If a box contains 4 red balls and 6 blue balls, what is the probability of randomly picking a red ball?",
    options: ["2/5", "4/10", "4/5", "1/2"],
    correctAnswer: "2/5",
    explanation:
      "P(Red) = Number of Red Balls / Total Balls = 4/(4+6) = 4/10 = 2/5.",
  },
  {
    question: "In how many ways can you choose 3 students from a group of 10?",
    options: ["60", "120", "210", "720"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 students from 10 is C(10, 3) = 10! / (3! * 7!) = 120.",
  },
  {
    question:
      "What is the probability of drawing a heart from a standard deck of 52 cards?",
    options: ["1/4", "1/13", "3/52", "1/2"],
    correctAnswer: "1/4",
    explanation:
      "There are 13 hearts in a standard deck of 52 cards, so P(Heart) = 13/52 = 1/4.",
  },
  {
    question:
      "How many ways can you select 2 different toppings from a choice of 8 for a pizza?",
    options: ["28", "36", "56", "64"],
    correctAnswer: "28",
    explanation:
      "The number of ways to choose 2 toppings from 8 is C(8, 2) = 8! / (2! * 6!) = 28.",
  },
  {
    question:
      "If you flip a coin 3 times, what is the total number of outcomes?",
    options: ["2", "6", "8", "8"],
    correctAnswer: "8",
    explanation:
      "Each flip has 2 outcomes (Heads or Tails), so the total outcomes for 3 flips = 2^3 = 8.",
  },
  {
    question:
      "In a group of 15 people, how many ways can you choose a committee of 5?",
    options: ["3003", "5005", "2002", "1001"],
    correctAnswer: "3003",
    explanation:
      "The number of ways to choose 5 people from 15 is C(15, 5) = 15! / (5! * 10!) = 3003.",
  },
  {
    question:
      "What is the probability of rolling a 3 on a standard six-sided die?",
    options: ["1/6", "1/3", "1/2", "5/6"],
    correctAnswer: "1/6",
    explanation:
      "There is one favorable outcome (rolling a 3) out of 6 possible outcomes, so P(3) = 1/6.",
  },
  {
    question:
      "How many different ways can the letters of the word 'BEE' be arranged?",
    options: ["3", "6", "9", "12"],
    correctAnswer: "3",
    explanation:
      "The arrangement of letters is calculated by 3!/2! (since 'E' is repeated), which equals 3.",
  },
  {
    question:
      "If a bag contains 10 marbles, 3 of which are yellow, what is the probability of drawing a yellow marble?",
    options: ["3/10", "1/4", "1/3", "1/2"],
    correctAnswer: "3/10",
    explanation:
      "The probability of drawing a yellow marble is P(Yellow) = 3/10.",
  },
];
