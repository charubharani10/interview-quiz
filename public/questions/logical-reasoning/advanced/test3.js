export const test3 = [
  {
    question:
      "Which number does not fit in the sequence? 5, 10, 20, 40, 80, 120",
    options: ["10", "40", "80", "120"],
    correctAnswer: "120",
    explanation:
      "The sequence doubles each time: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40, 40 × 2 = 80. 120 does not fit this pattern.",
  },
  {
    question: "What is the next number in the series? 2, 8, 18, 32, ____?",
    options: ["50", "54", "60", "68"],
    correctAnswer: "50",
    explanation:
      "The differences between terms are: 6, 10, 14. The next difference is 18, so 32 + 18 = 50.",
  },
  {
    question:
      "Which number should replace the question mark? 1, 4, 9, 16, 25, ____?",
    options: ["30", "36", "40", "45"],
    correctAnswer: "36",
    explanation:
      "The series consists of square numbers: 1², 2², 3², 4², 5². The next number is 6² = 36.",
  },
  {
    question: "What letter comes next in the sequence? C, F, I, L, ____?",
    options: ["M", "N", "O", "P"],
    correctAnswer: "O",
    explanation:
      "The sequence increases by 3 letters each time: C (C), F (C + 3), I (F + 3), L (I + 3). The next letter is O (L + 3).",
  },
  {
    question:
      "Which number should replace the question mark? 2, 5, 10, 17, 26, ____?",
    options: ["37", "39", "41", "43"],
    correctAnswer: "37",
    explanation:
      "The differences between terms are increasing by 2: 3, 5, 7, 9. Adding the next difference of 11 to 26, we get 26 + 11 = 37.",
  },
  {
    question: "What number is missing in the series? 1, 1, 2, 6, 24, ____?",
    options: ["48", "120", "144", "180"],
    correctAnswer: "120",
    explanation:
      "The series is the factorial sequence starting from 0: 0!, 1!, 2!, 3!, 4!. The next number is 5! = 120.",
  },
  {
    question: "What is the next number in the series? 2, 6, 12, 20, 30, ____?",
    options: ["40", "42", "44", "50"],
    correctAnswer: "42",
    explanation:
      "The differences between terms are increasing by 2: 4, 6, 8, 10. Adding the next difference of 12 to 30, we get 30 + 12 = 42.",
  },
  {
    question:
      "Which letter should come next in the sequence? A, C, E, G, ____?",
    options: ["I", "J", "K", "L"],
    correctAnswer: "I",
    explanation:
      "The sequence increases by 2 letters each time: A (A), C (A + 2), E (C + 2), G (E + 2). The next letter is I (G + 2).",
  },
  {
    question: "Which number is missing in the series? 2, 5, 10, 17, 26, ____?",
    options: ["36", "37", "38", "39"],
    correctAnswer: "37",
    explanation:
      "The differences between terms are increasing by 2: 3, 5, 7, 9. Adding the next difference of 11 to 26, we get 26 + 11 = 37.",
  },
  {
    question: "What is the next number in the series? 1, 3, 6, 10, 15, ____?",
    options: ["20", "21", "22", "24"],
    correctAnswer: "21",
    explanation:
      "The series consists of triangular numbers: 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5. The next number is 1+2+3+4+5+6 = 21.",
  },
  {
    question: "What number comes next in the sequence? 3, 9, 27, 81, ____?",
    options: ["162", "243", "324", "405"],
    correctAnswer: "243",
    explanation:
      "Each number is multiplied by 3 to get the next number: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81, 81 × 3 = 243.",
  },
  {
    question:
      "Consider the sequence: 3, 9, 27, 81, ?. What is the next number in the sequence?",
    options: ["243", "162", "324", "108"],
    correctAnswer: "243",
    explanation:
      "The sequence follows the pattern of multiplying each number by 3. The next number is 81 × 3 = 243.",
  },
  {
    question:
      "In a certain code, 'FIRE' is written as 'GJQF'. How would 'WATER' be written in the same code?",
    options: ["XBSFU", "XBSFQ", "XCUFQ", "YBTEU"],
    correctAnswer: "XBSFU",
    explanation:
      "Each letter is shifted by +1: F→G, I→J, R→S, E→F. Applying the same shift to 'WATER', we get 'XBSFU'.",
  },
  {
    question:
      "A certain pattern is formed as follows: 2, 6, 12, 20, 30, ?. What is the next number in the pattern?",
    options: ["42", "44", "36", "52"],
    correctAnswer: "42",
    explanation:
      "The differences between terms are increasing by 2: 4, 6, 8, 10. Adding the next difference of 12 to 30, we get 30 + 12 = 42.",
  },
  {
    question:
      "If 'SIX' is coded as 'HCP' and 'THREE' is coded as 'CQQVF', how is 'NINE' coded?",
    options: ["QKPF", "QJMF", "OJME", "QKME"],
    correctAnswer: "QKPF",
    explanation:
      "Each letter is shifted in a specific pattern: S→H, I→C, X→P. Applying the same shift to 'NINE', we get 'QKPF'.",
  },
  {
    question: "Find the odd one out: 7, 13, 19, 23, 29, 37, 43, 51",
    options: ["7", "13", "19", "51"],
    correctAnswer: "51",
    explanation:
      "The series consists of prime numbers. 51 is not a prime number.",
  },
  {
    question:
      "If A is to B as C is to D, and A is 5 more than B, and C is 10 less than D, which of the following is true?",
    options: [
      "A - B = C - D",
      "A + B = C + D",
      "A - C = B - D",
      "A + C = B + D",
    ],
    correctAnswer: "A - B = C - D",
    explanation:
      "Given A = B + 5 and C = D - 10, the difference A - B = 5 and C - D = -10. Thus, A - B = C - D is true.",
  },
  {
    question: "Which number logically follows this series: 2, 5, 10, 17, 26, ?",
    options: ["37", "36", "38", "39"],
    correctAnswer: "37",
    explanation:
      "The differences between terms are increasing by 2: 3, 5, 7, 9. Adding the next difference of 11 to 26, we get 26 + 11 = 37.",
  },
  {
    question:
      "A clock shows the time as 3:15. What is the angle between the hour and minute hands?",
    options: ["30 degrees", "37.5 degrees", "45 degrees", "90 degrees"],
    correctAnswer: "37.5 degrees",
    explanation:
      "At 3:15, the minute hand is at 90 degrees. The hour hand moves 0.5 degrees per minute. So, at 15 minutes past 3, it moves 7.5 degrees. The angle between them is 90 - 52.5 = 37.5 degrees.",
  },
  {
    question:
      "If 'ABCD' is written as 'ZXYW' in a certain code, how will 'EFGH' be written?",
    options: ["VWXY", "UVWX", "ZWXY", "XYWV"],
    correctAnswer: "XYWV",
    explanation:
      "The code replaces each letter with its reverse in the alphabet: A → Z, B → Y, C → X, D → W. Applying this to 'EFGH', we get 'XYWV'.",
  },
];
