export const test9 = [
  {
    question:
      "How can you prevent unnecessary re-renders in React functional components?",
    options: [
      "By using React.memo() to memoize components and useCallback() to memoize functions",
      "By managing component state with useState()",
      "By handling side effects with useEffect()",
      "By creating context",
    ],
    correctAnswer:
      "By using React.memo() to memoize components and useCallback() to memoize functions",
    explanation:
      "To prevent unnecessary re-renders in React functional components, use React.memo() to memoize components and useCallback() to memoize functions. This ensures that components and functions are only recreated when necessary, improving performance.",
  },
  {
    question: "What is useTransition() and its use case?",
    options: [
      "It helps manage concurrent updates and prioritize urgent tasks in React’s concurrent mode",
      "It handles side effects",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It helps manage concurrent updates and prioritize urgent tasks in React’s concurrent mode",
    explanation:
      "The useTransition() hook is used in React’s concurrent mode to manage concurrent updates and prioritize urgent tasks. It helps keep the application responsive by allowing certain updates to be deferred.",
  },
  {
    question: "How does useDeferredValue() improve performance?",
    options: [
      "By deferring less urgent updates to keep the application responsive",
      "By managing state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By deferring less urgent updates to keep the application responsive",
    explanation:
      "The useDeferredValue() hook improves performance by deferring less urgent updates. This helps keep the application responsive by processing more important updates first.",
  },
  {
    question: "What is React.lazy() used for in terms of performance?",
    options: [
      "It helps in code splitting by dynamically importing components",
      "It handles state management",
      "It deals with side effects",
      "It creates context",
    ],
    correctAnswer:
      "It helps in code splitting by dynamically importing components",
    explanation:
      "React.lazy() improves performance through code splitting by dynamically importing components only when they are needed. This reduces the initial load time of the application.",
  },
  {
    question: "What does useRef() hook allow you to do in React?",
    options: [
      "Access and persist values across renders without causing re-renders",
      "Manage component state",
      "Handle side effects",
      "Create context",
    ],
    correctAnswer:
      "Access and persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook allows you to access and persist values across renders without causing re-renders. It is useful for storing mutable values and accessing DOM elements.",
  },
  {
    question: "How does useCallback() help optimize React components?",
    options: [
      "By memoizing functions to prevent their recreation on every render",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing functions to prevent their recreation on every render",
    explanation:
      "The useCallback() hook memoizes functions to prevent them from being recreated on every render. This helps avoid unnecessary re-renders of child components that depend on these functions.",
  },
  {
    question: "What is the main purpose of React.createContext()?",
    options: [
      "To create a context object for managing global state and avoiding prop drilling",
      "To create a new React component",
      "To handle side effects",
      "To manage local state",
    ],
    correctAnswer:
      "To create a context object for managing global state and avoiding prop drilling",
    explanation:
      "React.createContext() creates a context object which allows you to share values across the component tree without passing props down manually at every level. This helps manage global state and avoids prop drilling.",
  },
  {
    question:
      "How does useLayoutEffect() differ from useEffect() in terms of when it runs?",
    options: [
      "useLayoutEffect() runs synchronously after DOM mutations, while useEffect() runs asynchronously after the paint",
      "useEffect() runs synchronously",
      "useLayoutEffect() runs asynchronously",
      "Both run at the same time",
    ],
    correctAnswer:
      "useLayoutEffect() runs synchronously after DOM mutations, while useEffect() runs asynchronously after the paint",
    explanation:
      "useLayoutEffect() runs synchronously after DOM mutations, allowing it to read layout from the DOM and make adjustments before the browser has a chance to paint. useEffect() runs asynchronously after the paint, which does not block the browser's paint process.",
  },
  {
    question: "What are React.memo() and useMemo() used for?",
    options: [
      "React.memo() prevents re-renders of functional components, and useMemo() memoizes expensive calculations",
      "React.memo() manages state",
      "useMemo() handles side effects",
      "Both manage context",
    ],
    correctAnswer:
      "React.memo() prevents re-renders of functional components, and useMemo() memoizes expensive calculations",
    explanation:
      "React.memo() is used to prevent re-renders of functional components when their props have not changed, while useMemo() is used to memoize expensive calculations to avoid recalculating them on every render.",
  },
  {
    question: "How can you use useDeferredValue() to enhance performance?",
    options: [
      "By deferring non-urgent updates to improve the responsiveness of the application",
      "By managing state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By deferring non-urgent updates to improve the responsiveness of the application",
    explanation:
      "useDeferredValue() enhances performance by deferring non-urgent updates, which allows more important updates to be processed first and helps keep the application responsive.",
  },
  {
    question: "What role does React.StrictMode play in development?",
    options: [
      "It helps identify potential problems by activating additional checks and warnings",
      "It optimizes performance",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It helps identify potential problems by activating additional checks and warnings",
    explanation:
      "React.StrictMode activates additional checks and warnings in development mode to help identify potential issues such as unsafe lifecycle methods, deprecated APIs, and other potential problems in the application.",
  },
  {
    question: "What does useReducer() hook provide for state management?",
    options: [
      "It allows you to manage complex state logic with a reducer function and dispatch actions",
      "It manages simple state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It allows you to manage complex state logic with a reducer function and dispatch actions",
    explanation:
      "The useReducer() hook is used to manage complex state logic by using a reducer function and dispatching actions. This approach can help in managing state transitions in a more predictable manner, especially in complex scenarios.",
  },
  {
    question: "How does React.lazy() contribute to code splitting?",
    options: [
      "It allows you to dynamically import components, enabling code splitting for better performance",
      "It handles state management",
      "It deals with side effects",
      "It creates context",
    ],
    correctAnswer:
      "It allows you to dynamically import components, enabling code splitting for better performance",
    explanation:
      "React.lazy() helps in code splitting by dynamically importing components only when they are needed. This reduces the initial load time of the application and improves performance by loading components on-demand.",
  },
  {
    question: "What is the function of useMemo() hook?",
    options: [
      "It memoizes results of expensive computations to avoid recalculating on every render",
      "It manages state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It memoizes results of expensive computations to avoid recalculating on every render",
    explanation:
      "The useMemo() hook is used to memoize the results of expensive computations. This prevents the recalculation of these results on every render, thereby improving performance.",
  },
  {
    question: "How can you prevent unnecessary re-renders using React.memo()?",
    options: [
      "By wrapping functional components to prevent re-renders if props haven't changed",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By wrapping functional components to prevent re-renders if props haven't changed",
    explanation:
      "React.memo() helps prevent unnecessary re-renders by wrapping functional components. It only re-renders the component if its props have changed, thus optimizing performance.",
  },
  {
    question: "How does useContext() hook work in a React application?",
    options: [
      "It provides access to the value of a context created with React.createContext()",
      "It manages component state",
      "It handles side effects",
      "It creates a new context",
    ],
    correctAnswer:
      "It provides access to the value of a context created with React.createContext()",
    explanation:
      "The useContext() hook provides access to the value of a context created with React.createContext(). This allows functional components to consume context values without needing a Context.Consumer component.",
  },
  {
    question: "What is useImperativeHandle() used for in React?",
    options: [
      "To customize the ref instance value exposed by a component",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer: "To customize the ref instance value exposed by a component",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value exposed by a ref. This allows you to control what properties or methods are accessible when the ref is used in parent components.",
  },
  {
    question:
      "How does useTransition() hook enhance the user experience in concurrent mode?",
    options: [
      "By allowing you to manage concurrent updates and prioritize urgent tasks",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By allowing you to manage concurrent updates and prioritize urgent tasks",
    explanation:
      "The useTransition() hook enhances user experience in concurrent mode by allowing you to manage concurrent updates and prioritize urgent tasks, helping keep the application responsive during complex updates.",
  },
  {
    question:
      "What does useDeferredValue() hook achieve in a concurrent React application?",
    options: [
      "It defers less critical updates to improve overall application responsiveness",
      "It manages state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It defers less critical updates to improve overall application responsiveness",
    explanation:
      "The useDeferredValue() hook defers less critical updates in a concurrent React application, which helps improve the overall responsiveness of the application by allowing more urgent updates to be processed first.",
  },
  {
    question: "What is the purpose of the useDebugValue() hook?",
    options: [
      "To display a label for custom hooks in React DevTools",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer: "To display a label for custom hooks in React DevTools",
    explanation:
      "The useDebugValue() hook is used to display a label for custom hooks in React DevTools. This helps in debugging by providing more meaningful information about the custom hook’s state.",
  },
];
