export const test1 = [
  {
    question:
      "In how many different ways can the letters of the word 'COMMITTEE' be arranged?",
    options: ["630", "1260", "5040", "720"],
    correctAnswer: "1260",
    explanation:
      "The word 'COMMITTEE' has 9 letters with 'M' occurring twice and 'T' occurring twice. Arrangements = 9! / (2! * 2!) = 1260.",
  },
  {
    question:
      "A bag contains 5 red, 6 blue, and 4 green balls. If 4 balls are drawn at random, what is the probability that at least 2 of them are red?",
    options: ["0.546", "0.416", "0.302", "0.667"],
    correctAnswer: "0.546",
    explanation:
      "Total ways to draw 4 balls = C(15, 4). Calculate ways for at least 2 red and divide by total ways.",
  },
  {
    question:
      "How many ways can you choose 3 players from a cricket team of 15 players such that two of the players selected are specific players?",
    options: ["13", "12", "10", "15"],
    correctAnswer: "13",
    explanation:
      "If 2 specific players are already chosen, we have 13 players left. The total ways to choose 1 more player from these 13 = C(13, 1) = 13.",
  },
  {
    question:
      "What is the probability of drawing 3 aces from a standard deck of 52 cards when drawing 5 cards?",
    options: ["0.0069", "0.0048", "0.0104", "0.0024"],
    correctAnswer: "0.0024",
    explanation:
      "Using hypergeometric distribution: P(X=3) = C(4,3) * C(48,2) / C(52,5) = 0.0024.",
  },
  {
    question:
      "In how many ways can a group of 10 students be divided into 2 teams of 5 each?",
    options: ["252", "126", "210", "90"],
    correctAnswer: "126",
    explanation:
      "The number of ways to select 5 students out of 10 is C(10,5). Since teams are indistinguishable, divide by 2: C(10, 5) / 2 = 126.",
  },
  {
    question:
      "A box contains 6 different books. How many ways can 3 books be selected and arranged on a shelf?",
    options: ["120", "60", "720", "30"],
    correctAnswer: "120",
    explanation:
      "The number of ways to choose 3 books and arrange them is P(6, 3) = 6! / (6-3)! = 120.",
  },
  {
    question:
      "What is the probability of getting at least 2 heads when flipping 6 coins?",
    options: ["0.7188", "0.8125", "0.6875", "0.8124"],
    correctAnswer: "0.6875",
    explanation:
      "Calculate P(X >= 2) = 1 - P(X=0) - P(X=1) using binomial probability formula.",
  },
  {
    question:
      "In a class of 20 students, how many ways can the teacher select a president, vice president, and secretary?",
    options: ["6840", "1200", "400", "800"],
    correctAnswer: "6840",
    explanation:
      "The number of ways to select and arrange 3 different roles from 20 students is P(20, 3) = 20! / (20-3)! = 6840.",
  },
  {
    question:
      "If you have 10 different books and want to arrange them on a shelf so that 3 specific books are always together, how many arrangements are possible?",
    options: ["40320", "50400", "72000", "86400"],
    correctAnswer: "40320",
    explanation:
      "Treat the 3 specific books as one unit. Arrangements = 8! * 3! = 40320.",
  },
  {
    question:
      "In how many different ways can 8 students be seated in a row if two specific students must sit next to each other?",
    options: ["5040", "40320", "5760", "1440"],
    correctAnswer: "5040",
    explanation:
      "Treat the 2 specific students as one unit. Thus, we have 7 units to arrange: 7! * 2! = 5040.",
  },
  {
    question:
      "A committee of 5 members is to be formed from a group of 10 men and 8 women. What is the probability that the committee has at least 3 men?",
    options: ["0.386", "0.480", "0.580", "0.630"],
    correctAnswer: "0.386",
    explanation:
      "Calculate total combinations and favorable combinations for at least 3 men. P(at least 3 men) = (C(10,3)*C(8,2) + C(10,4)*C(8,1) + C(10,5)) / C(18,5).",
  },
  {
    question:
      "How many ways can 6 different colored balls be placed in 3 boxes if no box can be empty?",
    options: ["540", "720", "450", "600"],
    correctAnswer: "540",
    explanation:
      "Using the principle of inclusion-exclusion: Total arrangements - (Arrangements with 1 empty box).",
  },
  {
    question:
      "If a dice is thrown 5 times, what is the probability of getting at least one '6'?",
    options: ["0.593", "0.667", "0.719", "0.777"],
    correctAnswer: "0.667",
    explanation: "P(at least one '6') = 1 - P(no '6') = 1 - (5/6)^5 = 0.667.",
  },
  {
    question:
      "A school has 5 different sports teams. In how many ways can a sports day be arranged if each team must compete in a different event?",
    options: ["120", "60", "30", "150"],
    correctAnswer: "120",
    explanation: "The number of arrangements for 5 teams is 5! = 120.",
  },
  {
    question:
      "From a pack of 52 cards, what is the probability of drawing 4 aces in a hand of 13 cards?",
    options: ["0.0001", "0.001", "0.004", "0.016"],
    correctAnswer: "0.0001",
    explanation:
      "Use hypergeometric distribution: P(X=4) = (C(4,4) * C(48,9)) / C(52,13).",
  },
  {
    question:
      "In how many ways can 10 different books be arranged on a shelf such that 4 specific books are never together?",
    options: ["3628800", "403200", "288000", "362880"],
    correctAnswer: "3628800",
    explanation:
      "Total arrangements - arrangements with 4 specific books together = 10! - 7!*4! = 3628800.",
  },
  {
    question:
      "If a coin is tossed 8 times, what is the probability of getting exactly 4 heads?",
    options: ["0.273", "0.207", "0.320", "0.345"],
    correctAnswer: "0.273",
    explanation:
      "Using binomial probability formula: P(X=4) = C(8,4)*(1/2)^8 = 0.273.",
  },
  {
    question:
      "How many different ways can you arrange the letters of the word 'BANANA'?",
    options: ["60", "120", "30", "90"],
    correctAnswer: "60",
    explanation: "Arrangements = 6! / (3!) = 60 (since 'A' appears 3 times).",
  },
  {
    question:
      "A box contains 4 white, 5 black, and 3 red balls. If 5 balls are drawn at random, what is the probability that at least 2 are red?",
    options: ["0.150", "0.180", "0.225", "0.200"],
    correctAnswer: "0.150",
    explanation:
      "Calculate the total combinations and favorable outcomes for at least 2 red balls.",
  },
  {
    question:
      "How many ways can a teacher select 4 students from a class of 20, if 2 specific students must be included in the selection?",
    options: ["171", "150", "190", "200"],
    correctAnswer: "171",
    explanation: "Select 2 more students from the remaining 18: C(18,2) = 171.",
  },
];
