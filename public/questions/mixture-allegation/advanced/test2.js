export const test2 = [
  {
    question:
      "A chemist mixes 3 liters of a 25% salt solution with 2 liters of a 50% salt solution. What is the concentration of salt in the new mixture?",
    options: ["35%", "30%", "40%", "45%"],
    correctAnswer: "35%",
    explanation:
      "In the 25% solution, the amount of salt is 0.25 * 3 = 0.75 liters. In the 50% solution, the amount of salt is 0.50 * 2 = 1 liter. Total salt = 0.75 + 1 = 1.75 liters. Total mixture = 3 + 2 = 5 liters. Concentration = (1.75/5) * 100 = 35%.",
  },
  {
    question:
      "Two solutions, A and B, contain acid in the ratio of 4:5. If 10 liters of solution A is mixed with 15 liters of solution B, what will be the ratio of acid in the final mixture?",
    options: ["4:5", "8:9", "5:6", "3:4"],
    correctAnswer: "4:5",
    explanation:
      "Let the total acid in A = 4x and in B = 5y. Then, 10 liters of A = 10 * (4/9) = 4.44 liters of acid, and 15 liters of B = 15 * (5/10) = 7.5 liters of acid. Total acid = 4.44 + 7.5 = 11.94 liters. Total solution = 10 + 15 = 25 liters. Ratio = 11.94 / 25 = 4:5.",
  },
  {
    question:
      "A solution contains 60% alcohol. If 30 liters of this solution is mixed with 50 liters of pure alcohol, what is the final concentration of alcohol in the mixture?",
    options: ["68%", "72%", "75%", "70%"],
    correctAnswer: "72%",
    explanation:
      "In 30 liters of the solution, alcohol = 0.60 * 30 = 18 liters. When mixed with 50 liters of pure alcohol, total alcohol = 18 + 50 = 68 liters. Total volume = 30 + 50 = 80 liters. Concentration = (68/80) * 100 = 85%.",
  },
  {
    question:
      "A mixture contains 30 liters of liquid X which is 20% acid and 70 liters of liquid Y which is 10% acid. If 10 liters of liquid Y is removed and replaced with 10 liters of liquid X, what is the new concentration of acid in the mixture?",
    options: ["15%", "16%", "18%", "20%"],
    correctAnswer: "15%",
    explanation:
      "Initially, acid in X = 0.2 * 30 = 6 liters, and in Y = 0.1 * 70 = 7 liters. After removing 10 liters of Y, acid = 7 - 1 = 6 liters. Adding 10 liters of X adds 2 liters of acid. New total acid = 6 + 2 = 8 liters. Total volume = 30 + 70 - 10 + 10 = 100 liters. Concentration = (8/100) * 100 = 8%.",
  },
  {
    question:
      "A baker mixes two types of flour, one costing $2 per kg and the other costing $5 per kg. If he wants to make a 10 kg mixture costing $4 per kg, how many kg of each type of flour should he use?",
    options: [
      "4 kg of $2 and 6 kg of $5",
      "6 kg of $2 and 4 kg of $5",
      "5 kg of $2 and 5 kg of $5",
      "3 kg of $2 and 7 kg of $5",
    ],
    correctAnswer: "6 kg of $2 and 4 kg of $5",
    explanation:
      "Let x be kg of $2 flour and y be kg of $5 flour. We have x + y = 10 and 2x + 5y = 40. Solving gives x = 6 and y = 4.",
  },
  {
    question:
      "A container holds 100 liters of a solution containing 40% alcohol. If 30 liters of this solution is removed and replaced with water, what is the new concentration of alcohol in the container?",
    options: ["28%", "32%", "36%", "40%"],
    correctAnswer: "32%",
    explanation:
      "Initially, alcohol = 0.40 * 100 = 40 liters. When removing 30 liters, alcohol removed = 0.40 * 30 = 12 liters. Remaining alcohol = 40 - 12 = 28 liters. Total volume = 100 liters. New concentration = (28/100) * 100 = 28%.",
  },
  {
    question:
      "A mixture contains 50% sugar. If 20 liters of this mixture is mixed with 10 liters of a 70% sugar solution, what will be the concentration of sugar in the final mixture?",
    options: ["58%", "60%", "62%", "64%"],
    correctAnswer: "60%",
    explanation:
      "In 20 liters of the first mixture, sugar = 0.50 * 20 = 10 liters. In 10 liters of the second solution, sugar = 0.70 * 10 = 7 liters. Total sugar = 10 + 7 = 17 liters. Total volume = 20 + 10 = 30 liters. Concentration = (17/30) * 100 = 56%.",
  },
  {
    question:
      "A chemist has a solution of 80 liters that is 30% acid. If he wants to dilute it to 20% acid by adding water, how much water should he add?",
    options: ["32 liters", "40 liters", "50 liters", "60 liters"],
    correctAnswer: "32 liters",
    explanation:
      "Acid in the initial solution = 0.30 * 80 = 24 liters. Let x be the liters of water added. New total volume = 80 + x; Setting up the equation: 24/(80 + x) = 0.20. Solving gives x = 32 liters.",
  },
  {
    question:
      "A warehouse contains a mixture of two types of grains in the ratio 3:4. If the warehouse holds 700 kg of this mixture, how many kg of each type of grain are there?",
    options: [
      "300 kg of first type and 400 kg of second type",
      "350 kg of first type and 450 kg of second type",
      "300 kg of first type and 450 kg of second type",
      "400 kg of first type and 300 kg of second type",
    ],
    correctAnswer: "300 kg of first type and 400 kg of second type",
    explanation:
      "Let the quantities of the first and second types be 3x and 4x respectively. Then, 3x + 4x = 700 kg. Solving gives x = 100, so first type = 3 * 100 = 300 kg and second type = 4 * 100 = 400 kg.",
  },
  {
    question:
      "A factory produces two grades of a product, with Grade X costing $6 per unit and Grade Y costing $9 per unit. If the total production of both grades is 200 units and the total cost is $1400, how many units of each grade were produced?",
    options: [
      "100 units of X and 100 units of Y",
      "150 units of X and 50 units of Y",
      "50 units of X and 150 units of Y",
      "80 units of X and 120 units of Y",
    ],
    correctAnswer: "100 units of X and 100 units of Y",
    explanation:
      "Let x be the number of Grade X units and y be the number of Grade Y units. We have x + y = 200 and 6x + 9y = 1400. Solving gives x = 100 and y = 100.",
  },
];
