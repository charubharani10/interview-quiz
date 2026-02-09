export const test5 = [
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
      "Error boundaries are implemented in React using class components with componentDidCatch() and getDerivedStateFromError() lifecycle methods. They catch JavaScript errors anywhere in their child component tree and display a fallback UI.",
  },
  {
    question: "What is the role of useRef() hook in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders. It is useful for storing mutable values that do not affect the rendering of the component.",
  },
  {
    question: "How can you manage complex state logic in React?",
    options: [
      "By using useReducer() hook",
      "By using useState() hook",
      "By using context API",
      "By using useMemo() hook",
    ],
    correctAnswer: "By using useReducer() hook",
    explanation:
      "To manage complex state logic in React, use the useReducer() hook. It provides a more structured way to handle state updates and transitions, especially when dealing with multiple actions.",
  },
  {
    question: "What does React.Suspense provide in React applications?",
    options: [
      "A fallback UI while a component is loading dynamically",
      "Error boundaries",
      "Memoization",
      "Context management",
    ],
    correctAnswer: "A fallback UI while a component is loading dynamically",
    explanation:
      "React.Suspense provides a fallback UI while a component is loading dynamically. It allows you to handle asynchronous component loading and display a loading indicator or placeholder.",
  },
  {
    question: "What is the purpose of useCallback() hook in React?",
    options: [
      "To memoize callback functions to prevent their recreation on every render",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions to prevent their recreation on every render",
    explanation:
      "The useCallback() hook is used to memoize callback functions, ensuring they are not recreated on every render. This can help with performance optimization by avoiding unnecessary renders.",
  },
  {
    question: "How can you optimize React functional components?",
    options: [
      "By using React.memo() for memoization and useMemo() for expensive calculations",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using React.memo() for memoization and useMemo() for expensive calculations",
    explanation:
      "Optimizing React functional components can be achieved by using React.memo() to prevent re-renders of components with unchanged props, and useMemo() to memoize expensive calculations and avoid unnecessary computations.",
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
      "The useLayoutEffect() hook allows you to perform DOM measurements and updates synchronously before the browser paints. It is useful for layout calculations and ensuring the DOM is updated before the next visual update.",
  },
  {
    question: "How do you handle asynchronous data fetching in React?",
    options: [
      "By using useEffect() with an async function",
      "By using Promise directly in components",
      "By using setTimeout() in components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() with an async function",
    explanation:
      "Asynchronous data fetching in React is typically handled using the useEffect() hook with an async function. This allows you to perform asynchronous operations like fetching data when the component mounts.",
  },
  {
    question: "What is React.lazy() used for?",
    options: [
      "For dynamic imports and code splitting",
      "For managing state",
      "For handling side effects",
      "For creating context",
    ],
    correctAnswer: "For dynamic imports and code splitting",
    explanation:
      "React.lazy() is used for dynamic imports and code splitting. It allows you to load components lazily, meaning they are only loaded when needed, which helps in improving application performance.",
  },
  {
    question: "How does React.memo() work with functional components?",
    options: [
      "It memoizes the component and prevents re-rendering if the props have not changed",
      "It handles side effects",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It memoizes the component and prevents re-rendering if the props have not changed",
    explanation:
      "React.memo() is used to memoize a functional component, preventing re-renders if the props have not changed. This optimization helps in avoiding unnecessary rendering and improving performance.",
  },
  {
    question: "What is the purpose of useContext() hook?",
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
    question: "What does useDeferredValue() do in React?",
    options: [
      "Defers updates to non-urgent state values to prevent blocking the main thread",
      "Handles side effects",
      "Manages component state",
      "Creates context",
    ],
    correctAnswer:
      "Defers updates to non-urgent state values to prevent blocking the main thread",
    explanation:
      "The useDeferredValue() hook defers updates to non-urgent state values, allowing the main thread to remain unblocked and improving the responsiveness of the application.",
  },
  {
    question: "How can you implement code splitting in React applications?",
    options: [
      "By using React.lazy() and Suspense for dynamic imports",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense for dynamic imports",
    explanation:
      "Code splitting in React applications is implemented using React.lazy() along with Suspense. This approach allows for dynamic imports of components and provides a fallback UI while loading.",
  },
  {
    question: "What does useLayoutEffect() hook allow you to do?",
    options: [
      "Perform layout measurements and updates before the browser paints",
      "Handle side effects",
      "Manage component state",
      "Create context",
    ],
    correctAnswer:
      "Perform layout measurements and updates before the browser paints",
    explanation:
      "The useLayoutEffect() hook allows you to perform layout measurements and updates synchronously before the browser paints. This ensures layout calculations and updates are done before the next visual update.",
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
      "Creating a custom hook in React involves defining a function that uses one or more of the built-in hooks and returns values or functions. Custom hooks allow you to reuse logic across different components.",
  },
  {
    question: "What is the purpose of useReducer() in React?",
    options: [
      "To manage complex state logic by dispatching actions and updating state",
      "To manage simple state with useState()",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To manage complex state logic by dispatching actions and updating state",
    explanation:
      "The useReducer() hook is used to manage complex state logic in React by dispatching actions and updating state based on those actions. It provides a more structured way to handle state transitions compared to useState().",
  },
  {
    question: "How does React.StrictMode help during development?",
    options: [
      "By activating additional checks and warnings for potential problems in the application",
      "By optimizing performance",
      "By managing state",
      "By defining routes",
    ],
    correctAnswer:
      "By activating additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode activates additional checks and warnings for potential problems in the application during development. It helps identify unsafe lifecycles, legacy API usage, and other issues.",
  },
  {
    question: "What is useRef() hook used for in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders. It is useful for storing mutable values or references to DOM elements.",
  },
  {
    question: "How can you manage side effects in functional components?",
    options: [
      "By using the useEffect() hook",
      "By using useState() hook",
      "By using context API",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "Side effects in functional components are managed using the useEffect() hook. It allows you to perform operations like data fetching, subscriptions, and manual DOM manipulations.",
  },
  {
    question: "What is the use of useImperativeHandle() hook?",
    options: [
      "To customize the instance value exposed when using ref",
      "To handle side effects",
      "To manage component state",
      "To handle asynchronous operations",
    ],
    correctAnswer: "To customize the instance value exposed when using ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value that is exposed when using ref. It allows you to control what the parent component can access through the ref.",
  },
];
