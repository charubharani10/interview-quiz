export const test5 = [
  {
    question:
      "A car travels from Town A to Town B, a distance of 240 km, at a speed of 80 km/h. After reaching Town B, it returns to Town A at a speed of 60 km/h. What is the total time taken for the round trip?",
    options: ["4 hours", "4.5 hours", "5 hours", "5.5 hours"],
    correctAnswer: "4.5 hours",
    explanation:
      "Time from A to B = 240 km / 80 km/h = 3 hours; Time from B to A = 240 km / 60 km/h = 4 hours. Total time = 3 + 4 = 7 hours.",
  },
  {
    question:
      "A person walks to a point 6 km away at a speed of 3 km/h and then runs back at a speed of 6 km/h. What is the average speed for the entire journey?",
    options: ["4 km/h", "4.5 km/h", "5 km/h", "5.5 km/h"],
    correctAnswer: "4.5 km/h",
    explanation:
      "Total distance = 6 km + 6 km = 12 km; Time taken to walk = 6 km / 3 km/h = 2 hours; Time taken to run = 6 km / 6 km/h = 1 hour. Total time = 2 + 1 = 3 hours; Average speed = Total distance / Total time = 12 km / 3 hours = 4 km/h.",
  },
  {
    question:
      "A train travels from City A to City B at 90 km/h, then continues to City C at 120 km/h. If the distance from City A to City B is 180 km and from City B to City C is 240 km, what is the average speed for the entire journey?",
    options: ["100 km/h", "110 km/h", "115 km/h", "120 km/h"],
    correctAnswer: "110 km/h",
    explanation:
      "Time from A to B = 180 km / 90 km/h = 2 hours; Time from B to C = 240 km / 120 km/h = 2 hours. Total distance = 180 km + 240 km = 420 km; Total time = 2 + 2 = 4 hours. Average speed = 420 km / 4 hours = 105 km/h.",
  },
  {
    question:
      "A boat can travel at a speed of 10 km/h in still water. If the speed of the current is 2 km/h, how long will it take the boat to travel 30 km upstream?",
    options: ["3 hours", "3.5 hours", "4 hours", "4.5 hours"],
    correctAnswer: "4 hours",
    explanation:
      "Effective speed upstream = 10 km/h - 2 km/h = 8 km/h; Time = Distance / Speed = 30 km / 8 km/h = 3.75 hours.",
  },
  {
    question:
      "A runner completes a 10 km race. He runs the first half at a speed of 12 km/h and the second half at a speed of 8 km/h. What is the average speed for the entire race?",
    options: ["9.6 km/h", "10 km/h", "10.5 km/h", "11 km/h"],
    correctAnswer: "9.6 km/h",
    explanation:
      "First half distance = 5 km; Time for first half = 5 km / 12 km/h = 0.4167 hours; Second half distance = 5 km; Time for second half = 5 km / 8 km/h = 0.625 hours. Total time = 0.4167 + 0.625 = 1.0417 hours. Average speed = 10 km / 1.0417 hours = 9.6 km/h.",
  },
  {
    question:
      "A train leaves station A at 9:00 AM traveling at a speed of 100 km/h. Another train leaves station B, which is 300 km away, at 10:00 AM traveling at 120 km/h. At what time will the two trains meet?",
    options: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
    correctAnswer: "12:00 PM",
    explanation:
      "Let the time taken after 10:00 AM be t hours. Distance traveled by Train A by 10:00 AM = 100 km; Distance traveled by Train B = 120t. Therefore, 100 + 100(t + 1) + 120t = 300. Solving gives t = 2, so the trains meet at 12:00 PM.",
  },
  {
    question:
      "A cyclist travels from point X to point Y at a speed of 20 km/h and takes 2 hours. He returns from point Y to point X at a speed of 15 km/h. What is the total time taken for the round trip?",
    options: ["3.5 hours", "4 hours", "4.5 hours", "5 hours"],
    correctAnswer: "4.5 hours",
    explanation:
      "Distance from X to Y = 20 km/h * 2 hours = 40 km. Time from Y to X = 40 km / 15 km/h = 2.67 hours. Total time = 2 + 2.67 = 4.67 hours.",
  },
  {
    question:
      "Two trains leave stations A and B, which are 600 km apart, at the same time. Train A travels at 80 km/h, while Train B travels at 100 km/h. How far from station A will they meet?",
    options: ["240 km", "250 km", "300 km", "320 km"],
    correctAnswer: "240 km",
    explanation:
      "Let the distance from A be x km. Then, distance from B = 600 - x km. The time taken by both trains to meet is the same: x/80 = (600 - x)/100. Solving gives x = 240 km.",
  },
  {
    question:
      "A car leaves home at 8:00 AM traveling at a speed of 60 km/h. After 2 hours, it stops for 30 minutes and then continues at a speed of 90 km/h. If it travels for a total of 4 hours, how far does the car travel?",
    options: ["240 km", "270 km", "300 km", "330 km"],
    correctAnswer: "270 km",
    explanation:
      "Distance covered in the first 2 hours = 60 km/h * 2 = 120 km. After stopping, it travels for 2 more hours at 90 km/h, covering 180 km. Total distance = 120 km + 180 km = 300 km.",
  },
  {
    question:
      "A motorboat travels 60 km upstream and then 60 km downstream. The speed of the boat in still water is 15 km/h, and the speed of the current is 3 km/h. What is the total time taken for the entire journey?",
    options: ["8 hours", "6 hours", "4 hours", "5 hours"],
    correctAnswer: "6 hours",
    explanation:
      "Effective speed upstream = 15 km/h - 3 km/h = 12 km/h; Effective speed downstream = 15 km/h + 3 km/h = 18 km/h. Time upstream = 60 km / 12 km/h = 5 hours; Time downstream = 60 km / 18 km/h = 3.33 hours. Total time = 5 + 3.33 = 8.33 hours.",
  },
];
