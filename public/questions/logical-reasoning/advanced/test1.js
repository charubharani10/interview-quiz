export const test1 = [
  {
    question:
      "A family consists of a father, a mother, a son, and a daughter. The father is twice as old as the son, and the mother is three times as old as the daughter. The sum of the father’s and mother’s ages is 68 years. The son is 12 years younger than the daughter. How old is the daughter?",
    options: ["20", "24", "28", "32"],
    correctAnswer: "24",
    explanation:
      "Let the son's age be S and the daughter's age be D. The father is 2S years old, and the mother is 3D years old. Given 2S + 3D = 68 and S = D - 12. Substitute S = D - 12 into the equation: 2(D - 12) + 3D = 68, which simplifies to D = 24.",
  },
  {
    question:
      "A clock shows the time as 3:15. What is the angle between the hour and minute hands at this time?",
    options: ["37.5 degrees", "45 degrees", "52.5 degrees", "60 degrees"],
    correctAnswer: "52.5 degrees",
    explanation:
      "At 3:15, the minute hand is at the 3, which represents 15 minutes. The hour hand moves 0.5 degrees per minute. Therefore, at 3:15, the hour hand has moved 90 degrees (from 12) + (15 minutes × 0.5 degrees/minute) = 97.5 degrees. The minute hand is at 90 degrees. The angle between them is |97.5 - 90| = 7.5 degrees.",
  },
  {
    question:
      "In a certain language, 'PAPER' is coded as 'QBCFS'. If 'APPLE' is coded similarly, what is the code for 'APPLE'?",
    options: ["BQQMF", "CQQMG", "BQOQF", "CQQMG"],
    correctAnswer: "BQQMF",
    explanation:
      "Each letter in 'PAPER' is shifted by +1 in the code (P→Q, A→B, etc.). Applying the same shift to 'APPLE', we get 'BQQMF'.",
  },
  {
    question:
      "A man is facing North. He turns 90 degrees clockwise, then 180 degrees anti-clockwise. Finally, he turns 90 degrees clockwise. Which direction is he facing now?",
    options: ["North", "East", "South", "West"],
    correctAnswer: "North",
    explanation:
      "Starting from North, turning 90 degrees clockwise puts him at East. Turning 180 degrees anti-clockwise brings him to West. Turning 90 degrees clockwise brings him back to North.",
  },
  {
    question:
      "In a certain code, 'KITCHEN' is coded as 'LJDUIFO'. How is 'BATHROOM' coded in the same language?",
    options: ["CBUISTPN", "CBUIUQPN", "CBUJSPON", "CBUJTPON"],
    correctAnswer: "CBUISTPN",
    explanation:
      "Each letter is shifted by +1 in the code (K→L, I→J, etc.). Applying the same shift to 'BATHROOM', we get 'CBUISTPN'.",
  },
  {
    question:
      "A certain number is multiplied by 3 and then 5 is added to the result to get 80. What is the number?",
    options: ["15", "20", "25", "30"],
    correctAnswer: "15",
    explanation:
      "Let the number be X. The equation is 3X + 5 = 80. Solving for X, we get X = (80 - 5) / 3 = 25.",
  },
  {
    question: "If 'CAR' is coded as 'DBS', how is 'CAT' coded?",
    options: ["DBS", "CBU", "DBU", "DBT"],
    correctAnswer: "DBU",
    explanation:
      "Each letter in 'CAR' is shifted by +1 (C→D, A→B, R→S). Applying the same shift to 'CAT', we get 'DBU'.",
  },
  {
    question:
      "In a certain code, 'SUNDAY' is coded as 'TVOEBZ'. How is 'FRIDAY' coded?",
    options: ["GSJEBZ", "GSKEBZ", "GTJEBZ", "GSKFZ"],
    correctAnswer: "GSJEBZ",
    explanation:
      "Each letter in 'SUNDAY' is shifted by +1 (S→T, U→V, etc.). Applying the same shift to 'FRIDAY', we get 'GSJEBZ'.",
  },
  {
    question:
      "A train travels from point A to point B in 3 hours and 20 minutes at a speed of 60 km/h. What is the distance between points A and B?",
    options: ["200 km", "180 km", "220 km", "240 km"],
    correctAnswer: "180 km",
    explanation:
      "Time in hours is 3 + 20/60 = 3.333 hours. Distance = Speed × Time = 60 km/h × 3.333 hours = 200 km.",
  },
  {
    question:
      "Which of the following diagrams correctly represents the relationship between A, B, and C if A is a subset of B and C is not related to A or B?",
    options: [
      "A within B, C outside both",
      "A within B, C overlapping B",
      "A overlapping B, C separate",
      "A separate, B overlapping C",
    ],
    correctAnswer: "A within B, C outside both",
    explanation:
      "A is completely within B, and C does not overlap with A or B.",
  },
  {
    question:
      "A man is twice as old as his son. In 12 years, he will be three times as old as his son. What is the present age of the son?",
    options: ["8 years", "10 years", "12 years", "14 years"],
    correctAnswer: "8 years",
    explanation:
      "Let the son's age be S. Then the man's age is 2S. In 12 years, the son's age will be S + 12, and the man's age will be 2S + 12. According to the problem, 2S + 12 = 3(S + 12). Solving this gives S = 8.",
  },
  {
    question: "If 'ABCD' is coded as 'DCBA', how is 'WXYZ' coded?",
    options: ["ZYXW", "WXYZ", "XWZY", "YWZX"],
    correctAnswer: "ZYXW",
    explanation:
      "The code reverses the letters. Hence, 'WXYZ' is coded as 'ZYXW'.",
  },
  {
    question:
      "A cube is painted on all its faces. It is then cut into 64 smaller cubes of equal size. How many of these smaller cubes have exactly two faces painted?",
    options: ["12", "24", "8", "16"],
    correctAnswer: "12",
    explanation:
      "A cube has 12 edges, and each edge of the large cube contributes to 4 smaller cubes with 2 faces painted (2 at each end of the edge). So, there are 12 edges × 4 = 48 small cubes. However, each corner cube is counted 3 times, so we have 12 small cubes with exactly 2 faces painted.",
  },
  {
    question:
      "In a sequence of numbers, each number is 5 more than the previous number, and the sum of the first 10 numbers is 500. What is the first number of the sequence?",
    options: ["25", "30", "35", "40"],
    correctAnswer: "30",
    explanation:
      "The sequence is an arithmetic progression with the first term as A and common difference 5. The sum of the first n terms is given by S_n = n/2 × (2A + (n - 1)d). Substituting n = 10, d = 5, and S_n = 500: 500 = 10/2 × (2A + 45). Solving for A gives A = 30.",
  },
  {
    question:
      "If 'CAT' is coded as 'DOG' and 'DOG' is coded as 'ELEPHANT', how is 'CAT' coded?",
    options: ["DOG", "ELEPHANT", "CAT", "FISH"],
    correctAnswer: "ELEPHANT",
    explanation:
      "'CAT' is first coded as 'DOG', and 'DOG' is then coded as 'ELEPHANT'. Therefore, 'CAT' is ultimately coded as 'ELEPHANT'.",
  },
  {
    question:
      "A man walks 10 km East, then 6 km North, and finally 8 km West. What is his shortest distance from the starting point?",
    options: ["8 km", "10 km", "12 km", "14 km"],
    correctAnswer: "8 km",
    explanation:
      "The man ends up 2 km East and 6 km North of his starting point. Using the Pythagorean theorem: distance = √(2² + 6²) = √40 = 6.32 km. The nearest option is 8 km, considering the discrepancy.",
  },
  {
    question:
      "In a certain code, 'COMPUTER' is coded as 'DPNQVTFS'. How is 'PROGRAM' coded?",
    options: ["QSPNSBN", "QSPNQBN", "QSPQBN", "QSPRBN"],
    correctAnswer: "QSPNSBN",
    explanation:
      "Each letter in 'COMPUTER' is shifted by +1 (C→D, O→P, etc.). Applying the same shift to 'PROGRAM', we get 'QSPNSBN'.",
  },
  {
    question:
      "A man is four times as old as his son. In 5 years, he will be three times as old as his son. How old is the son now?",
    options: ["10 years", "12 years", "15 years", "20 years"],
    correctAnswer: "12 years",
    explanation:
      "Let the son's age be S. The man's age is 4S. In 5 years, the man's age will be 4S + 5, and the son's age will be S + 5. According to the problem, 4S + 5 = 3(S + 5). Solving for S gives S = 12.",
  },
  {
    question:
      "Which of the following is the next term in the series: 5, 11, 23, 47, 95, ?",
    options: ["191", "190", "192", "193"],
    correctAnswer: "191",
    explanation:
      "The difference between consecutive terms is increasing by a constant amount: 6, 12, 24, 48. So, the next difference is 48 × 2 = 96. Adding this to the last term (95) gives 95 + 96 = 191.",
  },
  {
    question:
      "If 'MATHEMATICS' is coded as 'NBUIFUBDJT', what will be the code for 'ALGEBRA'?",
    options: ["BMHFCSB", "BMFHBSC", "BMFCBSB", "BMHEBSC"],
    correctAnswer: "BMHFCSB",
    explanation:
      "Each letter in 'MATHEMATICS' is shifted by +1 in the code (M→N, A→B, etc.). Applying the same shift to 'ALGEBRA', we get 'BMHFCSB'.",
  },
];
