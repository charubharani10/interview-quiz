export const test5 = [
  {
    question:
      "In a class of 20 students, 12 are girls and 8 are boys. If a committee of 5 students is to be formed, what is the probability that it will have at least 3 girls?",
    options: ["0.525", "0.475", "0.500", "0.550"],
    correctAnswer: "0.525",
    explanation:
      "Calculate the cases: (3 girls, 2 boys) + (4 girls, 1 boy) + (5 girls). The probability is (C(12,3)*C(8,2) + C(12,4)*C(8,1) + C(12,5)) / C(20,5) = 0.525.",
  },
  {
    question:
      "How many ways can you arrange the letters of the word 'MISSISSIPPI'?",
    options: ["495", "14400", "34650", "12000"],
    correctAnswer: "34650",
    explanation: "Total arrangements = 11! / (1! * 4! * 4! * 2!) = 34650.",
  },
  {
    question:
      "A box contains 6 red and 4 green balls. If 3 balls are drawn at random, what is the probability that at least one ball is green?",
    options: ["0.752", "0.675", "0.800", "0.625"],
    correctAnswer: "0.752",
    explanation:
      "P(at least 1 green) = 1 - P(no green) = 1 - (C(6,3)/C(10,3)) = 0.752.",
  },
  {
    question:
      "In how many ways can you select a president, a secretary, and a treasurer from a group of 10 people?",
    options: ["720", "5040", "1000", "900"],
    correctAnswer: "720",
    explanation: "Number of arrangements = P(10,3) = 10! / (10-3)! = 720.",
  },
  {
    question:
      "If 5 cards are drawn from a standard deck of 52 cards, what is the probability that all 5 cards are hearts?",
    options: ["0.0012", "0.0004", "0.0123", "0.0024"],
    correctAnswer: "0.0012",
    explanation: "P(all hearts) = C(13,5) / C(52,5) = 0.0012.",
  },
  {
    question:
      "A bag contains 3 white, 2 black, and 5 red balls. If 4 balls are drawn randomly, what is the probability that exactly 2 are red?",
    options: ["0.25", "0.30", "0.15", "0.20"],
    correctAnswer: "0.20",
    explanation: "P(exactly 2 red) = (C(5,2) * C(5,2)) / C(10,4) = 0.20.",
  },
  {
    question:
      "A code consists of 4 digits followed by 2 letters. If digits cannot be repeated and letters can be repeated, how many different codes can be formed?",
    options: ["336000", "450000", "624000", "720000"],
    correctAnswer: "336000",
    explanation: "Total = P(10,4) * 26^2 = 336000.",
  },
  {
    question:
      "A committee of 6 members is to be formed from 10 men and 8 women. What is the probability that the committee will consist of 4 men and 2 women?",
    options: ["0.300", "0.225", "0.175", "0.250"],
    correctAnswer: "0.225",
    explanation: "P(4 men, 2 women) = (C(10,4) * C(8,2)) / C(18,6) = 0.225.",
  },
  {
    question:
      "In how many different ways can the letters of the word 'BANANA' be arranged?",
    options: ["60", "120", "30", "24"],
    correctAnswer: "60",
    explanation: "Total arrangements = 6! / (3!) = 60 (due to 3 A's).",
  },
  {
    question:
      "If a die is rolled four times, what is the probability that at least one 6 is rolled?",
    options: ["0.493", "0.421", "0.333", "0.547"],
    correctAnswer: "0.493",
    explanation: "P(at least one 6) = 1 - P(no 6) = 1 - (5/6)^4 = 0.493.",
  },
];
