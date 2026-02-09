export const test3 = [
  {
    question: "If x + y = 10 and xy = 21, what is the value of x^2 + y^2?",
    options: ["49", "50", "51", "52"],
    correctAnswer: "49",
    explanation:
      "Use the identity x^2 + y^2 = (x + y)^2 - 2xy. Substitute: (10)^2 - 2(21) = 100 - 42 = 58.",
  },
  {
    question:
      "What is the value of k if x^2 + kx + 16 = 0 has only one solution?",
    options: ["-8", "-16", "8", "0"],
    correctAnswer: "-8",
    explanation:
      "For one solution, the discriminant must be zero: k^2 - 4*1*16 = 0. Thus, k^2 = 64, so k = ±8.",
  },
  {
    question: "Solve for x: 2x + 5 = 3(x - 2) + 4.",
    options: ["-1", "0", "1", "2"],
    correctAnswer: "0",
    explanation:
      "Distributing gives 2x + 5 = 3x - 6 + 4. Simplifying leads to 2x + 5 = 3x - 2. Thus, x = 0.",
  },
  {
    question:
      "If the sum of squares of two numbers is 50 and their product is 144, find the numbers.",
    options: ["8, 6", "12, 6", "10, 10", "9, 7"],
    correctAnswer: "12, 6",
    explanation:
      "Let the numbers be x and y. The equations are x^2 + y^2 = 50 and xy = 144. Solving gives x = 12 and y = 6.",
  },
  {
    question: "If 2x + 3y = 12 and y = 2x - 4, find x.",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
    explanation:
      "Substituting y into the first equation gives 2x + 3(2x - 4) = 12. Solve to find x = 4.",
  },
  {
    question: "What is the value of x if x^3 - 27 = 0?",
    options: ["0", "3", "6", "9"],
    correctAnswer: "3",
    explanation:
      "Factoring gives (x - 3)(x^2 + 3x + 9) = 0. The only real root is x = 3.",
  },
  {
    question: "Find x if 5^(x + 1) = 125.",
    options: ["2", "3", "4", "5"],
    correctAnswer: "2",
    explanation:
      "Since 125 = 5^3, set the exponents equal: x + 1 = 3. Thus, x = 2.",
  },
  {
    question: "If 4x + 3 = 2x + 15, what is the value of x?",
    options: ["6", "4", "3", "5"],
    correctAnswer: "6",
    explanation:
      "Rearranging gives 4x - 2x = 15 - 3. Thus, 2x = 12, giving x = 6.",
  },
  {
    question: "If x^2 + 4x + 4 = 0, what are the values of x?",
    options: ["-2, -2", "0, 4", "2, -4", "2, 4"],
    correctAnswer: "-2, -2",
    explanation:
      "This is a perfect square: (x + 2)^2 = 0, so x = -2 is a double root.",
  },
  {
    question: "What are the roots of the equation 2x^2 + 8x + 6 = 0?",
    options: ["-1, -3", "-3, -2", "-1, -2", "-2, -3"],
    correctAnswer: "-1, -3",
    explanation:
      "Using the quadratic formula, the roots are x = [-8 ± √(64 - 48)] / 4 = -1, -3.",
  },
];
