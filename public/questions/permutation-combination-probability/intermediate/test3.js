export const test3 = [
  {
    question: "In how many different ways can 5 books be arranged on a shelf?",
    options: ["120", "60", "30", "150"],
    correctAnswer: "120",
    explanation: "The number of arrangements of 5 books is 5! = 120.",
  },
  {
    question:
      "If a coin is tossed 3 times, what is the probability of getting exactly 2 heads?",
    options: ["3/8", "1/4", "5/8", "1/2"],
    correctAnswer: "3/8",
    explanation:
      "The total outcomes = 2^3 = 8. The favorable outcomes for exactly 2 heads = C(3, 2) = 3. So, P(Exactly 2 Heads) = 3/8.",
  },
  {
    question:
      "How many ways can you select a committee of 3 from a group of 10 people?",
    options: ["120", "90", "80", "60"],
    correctAnswer: "120",
    explanation: "The number of ways to select 3 from 10 is C(10, 3) = 120.",
  },
  {
    question:
      "A card is drawn from a standard deck of 52 cards. What is the probability of drawing a red card?",
    options: ["1/2", "1/4", "1/3", "1/13"],
    correctAnswer: "1/2",
    explanation:
      "There are 26 red cards (hearts and diamonds) in a deck of 52. So, P(Red Card) = 26/52 = 1/2.",
  },
  {
    question:
      "How many different ways can you choose 4 toppings from 8 available pizza toppings?",
    options: ["70", "80", "56", "40"],
    correctAnswer: "70",
    explanation: "The number of ways to choose 4 from 8 is C(8, 4) = 70.",
  },
  {
    question:
      "In a class of 30 students, 18 are girls and 12 are boys. If 2 students are selected at random, what is the probability that both are boys?",
    options: ["1/5", "2/15", "1/6", "2/5"],
    correctAnswer: "1/5",
    explanation: "P(Both Boys) = (C(12, 2) / C(30, 2)) = (66/435) = 1/5.",
  },
  {
    question:
      "A die is rolled twice. What is the probability that the sum of the numbers rolled is 7?",
    options: ["1/6", "1/12", "1/36", "5/36"],
    correctAnswer: "1/6",
    explanation:
      "The favorable combinations are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). So, there are 6 outcomes, and total outcomes = 36. Therefore, P(Sum = 7) = 6/36 = 1/6.",
  },
  {
    question:
      "How many ways can you arrange the letters of the word 'COMMITTEE'?",
    options: ["5040", "2520", "720", "630"],
    correctAnswer: "2520",
    explanation:
      "The arrangement is calculated as 9! / (2! * 2!) = 2520, where 2! accounts for the two M's and two T's.",
  },
  {
    question:
      "In a lottery, you must select 3 numbers from 1 to 20. How many combinations can you choose?",
    options: ["1140", "680", "600", "120"],
    correctAnswer: "1140",
    explanation: "The number of ways to choose 3 from 20 is C(20, 3) = 1140.",
  },
  {
    question:
      "A box contains 10 balls, of which 3 are red and 7 are blue. If 2 balls are drawn at random, what is the probability that at least one ball is red?",
    options: ["0.67", "0.50", "0.30", "0.75"],
    correctAnswer: "0.67",
    explanation:
      "P(At least one red) = 1 - P(No red) = 1 - (7/10 * 6/9) = 1 - 0.47 = 0.67.",
  },
  {
    question:
      "A box contains 10 different toys. If 3 toys are chosen at random, how many different combinations are possible?",
    options: ["120", "720", "100", "90"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 toys from 10 is C(10, 3) = 120.",
  },
  {
    question:
      "In how many ways can you arrange the letters of the word 'BANANA'?",
    options: ["60", "720", "30", "12"],
    correctAnswer: "60",
    explanation: "The number of arrangements is 6! / (3! * 2!) = 60.",
  },
  {
    question:
      "What is the probability of getting a sum of 9 when rolling two dice?",
    options: ["1/12", "1/9", "1/18", "1/36"],
    correctAnswer: "1/12",
    explanation:
      "The possible combinations for a sum of 9 are (3,6), (4,5), (5,4), (6,3) = 4 outcomes. Total outcomes = 36. So, P(Sum = 9) = 4/36 = 1/9.",
  },
  {
    question:
      "A team of 4 is to be formed from 6 boys and 4 girls. What is the probability that the team will consist of at least one girl?",
    options: ["0.8", "0.6", "0.5", "0.7"],
    correctAnswer: "0.8",
    explanation:
      "Total ways to choose 4 = C(10, 4) = 210. Ways to choose all boys = C(6, 4) = 15. So, P(At least one girl) = 1 - (15/210) = 0.9286.",
  },
  {
    question:
      "In how many different ways can the letters of the word 'ELECTRIC' be arranged?",
    options: ["5040", "420", "100", "720"],
    correctAnswer: "5040",
    explanation: "The number of arrangements is 8! / (2! * 2!) = 5040.",
  },
  {
    question:
      "If 5 cards are drawn from a standard deck of 52 cards, what is the probability that all 5 cards are aces?",
    options: ["0", "1/22100", "1/1326", "1/252"],
    correctAnswer: "0",
    explanation:
      "There are only 4 aces in a deck. Thus, the probability of drawing 5 aces is 0.",
  },
  {
    question:
      "How many ways can you select 4 fruits from a basket containing 5 apples, 3 bananas, and 2 oranges, if at least one of each type must be selected?",
    options: ["15", "30", "12", "10"],
    correctAnswer: "15",
    explanation:
      "Choosing 1 apple, 1 banana, and 1 orange leaves us to choose 1 more from the remaining 3 fruits, leading to C(5,1)*C(3,1)*C(2,1) = 30.",
  },
  {
    question:
      "A committee of 5 is to be formed from 8 men and 5 women. What is the probability that the committee will have exactly 2 men?",
    options: ["0.25", "0.30", "0.20", "0.15"],
    correctAnswer: "0.20",
    explanation:
      "Total ways to choose 5 = C(13, 5). Ways to choose 2 men from 8 and 3 women from 5 = C(8, 2) * C(5, 3). Calculate the total probability.",
  },
  {
    question:
      "What is the probability of getting a tail when flipping a coin three times?",
    options: ["7/8", "1/2", "1/4", "1/8"],
    correctAnswer: "7/8",
    explanation:
      "The probability of getting at least one tail = 1 - P(3 heads) = 1 - (1/2)^3 = 7/8.",
  },
  {
    question:
      "In how many different ways can 4 boys and 3 girls be arranged in a line if the boys must be together?",
    options: ["5040", "1440", "720", "360"],
    correctAnswer: "5040",
    explanation:
      "Treat the 4 boys as one unit. We have 4 units (the boys + 3 girls). So, arrangements = 5! * 4! = 5040.",
  },
];
