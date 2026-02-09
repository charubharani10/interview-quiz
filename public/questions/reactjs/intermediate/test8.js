export const test8 = [
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
      "The useReducer() hook is ideal for managing complex state logic, especially when the state depends on previous state or involves multiple state variables.",
  },
  {
    question: "What is the purpose of useRef() hook in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders. It is often used to store mutable values or references to DOM elements.",
  },
  {
    question: "How do you create and use context in React?",
    options: [
      "By creating a context with React.createContext() and using useContext() to access it",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By creating a context with React.createContext() and using useContext() to access it",
    explanation:
      "Context is created with React.createContext() and accessed using the useContext() hook, which allows for passing data through the component tree without manually passing props at each level.",
  },
  {
    question: "What does useLayoutEffect() hook do?",
    options: [
      "It allows you to perform DOM measurements and updates before the browser paints",
      "It handles side effects",
      "It manages component state",
      "It creates context",
    ],
    correctAnswer:
      "It allows you to perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is similar to useEffect() but runs synchronously after all DOM mutations, allowing for DOM measurements and updates before the browser paints.",
  },
  {
    question: "How do you prevent a component from re-rendering?",
    options: [
      "By using React.memo() for functional components",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer: "By using React.memo() for functional components",
    explanation:
      "React.memo() is used to prevent a functional component from re-rendering unless its props change, improving performance for components that receive the same props frequently.",
  },
  {
    question: "What is the purpose of useMemo() hook in React?",
    options: [
      "To memoize the result of expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize the result of expensive calculations and prevent unnecessary re-computations",
    explanation:
      "useMemo() is used to memoize the result of expensive calculations so that the computation is only performed when dependencies change, reducing unnecessary re-computations.",
  },
  {
    question: "How do you implement lazy loading in React?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax",
      "By using React.memo() for optimization",
      "By using useEffect() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Lazy loading is implemented using React.lazy() to dynamically import components and Suspense to provide a fallback UI while the component is being loaded.",
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
      "The useEffect() hook is used to handle side effects such as data fetching, subscriptions, or manually changing the DOM in functional components.",
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
      "To access context values in a functional component, you use the useContext() hook which retrieves the context value provided by a higher-level context provider.",
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
      "React.memo() is a higher-order component that memoizes a functional component, ensuring that it only re-renders when its props change.",
  },
  {
    question: "How do you handle state updates in functional components?",
    options: [
      "By using the state updater function returned by useState()",
      "By directly modifying the state object",
      "By using useEffect() hook",
      "By using context API",
    ],
    correctAnswer: "By using the state updater function returned by useState()",
    explanation:
      "State updates in functional components should be handled using the state updater function returned by useState(), which ensures that state changes are properly managed and trigger re-renders.",
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
      "React.lazy() is used for dynamic imports of components, enabling code splitting and loading components only when they are needed.",
  },
  {
    question: "How do you use React.Suspense in your application?",
    options: [
      "To handle loading states for dynamically imported components",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To handle loading states for dynamically imported components",
    explanation:
      "React.Suspense is used to handle loading states by providing a fallback UI while waiting for dynamically imported components to load.",
  },
  {
    question: "What is useImperativeHandle() hook used for?",
    options: [
      "To customize the instance value exposed by ref in parent components",
      "To handle side effects",
      "To manage component state",
      "To handle routing",
    ],
    correctAnswer:
      "To customize the instance value exposed by ref in parent components",
    explanation:
      "useImperativeHandle() is used to customize the instance value that is exposed when using refs in parent components, allowing for controlled access to certain methods or properties.",
  },
  {
    question: "How can you optimize the performance of React applications?",
    options: [
      "By using React.memo(), useMemo(), and useCallback() hooks",
      "By using class components",
      "By using useEffect() hook",
      "By using useState() hook",
    ],
    correctAnswer: "By using React.memo(), useMemo(), and useCallback() hooks",
    explanation:
      "Performance optimization in React applications can be achieved using React.memo() to prevent unnecessary re-renders, useMemo() to memoize expensive calculations, and useCallback() to memoize callback functions.",
  },
  {
    question: "How do you handle errors in React applications?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are used to catch and handle errors in React applications, with methods like componentDidCatch() and getDerivedStateFromError() providing error handling capabilities.",
  },
  {
    question: "What is the purpose of React.createContext()?",
    options: [
      "To create a context object for passing data through the component tree without prop drilling",
      "To create a new React component",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer:
      "To create a context object for passing data through the component tree without prop drilling",
    explanation:
      "React.createContext() is used to create a context object that facilitates passing data through the component tree without the need for prop drilling.",
  },
  {
    question: "How do you use useReducer() hook for state management?",
    options: [
      "By providing a reducer function and an initial state to manage complex state logic",
      "By using useState() hook",
      "By using context API",
      "By using refs",
    ],
    correctAnswer:
      "By providing a reducer function and an initial state to manage complex state logic",
    explanation:
      "The useReducer() hook is used to manage complex state logic by providing a reducer function and an initial state, which helps in handling state transitions and updates in a more predictable manner.",
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
      "useEffect() runs asynchronously after the DOM has painted, while useLayoutEffect() runs synchronously before the DOM updates are painted, allowing for DOM measurements and layout adjustments.",
  },
  {
    question: "How do you manage component state with hooks in React?",
    options: [
      "By using useState() and useReducer() hooks",
      "By using context API",
      "By using refs",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using useState() and useReducer() hooks",
    explanation:
      "Component state in functional components is typically managed using the useState() and useReducer() hooks, with useState() for simple state and useReducer() for more complex state logic.",
  },
];
