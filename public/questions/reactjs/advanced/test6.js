export const test6 = [
  {
    question: "How can you optimize React component performance?",
    options: [
      "By using React.memo(), useMemo(), and useCallback() hooks",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer: "By using React.memo(), useMemo(), and useCallback() hooks",
    explanation:
      "Optimizing React component performance can be achieved using React.memo() to prevent unnecessary re-renders of functional components, useMemo() to memoize expensive calculations, and useCallback() to memoize callback functions.",
  },
  {
    question: "What is useTransition() hook used for?",
    options: [
      "To manage concurrent state transitions and prioritize urgent updates",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To manage concurrent state transitions and prioritize urgent updates",
    explanation:
      "The useTransition() hook helps manage concurrent state transitions, allowing you to prioritize urgent updates and keep the app responsive during complex state changes.",
  },
  {
    question: "What does React.Suspense provide in React?",
    options: [
      "A fallback UI while waiting for a component to load dynamically",
      "State management",
      "Error boundaries",
      "Context management",
    ],
    correctAnswer:
      "A fallback UI while waiting for a component to load dynamically",
    explanation:
      "React.Suspense provides a fallback UI while waiting for a component to load dynamically. It helps in handling asynchronous component loading and displaying a placeholder during the loading process.",
  },
  {
    question: "How can you prevent unnecessary re-renders of a component?",
    options: [
      "By using React.memo() for functional components and shouldComponentUpdate() in class components",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using React.memo() for functional components and shouldComponentUpdate() in class components",
    explanation:
      "To prevent unnecessary re-renders, you can use React.memo() for functional components to memoize them and shouldComponentUpdate() for class components to control when they should re-render.",
  },
  {
    question: "What is the purpose of useDeferredValue() hook?",
    options: [
      "To defer updates to non-urgent values to avoid blocking the main thread",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To defer updates to non-urgent values to avoid blocking the main thread",
    explanation:
      "The useDeferredValue() hook defers updates to less urgent state values, allowing the main thread to remain responsive and preventing blocking of the user interface during complex updates.",
  },
  {
    question: "How can you create a custom hook in React?",
    options: [
      "By defining a function that uses other hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By defining a function that uses other hooks and returns values or functions",
    explanation:
      "To create a custom hook in React, you define a function that leverages other hooks (such as useState or useEffect) and returns values or functions that can be reused across different components.",
  },
  {
    question: "What does useCallback() hook do?",
    options: [
      "Memoizes callback functions to prevent their recreation on every render",
      "Manages state",
      "Handles side effects",
      "Creates context",
    ],
    correctAnswer:
      "Memoizes callback functions to prevent their recreation on every render",
    explanation:
      "The useCallback() hook memoizes callback functions, preventing them from being recreated on every render. This optimization helps in avoiding unnecessary renders of child components that depend on these callbacks.",
  },
  {
    question: "How does useLayoutEffect() differ from useEffect()?",
    options: [
      "useLayoutEffect() runs synchronously after all DOM mutations, while useEffect() runs asynchronously after paint",
      "useEffect() is used for layout updates",
      "useLayoutEffect() is used for state management",
      "useEffect() is used for creating context",
    ],
    correctAnswer:
      "useLayoutEffect() runs synchronously after all DOM mutations, while useEffect() runs asynchronously after paint",
    explanation:
      "useLayoutEffect() runs synchronously after all DOM mutations and before the browser paints, allowing for immediate DOM updates. In contrast, useEffect() runs asynchronously after the paint, making it suitable for side effects.",
  },
  {
    question: "What is the purpose of useImperativeHandle() hook?",
    options: [
      "To customize the instance value exposed when using ref",
      "To handle side effects",
      "To manage state",
      "To handle asynchronous operations",
    ],
    correctAnswer: "To customize the instance value exposed when using ref",
    explanation:
      "The useImperativeHandle() hook allows you to customize the instance value that is exposed when using ref. This is useful when you need to expose specific methods or properties to parent components.",
  },
  {
    question: "How does React.memo() optimize performance?",
    options: [
      "By memoizing a component and preventing re-renders if props haven’t changed",
      "By handling asynchronous operations",
      "By managing component state",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing a component and preventing re-renders if props haven’t changed",
    explanation:
      "React.memo() optimizes performance by memoizing a component and preventing it from re-rendering if its props have not changed. This helps reduce unnecessary rendering and improves efficiency.",
  },
  {
    question: "What is the use of useRef() hook in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders. It is often used to store mutable values or references to DOM elements that do not require updates to trigger re-renders.",
  },
  {
    question:
      "How can you handle asynchronous operations in a React functional component?",
    options: [
      "By using useEffect() with an async function",
      "By using Promise directly in components",
      "By using setTimeout() in components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() with an async function",
    explanation:
      "Asynchronous operations in functional components are typically handled using the useEffect() hook with an async function. This approach allows you to perform operations like data fetching when the component mounts.",
  },
  {
    question: "What is React.createContext() used for?",
    options: [
      "To create a context object for passing data through the component tree without prop drilling",
      "To create a new React component",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer:
      "To create a context object for passing data through the component tree without prop drilling",
    explanation:
      "React.createContext() is used to create a context object that allows you to pass data through the component tree without having to pass props down manually at every level (prop drilling).",
  },
  {
    question: "What is useTransition() hook useful for in React?",
    options: [
      "To manage state transitions and prioritize urgent updates in concurrent mode",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To manage state transitions and prioritize urgent updates in concurrent mode",
    explanation:
      "The useTransition() hook is useful for managing state transitions and prioritizing urgent updates, particularly in concurrent mode. It helps ensure that important updates are processed promptly while deferring less critical ones.",
  },
  {
    question: "What does useDeferredValue() hook help with?",
    options: [
      "Deferring updates to state values that are less urgent to prevent blocking the main thread",
      "Handling side effects",
      "Managing component state",
      "Creating context",
    ],
    correctAnswer:
      "Deferring updates to state values that are less urgent to prevent blocking the main thread",
    explanation:
      "The useDeferredValue() hook helps with deferring updates to state values that are less urgent, allowing the main thread to remain responsive and preventing the UI from blocking during complex state updates.",
  },
  {
    question: "How do you use useCallback() to optimize performance in React?",
    options: [
      "By memoizing callback functions to prevent their recreation on every render",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing callback functions to prevent their recreation on every render",
    explanation:
      "To optimize performance with useCallback(), you memoize callback functions so they are not recreated on every render. This can help prevent unnecessary renders of child components that rely on these functions.",
  },
  {
    question: "What is React.StrictMode used for in development?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To optimize performance",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is used in development to activate additional checks and warnings for potential problems in the application. It helps identify unsafe lifecycle methods, deprecated APIs, and other issues.",
  },
  {
    question: "How can you implement error boundaries in React?",
    options: [
      "By creating class components with componentDidCatch() and getDerivedStateFromError() lifecycle methods",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By creating class components with componentDidCatch() and getDerivedStateFromError() lifecycle methods",
    explanation:
      "Error boundaries are implemented by creating class components that use the componentDidCatch() and getDerivedStateFromError() lifecycle methods. These methods allow you to catch JavaScript errors in a component tree and display a fallback UI.",
  },
  {
    question: "What is the purpose of useContext() hook in React?",
    options: [
      "To access the context value created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access the context value created with React.createContext()",
    explanation:
      "The useContext() hook allows you to access the value of a context created with React.createContext(). It enables you to consume context values in functional components without needing to use the Context.Consumer component.",
  },
  {
    question: "How does React.Suspense work with React.lazy()?",
    options: [
      "React.Suspense provides a fallback UI while React.lazy() dynamically imports components",
      "React.Suspense handles asynchronous operations",
      "React.Suspense manages state",
      "React.Suspense creates context",
    ],
    correctAnswer:
      "React.Suspense provides a fallback UI while React.lazy() dynamically imports components",
    explanation:
      "React.Suspense works with React.lazy() to provide a fallback UI while components are being dynamically imported. It helps manage code splitting and loading states.",
  },
];
