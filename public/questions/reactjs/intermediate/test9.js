export const test9 = [
  {
    question: "What is the purpose of useEffect() hook in React?",
    options: [
      "To perform side effects like data fetching, subscriptions, or manually changing the DOM",
      "To manage component state",
      "To create context",
      "To memoize expensive calculations",
    ],
    correctAnswer:
      "To perform side effects like data fetching, subscriptions, or manually changing the DOM",
    explanation:
      "useEffect() is used to handle side effects such as data fetching, setting up subscriptions, or manually changing the DOM in functional components.",
  },
  {
    question: "How do you handle component lifecycle in functional components?",
    options: [
      "By using useEffect() hook",
      "By using lifecycle methods in class components",
      "By using useState() hook",
      "By using useMemo() hook",
    ],
    correctAnswer: "By using useEffect() hook",
    explanation:
      "In functional components, the useEffect() hook is used to handle side effects and simulate lifecycle behavior such as componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    question: "What is the role of useContext() in React?",
    options: [
      "To access context values created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access context values created with React.createContext()",
    explanation:
      "The useContext() hook is used to access values from a context created with React.createContext(), allowing components to consume and interact with the context data.",
  },
  {
    question: "How do you implement lazy loading for components in React?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Lazy loading of components is achieved using React.lazy() to dynamically import components and Suspense to provide a fallback UI while the component is being loaded.",
  },
  {
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To optimize performance",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a tool for identifying potential problems in an application by activating additional checks and warnings during development.",
  },
  {
    question: "How do you handle form state and validation in React?",
    options: [
      "By using controlled components with useState() and handling validation in event handlers",
      "By using uncontrolled components with ref",
      "By using third-party libraries like Formik or React Hook Form",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form state and validation can be handled in various ways in React, including using controlled components with useState(), uncontrolled components with refs, or third-party libraries like Formik or React Hook Form.",
  },
  {
    question: "What does useImperativeHandle() hook do?",
    options: [
      "It allows customization of the instance value exposed by ref in parent components",
      "It handles side effects",
      "It manages component state",
      "It handles routing",
    ],
    correctAnswer:
      "It allows customization of the instance value exposed by ref in parent components",
    explanation:
      "useImperativeHandle() is used to customize the instance value that is exposed when using refs in parent components, allowing controlled access to certain methods or properties.",
  },
  {
    question: "How can you optimize the performance of functional components?",
    options: [
      "By using React.memo(), useMemo(), and useCallback()",
      "By using class components",
      "By using useEffect() hook",
      "By using useState() hook",
    ],
    correctAnswer: "By using React.memo(), useMemo(), and useCallback()",
    explanation:
      "Performance optimization in functional components can be achieved using React.memo() to prevent unnecessary re-renders, useMemo() to memoize expensive calculations, and useCallback() to memoize callback functions.",
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
      "Errors in React applications are handled using error boundaries, which utilize componentDidCatch() and getDerivedStateFromError() to catch and manage errors in the component tree.",
  },
  {
    question: "What is useMemo() used for?",
    options: [
      "To memoize the result of expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize the result of expensive calculations and prevent unnecessary re-computations",
    explanation:
      "useMemo() is used to memoize the result of expensive calculations, which helps in avoiding unnecessary re-computations and improving performance.",
  },
  {
    question: "How do you use useRef() hook in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "The useRef() hook is used to persist values across renders without causing re-renders. It is useful for storing mutable values or referencing DOM elements.",
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
      "React.createContext() is used to create a context object that allows data to be passed through the component tree without having to manually pass props at every level.",
  },
  {
    question: "How do you manage complex state logic with hooks in React?",
    options: [
      "By using useReducer() hook",
      "By using useState() hook",
      "By using context API",
      "By using refs",
    ],
    correctAnswer: "By using useReducer() hook",
    explanation:
      "The useReducer() hook is well-suited for managing complex state logic, especially when the state depends on previous values or involves multiple state variables.",
  },
  {
    question: "What does React.memo() do?",
    options: [
      "It prevents unnecessary re-renders by memoizing a functional component",
      "It handles side effects",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It prevents unnecessary re-renders by memoizing a functional component",
    explanation:
      "React.memo() is used to memoize a functional component, preventing unnecessary re-renders by ensuring the component only re-renders when its props change.",
  },
  {
    question: "How do you implement code splitting in React?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Code splitting is implemented using React.lazy() to dynamically import components and Suspense to handle loading states while the component is being loaded.",
  },
  {
    question: "What is the purpose of useCallback() hook?",
    options: [
      "To memoize callback functions and avoid re-creating them on each render",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions and avoid re-creating them on each render",
    explanation:
      "useCallback() is used to memoize callback functions, which helps prevent unnecessary re-creations of functions on each render, improving performance by avoiding unnecessary renders of child components.",
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
      "The useContext() hook allows functional components to access context values directly, which is created with React.createContext(), enabling components to consume the context data without prop drilling.",
  },
  {
    question: "What is useLayoutEffect() used for?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is used for operations that need to read layout and make changes to the DOM before the browser paints, ensuring that layout calculations and adjustments are applied before rendering.",
  },
  {
    question: "How do you handle asynchronous data fetching in React?",
    options: [
      "By using useEffect() hook with async/await syntax",
      "By using Promise directly in components",
      "By using setTimeout() inside components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() hook with async/await syntax",
    explanation:
      "Asynchronous data fetching is handled within the useEffect() hook using async/await syntax, allowing components to perform data fetching operations and update state based on the results.",
  },
  {
    question: "What does React.Suspense do?",
    options: [
      "It handles loading states for dynamically imported components",
      "It manages state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It handles loading states for dynamically imported components",
    explanation:
      "React.Suspense is used to handle the loading state for dynamically imported components, allowing you to specify a fallback UI that is displayed while the component is being loaded.",
  },
];
