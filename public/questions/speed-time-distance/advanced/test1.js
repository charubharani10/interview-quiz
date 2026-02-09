export const test1 = [
  {
    question:
      "A train leaves a station at 3 PM traveling at a speed of 90 km/h. Another train leaves the same station at 4 PM traveling at 120 km/h. At what time will the second train catch up to the first train?",
    options: ["5 PM", "6 PM", "7 PM", "8 PM"],
    correctAnswer: "6 PM",
    explanation:
      "The first train has a 1-hour head start, traveling 90 km. The relative speed of the second train is 120 km/h - 90 km/h = 30 km/h. Time taken to catch up = 90 km / 30 km/h = 3 hours. Thus, the second train catches up at 4 PM + 3 hours = 7 PM.",
  },
  {
    question:
      "A boat travels downstream at 15 km/h and upstream at 10 km/h. What is the speed of the boat in still water and the speed of the current?",
    options: [
      "12.5 km/h, 2.5 km/h",
      "12 km/h, 3 km/h",
      "11 km/h, 4 km/h",
      "10 km/h, 5 km/h",
    ],
    correctAnswer: "12.5 km/h, 2.5 km/h",
    explanation:
      "Speed in still water = (15 km/h + 10 km/h) / 2 = 12.5 km/h; Speed of current = (15 km/h - 10 km/h) / 2 = 2.5 km/h.",
  },
  {
    question:
      "A cyclist travels the first half of a journey at 15 km/h and the second half at 20 km/h. If the total distance of the journey is 100 km, what is the average speed for the entire trip?",
    options: ["17 km/h", "18 km/h", "19 km/h", "20 km/h"],
    correctAnswer: "17.5 km/h",
    explanation:
      "Time taken for the first half = 50 km / 15 km/h = 3.33 hours; Time for the second half = 50 km / 20 km/h = 2.5 hours. Total time = 3.33 + 2.5 = 5.83 hours. Average speed = Total distance / Total time = 100 km / 5.83 hours = 17.14 km/h.",
  },
  {
    question:
      "Two cars start from the same point and travel in opposite directions. Car A travels at 80 km/h and Car B at 100 km/h. How far apart will they be after 2.5 hours?",
    options: ["450 km", "450 km", "420 km", "500 km"],
    correctAnswer: "450 km",
    explanation:
      "Distance covered by Car A = 80 km/h × 2.5 hours = 200 km; Distance covered by Car B = 100 km/h × 2.5 hours = 250 km. Total distance apart = 200 km + 250 km = 450 km.",
  },
  {
    question:
      "A train travels from City A to City B, a distance of 300 km. It travels the first half at 60 km/h and the second half at 90 km/h. What is the average speed for the entire journey?",
    options: ["72 km/h", "75 km/h", "78 km/h", "80 km/h"],
    correctAnswer: "72 km/h",
    explanation:
      "Distance for each half = 150 km. Time for first half = 150 km / 60 km/h = 2.5 hours; Time for second half = 150 km / 90 km/h = 1.67 hours. Total time = 2.5 + 1.67 = 4.17 hours. Average speed = Total distance / Total time = 300 km / 4.17 hours = 72 km/h.",
  },
  {
    question:
      "A car travels 120 km at a speed of 60 km/h and then 180 km at a speed of 90 km/h. What is the total time taken for the trip?",
    options: ["4 hours", "5 hours", "6 hours", "7 hours"],
    correctAnswer: "3.5 hours",
    explanation:
      "Time for the first segment = 120 km / 60 km/h = 2 hours; Time for the second segment = 180 km / 90 km/h = 2 hours. Total time = 2 + 2 = 4 hours.",
  },
  {
    question:
      "A runner completes a 10 km race in 40 minutes. If he increases his speed by 25% in the next race, what will be his new time for the same distance?",
    options: ["30 minutes", "32 minutes", "36 minutes", "38 minutes"],
    correctAnswer: "32 minutes",
    explanation:
      "Speed = Distance / Time = 10 km / (40/60) hours = 15 km/h. New speed = 15 km/h × 1.25 = 18.75 km/h. New time = 10 km / 18.75 km/h = 0.533 hours = 32 minutes.",
  },
  {
    question:
      "A car travels a distance of 240 km at a certain speed. If the speed had been 20 km/h more, the trip would have taken 1 hour less. What is the original speed of the car?",
    options: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
    correctAnswer: "60 km/h",
    explanation:
      "Let the original speed be x km/h. Time taken = 240/x; Time taken at increased speed = 240/(x + 20). According to the problem, 240/x - 240/(x + 20) = 1. Solving gives x = 60 km/h.",
  },
  {
    question:
      "A person travels from City X to City Y, a distance of 150 km, at a speed of 50 km/h. On the return trip, he travels at a speed of 75 km/h. What is the average speed for the entire journey?",
    options: ["60 km/h", "65 km/h", "70 km/h", "75 km/h"],
    correctAnswer: "60 km/h",
    explanation:
      "Time for going = 150 km / 50 km/h = 3 hours; Time for return = 150 km / 75 km/h = 2 hours. Total time = 3 + 2 = 5 hours. Average speed = Total distance / Total time = 300 km / 5 hours = 60 km/h.",
  },
  {
    question:
      "A cyclist travels a distance of 120 km at a speed of 15 km/h and returns at a speed of 10 km/h. What is the total time taken for the round trip?",
    options: ["8 hours", "9 hours", "10 hours", "11 hours"],
    correctAnswer: "10 hours",
    explanation:
      "Time for the onward trip = 120 km / 15 km/h = 8 hours; Time for the return trip = 120 km / 10 km/h = 12 hours. Total time = 8 + 12 = 10 hours.",
  },
  {
    question:
      "A train travels 150 km at a uniform speed. If the speed had been 10 km/h more, it would have taken 1 hour less for the journey. What is the original speed of the train?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correctAnswer: "40 km/h",
    explanation:
      "Let the original speed be x km/h. Time = Distance/Speed. The equation is 150/x - 150/(x + 10) = 1. Solving gives x = 40 km/h.",
  },
  {
    question:
      "Two cars start from the same point and travel towards each other. Car A travels at 60 km/h and Car B at 90 km/h. How long will it take for them to meet if they are 300 km apart?",
    options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
    correctAnswer: "2 hours",
    explanation:
      "Combined speed = 60 km/h + 90 km/h = 150 km/h. Time to meet = Distance / Combined Speed = 300 km / 150 km/h = 2 hours.",
  },
  {
    question:
      "A plane flies from City A to City B at a speed of 600 km/h with a tailwind. The return trip against the wind takes 30 minutes longer. If the distance between the cities is 1200 km, what is the speed of the wind?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: "60 km/h",
    explanation:
      "Let the wind speed be x km/h. Time to fly with the wind = 1200/(600 + x); Time against the wind = 1200/(600 - x). The equation is 1200/(600 - x) - 1200/(600 + x) = 0.5. Solving gives x = 60 km/h.",
  },
  {
    question:
      "A train travels from City A to City B, a distance of 300 km. It travels the first half at 80 km/h and the second half at 120 km/h. What is the average speed for the entire journey?",
    options: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"],
    correctAnswer: "96 km/h",
    explanation:
      "Distance for each half = 150 km. Time for first half = 150 km / 80 km/h = 1.875 hours; Time for second half = 150 km / 120 km/h = 1.25 hours. Total time = 1.875 + 1.25 = 3.125 hours. Average speed = Total distance / Total time = 300 km / 3.125 hours = 96 km/h.",
  },
  {
    question:
      "A ship travels 120 km downstream in 3 hours and returns upstream in 5 hours. What is the speed of the ship in still water and the speed of the current?",
    options: [
      "12 km/h, 3 km/h",
      "15 km/h, 4 km/h",
      "18 km/h, 5 km/h",
      "20 km/h, 6 km/h",
    ],
    correctAnswer: "18 km/h, 6 km/h",
    explanation:
      "Downstream speed = Distance / Time = 120 km / 3 hours = 40 km/h; Upstream speed = 120 km / 5 hours = 24 km/h. Speed in still water = (40 + 24) / 2 = 32 km/h; Speed of current = (40 - 24) / 2 = 8 km/h.",
  },
  {
    question:
      "A motorist travels the first 50 km of a journey at 40 km/h and the next 50 km at 60 km/h. If the total journey is 200 km, what is the average speed for the entire journey?",
    options: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"],
    correctAnswer: "50 km/h",
    explanation:
      "Time for first 50 km = 50 km / 40 km/h = 1.25 hours; Time for next 50 km = 50 km / 60 km/h = 0.833 hours; Time for remaining 100 km at 60 km/h = 100 km / 60 km/h = 1.667 hours. Total time = 1.25 + 0.833 + 1.667 = 3.75 hours. Average speed = Total distance / Total time = 200 km / 3.75 hours = 53.33 km/h.",
  },
  {
    question:
      "A cyclist can ride 60 km at a speed of 20 km/h and 40 km at a speed of 30 km/h. What is the average speed for the entire trip?",
    options: ["25 km/h", "28 km/h", "30 km/h", "32 km/h"],
    correctAnswer: "24 km/h",
    explanation:
      "Time for 60 km = 60 km / 20 km/h = 3 hours; Time for 40 km = 40 km / 30 km/h = 1.33 hours. Total distance = 100 km; Total time = 3 + 1.33 = 4.33 hours. Average speed = Total distance / Total time = 100 km / 4.33 hours = 23.1 km/h.",
  },
  {
    question:
      "A train travels from City P to City Q at a speed of 80 km/h. On the return journey, it travels at a speed of 100 km/h. If the total distance is 240 km, what is the average speed for the round trip?",
    options: ["86.4 km/h", "88 km/h", "90 km/h", "92 km/h"],
    correctAnswer: "88 km/h",
    explanation:
      "Time to travel to Q = 240 km / 80 km/h = 3 hours; Time to return = 240 km / 100 km/h = 2.4 hours. Total time = 3 + 2.4 = 5.4 hours. Average speed = Total distance / Total time = 480 km / 5.4 hours = 88.89 km/h.",
  },
  {
    question:
      "A person can walk 4 km in 1 hour. If they increase their speed by 25%, how far can they walk in 3 hours?",
    options: ["12 km", "15 km", "18 km", "20 km"],
    correctAnswer: "15 km",
    explanation:
      "New speed = 4 km/h + 25% of 4 km/h = 5 km/h; Distance in 3 hours = 5 km/h * 3 hours = 15 km.",
  },
  {
    question:
      "A train leaves station A at 8:00 AM traveling at 100 km/h. Another train leaves station B, which is 500 km away, at 9:00 AM traveling at 120 km/h. When will the two trains meet?",
    options: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    correctAnswer: "11:00 AM",
    explanation:
      "Distance covered by Train A by 9:00 AM = 100 km; Distance remaining = 500 km - 100 km = 400 km. Let t be the time taken after 9:00 AM to meet. Then, 100 + 100t = 120t. Solving gives t = 5 hours; They meet at 9:00 AM + 5 hours = 11:00 AM.",
  },
  {
    question:
      "A boat goes 36 km downstream and then returns upstream. The speed of the boat in still water is 12 km/h, and the speed of the current is 3 km/h. What is the total time taken for the round trip?",
    options: ["5 hours", "6 hours", "7 hours", "8 hours"],
    correctAnswer: "5 hours",
    explanation:
      "Effective speed downstream = 12 km/h + 3 km/h = 15 km/h; Effective speed upstream = 12 km/h - 3 km/h = 9 km/h. Time downstream = 36 km / 15 km/h = 2.4 hours; Time upstream = 36 km / 9 km/h = 4 hours. Total time = 2.4 + 4 = 6.4 hours.",
  },
  {
    question:
      "A car travels from Town X to Town Y at a speed of 50 km/h. After reaching Town Y, it continues to Town Z at a speed of 70 km/h. If the distance from X to Y is 120 km and from Y to Z is 180 km, what is the average speed for the entire journey?",
    options: ["55 km/h", "60 km/h", "65 km/h", "70 km/h"],
    correctAnswer: "62.5 km/h",
    explanation:
      "Time from X to Y = 120 km / 50 km/h = 2.4 hours; Time from Y to Z = 180 km / 70 km/h = 2.57 hours. Total distance = 120 km + 180 km = 300 km; Total time = 2.4 + 2.57 = 4.97 hours. Average speed = 300 km / 4.97 hours = 60.5 km/h.",
  },
  {
    question:
      "A plane travels 600 km at a speed of 300 km/h. It then travels back the same distance at a speed of 450 km/h. What is the average speed for the entire journey?",
    options: ["360 km/h", "375 km/h", "390 km/h", "400 km/h"],
    correctAnswer: "375 km/h",
    explanation:
      "Total distance = 600 km + 600 km = 1200 km; Time = 600/300 + 600/450 = 2 + 1.33 = 3.33 hours. Average speed = 1200 km / 3.33 hours = 360 km/h.",
  },
];
