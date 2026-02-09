export const test2 = [
  {
    question:
      "In how many ways can a president, vice-president, and secretary be chosen from a group of 8 people?",
    options: ["336", "56", "72", "120"],
    correctAnswer: "336",
    explanation:
      "The number of ways to choose and arrange 3 positions from 8 is P(8,3) = 8!/(8-3)! = 336.",
  },
  {
    question:
      "A box contains 5 red, 7 green, and 3 blue balls. If 4 balls are drawn at random, what is the probability that exactly 2 balls are red?",
    options: ["0.215", "0.180", "0.225", "0.250"],
    correctAnswer: "0.215",
    explanation:
      "Using the hypergeometric distribution: P(X=2) = (C(5,2) * C(10,2)) / C(15,4).",
  },
  {
    question:
      "How many distinct arrangements can be formed from the letters of the word 'SUCCESS'?",
    options: ["420", "720", "5040", "360"],
    correctAnswer: "420",
    explanation: "Distinct arrangements = 7! / (3! * 2!) = 420.",
  },
  {
    question:
      "If a fair coin is tossed 10 times, what is the probability of getting at least 6 heads?",
    options: ["0.828", "0.590", "0.246", "0.341"],
    correctAnswer: "0.828",
    explanation:
      "P(at least 6 heads) = P(6) + P(7) + P(8) + P(9) + P(10) using binomial distribution.",
  },
  {
    question:
      "A team consists of 4 boys and 3 girls. In how many ways can a captain and a vice-captain be selected if they must be of different genders?",
    options: ["24", "18", "30", "21"],
    correctAnswer: "24",
    explanation: "2 scenarios: (Boy, Girl) + (Girl, Boy) = 4 * 3 + 3 * 4 = 24.",
  },
  {
    question:
      "In a lottery, 5 numbers are drawn from a pool of 50 numbers. What is the probability of matching exactly 3 of the drawn numbers?",
    options: ["0.046", "0.012", "0.010", "0.025"],
    correctAnswer: "0.046",
    explanation:
      "Using combinations: P(matching 3) = (C(5,3) * C(45,2)) / C(50,5).",
  },
  {
    question:
      "How many ways can 3 boys and 2 girls be seated in a row if the boys must be together?",
    options: ["60", "120", "720", "180"],
    correctAnswer: "120",
    explanation:
      "Treat the 3 boys as one unit: 4 units to arrange = 4! * 3! = 120.",
  },
  {
    question:
      "If 4 different books are to be arranged on a shelf with 2 empty spaces between them, how many arrangements are possible?",
    options: ["120", "240", "60", "30"],
    correctAnswer: "240",
    explanation:
      "Treat empty spaces as fixed: Arrange 4 books in 5 slots = P(5,4) * 4! = 240.",
  },
  {
    question:
      "A jar contains 6 red, 5 green, and 4 blue marbles. If 3 marbles are drawn at random, what is the probability that at least one marble is red?",
    options: ["0.675", "0.680", "0.640", "0.600"],
    correctAnswer: "0.675",
    explanation: "P(at least one red) = 1 - P(no red) = 1 - (C(9,3)/C(15,3)).",
  },
  {
    question:
      "From a group of 10 people, how many ways can a committee of 4 be formed if two specific people refuse to work together?",
    options: ["126", "90", "100", "80"],
    correctAnswer: "126",
    explanation:
      "Total combinations - combinations including both: C(10,4) - C(8,2) = 126.",
  },
];
