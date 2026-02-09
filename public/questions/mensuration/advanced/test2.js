export const test2 = [
  {
    question:
      "A rectangular prism has dimensions of 4 cm, 5 cm, and 6 cm. If each dimension is increased by 50%, what is the percentage increase in volume?",
    options: ["125%", "150%", "75%", "100%"],
    correctAnswer: "150%",
    explanation:
      "Original volume = 4 × 5 × 6 = 120 cm³. New dimensions = 6 cm, 7.5 cm, 9 cm; new volume = 6 × 7.5 × 9 = 405 cm³. Percentage increase = ((405 - 120) / 120) × 100 = 237.5%.",
  },
  {
    question:
      "A sphere has a radius of 7 cm. What is the surface area of the sphere?",
    options: ["154 cm²", "308 cm²", "616 cm²", "742 cm²"],
    correctAnswer: "616 cm²",
    explanation:
      "Surface Area of sphere = 4πr² = 4π(7)² = 4π(49) = 196π cm² ≈ 616 cm².",
  },
  {
    question:
      "A cylinder has a height of 10 cm and a radius of 3 cm. What is the total surface area of the cylinder?",
    options: ["60π cm²", "75π cm²", "78π cm²", "84π cm²"],
    correctAnswer: "78π cm²",
    explanation:
      "Total Surface Area = 2πrh + 2πr² = 2π(3)(10) + 2π(3)² = 60π + 18π = 78π cm².",
  },
  {
    question:
      "The lengths of the sides of a triangular park are 30 m, 40 m, and 50 m. What is the area of the park?",
    options: ["600 m²", "800 m²", "1000 m²", "1200 m²"],
    correctAnswer: "600 m²",
    explanation:
      "Using Heron's formula: s = (30 + 40 + 50) / 2 = 60 m. Area = √(s(s - a)(s - b)(s - c)) = √(60(60 - 30)(60 - 40)(60 - 50)) = √(60 × 30 × 20 × 10) = 600 m².",
  },
  {
    question:
      "A cone and a cylinder have the same radius of 3 cm and height of 6 cm. What is the ratio of the volume of the cone to that of the cylinder?",
    options: ["1:3", "1:2", "1:4", "2:3"],
    correctAnswer: "1:3",
    explanation:
      "Volume of cone = (1/3)πr²h = (1/3)π(3)²(6) = 18π cm³. Volume of cylinder = πr²h = π(3)²(6) = 54π cm³. Ratio = (1/3)πr²h : πr²h = 1:3.",
  },
  {
    question:
      "A square pyramid has a base edge of 6 cm and a slant height of 10 cm. What is the total surface area of the pyramid?",
    options: ["72 cm²", "78 cm²", "84 cm²", "96 cm²"],
    correctAnswer: "84 cm²",
    explanation:
      "Base Area = 6² = 36 cm²; Lateral Surface Area = (1/2) × perimeter of base × slant height = (1/2) × (4 × 6) × 10 = 120 cm². Total Surface Area = Base Area + Lateral Surface Area = 36 + 120 = 156 cm².",
  },
  {
    question:
      "A circular garden has a radius of 7 m. A path of width 2 m is constructed around it. What is the area of the path?",
    options: ["33π m²", "39π m²", "45π m²", "49π m²"],
    correctAnswer: "45π m²",
    explanation:
      "Area of larger circle = π(9)² = 81π m²; Area of smaller circle = π(7)² = 49π m². Area of path = 81π - 49π = 32π m².",
  },
  {
    question:
      "If the volume of a cube is increased by 64%, what is the percentage increase in the side length?",
    options: ["15.75%", "20%", "25%", "30%"],
    correctAnswer: "25%",
    explanation:
      "Let the original side length be 's'. New volume = s³ × 1.64, therefore, new side = s × (1.64)^(1/3) ≈ 1.25s. Increase = ((1.25s - s) / s) × 100% = 25%.",
  },
  {
    question:
      "A cone is placed inside a cylinder such that both have the same radius of 4 cm and the height of the cone is 9 cm. What is the total volume of both shapes combined?",
    options: ["60π cm³", "50π cm³", "72π cm³", "75π cm³"],
    correctAnswer: "60π cm³",
    explanation:
      "Volume of cone = (1/3)πr²h = (1/3)π(4)²(9) = 48π cm³; Volume of cylinder = πr²h = π(4)²(9) = 144π cm³. Total volume = 48π + 144π = 192π cm³.",
  },
  {
    question:
      "A tank is in the shape of a cylinder with a radius of 5 m and a height of 12 m. If the tank is filled with water, what is the volume of the water in cubic meters?",
    options: ["250 m³", "200 m³", "300 m³", "150 m³"],
    correctAnswer: "300 m³",
    explanation: "Volume of cylinder = πr²h = π(5)²(12) = 300π m³ ≈ 942 m³.",
  },
];
