export const test9 = [
  {
    question: "How do you use useReducer() in React?",
    options: [
      "By defining a reducer function and initial state to manage complex state logic",
      "By using useState() for simple state management",
      "By using useEffect() for side effects",
      "By using useMemo() for performance optimization",
    ],
    correctAnswer:
      "By defining a reducer function and initial state to manage complex state logic",
    explanation:
      "useReducer() is used to handle complex state logic in React by defining a reducer function that manages state transitions based on dispatched actions.",
  },
  {
    question: "What is the purpose of useCallback() hook?",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To manage component state",
      "To handle routing",
      "To access context values",
    ],
    correctAnswer:
      "To memoize callback functions and prevent unnecessary re-renders",
    explanation:
      "The useCallback() hook memoizes callback functions so they are not recreated on every render, thus preventing unnecessary re-renders of child components.",
  },
  {
    question: "How do you handle server-side rendering in React?",
    options: [
      "By using ReactDOMServer methods like renderToString() or renderToStaticMarkup()",
      "By using React.lazy() and Suspense",
      "By using React.memo()",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using ReactDOMServer methods like renderToString() or renderToStaticMarkup()",
    explanation:
      "Server-side rendering in React is achieved using ReactDOMServer methods to render components to static HTML on the server before sending it to the client.",
  },
  {
    question: "What is the role of useLayoutEffect() hook?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is used to perform DOM measurements and updates before the browser has a chance to paint, ensuring layout calculations are made before visual updates.",
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By creating a function that uses React hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useReducer() hook",
      "By creating a class component",
    ],
    correctAnswer:
      "By creating a function that uses React hooks and returns values or functions",
    explanation:
      "Custom hooks are created by defining a function that utilizes built-in React hooks and encapsulates reusable logic, which can then be shared across multiple components.",
  },
  {
    question: "What is the purpose of useImperativeHandle() hook?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To handle side effects",
      "To manage component state",
      "To handle routing",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() is used to customize the instance value that is exposed when using `ref` with a parent component, allowing controlled access to specific instance methods or properties.",
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
      "Asynchronous operations within useEffect() are handled by defining an async function inside useEffect() and calling it, ensuring operations like data fetching are performed correctly.",
  },
  {
    question: "How do you use useContext() in a functional component?",
    options: [
      "By calling useContext() with the context object created by React.createContext()",
      "By using static contextType in class components",
      "By accessing context values directly with Context.Consumer",
      "By using React.memo()",
    ],
    correctAnswer:
      "By calling useContext() with the context object created by React.createContext()",
    explanation:
      "useContext() is used to access context values in functional components by calling it with the context object returned by React.createContext().",
  },
  {
    question: "How do you handle form validation in React?",
    options: [
      "By using controlled components and managing validation in the onChange event",
      "By using uncontrolled components and ref",
      "By using third-party libraries for form validation",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form validation in React can be handled using controlled components with validation in event handlers, uncontrolled components with refs, or by leveraging third-party libraries.",
  },
  {
    question: "What does React.Fragment do?",
    options: [
      "Groups multiple elements without adding extra nodes to the DOM",
      "Manages component state",
      "Handles side effects",
      "Performs asynchronous operations",
    ],
    correctAnswer:
      "Groups multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows you to group multiple elements in a component without adding extra nodes to the DOM, keeping the markup cleaner and more manageable.",
  },
  {
    question: "How do you manage global state in a React application?",
    options: [
      "By using context API and useReducer() or external libraries like Redux or MobX",
      "By using local component state",
      "By using useEffect() hook",
      "By using useMemo() hook",
    ],
    correctAnswer:
      "By using context API and useReducer() or external libraries like Redux or MobX",
    explanation:
      "Global state management in React can be handled using context API combined with useReducer(), or through external state management libraries like Redux or MobX.",
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
      "React.lazy() is used for dynamically importing components, which helps in code splitting and reducing the initial load time by loading components only when needed.",
  },
  {
    question: "How do you handle conditional rendering in React?",
    options: [
      "By using conditional expressions inside JSX (e.g., ternary operator or && operator)",
      "By using React.Fragment",
      "By using useState() for conditional logic",
      "By using useMemo() for rendering optimization",
    ],
    correctAnswer:
      "By using conditional expressions inside JSX (e.g., ternary operator or && operator)",
    explanation:
      "Conditional rendering in React is achieved by using conditional expressions like ternary operators or logical AND operators directly within JSX to determine which components or elements to render.",
  },
  {
    question: "How do you implement authentication in a React application?",
    options: [
      "By using context for state management and controlling routes based on authentication status",
      "By using local state for authentication",
      "By using third-party authentication libraries",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Authentication in React can be managed using context for state management, local state, or third-party libraries, depending on the complexity and requirements of the application.",
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
      "React.StrictMode helps identify potential problems in the application by activating additional checks and warnings, but it does not affect the production build.",
  },
  {
    question: "How do you handle side effects in functional components?",
    options: [
      "By using the useEffect() hook",
      "By using the useReducer() hook",
      "By using the useState() hook",
      "By using the useMemo() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "The useEffect() hook is used to handle side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
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
      "Error boundaries are React components that catch JavaScript errors in their child component tree and provide a way to handle errors gracefully using methods like componentDidCatch() and getDerivedStateFromError().",
  },
  {
    question: "How do you use useReducer() effectively in a React application?",
    options: [
      "By providing a reducer function and initial state to manage complex state logic",
      "By using useState() for simple state management",
      "By using useEffect() for side effects",
      "By using useMemo() for memoization",
    ],
    correctAnswer:
      "By providing a reducer function and initial state to manage complex state logic",
    explanation:
      "useReducer() is effective for managing complex state logic by providing a reducer function and initial state, which allows for predictable state transitions based on dispatched actions.",
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By creating a function that uses React hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useReducer() hook",
      "By creating a class component",
    ],
    correctAnswer:
      "By creating a function that uses React hooks and returns values or functions",
    explanation:
      "Custom hooks are created by defining a function that utilizes built-in React hooks to encapsulate and reuse logic across multiple components.",
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
      "useImperativeHandle() is used in conjunction with forwardRef to customize the instance value exposed to parent components when using refs, providing controlled access to instance methods or properties.",
  },
];
