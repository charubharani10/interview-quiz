export const test10 = [
  {
    question: "How do you create a higher-order component (HOC) in React?",
    options: [
      "By writing a function that takes a component and returns a new component with additional props or behavior",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By writing a function that takes a component and returns a new component with additional props or behavior",
    explanation:
      "A higher-order component (HOC) is created by writing a function that takes a component and returns a new component that wraps the original one, adding additional props or behavior to it.",
  },
  {
    question: "What is the role of useMemo() in React?",
    options: [
      "To memoize the result of expensive calculations to avoid unnecessary re-computations",
      "To manage state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize the result of expensive calculations to avoid unnecessary re-computations",
    explanation:
      "useMemo() is used to memoize the results of expensive calculations or operations, which helps in preventing unnecessary re-computations and improving performance by returning a cached result.",
  },
  {
    question: "How do you manage state across multiple components?",
    options: [
      "By using context API or state management libraries like Redux",
      "By using useState() hook in each component",
      "By using useEffect() hook",
      "By using refs",
    ],
    correctAnswer:
      "By using context API or state management libraries like Redux",
    explanation:
      "State that needs to be shared across multiple components can be managed using the context API or state management libraries like Redux, allowing for centralized state management and avoiding prop drilling.",
  },
  {
    question: "What is React.StrictMode used for?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To optimize performance",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a tool for identifying potential problems in an application by enabling additional checks and warnings during development, helping to ensure code quality and adherence to best practices.",
  },
  {
    question: "How can you prevent a component from re-rendering in React?",
    options: [
      "By using React.memo() for functional components",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer: "By using React.memo() for functional components",
    explanation:
      "React.memo() is used to prevent unnecessary re-renders of functional components by memoizing them, so they only re-render when their props change.",
  },
  {
    question:
      "What is the difference between useEffect() and useLayoutEffect() hooks?",
    options: [
      "useEffect() runs after the DOM has painted, while useLayoutEffect() runs before it",
      "useLayoutEffect() runs after the DOM has painted, while useEffect() runs before it",
      "Both hooks run at the same time",
      "Both hooks are used for managing state",
    ],
    correctAnswer:
      "useEffect() runs after the DOM has painted, while useLayoutEffect() runs before it",
    explanation:
      "useEffect() runs asynchronously after the DOM has painted, while useLayoutEffect() runs synchronously before the DOM updates are painted, allowing for layout calculations and DOM adjustments.",
  },
  {
    question: "What is the purpose of useReducer() hook?",
    options: [
      "To manage complex state logic using a reducer function",
      "To manage simple state logic",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer: "To manage complex state logic using a reducer function",
    explanation:
      "useReducer() is used for managing complex state logic in functional components by using a reducer function to handle state transitions based on dispatched actions.",
  },
  {
    question: "How do you handle side effects in functional components?",
    options: [
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
      "By using refs",
    ],
    correctAnswer: "By using useEffect() hook",
    explanation:
      "Side effects in functional components are handled using the useEffect() hook, which allows you to perform actions such as data fetching, subscriptions, or manually changing the DOM after the component renders.",
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
      "React.lazy() is used to dynamically import components, allowing for code splitting and reducing the initial load time by loading components only when they are needed.",
  },
  {
    question: "How do you handle context in React?",
    options: [
      "By creating a context with React.createContext() and accessing it with useContext()",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By creating a context with React.createContext() and accessing it with useContext()",
    explanation:
      "Context in React is handled by creating a context object using React.createContext() and consuming it in components using the useContext() hook, which allows for easy access to context values throughout the component tree.",
  },
  {
    question: "What does useRef() hook allow you to do?",
    options: [
      "Persist values across renders without causing re-renders",
      "Manage component state",
      "Handle side effects",
      "Create context",
    ],
    correctAnswer: "Persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders, useful for storing mutable values or referencing DOM elements.",
  },
  {
    question: "How do you optimize React application performance?",
    options: [
      "By using React.memo(), useMemo(), useCallback(), and lazy loading",
      "By using class components",
      "By using useEffect() hook",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.memo(), useMemo(), useCallback(), and lazy loading",
    explanation:
      "Performance in React applications can be optimized by using techniques such as React.memo() to prevent unnecessary re-renders, useMemo() and useCallback() to memoize values and functions, and lazy loading to split code and load components only when needed.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To memoize a functional component to avoid unnecessary re-renders",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To memoize a functional component to avoid unnecessary re-renders",
    explanation:
      "React.memo() is a higher-order component that memoizes a functional component, preventing it from re-rendering if its props haven't changed, which helps optimize performance by reducing unnecessary renders.",
  },
  {
    question: "How do you manage state in functional components?",
    options: [
      "By using useState() and useReducer() hooks",
      "By using context API",
      "By using refs",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using useState() and useReducer() hooks",
    explanation:
      "State in functional components is managed using the useState() hook for simple state logic and the useReducer() hook for more complex state logic that involves multiple state transitions.",
  },
  {
    question: "What does useLayoutEffect() do?",
    options: [
      "It allows you to perform DOM measurements and updates before the browser paints",
      "It handles side effects",
      "It manages component state",
      "It creates context",
    ],
    correctAnswer:
      "It allows you to perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() allows you to perform DOM measurements and updates before the browser paints, ensuring that changes are applied synchronously and avoiding visual inconsistencies.",
  },
  {
    question: "How do you handle asynchronous operations in React?",
    options: [
      "By using useEffect() hook with async/await syntax",
      "By using Promise directly in components",
      "By using setTimeout() inside components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() hook with async/await syntax",
    explanation:
      "Asynchronous operations are typically handled within the useEffect() hook using async/await syntax to ensure that side effects like data fetching are performed and managed properly.",
  },
  {
    question: "What is React.Suspense used for?",
    options: [
      "To handle loading states for dynamically imported components",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To handle loading states for dynamically imported components",
    explanation:
      "React.Suspense is used to handle the loading states of components that are dynamically imported, allowing you to display a fallback UI while the component is being loaded.",
  },
  {
    question: "How do you implement code splitting in React applications?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Code splitting in React is achieved by using React.lazy() to dynamically import components and React.Suspense to provide a fallback UI while the components are being loaded.",
  },
  {
    question: "What is the purpose of useCallback() in React?",
    options: [
      "To memoize callback functions to avoid unnecessary re-renders",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions to avoid unnecessary re-renders",
    explanation:
      "useCallback() is used to memoize callback functions, preventing them from being re-created on every render, which helps in avoiding unnecessary re-renders of child components that depend on these callbacks.",
  },
  {
    question: "How do you access a context value in a functional component?",
    options: [
      "By using useContext() hook",
      "By using props",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using useContext() hook",
    explanation:
      "To access a context value in a functional component, you use the useContext() hook, which allows you to consume the context value created with React.createContext() without having to pass props manually.",
  },
];
