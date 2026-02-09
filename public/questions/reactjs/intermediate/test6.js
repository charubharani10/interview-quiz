export const test6 = [
  {
    question: "What is React.StrictMode used for in development?",
    options: [
      "To highlight potential problems in the application and provide additional warnings",
      "To optimize performance",
      "To manage component state",
      "To define routes",
    ],
    correctAnswer:
      "To highlight potential problems in the application and provide additional warnings",
    explanation:
      "In development, React.StrictMode highlights potential problems and provides warnings about unsafe lifecycle methods and other issues.",
  },
  {
    question: "How do you implement conditional rendering in React?",
    options: [
      "By using JavaScript operators like && and ternary operators within JSX",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using JavaScript operators like && and ternary operators within JSX",
    explanation:
      "Conditional rendering in React can be implemented using JavaScript operators like && and ternary operators directly within JSX.",
  },
  {
    question: "What is the purpose of useMemo() hook?",
    options: [
      "To memoize expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize expensive calculations and prevent unnecessary re-computations",
    explanation:
      "useMemo() helps optimize performance by memoizing the result of expensive calculations and preventing unnecessary re-computations.",
  },
  {
    question: "How do you update state in a functional component?",
    options: [
      "By using the state updater function returned by useState()",
      "By directly modifying the state object",
      "By using useEffect() hook",
      "By using context API",
    ],
    correctAnswer: "By using the state updater function returned by useState()",
    explanation:
      "In functional components, state is updated using the updater function provided by the useState() hook, ensuring proper state management and re-renders.",
  },
  {
    question: "What is the difference between useState() and useReducer()?",
    options: [
      "useState() is for simple state management, while useReducer() is for complex state logic",
      "useReducer() is used for managing form state, while useState() is used for component state",
      "useState() is for handling side effects, while useReducer() is for handling asynchronous operations",
      "useState() and useReducer() are interchangeable",
    ],
    correctAnswer:
      "useState() is for simple state management, while useReducer() is for complex state logic",
    explanation:
      "useState() is ideal for simple state management, while useReducer() is better suited for managing complex state logic involving multiple actions or state transitions.",
  },
  {
    question: "What is React.memo() used for in functional components?",
    options: [
      "To prevent unnecessary re-renders by memoizing the component",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To prevent unnecessary re-renders by memoizing the component",
    explanation:
      "React.memo() is used to optimize performance by memoizing a functional component, ensuring it only re-renders when its props change.",
  },
  {
    question: "How do you handle context updates in React?",
    options: [
      "By using useContext() to access context values and Context.Provider to provide updated values",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using refs",
    ],
    correctAnswer:
      "By using useContext() to access context values and Context.Provider to provide updated values",
    explanation:
      "Context updates are managed by using Context.Provider to provide new values and useContext() to access those values in functional components.",
  },
  {
    question: "What is useCallback() hook used for?",
    options: [
      "To memoize callback functions and avoid re-creating them on each render",
      "To handle side effects",
      "To manage component state",
      "To define routes",
    ],
    correctAnswer:
      "To memoize callback functions and avoid re-creating them on each render",
    explanation:
      "The useCallback() hook memoizes callback functions to prevent them from being recreated on every render, which helps optimize performance.",
  },
  {
    question: "How do you implement form validation in React?",
    options: [
      "By managing form state with useState() and handling validation logic in event handlers",
      "By using uncontrolled components with ref",
      "By using third-party libraries like Formik or React Hook Form",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form validation in React can be implemented using various approaches, including managing state with useState(), using uncontrolled components with refs, or leveraging third-party libraries like Formik or React Hook Form.",
  },
  {
    question: "What does the useEffect() hook do?",
    options: [
      "It performs side effects in functional components, such as data fetching or subscribing to events",
      "It manages component state",
      "It creates context",
      "It memoizes expensive calculations",
    ],
    correctAnswer:
      "It performs side effects in functional components, such as data fetching or subscribing to events",
    explanation:
      "The useEffect() hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.",
  },
  {
    question: "What is useLayoutEffect() hook used for?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is similar to useEffect() but runs synchronously after all DOM mutations. It's used for DOM measurements and updates that need to happen before the browser paints.",
  },
  {
    question: "How do you handle asynchronous operations in React using hooks?",
    options: [
      "By using async/await syntax inside useEffect()",
      "By using Promise directly in components",
      "By using setTimeout() inside components",
      "By using useState() hook",
    ],
    correctAnswer: "By using async/await syntax inside useEffect()",
    explanation:
      "Asynchronous operations in React can be managed by using async/await syntax within the useEffect() hook, allowing you to perform data fetching or other async tasks.",
  },
  {
    question: "What is the useRef() hook used for?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "useRef() allows you to persist values across renders without causing re-renders. It's often used to access or modify DOM elements directly.",
  },
  {
    question: "How do you conditionally render components in React?",
    options: [
      "By using JavaScript conditional operators like && and ternary operators inside JSX",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using JavaScript conditional operators like && and ternary operators inside JSX",
    explanation:
      "Conditional rendering in React can be achieved using JavaScript conditional operators like && and ternary operators directly within JSX.",
  },
  {
    question: "What is React.lazy() used for?",
    options: [
      "To dynamically import components and enable code splitting",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer: "To dynamically import components and enable code splitting",
    explanation:
      "React.lazy() is used for code splitting by dynamically importing components, which helps reduce the initial load time by splitting the code into smaller chunks.",
  },
  {
    question: "How do you use React.Suspense?",
    options: [
      "To handle loading states for dynamically imported components",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To handle loading states for dynamically imported components",
    explanation:
      "React.Suspense is used to handle loading states when components are dynamically imported using React.lazy(). It allows you to display a fallback UI while waiting for the component to load.",
  },
  {
    question: "What is the purpose of useImperativeHandle() hook?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To handle side effects",
      "To manage component state",
      "To handle routing",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows you to customize the instance value exposed through refs in parent components, giving you control over what is accessible.",
  },
  {
    question: "How do you handle side effects in a React functional component?",
    options: [
      "By using useEffect() hook",
      "By using useState() hook",
      "By using useReducer() hook",
      "By using context API",
    ],
    correctAnswer: "By using useEffect() hook",
    explanation:
      "Side effects in functional components are managed using the useEffect() hook, which allows you to perform operations like data fetching and subscriptions.",
  },
  {
    question: "What is the purpose of React.createContext()?",
    options: [
      "To create a context object that allows components to share values without passing props explicitly",
      "To create a new React component",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer:
      "To create a context object that allows components to share values without passing props explicitly",
    explanation:
      "React.createContext() is used to create a context object that enables components to share values without passing props through every level of the component tree.",
  },
  {
    question: "How do you use useReducer() hook in React?",
    options: [
      "To manage complex state logic in functional components",
      "To handle side effects",
      "To manage context",
      "To handle form state",
    ],
    correctAnswer: "To manage complex state logic in functional components",
    explanation:
      "The useReducer() hook is used for managing complex state logic in functional components, especially when state depends on previous state or involves multiple actions.",
  },
];
