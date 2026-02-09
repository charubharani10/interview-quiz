export const test4 = [
  {
    question:
      "A committee of 4 is to be formed from a group of 10 people. If 2 specific individuals must be included in the committee, how many different committees can be formed?",
    options: ["28", "42", "45", "60"],
    correctAnswer: "28",
    explanation:
      "Since 2 specific individuals must be included, we only need to choose 2 more from the remaining 8. C(8,2) = 28.",
  },
  {
    question:
      "A box contains 4 red, 5 green, and 3 blue marbles. What is the probability of drawing 2 green marbles and 1 red marble in that order without replacement?",
    options: ["0.25", "0.20", "0.15", "0.10"],
    correctAnswer: "0.15",
    explanation: "P(2 green, then 1 red) = (5/12) * (4/11) * (4/10) = 0.15.",
  },
  {
    question:
      "How many ways can the letters of the word 'BALLOON' be arranged?",
    options: ["840", "420", "280", "360"],
    correctAnswer: "420",
    explanation:
      "The total arrangements = 7! / (2! * 2!) = 420 (because of the 2 L's and 2 O's).",
  },
  {
    question:
      "A password consists of 3 letters followed by 4 digits. If letters can be repeated and digits cannot be repeated, how many different passwords can be formed?",
    options: ["175760", "175000", "130000", "120000"],
    correctAnswer: "175760",
    explanation: "Total = 26^3 * P(10,4) = 175760.",
  },
  {
    question:
      "In how many ways can you select 5 cards from a standard deck of 52 cards if you want to have at least one Ace in the hand?",
    options: ["2598960", "123552", "146100", "162432"],
    correctAnswer: "123552",
    explanation:
      "Total ways to choose 5 cards - ways to choose 5 cards without Aces = C(52,5) - C(48,5) = 123552.",
  },
  {
    question:
      "If 6 people are seated in a circle, how many different arrangements are possible?",
    options: ["120", "720", "600", "7200"],
    correctAnswer: "120",
    explanation:
      "For circular permutations, the number of arrangements = (n-1)! = 5! = 120.",
  },
  {
    question:
      "A box contains 10 balls: 4 white, 3 blue, and 3 red. If 4 balls are drawn at random, what is the probability that exactly 2 are white?",
    options: ["0.140", "0.210", "0.300", "0.160"],
    correctAnswer: "0.210",
    explanation: "P(exactly 2 white) = (C(4,2) * C(6,2)) / C(10,4) = 0.210.",
  },
  {
    question:
      "A restaurant offers 3 appetizers, 4 main courses, and 2 desserts. How many different 3-course meals can be made if at least one appetizer must be included?",
    options: ["72", "84", "64", "96"],
    correctAnswer: "72",
    explanation: "Total = (3 * 4 * 2) + (2 * 4 * 2) = 72.",
  },
  {
    question:
      "In a class of 30 students, how many ways can a teacher choose 10 students to attend a field trip, considering that 5 students have to go?",
    options: ["3003", "2002", "120", "999"],
    correctAnswer: "3003",
    explanation:
      "Choose the remaining 5 from the other 25 students: C(25,5) = 3003.",
  },
  {
    question:
      "If a die is rolled three times, what is the probability that the sum of the numbers rolled is 9?",
    options: ["0.125", "0.111", "0.167", "0.083"],
    correctAnswer: "0.125",
    explanation:
      "There are 25 favorable outcomes out of 216 possible outcomes. P(sum=9) = 25/216 = 0.125.",
  },
];
