export const test1 = [
  {
    question:
      "A cone and a cylinder have the same base radius of 4 cm and the same height of 9 cm. What is the ratio of their volumes?",
    options: ["1:3", "2:3", "1:2", "3:1"],
    correctAnswer: "1:3",
    explanation:
      "Volume of cone = (1/3)πr²h = (1/3)π(4 cm)²(9 cm) = 48π cm³; Volume of cylinder = πr²h = π(4 cm)²(9 cm) = 144π cm³; Ratio = 48:144 = 1:3.",
  },
  {
    question:
      "A sphere is inscribed in a cube. If the volume of the cube is 343 cm³, what is the surface area of the sphere?",
    options: ["84π cm²", "49π cm²", "36π cm²", "64π cm²"],
    correctAnswer: "84π cm²",
    explanation:
      "Volume of cube = a³; 343 cm³ = a³; a = 7 cm; Diameter of sphere = a = 7 cm; Radius = 3.5 cm; Surface area = 4πr² = 4π(3.5 cm)² = 84π cm².",
  },
  {
    question:
      "A rectangular prism has a length of 10 cm, a width of 6 cm, and a height of 4 cm. What is the total surface area?",
    options: ["120 cm²", "160 cm²", "140 cm²", "100 cm²"],
    correctAnswer: "120 cm²",
    explanation:
      "Total Surface Area = 2(lw + lh + wh) = 2(10 cm × 6 cm + 10 cm × 4 cm + 6 cm × 4 cm) = 120 cm².",
  },
  {
    question:
      "A circular park has a radius of 10 m. A path of width 2 m is constructed along the boundary of the park. What is the area of the path?",
    options: ["76π m²", "50π m²", "60π m²", "70π m²"],
    correctAnswer: "76π m²",
    explanation:
      "Area of park = π(10 m)²; Area of outer circle = π(12 m)²; Area of path = Area of outer circle - Area of park = (144π - 100π) m² = 44π m².",
  },
  {
    question:
      "A right circular cone has a base radius of 3 cm and a height of 4 cm. What is its slant height?",
    options: ["5 cm", "6 cm", "7 cm", "8 cm"],
    correctAnswer: "5 cm",
    explanation:
      "Slant Height (l) = √(r² + h²) = √(3 cm)² + (4 cm)² = √(9 + 16) = √25 = 5 cm.",
  },
  {
    question:
      "What is the area of a sector with a central angle of 60 degrees in a circle of radius 6 cm?",
    options: ["12π cm²", "18π cm²", "9π cm²", "6π cm²"],
    correctAnswer: "12π cm²",
    explanation:
      "Area of sector = (θ/360) × πr² = (60/360) × π(6 cm)² = (1/6) × 36π = 6π cm².",
  },
  {
    question:
      "A tank in the shape of a cylinder has a radius of 5 m and a height of 10 m. How much water can it hold?",
    options: ["250π m³", "300π m³", "400π m³", "500π m³"],
    correctAnswer: "250π m³",
    explanation: "Volume = πr²h = π(5 m)²(10 m) = 250π m³.",
  },
  {
    question:
      "A solid sphere has a radius of 7 cm. If it is melted and recast into a cylinder with a height of 14 cm, what will be the radius of the cylinder?",
    options: ["3 cm", "4 cm", "5 cm", "6 cm"],
    correctAnswer: "6 cm",
    explanation:
      "Volume of sphere = (4/3)πr³ = (4/3)π(7 cm)³ = 1436π/3 cm³; Volume of cylinder = πr²h; 1436π/3 = πr²(14); r² = 1436/42; r = √34 = 6 cm.",
  },
  {
    question:
      "A trapezium has bases of lengths 8 cm and 12 cm, and a height of 5 cm. What is the area of the trapezium?",
    options: ["50 cm²", "60 cm²", "70 cm²", "80 cm²"],
    correctAnswer: "50 cm²",
    explanation:
      "Area = (1/2)(b₁ + b₂) × h = (1/2)(8 cm + 12 cm) × 5 cm = (1/2)(20 cm) × 5 cm = 50 cm².",
  },
  {
    question:
      "A rectangular garden is 15 m long and 10 m wide. A path of uniform width is built outside it, increasing the area to 250 m². What is the width of the path?",
    options: ["1 m", "2 m", "3 m", "4 m"],
    correctAnswer: "2 m",
    explanation:
      "Area of garden = 15 m × 10 m = 150 m²; Area with path = 250 m²; Let width of path be x; (15 + 2x)(10 + 2x) = 250; Solving gives x = 2 m.",
  },
  {
    question:
      "A right circular cone has a base radius of 5 cm and a height of 12 cm. What is the total surface area of the cone?",
    options: ["100π cm²", "110π cm²", "125π cm²", "135π cm²"],
    correctAnswer: "110π cm²",
    explanation:
      "Total Surface Area = πr(r + l), where l = √(r² + h²) = √(5² + 12²) = √169 = 13 cm. Thus, TSA = π(5)(5 + 13) = π(5)(18) = 90π cm² + 25π cm² = 110π cm².",
  },
  {
    question:
      "The diameter of a circle is decreased by 50%. By what percentage is the area of the circle decreased?",
    options: ["25%", "50%", "75%", "100%"],
    correctAnswer: "75%",
    explanation:
      "Let the original diameter be D, then radius r = D/2. New diameter = D/2, new radius = D/4. Area decrease = original area - new area = π(D/2)² - π(D/4)² = π(D²/4 - D²/16) = (3πD²)/16. Percentage decrease = (3/4) × 100 = 75%.",
  },
  {
    question:
      "A cylinder and a cone have the same height of 9 cm and base radius of 3 cm. If the height of the cone is doubled, what will be the ratio of the volume of the cone to that of the cylinder?",
    options: ["1:2", "1:3", "1:4", "2:3"],
    correctAnswer: "1:2",
    explanation:
      "Volume of cone = (1/3)πr²h = (1/3)π(3)²(9) = 27π cm³. Volume of cylinder = πr²h = π(3)²(9) = 81π cm³. New height of cone = 18 cm, volume = (1/3)π(3)²(18) = 54π cm³. Ratio = 54π:81π = 2:3.",
  },
  {
    question:
      "A swimming pool is 25 m long, 10 m wide, and 2 m deep. How many liters of water are required to fill it completely?",
    options: ["5000 L", "2500 L", "2000 L", "3000 L"],
    correctAnswer: "5000 L",
    explanation:
      "Volume of the pool = length × width × depth = 25 m × 10 m × 2 m = 500 m³. 1 m³ = 1000 L, therefore, 500 m³ = 500,000 L.",
  },
  {
    question:
      "A triangular prism has a base area of 60 cm² and a height of 10 cm. What is its volume?",
    options: ["600 cm³", "300 cm³", "120 cm³", "150 cm³"],
    correctAnswer: "600 cm³",
    explanation: "Volume = Base Area × Height = 60 cm² × 10 cm = 600 cm³.",
  },
  {
    question:
      "A sphere is inscribed in a cube of side 6 cm. What is the surface area of the cube?",
    options: ["144 cm²", "72 cm²", "36 cm²", "108 cm²"],
    correctAnswer: "144 cm²",
    explanation: "Surface Area of cube = 6a² = 6(6 cm)² = 6(36) = 216 cm².",
  },
  {
    question:
      "A right-angled triangle has one leg measuring 8 cm and the other leg measuring 6 cm. What is the length of the hypotenuse?",
    options: ["10 cm", "12 cm", "14 cm", "16 cm"],
    correctAnswer: "10 cm",
    explanation:
      "Hypotenuse (h) = √(a² + b²) = √(8² + 6²) = √(64 + 36) = √100 = 10 cm.",
  },
  {
    question:
      "A rectangular field is 40 m long and 30 m wide. A path of width 2 m is constructed around it. What is the area of the path?",
    options: ["240 m²", "260 m²", "280 m²", "300 m²"],
    correctAnswer: "280 m²",
    explanation:
      "Area of field = 40 m × 30 m = 1200 m²; Area of field + path = (40 + 4)(30 + 4) = 44 × 34 = 1496 m²; Area of path = 1496 m² - 1200 m² = 296 m².",
  },
  {
    question:
      "A cone has a height of 9 cm and a radius of 4 cm. Calculate the volume of the cone.",
    options: ["48π cm³", "56π cm³", "72π cm³", "36π cm³"],
    correctAnswer: "48π cm³",
    explanation:
      "Volume of cone = (1/3)πr²h = (1/3)π(4 cm)²(9 cm) = (1/3)π(16)(9) = 48π cm³.",
  },
  {
    question:
      "If the circumference of a circle is increased by 50%, by what percentage is the radius increased?",
    options: ["33.33%", "50%", "25%", "66.67%"],
    correctAnswer: "33.33%",
    explanation:
      "Let the original radius be r. Circumference = 2πr. New circumference = 1.5 × 2πr = 3πr. New radius = 3πr / 2π = 1.5r; Increase = (1.5r - r)/r × 100 = 0.5r/r × 100 = 50%.",
  },
];
