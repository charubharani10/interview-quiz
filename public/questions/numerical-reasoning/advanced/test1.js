export const test1 = [
  {
    question:
      "If the ratio of boys to girls in a class is 3:4 and there are 35 students, how many boys are there?",
    options: ["12", "15", "18", "21"],
    correctAnswer: "15",
    explanation:
      "To find the number of boys, use the ratio 3:4. The total number of parts is 3 + 4 = 7. Each part represents 35 / 7 = 5 students. Thus, boys = 3 × 5 = 15.",
  },
  {
    question:
      "A car depreciates at a rate of 10% per year. If it was originally worth $20,000, what will be its value after 3 years?",
    options: ["$14,580", "$15,000", "$15,840", "$16,200"],
    correctAnswer: "$14,580",
    explanation:
      "Depreciation calculation: Value after 1 year = 20,000 × 0.90 = 18,000. After 2 years = 18,000 × 0.90 = 16,200. After 3 years = 16,200 × 0.90 = 14,580.",
  },
  {
    question:
      "The average score of 5 students is 80. If one student scores 70, what is the average score of the remaining 4 students?",
    options: ["78", "80", "82", "84"],
    correctAnswer: "82",
    explanation:
      "Total score for 5 students = 80 × 5 = 400. Subtract the score of one student: 400 - 70 = 330. Average score for 4 students = 330 / 4 = 82.",
  },
  {
    question: "What is the next number in the sequence: 5, 12, 23, 36, ___?",
    options: ["51", "50", "52", "55"],
    correctAnswer: "51",
    explanation:
      "The differences between consecutive numbers are: 12 - 5 = 7, 23 - 12 = 11, 36 - 23 = 13. The pattern shows increasing differences of 4: 7, 11, 15. Adding 15 to 36 gives 51.",
  },
  {
    question:
      "A factory produces 1200 units in 8 hours. How many units can it produce in 15 hours at the same rate?",
    options: ["1800", "2000", "2200", "2400"],
    correctAnswer: "1800",
    explanation:
      "Calculate the production rate: 1200 units / 8 hours = 150 units/hour. For 15 hours: 150 × 15 = 2250 units.",
  },
  {
    question:
      "If the sum of three consecutive numbers is 63, what is the largest number?",
    options: ["20", "21", "22", "23"],
    correctAnswer: "22",
    explanation:
      "Let the three numbers be x, x+1, x+2. Their sum: x + (x+1) + (x+2) = 3x + 3 = 63. Solving: 3x = 60, x = 20. The numbers are 20, 21, and 22. The largest number is 22.",
  },
  {
    question:
      "A stock price increases by 15% and then decreases by 10%. If the original price was $50, what is the final price?",
    options: ["$52.50", "$53.25", "$54.00", "$55.00"],
    correctAnswer: "$52.50",
    explanation:
      "Increase by 15%: 50 × 1.15 = 57.50. Decrease by 10%: 57.50 × 0.90 = 52.50.",
  },
  {
    question:
      "A machine's efficiency is reduced by 5% every year. If its initial efficiency is 80%, what will its efficiency be after 4 years?",
    options: ["66.2%", "67.2%", "68.0%", "69.0%"],
    correctAnswer: "66.2%",
    explanation:
      "Efficiency after 1 year: 80 × 0.95 = 76.00%. After 2 years: 76 × 0.95 = 72.20%. After 3 years: 72.20 × 0.95 = 68.59%. After 4 years: 68.59 × 0.95 = 66.16%.",
  },
  {
    question:
      "A train travels at a speed of 90 km/h. How long will it take to travel 225 km?",
    options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
    correctAnswer: "2.5 hours",
    explanation: "Time = Distance / Speed = 225 km / 90 km/h = 2.5 hours.",
  },
  {
    question:
      "What is the median of the following set of numbers: 12, 5, 7, 19, 15?",
    options: ["7", "12", "15", "19"],
    correctAnswer: "12",
    explanation:
      "Arrange the numbers in ascending order: 5, 7, 12, 15, 19. The median is the middle number: 12.",
  },
  {
    question:
      "A boat travels 20 km upstream in 4 hours and 20 km downstream in 2 hours. What is the speed of the current?",
    options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
    correctAnswer: "2 km/h",
    explanation:
      "Let the speed of the boat in still water be b km/h and the speed of the current be c km/h. The upstream speed is (b - c) and downstream speed is (b + c). Set up the equations: 20 / (b - c) = 4 and 20 / (b + c) = 2. Solving these gives c = 2 km/h.",
  },
  {
    question: "If 2 pencils cost $1.20, how much do 15 pencils cost?",
    options: ["$7.50", "$8.00", "$9.00", "$9.20"],
    correctAnswer: "$9.00",
    explanation:
      "Cost per pencil = $1.20 / 2 = $0.60. For 15 pencils: 15 × $0.60 = $9.00.",
  },
  {
    question:
      "The ratio of the angles of a triangle is 3:4:5. What is the measure of the largest angle?",
    options: ["50 degrees", "60 degrees", "70 degrees", "80 degrees"],
    correctAnswer: "80 degrees",
    explanation:
      "The sum of the angles in a triangle is 180 degrees. Ratio parts: 3 + 4 + 5 = 12. Each part = 180 / 12 = 15 degrees. Largest angle = 5 × 15 = 75 degrees.",
  },
  {
    question:
      "A person's salary increases by 8% annually. If the current salary is $50,000, what will it be after 2 years?",
    options: ["$58,400", "$60,800", "$62,400", "$64,000"],
    correctAnswer: "$58,400",
    explanation:
      "Calculate the salary for each year: After 1 year = 50,000 × 1.08 = 54,000. After 2 years = 54,000 × 1.08 = 58,320.",
  },
  {
    question:
      "What is the area of a trapezium with bases of 10 cm and 20 cm, and a height of 12 cm?",
    options: [
      "180 square cm",
      "200 square cm",
      "220 square cm",
      "240 square cm",
    ],
    correctAnswer: "180 square cm",
    explanation:
      "Area of a trapezium = (1/2) × (Base1 + Base2) × Height = (1/2) × (10 + 20) × 12 = 180 square cm.",
  },
  {
    question:
      "A book is originally priced at $80 but is offered at a 25% discount. What is the sale price?",
    options: ["$55", "$60", "$65", "$70"],
    correctAnswer: "$60",
    explanation:
      "Discount = 25% of $80 = 0.25 × 80 = $20. Sale price = $80 - $20 = $60.",
  },
  {
    question:
      "A group of people needs to complete a task in 6 hours. If each person can complete the task in 3 hours, how many people are needed?",
    options: ["2", "3", "4", "6"],
    correctAnswer: "4",
    explanation:
      "If one person completes the task in 3 hours, then 2 people can complete it in 1.5 hours. To finish in 6 hours, you need 4 people (because 6 hours / 1.5 hours = 4).",
  },
  {
    question: "What is the value of (3^4 - 2^3) ÷ 5?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "10",
    explanation:
      "Calculate powers: 3^4 = 81 and 2^3 = 8. Subtract and divide: (81 - 8) ÷ 5 = 73 ÷ 5 = 14.6.",
  },
  {
    question:
      "The sum of two numbers is 85 and their difference is 21. What are the two numbers?",
    options: ["52 and 33", "53 and 32", "54 and 31", "55 and 30"],
    correctAnswer: "52 and 33",
    explanation:
      "Let the numbers be x and y. Sum: x + y = 85. Difference: x - y = 21. Solving these equations: x = (85 + 21) / 2 = 53, y = (85 - 21) / 2 = 32.",
  },
  {
    question:
      "A company has 250 employees. If 60% are women, how many women work at the company?",
    options: ["140", "150", "160", "170"],
    correctAnswer: "150",
    explanation: "Calculate the number of women: 250 × 0.60 = 150.",
  },
];
