export const test1 = [
  {
    question:
      "In a class, the average height of 20 students is 150 cm. If 5 new students with an average height of 160 cm join the class, what is the new average height?",
    options: ["152 cm", "154 cm", "156 cm", "158 cm"],
    correctAnswer: "152.5 cm",
    explanation:
      "Total height of 20 students = 150 * 20 = 3000 cm. Total height of new students = 160 * 5 = 800 cm. New total height = 3000 + 800 = 3800 cm. New average = 3800 / 25 = 152 cm.",
  },
  {
    question:
      "A student scored 80, 90, and 100 in three subjects. If the student wants to increase his average to 95 by scoring in the fourth subject, what score must he achieve?",
    options: ["90", "95", "100", "105"],
    correctAnswer: "120",
    explanation:
      "Total required for 4 subjects = 95 * 4 = 380. Total scored = 80 + 90 + 100 = 270. Required score = 380 - 270 = 110.",
  },
  {
    question:
      "The average of five numbers is 30. If the average of four of those numbers is 25, what is the fifth number?",
    options: ["30", "35", "40", "45"],
    correctAnswer: "40",
    explanation:
      "Total of five numbers = 30 * 5 = 150. Total of four numbers = 25 * 4 = 100. Fifth number = 150 - 100 = 50.",
  },
  {
    question:
      "In a sports event, the average score of a player over 5 matches is 80. If the player scores 90 in the sixth match, what will be the new average?",
    options: ["80", "82", "84", "85"],
    correctAnswer: "82.5",
    explanation:
      "Total score for 5 matches = 80 * 5 = 400. New total score = 400 + 90 = 490. New average = 490 / 6 = 81.67.",
  },
  {
    question:
      "A factory produces 200 units of product A at an average cost of $10 each, and 300 units of product B at an average cost of $15 each. What is the average cost per unit for all products?",
    options: ["$12", "$13", "$14", "$15"],
    correctAnswer: "$12.50",
    explanation:
      "Total cost = (200 * 10) + (300 * 15) = 2000 + 4500 = 6500. Total units = 200 + 300 = 500. Average cost = 6500 / 500 = $13.",
  },
  {
    question:
      "A company has an average salary of $5000 for its employees. If the salary of the top 10% of employees is raised by 20%, what will be the new average salary?",
    options: ["$5100", "$5200", "$5300", "$5400"],
    correctAnswer: "$5200",
    explanation:
      "If 10% of employees are 100, their total salary = 5000 * 90% of employees. New average = (5000 * 100) + (5000 * 20%) / total number of employees.",
  },
  {
    question:
      "In a class of 30 students, 12 scored below average marks, while the average mark of the class is 60. If the average of the remaining students is 70, what is the average score of the students who scored below average?",
    options: ["45", "50", "55", "60"],
    correctAnswer: "45",
    explanation:
      "Total marks of all students = 30 * 60 = 1800. Total marks of remaining students = 18 * 70 = 1260. Total marks of below average students = 1800 - 1260 = 540. Average = 540 / 12 = 45.",
  },
  {
    question:
      "A committee has 5 members with an average age of 40 years. If a new member joins the committee, raising the average age to 45 years, what is the age of the new member?",
    options: ["50", "55", "60", "65"],
    correctAnswer: "65",
    explanation:
      "Total age of 5 members = 5 * 40 = 200. New average = 6 members at 45 years = 6 * 45 = 270. Age of new member = 270 - 200 = 70.",
  },
  {
    question:
      "If the average weight of 4 friends is 60 kg and the average weight of 5 friends is 70 kg, what is the average weight of all 9 friends?",
    options: ["65 kg", "68 kg", "70 kg", "72 kg"],
    correctAnswer: "66.67 kg",
    explanation:
      "Total weight of 4 friends = 4 * 60 = 240 kg. Total weight of 5 friends = 5 * 70 = 350 kg. Total weight = 240 + 350 = 590 kg. Average = 590 / 9 = 65.56 kg.",
  },
  {
    question:
      "A gym has an average membership fee of $200. If the gym increases the fee by 10% and adds 5% more in membership, what will be the new average membership fee?",
    options: ["$210", "$215", "$220", "$225"],
    correctAnswer: "$210",
    explanation:
      "New fee = 200 * 1.10 = $220. New average = 220 * 1.05 = $231.",
  },
  {
    question:
      "In a group of 100 students, the average score in mathematics is 75. If 10 students scored 90, while the rest scored below average, what is the maximum possible average score of the remaining students?",
    options: ["70", "72", "73", "75"],
    correctAnswer: "73",
    explanation:
      "Total score = 100 * 75 = 7500. Total score of 10 students = 10 * 90 = 900. Remaining score = 7500 - 900 = 6600. Average score of remaining 90 students = 6600 / 90 = 73.",
  },
  {
    question:
      "A teacher records the average scores of three tests: Test A has an average of 70, Test B has an average of 80, and Test C has an average of 90. If 5 students scored 100 in Test C, how much did their average score increase?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
    explanation:
      "Total students = 15. Total score of A = 70 * 5 = 350; B = 80 * 5 = 400; C = 90 * 5 + 500 = 950. New average = 950 / 15 = 79.67. Increase = 79.67 - 75 = 4.",
  },
  {
    question:
      "A company's average salary is $3000. If the average salary of the top 10% of employees is $5000, and the average salary of the bottom 30% is $2000, what is the average salary of the remaining 60%?",
    options: ["$2500", "$3000", "$3500", "$4000"],
    correctAnswer: "$2800",
    explanation:
      "Let total employees = 100. Top 10% = 10 at $5000 = $50000; Bottom 30% = 30 at $2000 = $60000; Remaining = 60, Total = 300000. Average = (300000 - 50000 - 60000) / 60 = $2800.",
  },
  {
    question:
      "A group of friends has an average age of 30 years. If one friend leaves and the average age increases by 2 years, how old was the friend who left?",
    options: ["32", "34", "36", "38"],
    correctAnswer: "34",
    explanation:
      "Let the number of friends be n. Total age = 30n. New total age = 32(n-1). So, 32(n-1) = 30n. Thus, age of friend = 30n - 32n + 32 = 34.",
  },
  {
    question:
      "In a village, the average number of children per family is 4. If 5 new families join the village and the average number of children increases to 5, what is the total number of children in the village?",
    options: ["80", "90", "100", "110"],
    correctAnswer: "90",
    explanation:
      "Let the total families = f. Total children = 4f. After 5 families, average = (4f + c) / (f + 5) = 5. So, c = 5(f + 5) - 4f = 5f + 25 - 4f = f + 25.",
  },
  {
    question:
      "A class has 20 students with an average score of 60. If 5 students scored 100 and 5 students scored 20, what is the new average?",
    options: ["55", "58", "60", "62"],
    correctAnswer: "54",
    explanation:
      "Total score of class = 20 * 60 = 1200. Total score of 5 students = 5 * 100 = 500; 5 students = 5 * 20 = 100. New total = 1200 + 500 - 100 = 1600. New average = 1600 / 20 = 54.",
  },
  {
    question:
      "A car's fuel consumption is 8 liters per 100 km. After a trip of 400 km, the car consumes an extra 2 liters. What is the new average fuel consumption per 100 km?",
    options: ["8.5", "8.75", "9", "9.25"],
    correctAnswer: "9",
    explanation:
      "Initial consumption for 400 km = (8 * 4) = 32 liters. New consumption = 32 + 2 = 34 liters. Average = (34 / 4) * 100 = 8.5 liters.",
  },
  {
    question:
      "A box contains 100 balls: 60 red and 40 blue. If 10 red balls are replaced with 10 blue balls, what is the average ratio of red to blue balls in the box?",
    options: ["2:3", "3:2", "1:1", "1:2"],
    correctAnswer: "2:3",
    explanation:
      "After replacement, red = 50, blue = 50. Total = 100. Ratio = 50:50 = 1:1.",
  },
  {
    question:
      "In a marathon, the average speed of a runner is 10 km/h. If the runner speeds up to 12 km/h for the last 5 km, what is the average speed for the entire 42 km marathon?",
    options: ["10.5", "11", "11.5", "12"],
    correctAnswer: "11.2",
    explanation:
      "Total time for 37 km at 10 km/h = 3.7 h. Time for last 5 km = 5 / 12 = 0.42 h. Total time = 4.12 h. Average speed = 42 km / 4.12 h = 10.19.",
  },
];
