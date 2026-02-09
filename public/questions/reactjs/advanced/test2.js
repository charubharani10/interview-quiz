export const test2 = [
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
      "Context in React is managed by creating a context with React.createContext() and then using the useContext() hook to access the context values in functional components.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To prevent unnecessary re-renders of a functional component by memoizing it",
      "To handle side effects",
      "To manage component state",
      "To define routes",
    ],
    correctAnswer:
      "To prevent unnecessary re-renders of a functional component by memoizing it",
    explanation:
      "React.memo() is used to optimize performance by memoizing functional components. It prevents the component from re-rendering unless its props change.",
  },
  {
    question: "What does useImperativeHandle() hook do?",
    options: [
      "It customizes the instance value that is exposed when using ref",
      "It handles side effects",
      "It manages component state",
      "It handles asynchronous operations",
    ],
    correctAnswer:
      "It customizes the instance value that is exposed when using ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value that is exposed to parent components when using refs. It allows for more control over what is exposed.",
  },
  {
    question: "How can you handle side effects in a functional component?",
    options: [
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using useEffect() hook",
    explanation:
      "The useEffect() hook is designed to handle side effects in functional components, such as data fetching, subscriptions, or manually manipulating the DOM.",
  },
  {
    question: "What is the purpose of React.lazy()?",
    options: [
      "To dynamically import components and enable code splitting",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer: "To dynamically import components and enable code splitting",
    explanation:
      "React.lazy() is used to dynamically import components, enabling code splitting. This helps to load components only when they are needed, improving the performance of the application.",
  },
  {
    question: "How do you implement error boundaries in React?",
    options: [
      "By creating a class component with componentDidCatch() and getDerivedStateFromError() lifecycle methods",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By creating a class component with componentDidCatch() and getDerivedStateFromError() lifecycle methods",
    explanation:
      "Error boundaries in React are implemented by creating a class component that includes componentDidCatch() and getDerivedStateFromError() methods. These methods catch JavaScript errors in the component tree and allow you to handle them gracefully.",
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
      "React.StrictMode is a development tool that activates additional checks and warnings to help identify potential problems in an application, such as deprecated APIs and potential issues in the code.",
  },
  {
    question: "How can you optimize React application performance?",
    options: [
      "By using React.memo(), useMemo(), useCallback(), and lazy loading",
      "By using class components",
      "By using useEffect() hook",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.memo(), useMemo(), useCallback(), and lazy loading",
    explanation:
      "React application performance can be optimized using techniques such as React.memo() to memoize components, useMemo() and useCallback() to optimize expensive computations and callbacks, and lazy loading to split code and load components only when needed.",
  },
  {
    question: "What is useLayoutEffect() used for in React?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is used to perform DOM measurements and updates before the browser paints. It ensures that changes are applied synchronously and avoids visual inconsistencies.",
  },
  {
    question: "How do you handle asynchronous actions in React with hooks?",
    options: [
      "By using useEffect() with async functions",
      "By using Promise directly in components",
      "By using setTimeout() inside components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() with async functions",
    explanation:
      "Asynchronous actions in React can be handled using the useEffect() hook with async functions. This allows you to perform asynchronous operations like data fetching within functional components.",
  },
  {
    question: "What is the purpose of useDeferredValue() in React?",
    options: [
      "To defer updates to a state value and avoid blocking the main thread",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To defer updates to a state value and avoid blocking the main thread",
    explanation:
      "The useDeferredValue() hook allows you to defer updates to a state value to avoid blocking the main thread. This helps in improving the responsiveness of the application, especially during large updates.",
  },
  {
    question: "How can you create a custom hook in React?",
    options: [
      "By creating a JavaScript function that uses other hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By creating a JavaScript function that uses other hooks and returns values or functions",
    explanation:
      "Custom hooks in React are created by writing a JavaScript function that uses other hooks and returns values or functions. This allows you to encapsulate and reuse logic across multiple components.",
  },
  {
    question: "What is React.lazy() used for in React?",
    options: [
      "To dynamically import components for code splitting",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer: "To dynamically import components for code splitting",
    explanation:
      "React.lazy() is used to dynamically import components, enabling code splitting. This improves performance by loading components only when they are needed, rather than including them all in the initial bundle.",
  },
  {
    question: "What is the purpose of React.Suspense?",
    options: [
      "To provide a fallback UI while components are being loaded dynamically",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To provide a fallback UI while components are being loaded dynamically",
    explanation:
      "React.Suspense is used to provide a fallback UI while waiting for components to load dynamically. It helps in handling asynchronous loading and improves the user experience during component loading.",
  },
  {
    question: "What is useTransition() used for in React?",
    options: [
      "To manage state transitions and prioritize urgent updates",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer: "To manage state transitions and prioritize urgent updates",
    explanation:
      "The useTransition() hook is used to manage state transitions that are deferred, allowing urgent updates to be prioritized. This helps in improving the responsiveness of the application.",
  },
  {
    question: "What does React.StrictMode help with during development?",
    options: [
      "It helps identify potential problems with components by activating additional checks and warnings",
      "It optimizes performance",
      "It manages state",
      "It defines routes",
    ],
    correctAnswer:
      "It helps identify potential problems with components by activating additional checks and warnings",
    explanation:
      "React.StrictMode activates additional checks and warnings during development to help identify potential problems and deprecated practices, thus aiding in improving code quality.",
  },
  {
    question: "What is the role of useDeferredValue()?",
    options: [
      "To defer the update of a state value until the browser is idle",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To defer the update of a state value until the browser is idle",
    explanation:
      "The useDeferredValue() hook defers updates to a state value until the browser is idle. This helps in improving the performance of the application by avoiding blocking the main thread during state updates.",
  },
  {
    question: "What is the purpose of useTransition() in React?",
    options: [
      "To allow for state transitions that do not block the main thread",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To allow for state transitions that do not block the main thread",
    explanation:
      "The useTransition() hook allows for managing state transitions in a way that does not block the main thread. This improves responsiveness and provides a smoother user experience.",
  },
  {
    question: "How do you handle error boundaries in React?",
    options: [
      "By creating a class component with componentDidCatch() and getDerivedStateFromError() lifecycle methods",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By creating a class component with componentDidCatch() and getDerivedStateFromError() lifecycle methods",
    explanation:
      "Error boundaries are implemented in React by creating a class component that includes componentDidCatch() and getDerivedStateFromError() methods to catch JavaScript errors and handle them gracefully.",
  },
  {
    question: "What is useImperativeHandle() used for in React?",
    options: [
      "To customize the instance value that is exposed when using ref",
      "To handle side effects",
      "To manage component state",
      "To handle asynchronous operations",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value that is exposed to parent components when using refs. This allows for more precise control over what is exposed.",
  },
];
