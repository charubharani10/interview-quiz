export const test4 = [
  {
    question:
      "How many different arrangements can be made from the letters of the word 'BANANA'?",
    options: ["60", "120", "30", "720"],
    correctAnswer: "60",
    explanation:
      "The arrangement is calculated as 6! / (3!) = 60, where 3! accounts for the three A's.",
  },
  {
    question:
      "In a school, 4 students are to be chosen as class representatives from a group of 12. How many different ways can this be done?",
    options: ["495", "210", "360", "144"],
    correctAnswer: "495",
    explanation: "The number of ways to choose 4 from 12 is C(12, 4) = 495.",
  },
  {
    question: "What is the probability of rolling a sum of 8 with two dice?",
    options: ["5/36", "1/6", "7/36", "1/12"],
    correctAnswer: "5/36",
    explanation:
      "The favorable combinations are (2,6), (3,5), (4,4), (5,3), (6,2). Total outcomes = 36, so P(Sum = 8) = 5/36.",
  },
  {
    question:
      "A committee of 5 members is to be formed from 10 people. How many different committees can be formed?",
    options: ["252", "120", "45", "100"],
    correctAnswer: "252",
    explanation: "The number of ways to choose 5 from 10 is C(10, 5) = 252.",
  },
  {
    question:
      "From a group of 15 students, how many ways can 3 be chosen to represent the class at a conference?",
    options: ["455", "130", "105", "90"],
    correctAnswer: "455",
    explanation: "The number of ways to choose 3 from 15 is C(15, 3) = 455.",
  },
  {
    question:
      "A box contains 5 red, 4 blue, and 3 green balls. If 2 balls are drawn at random, what is the probability that both are blue?",
    options: ["1/15", "1/10", "1/6", "1/12"],
    correctAnswer: "1/15",
    explanation: "P(Both Blue) = (C(4, 2) / C(12, 2)) = (6/66) = 1/11.",
  },
  {
    question:
      "In how many different ways can 3 prizes be awarded to 10 participants if the prizes are identical?",
    options: ["120", "45", "90", "100"],
    correctAnswer: "220",
    explanation:
      "Using the formula for combinations with repetition, the number of ways = C(3 + 10 - 1, 3) = C(12, 3) = 220.",
  },
  {
    question:
      "What is the probability of drawing an Ace from a standard deck of cards?",
    options: ["1/52", "1/13", "1/26", "1/4"],
    correctAnswer: "1/52",
    explanation:
      "There are 4 Aces in a deck of 52 cards, so P(Ace) = 4/52 = 1/13.",
  },
  {
    question:
      "If a box contains 6 red and 4 white balls, what is the probability of drawing one red and one white ball if two balls are drawn without replacement?",
    options: ["12/45", "8/45", "10/45", "6/45"],
    correctAnswer: "24/45",
    explanation: "P(Red and White) = (6/10) * (4/9) + (4/10) * (6/9) = 24/45.",
  },
  {
    question:
      "How many ways can a person select 2 subjects from 8 available subjects?",
    options: ["28", "56", "36", "48"],
    correctAnswer: "28",
    explanation: "The number of ways to choose 2 from 8 is C(8, 2) = 28.",
  },
];
