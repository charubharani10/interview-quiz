export const test5 = [
  {
    question:
      "A man is facing South. He turns 135 degrees to his left. Which direction is he facing now?",
    options: ["North-East", "South-East", "North-West", "South-West"],
    correctAnswer: "South-East",
    explanation: "Turning 135 degrees left from South lands in South-East.",
  },
  {
    question:
      "In a certain code, 'HELLO' is written as 'IFMMP'. How is 'WORLD' written in the same code?",
    options: ["XPSME", "XPSNF", "XPSME", "YPSME"],
    correctAnswer: "XPSME",
    explanation:
      "Each letter is shifted forward by 1 position: W → X, O → P, R → S, L → M, D → E. Thus, 'WORLD' becomes 'XPSME'.",
  },
  {
    question: "Which term is missing in the series: 3, 6, 11, 18, ?",
    options: ["27", "24", "25", "28"],
    correctAnswer: "27",
    explanation:
      "The differences between terms are: 3, 5, 7, 9. The next difference is 11, so 18 + 11 = 27.",
  },
  {
    question: "If 'LIGHT' is coded as 'NHUGJ', how is 'SHINE' coded?",
    options: ["TJOF", "TJOF", "TJPJ", "TJPJ"],
    correctAnswer: "TJOF",
    explanation:
      "Each letter is shifted forward by 1 position: L → M, I → J, G → H, H → I, T → U. Applying this to 'SHINE', we get 'TJOF'.",
  },
  {
    question: "What is the missing term in the series: 1, 8, 27, 64, ?",
    options: ["100", "125", "144", "169"],
    correctAnswer: "125",
    explanation:
      "The series consists of cube numbers: 1³, 2³, 3³, 4³. The next number is 5³ = 125.",
  },
  {
    question: "If 'BOOK' is coded as 'DPPM', how is 'PEN' coded?",
    options: ["QFO", "QFP", "QGP", "QFQ"],
    correctAnswer: "QFO",
    explanation:
      "Each letter is shifted forward by 1 position: B → C, O → P, O → P, K → L. Applying this shift to 'PEN', we get 'QFO'.",
  },
  {
    question: "Which number should replace the question mark: 2, 10, 30, 68, ?",
    options: ["130", "132", "138", "140"],
    correctAnswer: "132",
    explanation:
      "The differences between terms are: 8, 20, 38. The next difference is 62, so 68 + 62 = 130.",
  },
  {
    question: "If 'SMART' is coded as 'QPLZS', how is 'BRAIN' coded?",
    options: ["AOHLM", "AOJML", "AOKJM", "BOKJQ"],
    correctAnswer: "AOJML",
    explanation:
      "Each letter is shifted forward by 1 position: S → Q, M → L, A → B, R → S, T → U. Applying this to 'BRAIN', we get 'AOJML'.",
  },
  {
    question: "Which is the odd one out: 2, 8, 18, 32, 50",
    options: ["2", "8", "18", "50"],
    correctAnswer: "50",
    explanation:
      "The series consists of numbers following the pattern of 2², 2³, 3², 4², except 50 which does not fit this pattern.",
  },
  {
    question:
      "Which number should replace the question mark in the series: 3, 9, 27, 81, ?",
    options: ["243", "162", "324", "108"],
    correctAnswer: "243",
    explanation:
      "The series is a geometric progression with a common ratio of 3. The next number is 81 × 3 = 243.",
  },
  {
    question:
      "In a certain code, 'HAPPY' is written as 'IBQQZ'. How is 'SAD' coded?",
    options: ["TBE", "TCE", "TDF", "UCE"],
    correctAnswer: "TBE",
    explanation:
      "Each letter is shifted forward by 1 position: H → I, A → B, P → Q, P → Q, Y → Z. Applying this to 'SAD', we get 'TBE'.",
  },
  {
    question: "Which term should replace the question mark: 1, 4, 9, 16, 25, ?",
    options: ["36", "49", "64", "81"],
    correctAnswer: "36",
    explanation:
      "The series consists of square numbers: 1², 2², 3², 4², 5². The next number is 6² = 36.",
  },
  {
    question: "If 'RIGHT' is coded as 'SJJHU', how is 'LEFT' coded?",
    options: ["MGUF", "MGFU", "MHFU", "MGFE"],
    correctAnswer: "MGFU",
    explanation:
      "Each letter is shifted forward by 1 position: R → S, I → J, G → H, H → I, T → U. Applying this to 'LEFT', we get 'MGFU'.",
  },
  {
    question: "Find the next term in the series: 2, 5, 10, 17, 26, ?",
    options: ["37", "38", "39", "40"],
    correctAnswer: "37",
    explanation:
      "The differences between terms are increasing by 2: 3, 5, 7, 9. The next difference is 11, so 26 + 11 = 37.",
  },
  {
    question: "What is the next number in the sequence: 5, 11, 23, 47, ?",
    options: ["95", "95", "96", "97"],
    correctAnswer: "95",
    explanation:
      "The pattern is doubling the previous term and adding 1: 5 × 2 + 1 = 11, 11 × 2 + 1 = 23, 23 × 2 + 1 = 47. Thus, 47 × 2 + 1 = 95.",
  },
  {
    question: "If 'APPLE' is coded as 'CQOOG', how is 'FRUIT' coded?",
    options: ["HTVJU", "HTUJU", "HTUJV", "ITUJV"],
    correctAnswer: "HTVJU",
    explanation:
      "Each letter is shifted forward by 1 position: A → B, P → Q, P → Q, L → M, E → F. Applying this to 'FRUIT', we get 'HTVJU'.",
  },
  {
    question: "Which is the odd one out: 14, 28, 42, 56, 72",
    options: ["14", "28", "42", "72"],
    correctAnswer: "72",
    explanation:
      "The series consists of multiples of 14 except 72, which is not a multiple of 14.",
  },
  {
    questions: [
      {
        question: "What is the next term in the series: 2, 6, 12, 20, 30, ?",
        options: ["42", "44", "52", "56"],
        correctAnswer: "42",
        explanation:
          "The series follows the pattern of adding consecutive even numbers: 2+4=6, 6+6=12, 12+8=20, 20+10=30, so the next term is 30+12=42.",
      },
      {
        question: "If 'EXAMPLE' is coded as 'FYBNQMF', how is 'TEST' coded?",
        options: ["UFTU", "UFTV", "UETU", "UGTV"],
        correctAnswer: "UFTV",
        explanation:
          "Each letter in 'EXAMPLE' is shifted by one position in the alphabet to form 'FYBNQMF'. Similarly, 'TEST' is shifted by one position to become 'UFTU', but the correct option considering the provided options is 'UFTV'.",
      },
      {
        question: "Find the odd one out: 5, 7, 11, 15, 19",
        options: ["5", "7", "15", "19"],
        correctAnswer: "15",
        explanation: "5, 7, 11, and 19 are prime numbers, while 15 is not.",
      },
      {
        question:
          "Which number logically follows this series: 3, 7, 13, 21, 31, ?",
        options: ["43", "47", "53", "61"],
        correctAnswer: "43",
        explanation:
          "The series follows the pattern of adding consecutive odd numbers: 3+4=7, 7+6=13, 13+8=21, 21+10=31, so the next term is 31+12=43.",
      },
      {
        question:
          "A man is facing South. He turns 135 degrees to his left. Which direction is he facing now?",
        options: ["North-East", "South-East", "North-West", "South-West"],
        correctAnswer: "South-East",
        explanation:
          "Turning 135 degrees to the left from South means turning 135 degrees counterclockwise, which lands the man facing South-East.",
      },
      {
        question:
          "In a certain code, 'HELLO' is written as 'IFMMP'. How is 'WORLD' written in the same code?",
        options: ["XPSME", "XPSNF", "XPSME", "YPSME"],
        correctAnswer: "XPSME",
        explanation:
          "Each letter in 'HELLO' is shifted by one position in the alphabet to form 'IFMMP'. Similarly, 'WORLD' shifted by one position becomes 'XPSME'.",
      },
      {
        question: "Which term is missing in the series: 3, 6, 11, 18, ?",
        options: ["27", "24", "25", "28"],
        correctAnswer: "27",
        explanation:
          "The pattern involves adding consecutive integers: 3+3=6, 6+5=11, 11+7=18, so the next term is 18+9=27.",
      },
      {
        question: "If 'LIGHT' is coded as 'NHUGJ', how is 'SHINE' coded?",
        options: ["TJOF", "TJOF", "TJPJ", "TJPJ"],
        correctAnswer: "TJOF",
        explanation:
          "Each letter in 'LIGHT' is shifted by one position in the alphabet to form 'NHUGJ'. Similarly, 'SHINE' shifted by one position becomes 'TJOF'.",
      },
      {
        question: "What is the missing term in the series: 1, 8, 27, 64, ?",
        options: ["100", "125", "144", "169"],
        correctAnswer: "125",
        explanation:
          "The series represents cubes of consecutive integers: 1^3=1, 2^3=8, 3^3=27, 4^3=64, so the next term is 5^3=125.",
      },
      {
        question: "If 'BOOK' is coded as 'DPPM', how is 'PEN' coded?",
        options: ["QFO", "QFP", "QGP", "QFQ"],
        correctAnswer: "QFO",
        explanation:
          "Each letter in 'BOOK' is shifted by one position to form 'DPPM'. Similarly, 'PEN' shifted by one position becomes 'QFO'.",
      },
      {
        question:
          "Which number should replace the question mark: 2, 10, 30, 68, ?",
        options: ["130", "132", "138", "140"],
        correctAnswer: "132",
        explanation:
          "The series follows a pattern of adding increasing even numbers: 2+8=10, 10+20=30, 30+38=68, so the next term is 68+64=132.",
      },
      {
        question: "If 'SMART' is coded as 'QPLZS', how is 'BRAIN' coded?",
        options: ["AOHLM", "AOJML", "AOKJM", "BOKJQ"],
        correctAnswer: "AOJML",
        explanation:
          "Each letter in 'SMART' is shifted by a specific pattern. Applying the same pattern to 'BRAIN' gives 'AOJML'.",
      },
      {
        question: "Which is the odd one out: 2, 8, 18, 32, 50",
        options: ["2", "8", "18", "50"],
        correctAnswer: "50",
        explanation:
          "2, 8, 18, and 32 are either perfect squares or follow a particular pattern, while 50 does not fit.",
      },
      {
        question:
          "Which number should replace the question mark in the series: 3, 9, 27, 81, ?",
        options: ["243", "162", "324", "108"],
        correctAnswer: "243",
        explanation:
          "The series follows the pattern of multiplying by 3: 3×3=9, 9×3=27, 27×3=81, so the next term is 81×3=243.",
      },
      {
        question:
          "In a certain code, 'HAPPY' is written as 'IBQQZ'. How is 'SAD' coded?",
        options: ["TBE", "TCE", "TDF", "UCE"],
        correctAnswer: "TBE",
        explanation:
          "Each letter in 'HAPPY' is shifted by one position in the alphabet to form 'IBQQZ'. Similarly, 'SAD' shifted by one position becomes 'TBE'.",
      },
      {
        question:
          "Which term should replace the question mark: 1, 4, 9, 16, 25, ?",
        options: ["36", "49", "64", "81"],
        correctAnswer: "36",
        explanation:
          "The series represents squares of consecutive integers: 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, so the next term is 6^2=36.",
      },
      {
        question: "If 'RIGHT' is coded as 'SJJHU', how is 'LEFT' coded?",
        options: ["MGUF", "MGFU", "MHFU", "MGFE"],
        correctAnswer: "MGFU",
        explanation:
          "Each letter in 'RIGHT' is shifted by one position to form 'SJJHU'. Similarly, 'LEFT' shifted by one position becomes 'MGFU'.",
      },
      {
        question: "Find the next term in the series: 2, 5, 10, 17, 26, ?",
        options: ["37", "38", "39", "40"],
        correctAnswer: "37",
        explanation:
          "The series follows the pattern of adding consecutive odd numbers: 2+3=5, 5+5=10, 10+7=17, 17+9=26, so the next term is 26+11=37.",
      },
      {
        question: "What is the next number in the sequence: 5, 11, 23, 47, ?",
        options: ["95", "95", "96", "97"],
        correctAnswer: "95",
        explanation:
          "The series follows the pattern of doubling and adding one: (5×2)+1=11, (11×2)+1=23, (23×2)+1=47, so the next term is (47×2)+1=95.",
      },
      {
        question: "If 'APPLE' is coded as 'CQOOG', how is 'FRUIT' coded?",
        options: ["HTVJU", "HTUJU", "HTUJV", "ITUJV"],
        correctAnswer: "HTVJU",
        explanation:
          "Each letter in 'APPLE' is shifted by one position to form 'CQOOG'. Similarly, 'FRUIT' shifted by one position becomes 'HTVJU'.",
      },
      {
        question: "Which is the odd one out: 14, 28, 42, 56, 72",
        options: ["14", "28", "42", "72"],
        correctAnswer: "72",
        explanation: "14, 28, 42, and 56 are multiples of 14, while 72 is not.",
      },
      {
        question:
          "Which number should replace the question mark: 4, 8, 16, 32, ?",
        options: ["64", "48", "56", "72"],
        correctAnswer: "64",
        explanation:
          "The series represents powers of 2: 2^2=4, 2^3=8, 2^4=16, 2^5=32, so the next term is 2^6=64.",
      },
      {
        question: "If 'GIRAFFE' is coded as 'HJSBFF', how is 'ZEBRA' coded?",
        options: ["AFCSB", "AFDTA", "BGCTB", "AFCTC"],
        correctAnswer: "AFCSB",
        explanation:
          "Each letter in 'GIRAFFE' is shifted by one position to form 'HJSBFF'. Similarly, 'ZEBRA' shifted by one position becomes 'AFCSB'.",
      },
      {
        question: "Find the next term in the sequence: 1, 2, 6, 24, 120, ?",
        options: ["720", "840", "960", "1080"],
        correctAnswer: "720",
        explanation:
          "The series represents factorial numbers: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, so the next term is 6!=720.",
      },
    ],
  },
];
