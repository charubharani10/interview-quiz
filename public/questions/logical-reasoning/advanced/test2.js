export const test2 = [
  {
    question:
      "A man buys a watch for $200 and sells it at a 20% profit. What is the selling price of the watch?",
    options: ["$240", "$250", "$260", "$280"],
    correctAnswer: "$240",
    explanation:
      "A 20% profit on $200 is 0.20 × $200 = $40. Selling price = $200 + $40 = $240.",
  },
  {
    question:
      "A rectangle has a perimeter of 60 meters and the length is twice the width. What are the dimensions of the rectangle?",
    options: [
      "Length 20m, Width 10m",
      "Length 25m, Width 15m",
      "Length 30m, Width 15m",
      "Length 24m, Width 12m",
    ],
    correctAnswer: "Length 20m, Width 10m",
    explanation:
      "Let the width be W and the length be 2W. The perimeter P = 2(Length + Width) = 2(2W + W) = 60. Solving for W, we get W = 10, and Length = 20 meters.",
  },
  {
    question:
      "A man is standing at a point. He walks 5 km North, then 12 km East, and then 13 km South. How far is he from the starting point?",
    options: ["5 km", "8 km", "10 km", "12 km"],
    correctAnswer: "8 km",
    explanation:
      "The man ends up 5 - 13 = -8 km (8 km South) and 12 km East. Using the Pythagorean theorem: distance = √(12² + 8²) = √(144 + 64) = √208 = 8 km.",
  },
  {
    question:
      "In a certain code, 'EFFECT' is written as 'DFFEBU'. How is 'DISTANCE' coded?",
    options: ["CHRSBMBD", "CHRSBEBD", "CHTSBMCD", "CHRSBDBD"],
    correctAnswer: "CHRSBMBD",
    explanation:
      "Each letter in 'EFFECT' is shifted by -1 in the code (E→D, F→E, etc.). Applying the same shift to 'DISTANCE', we get 'CHRSBMBD'.",
  },
  {
    question:
      "A sequence is defined as follows: a1 = 2, a2 = 5, an = an-1 + an-2. What is the value of a5?",
    options: ["22", "27", "32", "37"],
    correctAnswer: "27",
    explanation:
      "The sequence is 2, 5, 7 (5 + 2), 12 (7 + 5), 19 (12 + 7), 31 (19 + 12). So, a5 = 27.",
  },
  {
    question: "If 'SUN' is coded as 'TSO', how is 'MOON' coded?",
    options: ["NPPQ", "NQPO", "NPPQ", "NQPP"],
    correctAnswer: "NPPQ",
    explanation:
      "Each letter in 'SUN' is shifted by +1 (S→T, U→S, N→O). Applying the same shift to 'MOON', we get 'NPPQ'.",
  },
  {
    question:
      "A man is four times as old as his son. In 10 years, he will be twice as old as his son. What is the son's present age?",
    options: ["10 years", "15 years", "20 years", "25 years"],
    correctAnswer: "15 years",
    explanation:
      "Let the son's age be S. The man's age is 4S. In 10 years, the man's age will be 4S + 10, and the son's age will be S + 10. According to the problem, 4S + 10 = 2(S + 10). Solving for S gives S = 15.",
  },
  {
    question:
      "In a certain code, 'HELLO' is coded as 'IFMMP'. How is 'WORLD' coded?",
    options: ["XPSME", "XPSNF", "XPSME", "YPSME"],
    correctAnswer: "XPSME",
    explanation:
      "Each letter in 'HELLO' is shifted by +1 (H→I, E→F, etc.). Applying the same shift to 'WORLD', we get 'XPSME'.",
  },
  {
    question:
      "Which number should replace the question mark? 5, 12, 23, 36, ____?",
    options: ["52", "51", "50", "61"],
    correctAnswer: "51",
    explanation:
      "The difference between consecutive terms is increasing by 7: 7, 11, 13. Adding the next difference of 15 to the last term 36, we get 36 + 15 = 51.",
  },
  {
    question: "What number comes next in the series? 3, 9, 27, 81, ____?",
    options: ["162", "243", "324", "405"],
    correctAnswer: "243",
    explanation:
      "Each number is multiplied by 3 to get the next number: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81, 81 × 3 = 243.",
  },
  {
    question: "Which letter comes next in the sequence? A, D, G, J, ____?",
    options: ["K", "L", "M", "N"],
    correctAnswer: "K",
    explanation:
      "The sequence is increasing by 3 letters: A (A), D (B, C, D), G (E, F, G), J (H, I, J). The next letter is K.",
  },
  {
    question:
      "Which number does not belong in the series? 7, 14, 28, 42, 56, 72",
    options: ["7", "28", "42", "72"],
    correctAnswer: "72",
    explanation:
      "The series follows a pattern of adding multiples of 7: 7, 14 (7 + 7), 28 (14 + 14), 42 (28 + 14), 56 (42 + 14). 72 does not fit this pattern.",
  },
  {
    question:
      "What number should replace the question mark? 2, 6, 12, 20, ____?",
    options: ["30", "32", "34", "36"],
    correctAnswer: "30",
    explanation:
      "The differences between consecutive terms are increasing by 2: 4, 6, 8. Adding the next difference of 10 to the last term 20, we get 20 + 10 = 30.",
  },
  {
    question: "What is the missing letter in the sequence? F, J, N, R, ____?",
    options: ["T", "U", "V", "W"],
    correctAnswer: "T",
    explanation:
      "The sequence is increasing by 4 letters: F, J (F + 4), N (J + 4), R (N + 4). The next letter is T (R + 4).",
  },
  {
    question: "Which number is missing in the series? 2, 6, 12, 20, 30, ____?",
    options: ["40", "42", "45", "48"],
    correctAnswer: "42",
    explanation:
      "The differences between consecutive terms are increasing by 2: 4, 6, 8, 10. Adding the next difference of 12 to the last term 30, we get 30 + 12 = 42.",
  },
  {
    question: "What comes next in the series? 1, 4, 9, 16, 25, ____?",
    options: ["30", "35", "36", "49"],
    correctAnswer: "36",
    explanation:
      "The series consists of square numbers: 1², 2², 3², 4², 5². The next number is 6² = 36.",
  },
  {
    question:
      "Which number should replace the question mark? 3, 9, 27, 81, ____?",
    options: ["162", "243", "324", "405"],
    correctAnswer: "243",
    explanation:
      "Each number is multiplied by 3 to get the next number: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81, 81 × 3 = 243.",
  },
  {
    question: "What is the next number in the series? 1, 2, 6, 24, 120, ____?",
    options: ["720", "600", "504", "840"],
    correctAnswer: "720",
    explanation:
      "The series is the factorial sequence: 1!, 2!, 3!, 4!, 5!. The next number is 6! = 720.",
  },
  {
    question:
      "Which letter should replace the question mark? L, O, R, U, ____?",
    options: ["V", "W", "X", "Y"],
    correctAnswer: "W",
    explanation:
      "The sequence increases by 3 letters each time: L (L), O (L + 3), R (O + 3), U (R + 3). The next letter is W (U + 3).",
  },
  {
    question:
      "What number should replace the question mark? 4, 11, 20, 31, ____?",
    options: ["40", "42", "44", "50"],
    correctAnswer: "44",
    explanation:
      "The difference between terms is increasing by 2: 7, 9, 11. Adding the next difference of 13 to 31, we get 31 + 13 = 44.",
  },
];
