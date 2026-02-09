export const test10 = [
  {
    question: "How can you use React.forwardRef() in functional components?",
    options: [
      "To forward refs to a child component",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer: "To forward refs to a child component",
    explanation:
      "React.forwardRef() allows you to forward refs from a parent component to a child component. This is useful when you need to access a child component’s ref from a parent component.",
  },
  {
    question:
      "What is the role of React.StrictMode in detecting unsafe lifecycle methods?",
    options: [
      "It helps identify and warn about the use of deprecated lifecycle methods in class components",
      "It optimizes performance",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It helps identify and warn about the use of deprecated lifecycle methods in class components",
    explanation:
      "React.StrictMode helps identify and warn about deprecated lifecycle methods in class components. It provides additional checks and warnings to ensure components are using safe lifecycle methods.",
  },
  {
    question:
      "How can you optimize performance using React.memo() and useCallback() together?",
    options: [
      "By using React.memo() to prevent re-renders of components and useCallback() to prevent function re-creation",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By using React.memo() to prevent re-renders of components and useCallback() to prevent function re-creation",
    explanation:
      "Using React.memo() and useCallback() together helps optimize performance by preventing unnecessary re-renders of components (React.memo()) and avoiding the recreation of functions on every render (useCallback()).",
  },
  {
    question:
      "What is the difference between useEffect() and useLayoutEffect()?",
    options: [
      "useEffect() runs after the paint, while useLayoutEffect() runs before the paint",
      "Both run synchronously",
      "useEffect() runs synchronously",
      "useLayoutEffect() runs asynchronously",
    ],
    correctAnswer:
      "useEffect() runs after the paint, while useLayoutEffect() runs before the paint",
    explanation:
      "useEffect() runs asynchronously after the paint, meaning it does not block the browser’s painting process. useLayoutEffect(), on the other hand, runs synchronously before the paint, allowing it to make adjustments based on the DOM layout before the browser renders the updates.",
  },
  {
    question:
      "How does React.Suspense interact with React.lazy() for code splitting?",
    options: [
      "React.Suspense provides a fallback UI while React.lazy() dynamically imports components",
      "React.Suspense handles state management",
      "React.lazy() manages side effects",
      "React.Suspense creates context",
    ],
    correctAnswer:
      "React.Suspense provides a fallback UI while React.lazy() dynamically imports components",
    explanation:
      "React.Suspense works with React.lazy() to enable code splitting. React.lazy() dynamically imports components, and React.Suspense provides a fallback UI while these components are being loaded.",
  },
  {
    question:
      "What does the useImperativeHandle() hook allow you to do with refs?",
    options: [
      "Customize the ref instance value exposed by a parent component",
      "Manage component state",
      "Handle side effects",
      "Create context",
    ],
    correctAnswer:
      "Customize the ref instance value exposed by a parent component",
    explanation:
      "The useImperativeHandle() hook allows you to customize the ref instance value that is exposed to parent components. This helps in controlling what properties or methods are accessible when the ref is used.",
  },
  {
    question: "How can useDeferredValue() be used to improve user experience?",
    options: [
      "By deferring less urgent updates to keep the interface responsive",
      "By managing state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By deferring less urgent updates to keep the interface responsive",
    explanation:
      "The useDeferredValue() hook defers less urgent updates, allowing the interface to stay responsive by prioritizing more critical updates first.",
  },
  {
    question:
      "What is the purpose of React.createContext() in global state management?",
    options: [
      "To create a context for passing data through the component tree without prop drilling",
      "To create new React components",
      "To handle side effects",
      "To manage local state",
    ],
    correctAnswer:
      "To create a context for passing data through the component tree without prop drilling",
    explanation:
      "React.createContext() creates a context object that allows data to be passed through the component tree without needing to pass props manually at every level, thereby simplifying global state management.",
  },
  {
    question:
      "How does React.memo() differ from useMemo() in performance optimization?",
    options: [
      "React.memo() memoizes entire components, while useMemo() memoizes specific values or calculations",
      "Both manage state",
      "useMemo() handles side effects",
      "React.memo() creates context",
    ],
    correctAnswer:
      "React.memo() memoizes entire components, while useMemo() memoizes specific values or calculations",
    explanation:
      "React.memo() is used to memoize functional components, preventing them from re-rendering if their props have not changed. useMemo() is used to memoize specific values or calculations to avoid recalculating them on every render.",
  },
  {
    question:
      "What does the useTransition() hook enable in concurrent React mode?",
    options: [
      "Managing concurrent updates and prioritizing user interactions",
      "Handling state management",
      "Managing side effects",
      "Creating context",
    ],
    correctAnswer:
      "Managing concurrent updates and prioritizing user interactions",
    explanation:
      "The useTransition() hook allows you to manage concurrent updates and prioritize user interactions in concurrent mode, improving the responsiveness of the application during complex updates.",
  },
  {
    question: "What is the benefit of using React.lazy() in code splitting?",
    options: [
      "It helps dynamically load components only when they are needed, reducing initial bundle size",
      "It manages state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It helps dynamically load components only when they are needed, reducing initial bundle size",
    explanation:
      "React.lazy() enables dynamic loading of components only when they are needed, which helps reduce the initial bundle size and improves the performance of the application by loading components on demand.",
  },
  {
    question:
      "How does useMemo() improve performance in functional components?",
    options: [
      "By memoizing the result of expensive computations to avoid re-calculating them on every render",
      "By managing state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing the result of expensive computations to avoid re-calculating them on every render",
    explanation:
      "The useMemo() hook improves performance by memoizing the result of expensive computations. This prevents the recalculation of these results on every render, thus optimizing performance.",
  },
  {
    question:
      "What role does React.StrictMode play in detecting potential problems?",
    options: [
      "It enables additional checks and warnings to help identify potential issues during development",
      "It optimizes performance",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It enables additional checks and warnings to help identify potential issues during development",
    explanation:
      "React.StrictMode provides additional checks and warnings in development mode to help identify potential issues such as deprecated lifecycle methods and unsafe practices.",
  },
  {
    question: "How can you prevent unnecessary re-renders using useCallback()?",
    options: [
      "By memoizing functions so that they are not recreated on every render",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing functions so that they are not recreated on every render",
    explanation:
      "The useCallback() hook is used to memoize functions, ensuring that they are not recreated on every render. This helps prevent unnecessary re-renders of child components that depend on these functions.",
  },
  {
    question: "What does the useRef() hook allow you to do with DOM elements?",
    options: [
      "Access and persist references to DOM elements or other values across renders without causing re-renders",
      "Manage component state",
      "Handle side effects",
      "Create context",
    ],
    correctAnswer:
      "Access and persist references to DOM elements or other values across renders without causing re-renders",
    explanation:
      "The useRef() hook allows you to access and persist references to DOM elements or other values across renders. It does not trigger re-renders when its value changes, making it useful for interacting with the DOM and holding mutable values.",
  },
  {
    question: "How does React.memo() help with performance optimization?",
    options: [
      "By preventing re-renders of functional components if their props have not changed",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By preventing re-renders of functional components if their props have not changed",
    explanation:
      "React.memo() optimizes performance by preventing functional components from re-rendering if their props have not changed. This helps avoid unnecessary rendering and improves efficiency.",
  },
  {
    question: "What is the purpose of useLayoutEffect() in React?",
    options: [
      "To perform side effects that need to be executed before the browser paints the updates",
      "To handle side effects after paint",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To perform side effects that need to be executed before the browser paints the updates",
    explanation:
      "The useLayoutEffect() hook performs side effects that need to be executed before the browser paints updates. It runs synchronously after DOM mutations but before the browser repaints, allowing you to make DOM measurements or modifications.",
  },
  {
    question:
      "What is the main benefit of using useTransition() in concurrent mode?",
    options: [
      "It allows you to manage concurrent updates and improve responsiveness",
      "It handles state management",
      "It manages side effects",
      "It creates context",
    ],
    correctAnswer:
      "It allows you to manage concurrent updates and improve responsiveness",
    explanation:
      "The useTransition() hook in concurrent mode helps manage concurrent updates and improve responsiveness by allowing you to prioritize user interactions and defer less critical updates.",
  },
  {
    question:
      "How can useDeferredValue() hook help with performance in React applications?",
    options: [
      "By deferring less critical updates to maintain responsiveness during high-priority tasks",
      "By managing state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By deferring less critical updates to maintain responsiveness during high-priority tasks",
    explanation:
      "The useDeferredValue() hook defers less critical updates to maintain responsiveness during high-priority tasks. This helps ensure that the application remains responsive by focusing on more urgent updates first.",
  },
];
