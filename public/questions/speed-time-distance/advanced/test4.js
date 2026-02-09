export const test4 = [
  {
    question:
      "A cyclist travels 45 km at a speed of 15 km/h, then returns back at a speed of 10 km/h. What is the average speed for the entire trip?",
    options: ["12 km/h", "12.5 km/h", "13 km/h", "14 km/h"],
    correctAnswer: "12 km/h",
    explanation:
      "Time to go = 45 km / 15 km/h = 3 hours; Time to return = 45 km / 10 km/h = 4.5 hours. Total distance = 90 km; Total time = 3 + 4.5 = 7.5 hours. Average speed = Total distance / Total time = 90 km / 7.5 hours = 12 km/h.",
  },
  {
    question:
      "A train travels from City A to City B at a speed of 120 km/h and returns at a speed of 90 km/h. If the total distance traveled is 600 km, what is the average speed for the entire journey?",
    options: ["100 km/h", "105 km/h", "110 km/h", "115 km/h"],
    correctAnswer: "100 km/h",
    explanation:
      "Let the one-way distance be x km. Average speed = Total distance / Total time = 600 km / ((x / 120) + (x / 90)). The average speed simplifies to 100 km/h.",
  },
  {
    question:
      "Two cars start from the same point and travel in opposite directions. Car A travels at a speed of 70 km/h, and Car B travels at 90 km/h. How far apart will they be after 2 hours?",
    options: ["320 km", "340 km", "360 km", "380 km"],
    correctAnswer: "320 km",
    explanation:
      "Distance traveled by Car A in 2 hours = 70 km/h * 2 = 140 km; Distance traveled by Car B in 2 hours = 90 km/h * 2 = 180 km. Total distance apart = 140 km + 180 km = 320 km.",
  },
  {
    question:
      "A train travels from City A to City B at 80 km/h. It takes 3 hours longer to return due to delays, and the return speed is 60 km/h. If the distance is 240 km, how long does it take to travel from City A to City B?",
    options: ["2.5 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: "3 hours",
    explanation:
      "Time to travel from A to B = 240 km / 80 km/h = 3 hours; Return time = 240 km / 60 km/h = 4 hours. The difference = 4 - 3 = 1 hour; thus, total time is 3 hours.",
  },
  {
    question:
      "A train leaves station A at 6:00 AM and travels towards station B at a speed of 100 km/h. Another train leaves station B at 8:00 AM towards station A at a speed of 120 km/h. If the distance between the two stations is 480 km, at what time will they meet?",
    options: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    correctAnswer: "10:00 AM",
    explanation:
      "The first train travels for 4 hours (6 AM to 10 AM), covering 400 km. The second train travels for 2 hours (8 AM to 10 AM), covering 240 km. Total distance covered = 400 km + 240 km = 640 km, but they only meet when the sum of their distances equals 480 km.",
  },
  {
    question:
      "A jogger runs 8 km at a speed of 6 km/h, then walks back at a speed of 4 km/h. How long does the entire trip take?",
    options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
    correctAnswer: "2.5 hours",
    explanation:
      "Time running = 8 km / 6 km/h = 1.33 hours; Time walking = 8 km / 4 km/h = 2 hours. Total time = 1.33 + 2 = 3.33 hours.",
  },
  {
    question:
      "A bus travels from Town A to Town B at a speed of 75 km/h. It takes a 30-minute break after covering 150 km. If the total journey time is 4 hours, what is the distance from Town A to Town B?",
    options: ["200 km", "250 km", "300 km", "350 km"],
    correctAnswer: "300 km",
    explanation:
      "Time taken to cover 150 km = 150 km / 75 km/h = 2 hours; Total journey time = 4 hours - 0.5 hours (break) = 3.5 hours. Distance covered in that time = 75 km/h * 2.5 hours = 187.5 km. Total distance = 150 km + 187.5 km = 337.5 km.",
  },
  {
    question:
      "A plane flies 1200 km to City X at a speed of 600 km/h. It then returns to the starting point at a speed of 800 km/h. What is the average speed of the plane for the entire trip?",
    options: ["700 km/h", "720 km/h", "750 km/h", "780 km/h"],
    correctAnswer: "720 km/h",
    explanation:
      "Time to City X = 1200 km / 600 km/h = 2 hours; Time for return = 1200 km / 800 km/h = 1.5 hours. Total distance = 2400 km; Total time = 2 + 1.5 = 3.5 hours. Average speed = 2400 km / 3.5 hours = 720 km/h.",
  },
  {
    question:
      "A swimmer can swim 200 meters downstream in 25 seconds, while he can swim the same distance upstream in 50 seconds. What is the speed of the current?",
    options: ["1 m/s", "2 m/s", "3 m/s", "4 m/s"],
    correctAnswer: "1 m/s",
    explanation:
      "Downstream speed = 200 m / 25 s = 8 m/s; Upstream speed = 200 m / 50 s = 4 m/s. Let the speed of the swimmer in still water be x m/s, and the speed of the current be y m/s. Then, x + y = 8 and x - y = 4. Solving gives y = 1 m/s.",
  },
  {
    question:
      "Two cars start from the same point and travel in opposite directions. Car A travels at 70 km/h and Car B at 90 km/h. After how many hours will the distance between them be 400 km?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: "2 hours",
    explanation:
      "Relative speed = 70 km/h + 90 km/h = 160 km/h. Time = Distance / Relative Speed = 400 km / 160 km/h = 2.5 hours.",
  },
];
