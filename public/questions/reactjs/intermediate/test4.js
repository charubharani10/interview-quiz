export const test4 = [
  {
    question: "What does React.StrictMode do?",
    options: [
      "Activates additional checks and warnings for potential problems in the application",
      "Optimizes performance",
      "Manages component state",
      "Defines routes",
    ],
    correctAnswer:
      "Activates additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a development tool that highlights potential issues in your application by activating additional checks and warnings during development.",
  },
  {
    question: "How do you create a controlled component in React?",
    options: [
      "By using value and onChange props to control form inputs",
      "By using ref to access form inputs",
      "By using useState() for managing local state",
      "By using useEffect() for handling side effects",
    ],
    correctAnswer: "By using value and onChange props to control form inputs",
    explanation:
      "Controlled components in React are form elements where the value is controlled by React state, and changes are managed through event handlers like onChange.",
  },
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
      "useMemo() is used to memoize the results of expensive calculations and only re-calculate them when dependencies change, improving performance.",
  },
  {
    question: "How do you handle asynchronous operations in useEffect()?",
    options: [
      "By using async/await syntax inside an inner function within useEffect()",
      "By using Promise directly in useEffect()",
      "By using setTimeout() inside useEffect()",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using async/await syntax inside an inner function within useEffect()",
    explanation:
      "Asynchronous operations in useEffect() should be handled by defining an inner async function and calling it within useEffect(), as useEffect() cannot directly return a promise.",
  },
  {
    question: "What is useImperativeHandle() used for?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To handle side effects",
      "To manage component state",
      "To handle routing",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows a child component to customize the ref exposed to the parent, enabling the parent to control the child component’s behavior programmatically.",
  },
  {
    question: "What is useContext() used for in React?",
    options: [
      "To access the value of a context created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access the value of a context created with React.createContext()",
    explanation:
      "useContext() is a hook that allows components to access the value provided by a React context object, which is useful for passing data deeply through the component tree.",
  },
  {
    question: "How do you create a custom hook?",
    options: [
      "By creating a function that uses React hooks and returns values or functions",
      "By creating a class component",
      "By using useState() directly in components",
      "By using React.createClass()",
    ],
    correctAnswer:
      "By creating a function that uses React hooks and returns values or functions",
    explanation:
      "A custom hook is a JavaScript function that uses one or more of React’s built-in hooks and allows you to share logic between components.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To memoize a functional component and avoid unnecessary re-renders",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To memoize a functional component and avoid unnecessary re-renders",
    explanation:
      "React.memo() is a higher-order component that memoizes the result of a functional component, only re-rendering it when its props change, improving performance.",
  },
  {
    question: "How do you handle form validation in React?",
    options: [
      "By using controlled components and managing validation in event handlers",
      "By using uncontrolled components with ref",
      "By using third-party libraries for complex validation",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form validation in React can be done using controlled components, where form input values are controlled by React state, or by using third-party libraries for complex validation.",
  },
  {
    question: "How do you handle errors in a React application?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() with a cleanup function",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the whole app.",
  },
  {
    question: "What is React.lazy() used for?",
    options: [
      "To dynamically import components and enable code splitting",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer: "To dynamically import components and enable code splitting",
    explanation:
      "React.lazy() is used for dynamically importing components. It helps split code into smaller bundles, improving performance by only loading components when needed.",
  },
  {
    question: "How do you pass data to child components?",
    options: [
      "By using props",
      "By using context API",
      "By using state management libraries",
      "By using refs",
    ],
    correctAnswer: "By using props",
    explanation:
      "Props are used to pass data from parent components to child components. It's the primary way to communicate between components in React.",
  },
  {
    question: "How do you manage application-wide state in React?",
    options: [
      "By using context API or external libraries like Redux or MobX",
      "By using local component state",
      "By using refs",
      "By using hooks like useState() and useEffect()",
    ],
    correctAnswer:
      "By using context API or external libraries like Redux or MobX",
    explanation:
      "Context API or libraries like Redux or MobX are used to manage state that needs to be accessible by multiple components across the application.",
  },
  {
    question: "What is React.createContext() used for?",
    options: [
      "To create a context object that allows components to share values without passing props explicitly",
      "To create a new React component",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer:
      "To create a context object that allows components to share values without passing props explicitly",
    explanation:
      "React.createContext() is used to create a context object that helps avoid prop drilling by allowing values to be shared deeply within the component tree.",
  },
  {
    question: "What does React.Fragment do?",
    options: [
      "Groups multiple elements without adding extra nodes to the DOM",
      "Handles side effects",
      "Manages state",
      "Creates context",
    ],
    correctAnswer:
      "Groups multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows you to group a list of children without adding extra nodes to the DOM, helping to maintain a clean structure.",
  },
  {
    question: "How do you implement lazy loading of components in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() syntax",
      "By using React.memo() for optimization",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "React.lazy() and Suspense are used together to lazily load components and improve application performance by only loading them when needed.",
  },
  {
    question: "What is useCallback() used for?",
    options: [
      "To memoize callback functions to avoid unnecessary re-renders",
      "To manage component state",
      "To handle side effects",
      "To perform routing",
    ],
    correctAnswer:
      "To memoize callback functions to avoid unnecessary re-renders",
    explanation:
      "useCallback() memoizes a function to ensure it doesn't get re-created on every render, improving performance when passing callbacks to child components.",
  },
  {
    question: "How do you handle asynchronous operations in React?",
    options: [
      "By using async/await syntax within hooks like useEffect()",
      "By using Promise directly in components",
      "By using setTimeout() inside components",
      "By using useState() hook",
    ],
    correctAnswer: "By using async/await syntax within hooks like useEffect()",
    explanation:
      "In React, asynchronous operations are typically handled within useEffect() by defining an inner async function and using async/await syntax.",
  },
  {
    question: "What is useImperativeHandle() used for?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To handle side effects",
      "To manage component state",
      "To handle routing",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows a child component to customize the instance value exposed to its parent via a ref, enabling more control over DOM elements or functions.",
  },
  {
    question: "What is useContext() used for in React?",
    options: [
      "To access the value of a context created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access the value of a context created with React.createContext()",
    explanation:
      "useContext() allows a component to consume the value of a context object, which is useful for sharing data across many components without passing props.",
  },
];
