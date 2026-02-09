export const test7 = [
  {
    question: "What is useMemo() used for in React?",
    options: [
      "To memoize the results of expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize the results of expensive calculations and prevent unnecessary re-computations",
    explanation:
      "useMemo() is used to memoize the results of expensive calculations, preventing unnecessary re-computations and optimizing performance.",
  },
  {
    question: "How do you manage state across multiple components?",
    options: [
      "By using context API or state management libraries like Redux",
      "By using useState() hook in each component",
      "By using useEffect() hook",
      "By using refs",
    ],
    correctAnswer:
      "By using context API or state management libraries like Redux",
    explanation:
      "State across multiple components can be managed using the context API or state management libraries like Redux, allowing for centralized and consistent state management.",
  },
  {
    question:
      "What is the difference between useEffect() and useLayoutEffect()?",
    options: [
      "useEffect() runs after the DOM has painted, while useLayoutEffect() runs before it",
      "useLayoutEffect() runs after the DOM has painted, while useEffect() runs before it",
      "Both hooks run at the same time",
      "Both hooks are used for managing state",
    ],
    correctAnswer:
      "useEffect() runs after the DOM has painted, while useLayoutEffect() runs before it",
    explanation:
      "useEffect() runs asynchronously after the DOM has painted, whereas useLayoutEffect() runs synchronously before the DOM is painted, allowing for measurements and adjustments to the DOM.",
  },
  {
    question: "How do you create a higher-order component (HOC) in React?",
    options: [
      "By creating a function that takes a component and returns a new component with additional props or behavior",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By creating a function that takes a component and returns a new component with additional props or behavior",
    explanation:
      "A higher-order component (HOC) is created by defining a function that takes a component as an argument and returns a new component with additional props or behavior.",
  },
  {
    question: "What is React.StrictMode?",
    options: [
      "A tool to activate additional checks and warnings for potential problems in the application",
      "A tool to optimize performance",
      "A method to manage state",
      "A way to define routes",
    ],
    correctAnswer:
      "A tool to activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a tool used to activate additional checks and warnings to help identify potential problems in an application during development.",
  },
  {
    question: "How do you manage form state and validation in React?",
    options: [
      "By using controlled components with useState() and handling validation in event handlers",
      "By using uncontrolled components with ref",
      "By using third-party libraries like Formik or React Hook Form",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form state and validation can be managed using controlled components with useState(), uncontrolled components with refs, or third-party libraries like Formik or React Hook Form.",
  },
  {
    question: "What does useImperativeHandle() hook do?",
    options: [
      "It allows customization of the instance value that is exposed when using ref in parent components",
      "It handles side effects",
      "It manages component state",
      "It handles routing",
    ],
    correctAnswer:
      "It allows customization of the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows you to customize the instance value that is exposed through refs, giving you control over what is accessible from parent components.",
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
      "Performance can be optimized in functional components by using React.memo() to memoize the component, useMemo() to memoize expensive calculations, and useCallback() to memoize callback functions.",
  },
  {
    question: "How do you handle errors in React components?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Errors in React components can be handled using error boundaries, which implement componentDidCatch() and getDerivedStateFromError() to catch and handle errors in the component tree.",
  },
  {
    question: "What does React.createContext() do?",
    options: [
      "It creates a context object to pass data through the component tree without passing props explicitly",
      "It creates a new React component",
      "It handles side effects",
      "It manages state",
    ],
    correctAnswer:
      "It creates a context object to pass data through the component tree without passing props explicitly",
    explanation:
      "React.createContext() is used to create a context object that allows data to be passed through the component tree without needing to pass props down manually at every level.",
  },
  {
    question: "How do you use useContext() hook?",
    options: [
      "To access the value of a context created with React.createContext()",
      "To manage state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access the value of a context created with React.createContext()",
    explanation:
      "The useContext() hook allows you to access the value of a context created with React.createContext(), enabling you to use context values in functional components.",
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
      "React.memo() is used to memoize functional components to avoid unnecessary re-renders, improving performance by only re-rendering when props change.",
  },
  {
    question: "How do you implement code splitting in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() syntax",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "Code splitting in React is implemented using React.lazy() to dynamically import components and Suspense to handle the loading state while the components are being fetched.",
  },
  {
    question: "What is the purpose of useEffect() hook?",
    options: [
      "To perform side effects like data fetching or subscribing to events",
      "To manage component state",
      "To create context",
      "To memoize expensive calculations",
    ],
    correctAnswer:
      "To perform side effects like data fetching or subscribing to events",
    explanation:
      "The useEffect() hook is used to perform side effects in functional components, such as data fetching, subscribing to events, or manually manipulating the DOM.",
  },
  {
    question: "How can you access a context value in a functional component?",
    options: [
      "By using useContext() hook",
      "By using props",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using useContext() hook",
    explanation:
      "To access a context value in a functional component, you use the useContext() hook, which provides access to the value of a context created with React.createContext().",
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
      "This question is a repeat of a previous one and has been answered similarly.",
  },
  {
    question: "What is useCallback() used for in React?",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions and prevent unnecessary re-renders",
    explanation:
      "useCallback() is used to memoize callback functions, preventing their recreation on every render and helping to optimize performance by avoiding unnecessary re-renders.",
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
      "Asynchronous data fetching in React is typically handled within the useEffect() hook using async/await syntax to manage data fetching operations.",
  },
  {
    question: "How do you create a higher-order component (HOC)?",
    options: [
      "By writing a function that takes a component and returns a new component with additional props or behavior",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By writing a function that takes a component and returns a new component with additional props or behavior",
    explanation:
      "This question is a repeat of a previous one and has been answered similarly.",
  },
  {
    question: "What is React.Suspense used for?",
    options: [
      "To handle loading states for dynamically imported components",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To handle loading states for dynamically imported components",
    explanation:
      "React.Suspense is used to handle loading states for components that are dynamically imported using React.lazy().",
  },
];
