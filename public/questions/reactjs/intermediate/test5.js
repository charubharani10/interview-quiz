export const test5 = [
  {
    question: "How do you create a custom hook?",
    options: [
      "By creating a function that uses React hooks and returns values or functions",
      "By creating a class component",
      "By using useState() directly in components",
      "By using React.createClass()",
    ],
    correctAnswer:
      "By creating a function that uses React hooks and returns values or functions",
    explanation:
      "A custom hook is a function that uses one or more React hooks and allows you to reuse stateful logic across multiple components.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To memoize a functional component and avoid unnecessary re-renders",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To memoize a functional component and avoid unnecessary re-renders",
    explanation:
      "React.memo() is used to wrap a functional component to prevent unnecessary re-renders by memoizing its output, re-rendering only when its props change.",
  },
  {
    question: "How do you manage complex state logic in React?",
    options: [
      "By using useReducer() hook",
      "By using useState() hook",
      "By using context API",
      "By using refs",
    ],
    correctAnswer: "By using useReducer() hook",
    explanation:
      "useReducer() is useful for managing complex state logic, such as when state updates depend on previous state or when the logic involves multiple actions.",
  },
  {
    question: "What does the useReducer() hook return?",
    options: [
      "The current state and a dispatch function",
      "The current state and a setter function",
      "A component with state management capabilities",
      "A function to update context",
    ],
    correctAnswer: "The current state and a dispatch function",
    explanation:
      "useReducer() returns the current state and a dispatch function that can be used to trigger state updates based on the defined reducer function.",
  },
  {
    question: "How do you pass data to a component using props?",
    options: [
      "By including data as attributes on the component",
      "By using state management libraries",
      "By using context API",
      "By using useEffect()",
    ],
    correctAnswer: "By including data as attributes on the component",
    explanation:
      "Props are passed to components as attributes, allowing you to send data from parent components to child components.",
  },
  {
    question: "What is the purpose of useLayoutEffect()?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() runs synchronously before the browser paints, making it useful for performing DOM measurements or updates before they are visually reflected.",
  },
  {
    question: "How do you handle side effects in React components?",
    options: [
      "By using useEffect() hook",
      "By using useState() hook",
      "By using useReducer() hook",
      "By using context API",
    ],
    correctAnswer: "By using useEffect() hook",
    explanation:
      "Side effects in React components, such as data fetching, subscriptions, or manually changing the DOM, are handled using the useEffect() hook.",
  },
  {
    question: "What is the purpose of React.createContext()?",
    options: [
      "To create a context object that can be used to pass data through the component tree without prop drilling",
      "To create a new React component",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer:
      "To create a context object that can be used to pass data through the component tree without prop drilling",
    explanation:
      "React.createContext() creates a context object that helps pass data to deeply nested components without having to pass props manually at every level.",
  },
  {
    question: "How do you access context values in a functional component?",
    options: [
      "By using useContext() hook",
      "By using props",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using useContext() hook",
    explanation:
      "The useContext() hook allows functional components to access context values without needing to pass them through props.",
  },
  {
    question: "What is useCallback() used for?",
    options: [
      "To memoize callback functions to prevent unnecessary re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions to prevent unnecessary re-renders",
    explanation:
      "useCallback() helps to prevent unnecessary re-renders by memoizing callback functions, ensuring that they remain the same between renders unless their dependencies change.",
  },
  {
    question: "How can you optimize performance in React applications?",
    options: [
      "By using React.memo(), useMemo(), and useCallback()",
      "By using class components exclusively",
      "By using useEffect() extensively",
      "By avoiding the use of hooks",
    ],
    correctAnswer: "By using React.memo(), useMemo(), and useCallback()",
    explanation:
      "React.memo(), useMemo(), and useCallback() are tools used to optimize performance by preventing unnecessary re-renders and computations.",
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
      "React.StrictMode is a development tool that helps identify potential problems in an application by activating additional checks and warnings.",
  },
  {
    question: "How do you handle errors in a React application?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() with a cleanup function",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are used to catch JavaScript errors anywhere in their child component tree and log those errors, showing a fallback UI instead of crashing the app.",
  },
  {
    question: "What does the useImperativeHandle() hook do?",
    options: [
      "It customizes the instance value that is exposed when using ref in parent components",
      "It handles side effects",
      "It manages component state",
      "It handles routing",
    ],
    correctAnswer:
      "It customizes the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows customization of the instance value that a parent component can access through a ref, providing more control over the exposed values.",
  },
  {
    question: "How do you implement lazy loading of components in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() syntax",
      "By using React.memo() for optimization",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "React.lazy() and Suspense work together to enable lazy loading of components, which improves performance by deferring the loading of components until they are needed.",
  },
  {
    question: "How do you pass data between sibling components in React?",
    options: [
      "By lifting state up to a common parent component and passing data as props",
      "By using context API",
      "By using state management libraries",
      "By using refs",
    ],
    correctAnswer:
      "By lifting state up to a common parent component and passing data as props",
    explanation:
      "To share data between sibling components, you should lift the state up to their common parent component and pass the data down as props.",
  },
  {
    question: "What does React.Fragment do?",
    options: [
      "Groups multiple elements without adding extra nodes to the DOM",
      "Handles side effects",
      "Manages state",
      "Creates context",
    ],
    correctAnswer:
      "Groups multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows grouping multiple elements without introducing additional nodes to the DOM, which helps in maintaining a cleaner DOM structure.",
  },
  {
    question: "How do you use React.memo() to optimize functional components?",
    options: [
      "By wrapping the component with React.memo() to prevent unnecessary re-renders",
      "By using useEffect() hook",
      "By using useState() hook",
      "By creating class components",
    ],
    correctAnswer:
      "By wrapping the component with React.memo() to prevent unnecessary re-renders",
    explanation:
      "React.memo() is used to wrap functional components to prevent them from re-rendering unless their props have changed, optimizing performance.",
  },
  {
    question: "What is the purpose of useRef() hook?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "useRef() is used to persist values across renders without causing re-renders, commonly used to access or modify DOM elements directly.",
  },
  {
    question: "How can you handle asynchronous operations in useEffect()?",
    options: [
      "By using async/await syntax inside an inner function within useEffect()",
      "By using Promise directly in useEffect()",
      "By using setTimeout() inside useEffect()",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using async/await syntax inside an inner function within useEffect()",
    explanation:
      "To handle asynchronous operations in useEffect(), you should define an inner async function and call it within the useEffect hook.",
  },
];
