export const test1 = [
  {
    question: "What is an array?",
    options: [
      "A single variable",
      "A collection of items stored at contiguous memory locations",
      "A mathematical operation",
      "A database",
    ],
    correctAnswer:
      "A collection of items stored at contiguous memory locations",
    explanation:
      "An array is a collection of items stored at contiguous memory locations and is used to store multiple items under a single name.",
  },
  {
    question:
      "Which of the following is the correct way to declare an array in C?",
    options: ["int arr[];", "int arr[5];", "array arr[5];", "int arr[] = 5;"],
    correctAnswer: "int arr[5];",
    explanation:
      "In C, an array is declared by specifying the data type, name, and the size in square brackets. Example: int arr[5];",
  },
  {
    question: "How is the index of an array in most programming languages?",
    options: [
      "It starts from 0",
      "It starts from 1",
      "It starts from -1",
      "It starts from a random number",
    ],
    correctAnswer: "It starts from 0",
    explanation:
      "In most programming languages, arrays are zero-indexed, meaning the first element is at index 0.",
  },
  {
    question:
      "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing an element in an array by index takes constant time, O(1), because arrays allow direct access to any element.",
  },
  {
    question: "What is the main disadvantage of arrays?",
    options: [
      "Fixed size",
      "Random access",
      "Efficient indexing",
      "Contiguous memory allocation",
    ],
    correctAnswer: "Fixed size",
    explanation:
      "The main disadvantage of arrays is their fixed size. Once declared, the size cannot be changed.",
  },
  {
    question:
      "Which of the following is a valid multidimensional array declaration in C?",
    options: ["int arr[5][5];", "int arr[];", "array arr[5,5];", "arr[5,5];"],
    correctAnswer: "int arr[5][5];",
    explanation:
      "In C, a multidimensional array can be declared with multiple sets of square brackets, such as int arr[5][5].",
  },
  {
    question: "Which sorting algorithm works well with arrays?",
    options: [
      "Bubble Sort",
      "Binary Search",
      "Depth-First Search",
      "Insertion",
    ],
    correctAnswer: "Bubble Sort",
    explanation:
      "Bubble Sort is a simple comparison-based sorting algorithm that works well with arrays for small datasets.",
  },
  {
    question: "How do you calculate the length of an array in C?",
    options: [
      "sizeof(arr) / sizeof(arr[0])",
      "arr.length",
      "arr.size()",
      "len(arr)",
    ],
    correctAnswer: "sizeof(arr) / sizeof(arr[0])",
    explanation:
      "In C, the length of an array can be calculated using sizeof(arr) / sizeof(arr[0]), which gives the number of elements.",
  },
  {
    question:
      "What happens if you try to access an index that is out of bounds in an array?",
    options: [
      "Undefined behavior",
      "An exception is thrown",
      "The program exits",
      "It returns the last element",
    ],
    correctAnswer: "Undefined behavior",
    explanation:
      "In C and many other languages, accessing an array out of bounds results in undefined behavior, meaning anything could happen, from crashes to unexpected values.",
  },
  {
    question: "Which operation is generally the slowest in arrays?",
    options: [
      "Insertion",
      "Accessing an element",
      "Searching for an element",
      "Sorting",
    ],
    correctAnswer: "Insertion",
    explanation:
      "Insertion is generally the slowest operation in arrays, especially if elements need to be shifted to make space.",
  },
  {
    question: "How do you initialize an array in Java?",
    options: [
      "int arr[] = new int[5];",
      "int arr() = new int[5];",
      "int arr[5];",
      "array arr[5];",
    ],
    correctAnswer: "int arr[] = new int[5];",
    explanation:
      "In Java, you initialize an array using 'new', followed by the array type and size in square brackets.",
  },
  {
    question:
      "What is the difference between an array and an ArrayList in Java?",
    options: [
      "Array is fixed size, ArrayList is dynamic",
      "ArrayList allows only primitive types",
      "Array allows dynamic resizing",
      "ArrayList uses less memory",
    ],
    correctAnswer: "Array is fixed size, ArrayList is dynamic",
    explanation:
      "Arrays have a fixed size, while ArrayLists in Java are resizable and can grow as needed.",
  },
  {
    question: "How do you access the first element of an array in Python?",
    options: ["array[0]", "array[1]", "array[first]", "array[-1]"],
    correctAnswer: "array[0]",
    explanation:
      "In Python, the first element of an array is accessed using the index 0, i.e., array[0].",
  },
  {
    question: "Which of the following languages does not support arrays?",
    options: ["Python", "C", "Java", "HTML"],
    correctAnswer: "HTML",
    explanation:
      "HTML is a markup language for creating web pages and does not support arrays, which are a feature of programming languages.",
  },
  {
    question:
      "Which of the following methods can be used to copy one array into another in JavaScript?",
    options: [
      "arr2 = arr1.slice()",
      "arr2 = arr1",
      "arr2 = clone(arr1)",
      "arr2 = new arr1",
    ],
    correctAnswer: "arr2 = arr1.slice()",
    explanation:
      "In JavaScript, you can use the slice() method to create a shallow copy of an array.",
  },
  {
    question: "What is the purpose of the 'length' property in arrays?",
    options: [
      "It gives the number of elements in the array",
      "It counts the number of unique elements",
      "It returns the memory size of the array",
      "It removes duplicate elements",
    ],
    correctAnswer: "It gives the number of elements in the array",
    explanation:
      "The 'length' property of an array returns the number of elements present in the array.",
  },
  {
    question:
      "What happens if you try to insert more elements than the size of a static array?",
    options: [
      "Array overflow",
      "The array resizes automatically",
      "An exception is thrown",
      "The extra elements are ignored",
    ],
    correctAnswer: "Array overflow",
    explanation:
      "In a static array, inserting more elements than its defined size causes array overflow, leading to potential errors.",
  },
  {
    question: "Which of the following is not a valid array operation?",
    options: ["Traversal", "Insertion", "Indexing", "Hashing"],
    correctAnswer: "Hashing",
    explanation:
      "Hashing is not an operation performed on arrays. It is typically used in data structures like hash tables.",
  },
  {
    question: "How do you reverse an array in JavaScript?",
    options: [
      "arr.reverse()",
      "reverse(arr)",
      "arr[::-1]",
      "reverseArray(arr)",
    ],
    correctAnswer: "arr.reverse()",
    explanation:
      "In JavaScript, you can use the reverse() method to reverse the elements of an array.",
  },
  {
    question: "In which scenario are arrays most useful?",
    options: [
      "When you need to store a collection of elements of the same type",
      "When you need fast random access",
      "When the number of elements is fixed",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Arrays are useful when you need to store elements of the same type, provide fast access via index, and when the number of elements is known and fixed.",
  },
];
