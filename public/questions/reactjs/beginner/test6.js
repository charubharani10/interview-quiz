export const test6 = [
  {
    question: "How do you manage component-level styles in React?",
    options: [
      "By using CSS-in-JS libraries like styled-components or emotion",
      "By using traditional CSS files",
      "By using inline styles",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Component-level styles in React can be handled through various methods, including CSS-in-JS libraries, traditional CSS, and inline styles.",
  },
  {
    question: "What is React.createContext() used for?",
    options: [
      "To create a context object for sharing values across components",
      "To handle routing",
      "To manage component state",
      "To define component lifecycle methods",
    ],
    correctAnswer:
      "To create a context object for sharing values across components",
    explanation:
      "React.createContext() is used to create a context object that allows for sharing values between components without passing props manually.",
  },
  {
    question: "How do you use React.memo() with props comparison?",
    options: [
      "By passing a custom comparison function to React.memo() to control when the component should re-render",
      "By using shouldComponentUpdate() method in class components",
      "By using useMemo() hook",
      "By using useCallback() hook",
    ],
    correctAnswer:
      "By passing a custom comparison function to React.memo() to control when the component should re-render",
    explanation:
      "React.memo() allows for custom comparison logic to prevent unnecessary re-renders by comparing the current and previous props.",
  },
  {
    question: "How do you use useState() in a functional component?",
    options: [
      "By calling useState() with an initial state value and receiving an array with state and setter function",
      "By using useEffect() hook",
      "By using context",
      "By using ref",
    ],
    correctAnswer:
      "By calling useState() with an initial state value and receiving an array with state and setter function",
    explanation:
      "useState() initializes state in functional components and provides a state value along with a function to update it.",
  },
  {
    question: "What is the useLayoutEffect() hook used for?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is used for tasks that require synchronous updates to the DOM, such as measuring layout before the browser repaints.",
  },
  {
    question: "How do you define default props for a React component?",
    options: [
      "By setting defaultProps property on the component",
      "By using props in the constructor",
      "By using useState() hook",
      "By using useEffect() hook",
    ],
    correctAnswer: "By setting defaultProps property on the component",
    explanation:
      "defaultProps is a special property used to define default values for props that aren't provided when the component is used.",
  },
  {
    question: "What is the purpose of React.forwardRef()?",
    options: [
      "To forward refs from parent components to child components",
      "To manage component state",
      "To perform side effects",
      "To handle routing",
    ],
    correctAnswer: "To forward refs from parent components to child components",
    explanation:
      "React.forwardRef() is a function that allows passing refs from a parent component to a child component, enabling direct DOM access.",
  },
  {
    question: "How do you access a previous state in a functional component?",
    options: [
      "By using the functional form of setState() with a callback",
      "By using useEffect() hook",
      "By using useReducer() hook",
      "By using useRef() hook",
    ],
    correctAnswer: "By using the functional form of setState() with a callback",
    explanation:
      "The functional form of setState() provides the previous state as an argument, allowing updates based on the previous value.",
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
      "useCallback() is used to memoize functions so that they are only re-created when their dependencies change, avoiding unnecessary re-renders.",
  },
  {
    question: "How do you implement server-side rendering in React?",
    options: [
      "By using ReactDOMServer methods like renderToString() or renderToStaticMarkup()",
      "By using React.lazy() and Suspense",
      "By using React.memo()",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using ReactDOMServer methods like renderToString() or renderToStaticMarkup()",
    explanation:
      "ReactDOMServer methods such as renderToString() and renderToStaticMarkup() enable server-side rendering of React components.",
  },
  {
    question: "What is the useImperativeHandle() hook used for?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows customization of the values exposed to a parent component via refs, enabling greater control over interactions.",
  },
  {
    question: "How do you manage side effects with useEffect() hook?",
    options: [
      "By specifying dependencies to control when the effect runs",
      "By using componentDidMount() and componentDidUpdate() lifecycle methods",
      "By using useState() hook",
      "By using context",
    ],
    correctAnswer: "By specifying dependencies to control when the effect runs",
    explanation:
      "useEffect() takes a dependencies array to determine when the effect should re-run, preventing unnecessary executions.",
  },
  {
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To optimize performance",
      "To handle state management",
      "To define routes",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode wraps components in development mode to activate additional checks and warnings for common issues and best practices.",
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
      "useContext() allows you to access context values directly in a functional component by passing the context object to it.",
  },
  {
    question: "How do you handle error boundaries in React?",
    options: [
      "By creating a component that uses componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using useMemo() hook",
    ],
    correctAnswer:
      "By creating a component that uses componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree. They use componentDidCatch() and getDerivedStateFromError() to handle errors gracefully and prevent the app from crashing.",
  },
  {
    question: "What is the purpose of React.lazy()?",
    options: [
      "To dynamically import components and enable code splitting",
      "To manage state",
      "To handle routing",
      "To create context",
    ],
    correctAnswer: "To dynamically import components and enable code splitting",
    explanation:
      "React.lazy() is used for dynamic component imports, enabling code splitting by loading components only when they are needed.",
  },
  {
    question: "How do you handle routing in a React application?",
    options: [
      "By using react-router-dom library",
      "By using react-router library",
      "By using react-router-redux library",
      "By using history library",
    ],
    correctAnswer: "By using react-router-dom library",
    explanation:
      "react-router-dom is the most popular library for handling routing in React applications, offering components like Route, Switch, and Link.",
  },
  {
    question: "What is the purpose of useMemo() in React?",
    options: [
      "To memoize expensive calculations and avoid unnecessary re-renders",
      "To handle side effects",
      "To manage state",
      "To access context values",
    ],
    correctAnswer:
      "To memoize expensive calculations and avoid unnecessary re-renders",
    explanation:
      "useMemo() is used to memoize values or calculations that are expensive to perform, ensuring that they are only recalculated when dependencies change.",
  },
  {
    question: "How do you use useCallback() hook effectively?",
    options: [
      "By passing a function to useCallback() that will be memoized and returned",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By passing a function to useCallback() that will be memoized and returned",
    explanation:
      "useCallback() is used to memoize functions and prevent them from being re-created unnecessarily, improving performance by avoiding re-renders.",
  },
  {
    question: "What is the role of React.StrictMode during development?",
    options: [
      "To provide additional warnings and checks for potential problems in the application",
      "To optimize performance",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To provide additional warnings and checks for potential problems in the application",
    explanation:
      "React.StrictMode is a wrapper component that highlights potential issues in an application by activating additional checks and warnings in development mode.",
  },
];
