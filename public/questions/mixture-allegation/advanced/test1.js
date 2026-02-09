export const test1 = [
  {
    question:
      "A barrel contains a mixture of two liquids A and B in the ratio 5:3. If 40 liters of the mixture are drawn off and replaced with 10 liters of liquid B, what is the new ratio of A to B in the barrel?",
    options: ["3:5", "5:4", "5:3", "4:5"],
    correctAnswer: "5:4",
    explanation:
      "In 40 liters, A = (5/8) * 40 = 25 liters, B = (3/8) * 40 = 15 liters. Remaining A = (5 * 100 - 25) liters, and B = (3 * 100 - 15 + 10) liters. New ratio = A:B = 5:4.",
  },
  {
    question:
      "A solution has 20% salt. If 60 liters of the solution is mixed with 30 liters of a 50% salt solution, what is the percentage of salt in the new mixture?",
    options: ["30%", "40%", "25%", "35%"],
    correctAnswer: "30%",
    explanation:
      "Salt in 60 liters = 12 liters; Salt in 30 liters = 15 liters; Total salt = 12 + 15 = 27 liters; Total volume = 90 liters; Percentage = (27/90) * 100 = 30%.",
  },
  {
    question:
      "A container has a mixture of 25% alcohol and 75% water. If 10 liters of the mixture are replaced with 5 liters of pure alcohol, what is the new percentage of alcohol in the mixture?",
    options: ["28%", "32%", "35%", "30%"],
    correctAnswer: "30%",
    explanation:
      "Alcohol in 10 liters removed = 25% of 10 = 2.5 liters; Remaining alcohol = (75 - 2.5) = 72.5 liters; New total alcohol = 72.5 + 5 = 77.5 liters; Total volume = 75 liters; Percentage = (77.5/75) * 100 = 30%.",
  },
  {
    question:
      "A mixture of two liquids A and B is in the ratio 2:3. If 20 liters of liquid B are added to the mixture, the ratio of A to B becomes 1:2. What was the initial volume of liquid B?",
    options: ["30 liters", "40 liters", "50 liters", "60 liters"],
    correctAnswer: "60 liters",
    explanation:
      "Let initial volumes be A = 2x, B = 3x. After adding 20 liters of B, the new ratio is 1:2. Thus, 2x/(3x + 20) = 1/2, solving gives x = 20. Initial B = 3x = 60 liters.",
  },
  {
    question:
      "A container has a mixture of two types of fruits in the ratio 4:5. If 20% of the total mixture is taken out, and the ratio of the remaining mixture becomes 5:6, what was the original quantity of the mixture?",
    options: ["45 kg", "90 kg", "81 kg", "60 kg"],
    correctAnswer: "81 kg",
    explanation:
      "Let the total original quantity be 100 kg. After removing 20%, 80 kg is left. From the remaining 80 kg, using the new ratio, set up an equation to find the initial total mixture.",
  },
  {
    question:
      "A milk vendor mixes two types of milk, one costing $5 per liter and the other $3 per liter. If he wants to sell the mixture at $4.20 per liter, what ratio of the two types of milk should he use?",
    options: ["1:2", "2:1", "1:3", "3:1"],
    correctAnswer: "1:1",
    explanation:
      "Let the quantities of the two types be x and y. The cost equation is 5x + 3y = 4.20(x + y). Solving gives x:y = 1:1.",
  },
  {
    question:
      "In a certain mixture, 60% of the liquid is water and the remaining is milk. If 50 liters of the mixture are taken out and replaced with 30 liters of pure milk, what will be the percentage of milk in the new mixture?",
    options: ["50%", "55%", "60%", "65%"],
    correctAnswer: "65%",
    explanation:
      "Original water = 60% of 50 liters = 30 liters; Remaining mixture = 20 liters milk + 30 liters water; Adding 30 liters milk gives 50 liters milk and 30 liters water; Percentage = (50/80) * 100 = 65%.",
  },
  {
    question:
      "A chemist has two solutions of acid, one containing 30% acid and the other containing 70% acid. If he wants to create 100 liters of a solution that is 50% acid, how many liters of each solution does he need?",
    options: [
      "30 liters of 30% and 70 liters of 70%",
      "50 liters of each",
      "40 liters of 30% and 60 liters of 70%",
      "20 liters of 30% and 80 liters of 70%",
    ],
    correctAnswer: "30 liters of 30% and 70 liters of 70%",
    explanation:
      "Let x be the amount of 30% solution and y be the 70% solution. Using the equations: x + y = 100 and 0.3x + 0.7y = 50, solving gives x = 30, y = 70.",
  },
  {
    question:
      "A mixture contains 60% of solution A and 40% of solution B. If 10 liters of solution A are added to the mixture, what will be the new percentage of solution A in the total mixture of 100 liters?",
    options: ["65%", "70%", "72%", "75%"],
    correctAnswer: "70%",
    explanation:
      "Original A = 60 liters; New A = 60 + 10 = 70 liters; Total = 100 liters; Percentage = (70/100) * 100 = 70%.",
  },
  {
    question:
      "A person has two mixtures of alcohol, one containing 80% alcohol and the other 20% alcohol. If he wants to make 50 liters of a mixture that is 50% alcohol, how many liters of each mixture does he need?",
    options: [
      "20 liters of 80% and 30 liters of 20%",
      "10 liters of 80% and 40 liters of 20%",
      "25 liters of each",
      "15 liters of 80% and 35 liters of 20%",
    ],
    correctAnswer: "20 liters of 80% and 30 liters of 20%",
    explanation:
      "Let x be the liters of 80% and y be the liters of 20%. The equations are: x + y = 50 and 0.8x + 0.2y = 25. Solving gives x = 20, y = 30.",
  },
  {
    question:
      "A company produces two grades of steel, A and B. Grade A costs $300 per ton, and Grade B costs $200 per ton. If a mixture of 10 tons of steel is sold at $250 per ton, how many tons of each grade are in the mixture?",
    options: [
      "6 tons of A and 4 tons of B",
      "4 tons of A and 6 tons of B",
      "5 tons of A and 5 tons of B",
      "3 tons of A and 7 tons of B",
    ],
    correctAnswer: "6 tons of A and 4 tons of B",
    explanation:
      "Let x be tons of A and y be tons of B. We have x + y = 10 and 300x + 200y = 2500. Solving gives x = 6 and y = 4.",
  },
  {
    question:
      "A solution consists of 20% salt. How many liters of water must be added to 40 liters of the solution to make it 10% salt?",
    options: ["20 liters", "30 liters", "15 liters", "25 liters"],
    correctAnswer: "20 liters",
    explanation:
      "Salt in 40 liters = 20% of 40 = 8 liters. Let x be liters of water added. New volume = 40 + x. Setting up the equation: 8/(40 + x) = 10/100, we find x = 20 liters.",
  },
  {
    question:
      "In a mixture of 50 liters, the ratio of liquid A to liquid B is 3:2. If 10 liters of liquid B are added, what is the new ratio of A to B?",
    options: ["3:2", "3:3", "3:4", "3:5"],
    correctAnswer: "3:4",
    explanation:
      "Initial volumes are A = (3/5) * 50 = 30 liters, B = (2/5) * 50 = 20 liters. After adding 10 liters of B, new B = 20 + 10 = 30 liters. Ratio A:B = 30:30 = 3:4.",
  },
  {
    question:
      "A milkman has two containers of milk, one containing 40% milk and the other 60% milk. If he mixes 20 liters of the first with 30 liters of the second, what is the percentage of milk in the mixture?",
    options: ["50%", "52%", "54%", "56%"],
    correctAnswer: "52%",
    explanation:
      "Milk in 20 liters of the first = 40% of 20 = 8 liters. Milk in 30 liters of the second = 60% of 30 = 18 liters. Total milk = 8 + 18 = 26 liters; Total mixture = 50 liters; Percentage = (26/50) * 100 = 52%.",
  },
  {
    question:
      "A chemist has a solution containing 30% acid. He wants to dilute it by adding pure solvent. If he adds 50 liters of solvent, the new concentration becomes 25%. What was the original volume of the acid solution?",
    options: ["150 liters", "100 liters", "200 liters", "120 liters"],
    correctAnswer: "200 liters",
    explanation:
      "Let the original volume be x liters. Acid = 0.3x. After adding 50 liters, the new volume = x + 50. Setting up the equation: 0.3x/(x + 50) = 0.25. Solving gives x = 200 liters.",
  },
  {
    question:
      "A jar contains a mixture of 40 liters of water and 10 liters of alcohol. If 20 liters of the mixture are replaced with 10 liters of pure alcohol, what will be the new ratio of alcohol to water?",
    options: ["1:2", "2:1", "1:3", "1:4"],
    correctAnswer: "1:2",
    explanation:
      "Initially, the ratio is 10:40. After removing 20 liters, alcohol in 20 liters = (10/50) * 20 = 4 liters removed. Remaining alcohol = 10 - 4 = 6 liters; New alcohol = 6 + 10 = 16 liters; Water = 20 liters; Ratio = 16:40 = 2:5.",
  },
  {
    question:
      "Two mixtures contain acid in the ratio 2:5 and 3:7. If equal quantities of both mixtures are mixed, what is the ratio of acid in the new mixture?",
    options: ["5:6", "2:3", "3:4", "4:5"],
    correctAnswer: "3:4",
    explanation:
      "Let the quantity of each mixture be x liters. Acid from the first = (2/7)x; Acid from the second = (3/10)x. Total acid = (2/7)x + (3/10)x; Total volume = 2x. Setting the ratio gives 3:4.",
  },
  {
    question:
      "A recipe requires two types of flour, one costing $2 per kg and the other costing $3 per kg. If the recipe requires 12 kg of flour, and the total cost must be $30, how much of each type of flour is needed?",
    options: [
      "6 kg of $2 and 6 kg of $3",
      "8 kg of $2 and 4 kg of $3",
      "4 kg of $2 and 8 kg of $3",
      "10 kg of $2 and 2 kg of $3",
    ],
    correctAnswer: "8 kg of $2 and 4 kg of $3",
    explanation:
      "Let x be kg of $2 flour, and y be kg of $3 flour. We have x + y = 12 and 2x + 3y = 30. Solving gives x = 8, y = 4.",
  },
  {
    question:
      "A vessel contains a mixture of 30 liters of liquid A and 20 liters of liquid B. If 15 liters of the mixture is removed and replaced with liquid A, what will be the new ratio of A to B?",
    options: ["3:2", "5:3", "2:3", "4:5"],
    correctAnswer: "5:2",
    explanation:
      "Initially, A = 30 liters, B = 20 liters. Removing 15 liters means 30/50 = 0.6 of A and 20/50 = 0.4 of B are removed. A remaining = 30 - 9 = 21, B remaining = 20 - 6 = 14, with 15 liters of A added. New A = 21 + 15 = 36; New B = 14; Ratio A:B = 36:14 = 5:2.",
  },
  {
    question:
      "A school has a mixture of students from two grades, with 60% of students in Grade A and 40% in Grade B. If 30 students from Grade B are added, what is the new percentage of students from Grade A in the school?",
    options: ["54%", "60%", "57%", "62%"],
    correctAnswer: "54%",
    explanation:
      "Let the total number of students be 100. Initially, Grade A = 60, Grade B = 40. After adding 30 students from Grade B, total students = 130; New Grade A = 60; Percentage = (60/130) * 100 = 54%.",
  },
];
