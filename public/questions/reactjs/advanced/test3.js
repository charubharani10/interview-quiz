export const test3 = [
  {
    question: "How does React.memo() optimize functional components?",
    options: [
      "By memoizing the component and preventing re-renders if props have not changed",
      "By handling side effects",
      "By managing state",
      "By defining routes",
    ],
    correctAnswer:
      "By memoizing the component and preventing re-renders if props have not changed",
    explanation:
      "React.memo() optimizes functional components by memoizing them. This prevents unnecessary re-renders if the component's props have not changed, improving performance.",
  },
  {
    question: "What is the purpose of useMemo() hook in React?",
    options: [
      "To optimize performance by memoizing expensive calculations",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To optimize performance by memoizing expensive calculations",
    explanation:
      "The useMemo() hook is used to optimize performance by memoizing the results of expensive calculations. This avoids recalculating values on every render and improves efficiency.",
  },
  {
    question: "How do you implement lazy loading of components in React?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Lazy loading of components in React is achieved by using React.lazy() for dynamic imports, and Suspense to provide a fallback UI while the component is being loaded.",
  },
  {
    question: "What is the role of useContext() hook in React?",
    options: [
      "To access the current value of a context created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access the current value of a context created with React.createContext()",
    explanation:
      "The useContext() hook is used to access the current value of a context that was created with React.createContext(). It simplifies accessing context values in functional components.",
  },
  {
    question: "How do you use useLayoutEffect() effectively?",
    options: [
      "For operations that require DOM measurements and updates before the browser paints",
      "For handling side effects",
      "For managing state",
      "For creating context",
    ],
    correctAnswer:
      "For operations that require DOM measurements and updates before the browser paints",
    explanation:
      "The useLayoutEffect() hook is used for operations that require DOM measurements and updates before the browser paints. This helps in avoiding visual inconsistencies by ensuring changes are applied synchronously.",
  },
  {
    question: "What does useRef() allow you to do in a functional component?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook allows you to persist values across renders without causing re-renders. It is useful for storing mutable values that do not trigger a re-render when updated.",
  },
  {
    question: "How can you manage side effects in a React component?",
    options: [
      "By using the useEffect() hook",
      "By using useState() hook",
      "By using context API",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "The useEffect() hook is used to manage side effects in React components, such as data fetching, subscriptions, or manually manipulating the DOM.",
  },
  {
    question: "What is React.lazy() used for?",
    options: [
      "For dynamically importing components and enabling code splitting",
      "For handling side effects",
      "For managing state",
      "For creating context",
    ],
    correctAnswer:
      "For dynamically importing components and enabling code splitting",
    explanation:
      "React.lazy() is used for dynamically importing components, which enables code splitting and helps in loading components only when they are needed, thus improving performance.",
  },
  {
    question: "What is the purpose of React.Suspense?",
    options: [
      "To provide a fallback UI while waiting for a component to load dynamically",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To provide a fallback UI while waiting for a component to load dynamically",
    explanation:
      "React.Suspense provides a fallback UI while waiting for a dynamically loaded component to load. It helps improve the user experience during asynchronous component loading.",
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By defining a function that uses other hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By defining a function that uses other hooks and returns values or functions",
    explanation:
      "A custom hook in React is created by defining a JavaScript function that utilizes built-in hooks and returns values or functions. This allows for reusable logic across multiple components.",
  },
  {
    question: "What is useTransition() hook used for?",
    options: [
      "To handle state transitions and prioritize urgent updates",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer: "To handle state transitions and prioritize urgent updates",
    explanation:
      "The useTransition() hook allows you to manage state transitions and prioritize urgent updates. It helps to keep the UI responsive by deferring non-urgent updates.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To optimize functional components by preventing re-renders if props haven't changed",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To optimize functional components by preventing re-renders if props haven't changed",
    explanation:
      "React.memo() is used to optimize functional components by memoizing them. This prevents unnecessary re-renders if the component's props have not changed, improving performance.",
  },
  {
    question: "How does useDeferredValue() hook benefit a React application?",
    options: [
      "By deferring updates to non-urgent values to avoid blocking the main thread",
      "By handling side effects",
      "By managing state",
      "By creating context",
    ],
    correctAnswer:
      "By deferring updates to non-urgent values to avoid blocking the main thread",
    explanation:
      "The useDeferredValue() hook helps by deferring updates to non-urgent values, which avoids blocking the main thread and ensures smoother performance.",
  },
  {
    question:
      "How can you use useEffect() hook to handle asynchronous operations?",
    options: [
      "By defining an async function inside the useEffect() and calling it",
      "By using Promise directly in the component",
      "By using setTimeout() in the component",
      "By using useState() hook",
    ],
    correctAnswer:
      "By defining an async function inside the useEffect() and calling it",
    explanation:
      "To handle asynchronous operations with useEffect(), define an async function inside the hook and call it. This pattern allows you to perform async tasks and handle the results appropriately.",
  },
  {
    question: "What is the role of useCallback() hook?",
    options: [
      "To memoize callback functions and prevent re-creation on every render",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions and prevent re-creation on every render",
    explanation:
      "The useCallback() hook is used to memoize callback functions, ensuring that they are not re-created on every render. This is useful for optimizing performance, especially when passing callbacks to optimized child components.",
  },
  {
    question: "How can you handle errors in a React application using hooks?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries, implemented with class components and methods like componentDidCatch() and getDerivedStateFromError(), are used to catch and handle errors in React applications. Hooks alone do not handle errors, but they can be used in conjunction with error boundaries.",
  },
  {
    question: "What is the purpose of useLayoutEffect() hook?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "The useLayoutEffect() hook is used for performing DOM measurements and updates before the browser paints. This helps in avoiding visual inconsistencies and ensures that the DOM is updated synchronously before the paint.",
  },
  {
    question: "How can you achieve code splitting in a React application?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Code splitting in React can be achieved using React.lazy() for dynamic imports, combined with Suspense to provide a fallback UI while the components are loading. This improves performance by loading components only when needed.",
  },
  {
    question: "What does useImperativeHandle() allow you to do?",
    options: [
      "Customize the instance value that is exposed when using ref",
      "Handle side effects",
      "Manage component state",
      "Handle asynchronous operations",
    ],
    correctAnswer:
      "Customize the instance value that is exposed when using ref",
    explanation:
      "The useImperativeHandle() hook allows you to customize the instance value that is exposed when using ref in a functional component. This provides more control over the ref and what is exposed to parent components.",
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
      "React.StrictMode is used to activate additional checks and warnings during development. It helps in identifying potential problems in the application and encourages the use of best practices.",
  },
];
