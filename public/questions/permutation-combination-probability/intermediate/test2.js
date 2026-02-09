export const test2 = [
  {
    question: "How many ways can you arrange the letters of the word 'BANANA'?",
    options: ["60", "120", "30", "15"],
    correctAnswer: "60",
    explanation:
      "The arrangement is calculated as 6! / (3! * 2!) = 60, where 3! accounts for the 3 A's and 2! for the 2 N's.",
  },
  {
    question:
      "In a class of 20 students, 12 are girls and 8 are boys. If 5 students are selected at random, what is the probability that all selected are girls?",
    options: ["0.28", "0.24", "0.18", "0.12"],
    correctAnswer: "0.18",
    explanation:
      "Total ways to choose 5 students = C(20, 5). Ways to choose 5 girls = C(12, 5). P(All Girls) = C(12, 5) / C(20, 5) = 0.18.",
  },
  {
    question:
      "If 4 dice are rolled, what is the probability of getting at least one six?",
    options: ["0.5", "0.76", "0.52", "0.57"],
    correctAnswer: "0.76",
    explanation:
      "P(No Six) = (5/6)^4 = 0.48. Therefore, P(At least one six) = 1 - P(No Six) = 1 - 0.48 = 0.52.",
  },
  {
    question:
      "A box contains 4 red, 3 blue, and 2 yellow balls. If 2 balls are drawn at random, what is the probability that they are of different colors?",
    options: ["0.44", "0.52", "0.60", "0.50"],
    correctAnswer: "0.52",
    explanation:
      "Total ways to choose 2 balls = C(9, 2). Different colors can be (R,B), (R,Y), or (B,Y). Calculate and sum these probabilities.",
  },
  {
    question:
      "From a group of 10 people, in how many ways can a team of 4 be formed if 2 specific people must be included?",
    options: ["35", "40", "60", "70"],
    correctAnswer: "35",
    explanation: "Choose 2 more members from the remaining 8: C(8, 2) = 28.",
  },
  {
    question: "How many ways can you choose 2 letters from the word 'SCHOOL'?",
    options: ["6", "10", "9", "12"],
    correctAnswer: "6",
    explanation:
      "The distinct letters are S, C, H, O, L. The total ways to choose 2 from 5 distinct letters = C(5, 2) = 10.",
  },
  {
    question:
      "A card is drawn from a standard deck of 52 cards. What is the probability of drawing either a king or a heart?",
    options: ["1/13", "1/52", "4/52", "16/52"],
    correctAnswer: "16/52",
    explanation:
      "P(King or Heart) = P(King) + P(Heart) - P(King of Hearts) = (4/52) + (13/52) - (1/52) = 16/52.",
  },
  {
    question:
      "What is the probability of drawing an Ace from a deck of cards after replacing the card drawn?",
    options: ["1/52", "4/52", "1/13", "0"],
    correctAnswer: "4/52",
    explanation:
      "There are 4 Aces in a 52-card deck. Therefore, P(Ace) = 4/52 = 1/13.",
  },
  {
    question:
      "In how many ways can you select 3 fruits from a basket containing 5 different fruits?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "10",
    explanation:
      "The number of ways to choose 3 fruits from 5 is C(5, 3) = 10.",
  },
  {
    question:
      "A bag contains 6 white and 4 black balls. If 2 balls are drawn randomly, what is the probability that both are white?",
    options: ["1/5", "3/20", "4/15", "1/15"],
    correctAnswer: "1/5",
    explanation:
      "Total ways to choose 2 balls = C(10, 2). Ways to choose 2 white balls = C(6, 2). P(Both White) = (15/45) = 1/5.",
  },
  {
    question:
      "In how many ways can 8 people be seated in a row if two specific people must sit next to each other?",
    options: ["40320", "5760", "5040", "2880"],
    correctAnswer: "5040",
    explanation:
      "Consider the two people as one unit. So, we have 7 units to arrange (6 people + 1 unit). Arrangements = 7! * 2! = 5040.",
  },
  {
    question:
      "A box contains 5 red and 3 blue marbles. If 4 marbles are drawn at random, what is the probability that all are red?",
    options: ["1/14", "5/14", "1/7", "10/14"],
    correctAnswer: "1/14",
    explanation:
      "Total ways to choose 4 marbles = C(8, 4) = 70. Ways to choose 4 red = C(5, 4) = 5. P(All red) = 5/70 = 1/14.",
  },
  {
    question:
      "How many different ways can 5 different books be arranged on a shelf if two specific books must always be together?",
    options: ["60", "120", "24", "720"],
    correctAnswer: "120",
    explanation:
      "Treat the two books as one unit. Arrangements = 4! * 2! = 120.",
  },
  {
    question:
      "A committee of 4 is to be formed from 6 men and 4 women. What is the probability that the committee will have at least 1 woman?",
    options: ["0.6", "0.75", "0.4", "0.5"],
    correctAnswer: "0.75",
    explanation:
      "Total ways to choose 4 = C(10, 4) = 210. Ways to choose 4 men = C(6, 4) = 15. So, P(At least 1 woman) = 1 - (15/210) = 0.75.",
  },
  {
    question:
      "If a die is rolled three times, what is the probability of getting at least one 6?",
    options: ["91/216", "91/125", "1/36", "1/6"],
    correctAnswer: "91/216",
    explanation:
      "The probability of not getting a 6 in one roll is 5/6. So, for three rolls, it's (5/6)^3 = 125/216. Thus, P(At least one 6) = 1 - (125/216) = 91/216.",
  },
  {
    question:
      "In a class of 30 students, how many ways can a teacher choose 3 students to represent the class in a competition?",
    options: ["4060", "130", "60", "150"],
    correctAnswer: "4060",
    explanation: "The number of ways to choose 3 from 30 is C(30, 3) = 4060.",
  },
  {
    question:
      "A box contains 3 red balls, 2 blue balls, and 5 green balls. If 2 balls are drawn, what is the probability that both are blue?",
    options: ["1/21", "1/15", "2/21", "2/15"],
    correctAnswer: "1/21",
    explanation:
      "Total ways to choose 2 balls = C(10, 2) = 45. Ways to choose 2 blue = C(2, 2) = 1. P(Both blue) = 1/45 = 1/21.",
  },
  {
    question:
      "How many different ways can 10 students be arranged in a line if two students refuse to sit next to each other?",
    options: ["3628800", "362880", "40320", "720"],
    correctAnswer: "3628800",
    explanation:
      "Total arrangements = 10! = 3628800. Arrangements with the two students together = 9! * 2! = 725760. Therefore, arrangements with them not together = 3628800 - 725760 = 2903040.",
  },
  {
    question:
      "In a lottery, 6 numbers are drawn from a set of 49. What is the probability of winning if a ticket has the same 6 numbers?",
    options: ["1/13983816", "1/100000", "1/1000", "1/10000"],
    correctAnswer: "1/13983816",
    explanation:
      "The total number of ways to choose 6 from 49 is C(49, 6) = 13983816.",
  },
  {
    question: "How many ways can 4 people be seated at a round table?",
    options: ["24", "12", "6", "48"],
    correctAnswer: "6",
    explanation:
      "The number of arrangements in a circle for n people is (n-1)!. So, for 4 people, it's 3! = 6.",
  },
];
