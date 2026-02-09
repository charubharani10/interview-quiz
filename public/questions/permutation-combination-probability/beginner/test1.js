export const test1 = [
  {
    question: "In how many ways can 5 books be arranged on a shelf?",
    options: ["60", "120", "240", "720"],
    correctAnswer: "120",
    explanation:
      "The number of ways to arrange n items is n!. Therefore, 5! = 5 × 4 × 3 × 2 × 1 = 120.",
  },
  {
    question:
      "A box contains 3 red balls and 2 blue balls. What is the probability of drawing a red ball?",
    options: ["1/5", "2/5", "3/5", "4/5"],
    correctAnswer: "3/5",
    explanation:
      "The probability of drawing a red ball is the number of red balls divided by the total number of balls: P(Red) = 3/(3+2) = 3/5.",
  },
  {
    question:
      "How many different ways can you choose 2 toppings from a choice of 5 toppings for a pizza?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "10",
    explanation:
      "The number of ways to choose k items from n items is given by the combination formula C(n, k) = n! / (k! * (n - k)!). Here, C(5, 2) = 5! / (2! * 3!) = 10.",
  },
  {
    question: "What is the probability of flipping a coin and getting heads?",
    options: ["0", "1/2", "1/3", "1/4"],
    correctAnswer: "1/2",
    explanation:
      "There are 2 possible outcomes when flipping a coin: heads and tails. Therefore, the probability of getting heads is 1/2.",
  },
  {
    question:
      "If you roll a standard six-sided die, what is the probability of rolling an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: "1/2",
    explanation:
      "The even numbers on a six-sided die are 2, 4, and 6. There are 3 even numbers out of 6 total outcomes, so P(Even) = 3/6 = 1/2.",
  },
  {
    question:
      "In how many different ways can you arrange the letters of the word 'CAT'?",
    options: ["3", "6", "9", "12"],
    correctAnswer: "6",
    explanation:
      "The number of ways to arrange 3 letters is 3! = 3 × 2 × 1 = 6.",
  },
  {
    question:
      "From a group of 8 students, how many ways can you select a president and a vice president?",
    options: ["56", "64", "72", "80"],
    correctAnswer: "56",
    explanation:
      "The number of ways to choose a president and vice president is P(8, 2) = 8 × 7 = 56.",
  },
  {
    question:
      "What is the probability of drawing a queen from a standard deck of 52 playing cards?",
    options: ["1/13", "1/26", "1/52", "4/52"],
    correctAnswer: "1/13",
    explanation:
      "There are 4 queens in a standard deck of 52 cards, so the probability of drawing a queen is P(Queen) = 4/52 = 1/13.",
  },
  {
    question:
      "If a password consists of 3 letters followed by 3 digits, how many different passwords can be created?",
    options: ["1,000", "17,576", "1,757,600", "2,176,782,336"],
    correctAnswer: "1,757,600",
    explanation:
      "There are 26 options for each letter and 10 options for each digit. Therefore, the total number of passwords = 26^3 × 10^3 = 17,576 × 1,000 = 1,757,600.",
  },
  {
    question:
      "How many different combinations of 3 fruits can be selected from a set of 6 fruits?",
    options: ["20", "30", "40", "50"],
    correctAnswer: "20",
    explanation:
      "The number of combinations of 3 fruits from 6 is given by C(6, 3) = 6! / (3! * 3!) = 20.",
  },

  {
    question: "How many different ways can 4 students be seated in a row?",
    options: ["12", "16", "24", "36"],
    correctAnswer: "24",
    explanation:
      "The number of ways to arrange 4 students is 4! = 4 × 3 × 2 × 1 = 24.",
  },
  {
    question:
      "If a box contains 10 balls, of which 4 are red and 6 are blue, what is the probability of drawing a blue ball?",
    options: ["3/5", "2/5", "1/2", "6/10"],
    correctAnswer: "3/5",
    explanation:
      "The probability of drawing a blue ball is the number of blue balls divided by the total number of balls: P(Blue) = 6/10 = 3/5.",
  },
  {
    question:
      "In how many ways can you select 3 fruits from a basket of 5 different fruits?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "10",
    explanation:
      "The number of ways to choose 3 fruits from 5 is given by C(5, 3) = 5! / (3! * 2!) = 10.",
  },
  {
    question:
      "What is the probability of rolling a total of 7 with two six-sided dice?",
    options: ["1/6", "1/12", "5/36", "1/36"],
    correctAnswer: "1/6",
    explanation:
      "There are 6 combinations that result in a total of 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 possible combinations when rolling two dice.",
  },
  {
    question:
      "If you have a 5-digit PIN code, how many different PIN codes can be created using digits 0-9?",
    options: ["100,000", "1,000,000", "10,000", "1,000"],
    correctAnswer: "100,000",
    explanation:
      "Each of the 5 digits can be any number from 0 to 9, so the total number of PIN codes = 10^5 = 100,000.",
  },
  {
    question:
      "How many different ways can 3 students be chosen from a group of 10 students?",
    options: ["120", "90", "210", "720"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 students from 10 is given by C(10, 3) = 10! / (3! * 7!) = 120.",
  },
  {
    question: "In a deck of cards, what is the probability of drawing a heart?",
    options: ["1/4", "1/13", "1/26", "3/52"],
    correctAnswer: "1/4",
    explanation:
      "There are 13 hearts in a deck of 52 cards, so the probability of drawing a heart is P(Heart) = 13/52 = 1/4.",
  },
  {
    question:
      "If you flip a coin three times, how many different outcomes are possible?",
    options: ["3", "4", "6", "8"],
    correctAnswer: "8",
    explanation:
      "Each coin flip has 2 possible outcomes (heads or tails), so for 3 flips, the total outcomes = 2^3 = 8.",
  },
  {
    question:
      "In how many ways can 2 boys and 2 girls be selected from a group of 5 boys and 4 girls?",
    options: ["20", "30", "40", "50"],
    correctAnswer: "30",
    explanation:
      "The number of ways to select 2 boys from 5 is C(5, 2) and 2 girls from 4 is C(4, 2). So, total ways = C(5, 2) × C(4, 2) = 10 × 6 = 60.",
  },
  {
    question:
      "What is the probability of drawing a king from a standard deck of cards?",
    options: ["1/26", "1/13", "1/52", "4/52"],
    correctAnswer: "1/13",
    explanation:
      "There are 4 kings in a standard deck of 52 cards, so the probability of drawing a king is P(King) = 4/52 = 1/13.",
  },
];
