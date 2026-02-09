export const test1 = [
  {
    question:
      "In how many ways can you arrange the letters in the word 'COMBINATION'?",
    options: ["3628800", "453600", "40320", "720"],
    correctAnswer: "453600",
    explanation:
      "The arrangement is calculated as 11! / (2! * 2!) because 'O' and 'I' are repeated.",
  },
  {
    question:
      "What is the probability of drawing an ace from a standard deck of 52 playing cards?",
    options: ["1/52", "1/13", "1/26", "1/4"],
    correctAnswer: "1/13",
    explanation:
      "There are 4 aces in a deck of 52 cards, so P(Ace) = 4/52 = 1/13.",
  },
  {
    question: "How many ways can you select 5 books from a shelf of 15 books?",
    options: ["3003", "1001", "2002", "450"],
    correctAnswer: "3003",
    explanation:
      "The number of ways to choose 5 books from 15 is C(15, 5) = 15! / (5! * 10!) = 3003.",
  },
  {
    question:
      "How many different committees of 3 can be formed from a group of 10 people?",
    options: ["120", "720", "45", "10"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 from 10 is C(10, 3) = 10! / (3! * 7!) = 120.",
  },
  {
    question:
      "What is the probability of getting at least one head when flipping a fair coin three times?",
    options: ["1/8", "7/8", "3/8", "1/2"],
    correctAnswer: "7/8",
    explanation:
      "The probability of getting at least one head is 1 - P(Tails) = 1 - (1/2)^3 = 7/8.",
  },
  {
    question:
      "In a class of 30 students, 18 are girls. What is the probability of randomly selecting a boy?",
    options: ["6/30", "1/5", "1/6", "2/5"],
    correctAnswer: "1/5",
    explanation: "There are 12 boys in the class, so P(Boy) = 12/30 = 2/5.",
  },
  {
    question:
      "How many different arrangements can be made with the letters of the word 'MATH'?",
    options: ["12", "24", "18", "8"],
    correctAnswer: "24",
    explanation:
      "The number of arrangements of 4 different letters is 4! = 24.",
  },
  {
    question:
      "How many ways can you form a 4-digit number using the digits 1, 2, 3, and 4 without repetition?",
    options: ["64", "24", "48", "16"],
    correctAnswer: "24",
    explanation:
      "The number of 4-digit numbers without repetition from 4 digits is P(4, 4) = 4! = 24.",
  },
  {
    question:
      "What is the probability of drawing two hearts in a row without replacement from a standard deck of cards?",
    options: ["1/26", "1/221", "1/102", "1/4"],
    correctAnswer: "1/221",
    explanation: "P(2 Hearts) = (13/52) * (12/51) = 1/221.",
  },
  {
    question: "How many different ways can 4 people sit in a row of 8 chairs?",
    options: ["3360", "1680", "720", "40320"],
    correctAnswer: "1680",
    explanation:
      "The number of ways is P(8, 4) = 8! / (8-4)! = 8 * 7 * 6 * 5 = 1680.",
  },

  {
    question:
      "A bag contains 5 red, 3 blue, and 2 green balls. What is the probability of drawing a blue ball?",
    options: ["3/10", "1/5", "1/4", "1/3"],
    correctAnswer: "3/10",
    explanation: "Total balls = 5 + 3 + 2 = 10. P(Blue) = 3/10.",
  },
  {
    question: "In how many ways can 8 people be seated at a round table?",
    options: ["40320", "5040", "720", "256"],
    correctAnswer: "5040",
    explanation:
      "The number of ways to arrange 8 people in a circle is (8-1)! = 7! = 5040.",
  },
  {
    question:
      "A committee of 4 is to be formed from a group of 10 people. How many different committees can be formed?",
    options: ["210", "120", "45", "60"],
    correctAnswer: "210",
    explanation:
      "The number of ways to choose 4 from 10 is C(10, 4) = 10! / (4! * 6!) = 210.",
  },
  {
    question:
      "If 3 letters are chosen at random from the English alphabet, what is the probability that they are all vowels?",
    options: ["1/20", "1/10", "1/15", "1/5"],
    correctAnswer: "1/220",
    explanation:
      "There are 5 vowels. The total ways to choose 3 letters = C(26, 3) = 2600, and ways to choose 3 vowels = C(5, 3) = 10. So P(All Vowels) = 10/2600 = 1/220.",
  },
  {
    question:
      "How many different 5-digit numbers can be formed using the digits 0-9, if the first digit cannot be 0?",
    options: ["90000", "80000", "9000", "100000"],
    correctAnswer: "90000",
    explanation:
      "The first digit can be any of 1-9 (9 choices), and the remaining 4 can be 0-9 (10 choices each). So total = 9 * 10^4 = 90000.",
  },
  {
    question:
      "In a standard deck of cards, what is the probability of drawing a queen or a heart?",
    options: ["4/52", "1/13", "16/52", "5/52"],
    correctAnswer: "16/52",
    explanation:
      "There are 4 queens and 13 hearts, but 1 queen of hearts is counted twice. So P(Queen or Heart) = (4 + 13 - 1) / 52 = 16/52.",
  },
  {
    question:
      "How many different ways can you select 3 questions from a pool of 10 for a quiz?",
    options: ["120", "210", "100", "300"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 questions from 10 is C(10, 3) = 10! / (3! * 7!) = 120.",
  },
  {
    question:
      "What is the probability of rolling a sum of 8 with two six-sided dice?",
    options: ["5/36", "1/6", "1/12", "1/4"],
    correctAnswer: "5/36",
    explanation:
      "The combinations for a sum of 8 are (2,6), (3,5), (4,4), (5,3), and (6,2). Total outcomes = 36, so P(Sum of 8) = 5/36.",
  },
  {
    question:
      "A box contains 3 red, 2 blue, and 5 green marbles. If one marble is drawn at random, what is the probability that it is not red?",
    options: ["2/5", "4/5", "1/3", "3/10"],
    correctAnswer: "4/5",
    explanation:
      "Total marbles = 3 + 2 + 5 = 10. Non-red marbles = 2 + 5 = 7. So P(Not Red) = 7/10.",
  },
  {
    question:
      "If a password consists of 2 letters followed by 3 digits, how many different passwords can be formed using the English alphabet and digits 0-9?",
    options: ["676000", "678000", "100000", "1000000"],
    correctAnswer: "676000",
    explanation:
      "The number of different passwords is 26^2 * 10^3 = 676 * 1000 = 676000.",
  },
];
