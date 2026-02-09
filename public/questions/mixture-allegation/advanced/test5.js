export const test5 = [
  {
    question:
      "A vendor sells a mixture of two types of nuts, type A costing $10 per kg and type B costing $15 per kg. If he wants to prepare 60 kg of the mixture costing $12 per kg, how many kg of each type should he use?",
    options: [
      "30 kg of A and 30 kg of B",
      "40 kg of A and 20 kg of B",
      "50 kg of A and 10 kg of B",
      "20 kg of A and 40 kg of B",
    ],
    correctAnswer: "40 kg of A and 20 kg of B",
    explanation:
      "Let x kg be the amount of type A and y kg be type B. We have x + y = 60 and 10x + 15y = 12 * 60. Solving gives x = 40 kg of A and y = 20 kg of B.",
  },
  {
    question:
      "A mixture of two liquids, A and B, is in the ratio 5:3. If 10 liters of A is added, the ratio changes to 3:2. What was the initial quantity of liquid A?",
    options: ["20 liters", "25 liters", "30 liters", "35 liters"],
    correctAnswer: "30 liters",
    explanation:
      "Let the initial quantities be 5x and 3x. After adding 10 liters of A, we have (5x + 10) / 3x = 3/2. Solving gives x = 6, so A = 5 * 6 = 30 liters.",
  },
  {
    question:
      "A chemist mixes two solutions with concentrations of 25% and 75% acid. If he wants to create 80 liters of a solution with a concentration of 50% acid, how many liters of each solution should he mix?",
    options: [
      "40 liters of each",
      "30 liters of 25% and 50 liters of 75%",
      "20 liters of 25% and 60 liters of 75%",
      "10 liters of 25% and 70 liters of 75%",
    ],
    correctAnswer: "30 liters of 25% and 50 liters of 75%",
    explanation:
      "Let x be the liters of 25% solution and y be the liters of 75% solution. We have x + y = 80 and 0.25x + 0.75y = 0.50 * 80. Solving gives x = 30 and y = 50.",
  },
  {
    question:
      "A person has two types of fuel, type X costing $3 per liter and type Y costing $4 per liter. If he wants to prepare 100 liters of a mixture costing $3.50 per liter, how many liters of each type should he use?",
    options: [
      "60 liters of X and 40 liters of Y",
      "40 liters of X and 60 liters of Y",
      "50 liters of X and 50 liters of Y",
      "70 liters of X and 30 liters of Y",
    ],
    correctAnswer: "60 liters of X and 40 liters of Y",
    explanation:
      "Let x be the liters of fuel X and y be the liters of fuel Y. We have x + y = 100 and 3x + 4y = 3.5 * 100. Solving gives x = 60 and y = 40.",
  },
  {
    question:
      "A solution contains 25% salt and another solution contains 75% salt. If 10 liters of the first solution is mixed with 15 liters of the second, what is the concentration of salt in the mixture?",
    options: ["50%", "55%", "60%", "65%"],
    correctAnswer: "55%",
    explanation:
      "Salt in 10 liters of first solution = 0.25 * 10 = 2.5 liters. Salt in 15 liters of second solution = 0.75 * 15 = 11.25 liters. Total salt = 2.5 + 11.25 = 13.75 liters. Total volume = 10 + 15 = 25 liters. Concentration = (13.75 / 25) * 100 = 55%.",
  },
  {
    question:
      "A merchant mixes two varieties of tea costing $5 and $10 per kg respectively. If he sells the mixture for $7 per kg, what is the ratio of the two varieties in the mixture?",
    options: ["1:2", "2:1", "1:3", "3:1"],
    correctAnswer: "2:1",
    explanation:
      "Let x kg be the quantity of tea costing $5 and y kg be the quantity of tea costing $10. We have x + y = total weight and 5x + 10y = 7(x + y). Solving gives the ratio x:y = 2:1.",
  },
  {
    question:
      "A vessel contains 60 liters of a mixture of milk and water in the ratio 5:1. If 12 liters of water is added to the mixture, what will be the new ratio of milk to water?",
    options: ["5:2", "5:3", "5:4", "5:5"],
    correctAnswer: "5:4",
    explanation:
      "Initially, milk = (5/6)*60 = 50 liters and water = (1/6)*60 = 10 liters. After adding 12 liters of water, new water = 10 + 12 = 22 liters. New ratio = 50:22 = 25:11, which simplifies to 5:4.",
  },
  {
    question:
      "A container has 100 liters of a mixture of two liquids, A and B, in the ratio of 3:2. If 10 liters of liquid A is removed and replaced with 10 liters of liquid B, what will be the new ratio of A to B in the mixture?",
    options: ["3:4", "2:5", "1:2", "3:5"],
    correctAnswer: "3:4",
    explanation:
      "Initially, A = (3/5) * 100 = 60 liters and B = (2/5) * 100 = 40 liters. After removing 10 liters of A, A = 60 - 10 = 50 liters. After adding 10 liters of B, B = 40 + 10 = 50 liters. New ratio = 50:50 = 3:4.",
  },
  {
    question:
      "A shopkeeper has a mixture of 40 kg of fruit A and 60 kg of fruit B. If he adds 20 kg of fruit A and 10 kg of fruit B, what will be the new ratio of A to B?",
    options: ["1:2", "3:4", "2:3", "4:3"],
    correctAnswer: "2:3",
    explanation:
      "Initially, A = 40 kg and B = 60 kg. After adding 20 kg of A and 10 kg of B, A = 40 + 20 = 60 kg and B = 60 + 10 = 70 kg. New ratio = 60:70 = 6:7.",
  },
  {
    question:
      "A liquid mixture contains 15% alcohol and 85% water. If 20 liters of the mixture is replaced with 20 liters of pure alcohol, what will be the new percentage of alcohol in the mixture?",
    options: ["35%", "40%", "30%", "45%"],
    correctAnswer: "35%",
    explanation:
      "Alcohol in 20 liters of the mixture = 0.15 * 20 = 3 liters. Remaining alcohol = (0.15 * 80) = 12 liters. After adding 20 liters of alcohol, total alcohol = 12 + 20 = 32 liters. Total mixture = 100 liters. New percentage = (32/100) * 100 = 32%.",
  },
];
