export const test3 = [
  {
    question:
      "If a fruit basket contains 4 apples, 3 oranges, and 2 bananas, what is the probability of randomly selecting an apple?",
    options: ["1/3", "4/9", "2/3", "1/2"],
    correctAnswer: "4/9",
    explanation:
      "The probability of selecting an apple is the number of apples divided by the total number of fruits: P(Apple) = 4/(4+3+2) = 4/9.",
  },
  {
    question:
      "How many different ways can you choose 1 dessert from 5 options?",
    options: ["5", "10", "15", "20"],
    correctAnswer: "5",
    explanation:
      "The number of ways to choose 1 dessert from 5 options is simply 5.",
  },
  {
    question:
      "In how many different ways can 2 books be selected from a collection of 8 books?",
    options: ["8", "16", "28", "56"],
    correctAnswer: "28",
    explanation:
      "The number of ways to choose 2 books from 8 is given by C(8, 2) = 8! / (2! * 6!) = 28.",
  },
  {
    question:
      "What is the probability of drawing a queen from a standard deck of cards?",
    options: ["1/13", "1/52", "4/52", "1/4"],
    correctAnswer: "1/13",
    explanation:
      "There are 4 queens in a standard deck of 52 cards, so P(Queen) = 4/52 = 1/13.",
  },
  {
    question:
      "If a student can choose 3 subjects out of 10, how many combinations can they choose?",
    options: ["120", "180", "210", "300"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 subjects from 10 is given by C(10, 3) = 10! / (3! * 7!) = 120.",
  },
  {
    question:
      "How many different ways can you arrange the letters of the word 'BOOK'?",
    options: ["8", "12", "24", "36"],
    correctAnswer: "12",
    explanation:
      "The word 'BOOK' has 4 letters with 'O' repeating, so the arrangements are 4! / 2! = 12.",
  },
  {
    question:
      "What is the probability of rolling a sum of 2 with two six-sided dice?",
    options: ["1/36", "1/12", "1/18", "1/6"],
    correctAnswer: "1/36",
    explanation:
      "There is only 1 combination (1,1) that results in a sum of 2 out of 36 possible combinations, so P(Sum=2) = 1/36.",
  },
  {
    question:
      "If you flip a coin 4 times, how many different outcomes are possible?",
    options: ["8", "12", "16", "20"],
    correctAnswer: "16",
    explanation:
      "Each coin flip has 2 possible outcomes (heads or tails), so for 4 flips, the total outcomes = 2^4 = 16.",
  },
  {
    question:
      "How many different ways can 3 ice cream flavors be selected from 6 available flavors?",
    options: ["20", "30", "60", "90"],
    correctAnswer: "20",
    explanation:
      "The number of ways to choose 3 flavors from 6 is given by C(6, 3) = 6! / (3! * 3!) = 20.",
  },
  {
    question:
      "In a group of 10 people, what is the probability of randomly selecting a person who is taller than 6 feet if there are 3 such people?",
    options: ["1/2", "1/3", "1/4", "3/10"],
    correctAnswer: "3/10",
    explanation:
      "The probability is the number of tall people divided by the total number of people: P(Tall) = 3/10.",
  },

  {
    question: "How many ways can you arrange the letters in the word 'APPLE'?",
    options: ["60", "120", "240", "30"],
    correctAnswer: "60",
    explanation:
      "The arrangement is calculated as 5! / 2! (since 'P' is repeated), which equals 60.",
  },
  {
    question:
      "What is the probability of picking a blue marble from a jar containing 3 blue and 7 red marbles?",
    options: ["3/10", "7/10", "1/3", "1/2"],
    correctAnswer: "3/10",
    explanation:
      "P(Blue) = Number of Blue Marbles / Total Marbles = 3/(3+7) = 3/10.",
  },
  {
    question:
      "In how many ways can you select 2 shirts from a collection of 8 shirts?",
    options: ["28", "56", "72", "16"],
    correctAnswer: "28",
    explanation:
      "The number of ways to choose 2 shirts from 8 is C(8, 2) = 8! / (2! * 6!) = 28.",
  },
  {
    question:
      "If you have 4 different colored balls, how many ways can you arrange them in a line?",
    options: ["16", "24", "32", "48"],
    correctAnswer: "24",
    explanation: "The number of arrangements of 4 different balls is 4! = 24.",
  },
  {
    question:
      "What is the probability of drawing a queen from a standard deck of cards?",
    options: ["1/52", "1/13", "1/4", "3/52"],
    correctAnswer: "1/13",
    explanation:
      "There are 4 queens in a deck of 52 cards, so P(Queen) = 4/52 = 1/13.",
  },
  {
    question:
      "How many different ways can you choose 5 out of 12 participants for a team?",
    options: ["792", "924", "1234", "144"],
    correctAnswer: "792",
    explanation:
      "The number of ways to choose 5 from 12 is C(12, 5) = 12! / (5! * 7!) = 792.",
  },
  {
    question:
      "If a coin is flipped 4 times, what is the total number of outcomes?",
    options: ["8", "16", "32", "64"],
    correctAnswer: "16",
    explanation:
      "Each flip has 2 outcomes, so for 4 flips, total outcomes = 2^4 = 16.",
  },
  {
    question:
      "How many ways can you select 3 toppings from a choice of 6 for a pizza?",
    options: ["20", "30", "40", "50"],
    correctAnswer: "20",
    explanation:
      "The number of ways to choose 3 toppings from 6 is C(6, 3) = 6! / (3! * 3!) = 20.",
  },
  {
    question:
      "What is the probability of rolling an even number on a standard six-sided die?",
    options: ["1/2", "1/3", "1/4", "2/3"],
    correctAnswer: "1/2",
    explanation:
      "There are 3 even numbers (2, 4, 6) on a die, so P(Even) = 3/6 = 1/2.",
  },
  {
    question: "In how many ways can you choose 1 out of 5 different fruits?",
    options: ["5", "10", "15", "20"],
    correctAnswer: "5",
    explanation: "The number of ways to choose 1 fruit from 5 is C(5, 1) = 5.",
  },
];
