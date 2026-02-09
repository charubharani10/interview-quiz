export const test3 = [
  {
    question:
      "A group of 12 students is to be divided into 3 teams of 4. How many ways can this be done?",
    options: ["27720", "490", "2772", "495"],
    correctAnswer: "495",
    explanation:
      "The number of ways to divide into teams is given by: (12!)/(4!^3 * 3!) = 495.",
  },
  {
    question:
      "A box contains 8 red and 6 blue balls. If 4 balls are drawn randomly, what is the probability that at least one is blue?",
    options: ["0.769", "0.845", "0.667", "0.590"],
    correctAnswer: "0.769",
    explanation:
      "P(at least one blue) = 1 - P(all red) = 1 - (C(8,4)/C(14,4)).",
  },
  {
    question:
      "How many different 5-digit numbers can be formed using the digits 1, 2, 3, 4, 5, and 6 if repetition is not allowed?",
    options: ["720", "600", "840", "1000"],
    correctAnswer: "720",
    explanation:
      "The number of ways to arrange 5 digits from 6 is P(6,5) = 6!/(6-5)! = 720.",
  },
  {
    question:
      "In a race with 10 participants, how many ways can the first three places be awarded?",
    options: ["720", "1000", "5040", "120"],
    correctAnswer: "720",
    explanation:
      "The number of ways to choose 3 places from 10 is P(10,3) = 10!/(10-3)! = 720.",
  },
  {
    question:
      "If you roll two dice, what is the probability of getting a sum of 7?",
    options: ["0.167", "0.25", "0.333", "0.142"],
    correctAnswer: "0.167",
    explanation:
      "There are 6 combinations to get a sum of 7 out of 36 possible outcomes. P(sum=7) = 6/36 = 0.167.",
  },
  {
    question:
      "From a deck of 52 playing cards, what is the probability of drawing 2 aces in succession without replacement?",
    options: ["0.024", "0.034", "0.036", "0.046"],
    correctAnswer: "0.024",
    explanation: "P(2 aces) = (4/52) * (3/51) = 12/2652 = 0.024.",
  },
  {
    question:
      "In how many different ways can 5 books be arranged on a shelf if 2 specific books must be together?",
    options: ["120", "60", "240", "30"],
    correctAnswer: "120",
    explanation:
      "Consider the 2 books as one unit: Arrange 4 units (2 books together + 3 others) = 4! * 2! = 120.",
  },
  {
    question:
      "How many different ways can you select 3 letters from the word 'COMBINATION' if repetitions are not allowed?",
    options: ["220", "330", "110", "10"],
    correctAnswer: "220",
    explanation:
      "The number of ways to choose 3 letters from 11 distinct letters is C(11,3) = 165.",
  },
  {
    question:
      "In a class of 30 students, how many ways can a teacher choose 5 students to represent the class if no specific student should be chosen more than once?",
    options: ["142506", "186048", "186", "240"],
    correctAnswer: "142506",
    explanation:
      "The number of ways to choose 5 students from 30 is C(30,5) = 142506.",
  },
  {
    question:
      "If a bag contains 3 red, 2 green, and 5 yellow balls, what is the probability of drawing 2 red balls if 2 balls are drawn at random?",
    options: ["0.214", "0.121", "0.154", "0.167"],
    correctAnswer: "0.214",
    explanation: "P(2 red) = (C(3,2) * C(7,0)) / C(10,2) = (3/45) = 0.214.",
  },
];
