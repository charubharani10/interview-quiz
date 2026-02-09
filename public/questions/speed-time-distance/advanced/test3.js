export const test3 = [
  {
    question:
      "A train departs from City A and travels to City B at a speed of 90 km/h. Due to a delay, it increases its speed to 120 km/h for the second half of the journey. If the total distance is 240 km, what is the total time taken for the journey?",
    options: ["2.5 hours", "2.67 hours", "3 hours", "3.5 hours"],
    correctAnswer: "2.67 hours",
    explanation:
      "Let the distance for the first half be 120 km and the second half also be 120 km. Time for first half = 120 km / 90 km/h = 1.33 hours; Time for second half = 120 km / 120 km/h = 1 hour. Total time = 1.33 + 1 = 2.33 hours.",
  },
  {
    question:
      "A car travels from City A to City B at a speed of 75 km/h. On the return trip, it encounters a traffic jam that reduces its speed to 50 km/h. If the total time taken for the round trip is 6 hours, what is the distance between the two cities?",
    options: ["150 km", "200 km", "250 km", "300 km"],
    correctAnswer: "225 km",
    explanation:
      "Let the distance be x km. Time for the trip to B = x / 75; Time for the return trip = x / 50. The equation is x / 75 + x / 50 = 6. Solving gives x = 225 km.",
  },
  {
    question:
      "Two trains leave two cities, A and B, at the same time and travel towards each other. Train A travels at 80 km/h, while Train B travels at 120 km/h. If the distance between the two cities is 600 km, how long will it take for the two trains to meet?",
    options: ["2 hours", "2.5 hours", "3 hours", "4 hours"],
    correctAnswer: "2.5 hours",
    explanation:
      "Combined speed = 80 km/h + 120 km/h = 200 km/h. Time to meet = Distance / Combined Speed = 600 km / 200 km/h = 3 hours.",
  },
  {
    question:
      "A boat travels 48 km upstream and 60 km downstream in a total time of 7 hours. If the speed of the boat in still water is 10 km/h, what is the speed of the current?",
    options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
    correctAnswer: "2 km/h",
    explanation:
      "Let the speed of the current be x km/h. Upstream speed = (10 - x) km/h; Downstream speed = (10 + x) km/h. The equation is 48/(10 - x) + 60/(10 + x) = 7. Solving gives x = 2 km/h.",
  },
  {
    question:
      "A man jogs 10 km at a speed of 8 km/h, then walks back the same distance at a speed of 4 km/h. What is his average speed for the entire journey?",
    options: ["5.33 km/h", "6 km/h", "6.5 km/h", "7 km/h"],
    correctAnswer: "5.33 km/h",
    explanation:
      "Time for jogging = 10 km / 8 km/h = 1.25 hours; Time for walking = 10 km / 4 km/h = 2.5 hours. Total distance = 20 km; Total time = 1.25 + 2.5 = 3.75 hours. Average speed = Total distance / Total time = 20 km / 3.75 hours = 5.33 km/h.",
  },
  {
    question:
      "A vehicle covers a distance of 240 km at a speed of 60 km/h. If the speed had been increased by 20 km/h, how much time would have been saved?",
    options: ["1 hour", "1.5 hours", "2 hours", "2.5 hours"],
    correctAnswer: "1 hour",
    explanation:
      "Time at 60 km/h = 240 km / 60 km/h = 4 hours; Time at 80 km/h = 240 km / 80 km/h = 3 hours. Time saved = 4 - 3 = 1 hour.",
  },
  {
    question:
      "A man travels from City X to City Y, a distance of 300 km. He travels the first 200 km at a speed of 100 km/h and the remaining distance at a speed of 75 km/h. What is his average speed for the entire journey?",
    options: ["82 km/h", "85 km/h", "88 km/h", "90 km/h"],
    correctAnswer: "82 km/h",
    explanation:
      "Time for first 200 km = 200 km / 100 km/h = 2 hours; Time for last 100 km = 100 km / 75 km/h = 1.33 hours. Total time = 2 + 1.33 = 3.33 hours. Average speed = Total distance / Total time = 300 km / 3.33 hours = 90 km/h.",
  },
  {
    question:
      "A bus travels 240 km at a speed of 80 km/h, then travels the next 240 km at a speed of 60 km/h. What is the average speed of the bus for the entire journey?",
    options: ["65 km/h", "70 km/h", "75 km/h", "80 km/h"],
    correctAnswer: "72 km/h",
    explanation:
      "Time for first 240 km = 240 km / 80 km/h = 3 hours; Time for second 240 km = 240 km / 60 km/h = 4 hours. Total distance = 480 km; Total time = 3 + 4 = 7 hours. Average speed = Total distance / Total time = 480 km / 7 hours = 68.57 km/h.",
  },
  {
    question:
      "A plane flies from City A to City B, a distance of 600 km, at a speed of 200 km/h. Due to bad weather, the return flight takes 1 hour longer and is flown at 150 km/h. What is the total time for both flights?",
    options: ["6 hours", "7 hours", "8 hours", "9 hours"],
    correctAnswer: "7 hours",
    explanation:
      "Time to fly to City B = 600 km / 200 km/h = 3 hours; Time to fly back = 600 km / 150 km/h = 4 hours. Total time = 3 + 4 = 7 hours.",
  },
  {
    question:
      "A cyclist travels a distance of 120 km at a speed of 30 km/h and returns at a speed of 20 km/h. What is the average speed of the cyclist for the entire journey?",
    options: ["24 km/h", "25 km/h", "26 km/h", "27 km/h"],
    correctAnswer: "24 km/h",
    explanation:
      "Total distance = 120 km + 120 km = 240 km; Time to travel to = 120 km / 30 km/h = 4 hours; Time to return = 120 km / 20 km/h = 6 hours. Total time = 4 + 6 = 10 hours. Average speed = 240 km / 10 hours = 24 km/h.",
  },
];
