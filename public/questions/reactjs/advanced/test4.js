export const test4 = [
  {
    question: "How can you use useReducer() effectively in React?",
    options: [
      "For managing complex state logic and handling actions",
      "For managing simple state with useState()",
      "For handling side effects",
      "For creating context",
    ],
    correctAnswer: "For managing complex state logic and handling actions",
    explanation:
      "The useReducer() hook is effective for managing complex state logic and handling actions. It is an alternative to useState() and is particularly useful when dealing with complex state transitions and multiple actions.",
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
      "React.createContext() is used to create a context object that allows data to be passed through the component tree without the need for prop drilling. This simplifies state management and component communication.",
  },
  {
    question:
      "How do you handle async operations in a React functional component?",
    options: [
      "By using useEffect() hook with async functions",
      "By using Promise directly in components",
      "By using setTimeout() in components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() hook with async functions",
    explanation:
      "To handle async operations in functional components, use the useEffect() hook and define async functions inside it. This approach allows you to perform async tasks and handle their results or cleanup properly.",
  },
  {
    question: "What is useCallback() hook used for?",
    options: [
      "To memoize callback functions and prevent them from being recreated on every render",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions and prevent them from being recreated on every render",
    explanation:
      "The useCallback() hook is used to memoize callback functions, preventing them from being recreated on every render. This is useful for optimizing performance, especially when passing callbacks to components that rely on referential equality.",
  },
  {
    question: "How does React.memo() optimize performance?",
    options: [
      "By memoizing a component and preventing re-renders if props have not changed",
      "By handling asynchronous operations",
      "By managing component state",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing a component and preventing re-renders if props have not changed",
    explanation:
      "React.memo() optimizes performance by memoizing components, which prevents re-renders if the component's props have not changed. This helps in reducing unnecessary renders and improving the application's efficiency.",
  },
  {
    question: "What is the use of useRef() in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders. It is useful for storing mutable values that do not affect the component's rendering logic.",
  },
  {
    question: "What is React.Suspense used for?",
    options: [
      "To provide a fallback UI while waiting for a component to load",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To provide a fallback UI while waiting for a component to load",
    explanation:
      "React.Suspense is used to provide a fallback UI while waiting for a component or dynamic import to load. It allows you to handle asynchronous loading states gracefully.",
  },
  {
    question: "How do you implement code splitting in a React application?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax directly in components",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Code splitting in React is implemented using React.lazy() for dynamic imports and Suspense to provide fallback UI while the component is loading. This improves performance by loading parts of the app only when needed.",
  },
  {
    question: "What does useLayoutEffect() hook allow you to do?",
    options: [
      "Perform DOM measurements and updates before the browser paints",
      "Handle side effects",
      "Manage state",
      "Create context",
    ],
    correctAnswer:
      "Perform DOM measurements and updates before the browser paints",
    explanation:
      "The useLayoutEffect() hook is used to perform DOM measurements and updates before the browser paints. This ensures that the DOM is updated synchronously before the next paint, preventing visual inconsistencies.",
  },
  {
    question: "How can you prevent unnecessary re-renders in React?",
    options: [
      "By using React.memo() for functional components and PureComponent for class components",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using React.memo() for functional components and PureComponent for class components",
    explanation:
      "To prevent unnecessary re-renders, you can use React.memo() for functional components and PureComponent for class components. These optimizations help avoid re-rendering components if their props haven't changed.",
  },
  {
    question: "What is the role of useContext() hook?",
    options: [
      "To access the context value created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access the context value created with React.createContext()",
    explanation:
      "The useContext() hook is used to access the context value provided by React.createContext(). It allows you to consume context values directly in functional components.",
  },
  {
    question: "How can you manage complex state logic with hooks?",
    options: [
      "By using useReducer() hook",
      "By using useState() hook",
      "By using context API",
      "By using refs",
    ],
    correctAnswer: "By using useReducer() hook",
    explanation:
      "The useReducer() hook is useful for managing complex state logic in React. It is an alternative to useState() and is especially effective when dealing with multiple actions and state transitions.",
  },
  {
    question: "What is useImperativeHandle() used for in React?",
    options: [
      "To customize the instance value exposed by ref",
      "To handle side effects",
      "To manage component state",
      "To handle asynchronous operations",
    ],
    correctAnswer: "To customize the instance value exposed by ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value that is exposed when using ref in functional components. It allows you to define what properties or methods should be exposed to parent components.",
  },
  {
    question: "What does useDeferredValue() help with?",
    options: [
      "Deferring updates to state values to avoid blocking the main thread",
      "Handling side effects",
      "Managing component state",
      "Creating context",
    ],
    correctAnswer:
      "Deferring updates to state values to avoid blocking the main thread",
    explanation:
      "The useDeferredValue() hook helps in deferring updates to state values, allowing non-urgent updates to be processed without blocking the main thread, which improves responsiveness.",
  },
  {
    question:
      "How can you use useEffect() to perform side effects in a React component?",
    options: [
      "By defining a function inside useEffect() to perform operations like data fetching or subscriptions",
      "By using Promise directly in components",
      "By using setTimeout() in components",
      "By using useState() hook",
    ],
    correctAnswer:
      "By defining a function inside useEffect() to perform operations like data fetching or subscriptions",
    explanation:
      "To perform side effects in a React component, use the useEffect() hook. Define a function inside useEffect() to handle operations such as data fetching or subscriptions, and manage cleanup if needed.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To prevent re-rendering of a component if its props haven't changed",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To prevent re-rendering of a component if its props haven't changed",
    explanation:
      "React.memo() is used to prevent re-rendering of a functional component if its props have not changed. This optimization helps improve performance by reducing unnecessary renders.",
  },
  {
    question: "How do you dynamically import components in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "Dynamic imports in React are achieved using React.lazy() along with Suspense. This approach allows you to load components on demand and provide a fallback UI while the component is loading.",
  },
  {
    question: "What is the purpose of useTransition() in React?",
    options: [
      "To manage state transitions and improve the performance of updates",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To manage state transitions and improve the performance of updates",
    explanation:
      "The useTransition() hook is used to manage state transitions and improve the performance of updates. It helps to prioritize urgent updates and defer less important ones to keep the UI responsive.",
  },
  {
    question: "What does useDeferredValue() hook help in React?",
    options: [
      "By deferring updates to state values to avoid blocking the main thread",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By deferring updates to state values to avoid blocking the main thread",
    explanation:
      "The useDeferredValue() hook helps to defer updates to state values, allowing non-urgent updates to be processed without blocking the main thread and maintaining a smooth user experience.",
  },
  {
    question: "What is useImperativeHandle() used for in React?",
    options: [
      "To customize the instance value that is exposed when using ref",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value that is exposed to parent components when using ref. This provides control over the values or methods available through the ref.",
  },
];
