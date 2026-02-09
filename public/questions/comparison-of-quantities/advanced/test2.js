export const test2 = [
  {
    question:
      "If the selling price of a shirt is $90 after a 10% discount on the marked price, what was the marked price?",
    options: ["$95", "$100", "$110", "$120"],
    correctAnswer: "$100",
    explanation:
      "Let the marked price be x. Selling Price = Marked Price - Discount = x - 0.10x = 0.90x. Therefore, 90 = 0.90x, so x = 90 / 0.90 = $100.",
  },
  {
    question:
      "A store sells two products, A and B. Product A costs $40 and is sold for $60. Product B costs $80 and is sold for $100. Which product gives a higher profit percentage?",
    options: [
      "Product A",
      "Product B",
      "Both give the same profit percentage",
      "Cannot determine",
    ],
    correctAnswer: "Product A",
    explanation:
      "Profit Percentage for A = (60 - 40) / 40 * 100 = 50%. Profit Percentage for B = (100 - 80) / 80 * 100 = 25%.",
  },
  {
    question:
      "A car's value depreciates by 20% each year. If its current value is $15,000, what will its value be after 3 years?",
    options: ["$6,480", "$7,680", "$8,000", "$9,600"],
    correctAnswer: "$9,216",
    explanation:
      "After 1 year = $15,000 * (1 - 0.20) = $12,000. After 2 years = $12,000 * 0.80 = $9,600. After 3 years = $9,600 * 0.80 = $7,680.",
  },
  {
    question: "If 70% of a number is equal to 56, what is 125% of that number?",
    options: ["80", "100", "120", "140"],
    correctAnswer: "100",
    explanation:
      "Let the number be x. 0.7x = 56, so x = 56 / 0.7 = 80. 125% of x = 1.25 * 80 = 100.",
  },
  {
    question:
      "A rectangle has a length that is 3 times its width. If the perimeter is 48 meters, what are the dimensions of the rectangle?",
    options: ["4 m by 12 m", "6 m by 18 m", "8 m by 24 m", "10 m by 30 m"],
    correctAnswer: "6 m by 18 m",
    explanation:
      "Let the width be x, length = 3x. Perimeter = 2(length + width) = 48, so 2(3x + x) = 48, 8x = 48, x = 6. Dimensions: width = 6 m, length = 18 m.",
  },
  {
    question:
      "A bicycle and a car together cost $1,200. If the bicycle costs 25% of the car's price, how much does the bicycle cost?",
    options: ["$240", "$300", "$360", "$400"],
    correctAnswer: "$240",
    explanation:
      "Let the car's price be x. Then the bicycle's price = 0.25x. Together they cost $1200, so x + 0.25x = 1200, 1.25x = 1200, x = 960 (car's price), bicycle = 0.25 * 960 = 240.",
  },
  {
    question:
      "In a class of 40 students, 60% are girls. If 5 new boys join the class, what will be the new percentage of girls?",
    options: ["55%", "60%", "65%", "70%"],
    correctAnswer: "57.14%",
    explanation:
      "Number of girls = 60% of 40 = 24. Number of boys = 40 - 24 = 16. New total = 40 + 5 = 45. New percentage of girls = (24 / 45) * 100 = 53.33%.",
  },
  {
    question:
      "A man sells a laptop for $800, making a profit of 25%. What was the cost price?",
    options: ["$600", "$640", "$650", "$700"],
    correctAnswer: "$640",
    explanation:
      "Let the cost price be x. Selling Price = Cost Price + Profit = x + 0.25x = 1.25x. So, 800 = 1.25x, x = 800 / 1.25 = 640.",
  },
  {
    question:
      "If a teacher has a class of 30 students and wants to increase the class size by 25%, how many additional students will he need?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    explanation:
      "25% of 30 = 30 * 0.25 = 7.5, round up to the nearest whole number.",
  },
];
