export const test2 = [
  {
    question: "How do you handle conditional rendering in React using JSX?",
    options: [
      "Using if statements",
      "Using ternary operators",
      "Using && operators",
      "Both b and c",
    ],
    correctAnswer: "Both b and c",
    explanation:
      "Conditional rendering in React using JSX can be done using ternary operators or logical && operators to show or hide elements based on conditions.",
  },
  {
    question:
      "What is the difference between a functional component and a class component?",
    options: [
      "Functional components are stateless, while class components can have state",
      "Functional components do not have lifecycle methods, while class components do",
      "Functional components use hooks for managing state, while class components use this.state",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Functional components are simpler and typically stateless, while class components can hold state and have lifecycle methods. Functional components use hooks for state management, whereas class components use this.state.",
  },
  {
    question: "How do you update the state of a functional component?",
    options: [
      "Using the setState() method",
      "Using the useState() hook",
      "Using this.state",
      "Using this.setState()",
    ],
    correctAnswer: "Using the useState() hook",
    explanation:
      "In functional components, you use the useState() hook to manage and update state, unlike class components that use the setState() method.",
  },
  {
    question: "What is the useReducer() hook used for in React?",
    options: [
      "For managing complex state logic in functional components",
      "For performing side effects",
      "For accessing context values",
      "For defining routes",
    ],
    correctAnswer: "For managing complex state logic in functional components",
    explanation:
      "The useReducer() hook is used for managing complex state logic in functional components, often as an alternative to useState.",
  },
  {
    question: "How do you create a context in React?",
    options: [
      "Using React.createContext()",
      "Using React.createContextValue()",
      "Using useContext()",
      "Using React.Context()",
    ],
    correctAnswer: "Using React.createContext()",
    explanation:
      "To create a context in React, you use React.createContext(). This function returns an object with Provider and Consumer components.",
  },
  {
    question: "How do you provide a context value to components?",
    options: [
      "Using the Context.Provider component",
      "Using the useContext() hook",
      "Using props",
      "Using Context.Value()",
    ],
    correctAnswer: "Using the Context.Provider component",
    explanation:
      "To provide a context value to components, you use the Context.Provider component, passing the value as a prop.",
  },
  {
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To enable additional checks and warnings for components",
      "To manage component state",
      "To handle routing",
      "To create context",
    ],
    correctAnswer: "To enable additional checks and warnings for components",
    explanation:
      "React.StrictMode is a tool for identifying potential problems in an application, providing additional checks and warnings during development.",
  },
  {
    question: "How do you use the useRef() hook in React?",
    options: [
      "To create a mutable reference that persists across renders",
      "To manage state",
      "To access context values",
      "To perform side effects",
    ],
    correctAnswer: "To create a mutable reference that persists across renders",
    explanation:
      "The useRef() hook is used to create a mutable reference that persists across re-renders, useful for accessing DOM elements or storing values.",
  },
  {
    question: "What does the React.Fragment component do?",
    options: [
      "It allows you to group a list of children without adding extra nodes to the DOM",
      "It manages the component's state",
      "It handles component lifecycle methods",
      "It provides a way to define routes",
    ],
    correctAnswer:
      "It allows you to group a list of children without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows you to group multiple elements without adding extra nodes to the DOM, helping to keep the DOM tree clean.",
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By defining a function that uses built-in hooks and starts with use",
      "By creating a class that extends React.Component",
      "By using the useEffect() hook",
      "By using the useState() hook",
    ],
    correctAnswer:
      "By defining a function that uses built-in hooks and starts with use",
    explanation:
      "Custom hooks in React are created by defining a function that uses built-in hooks and follows the naming convention of starting with 'use'.",
  },
  {
    question: "How do you handle form submissions in React?",
    options: [
      "By handling the onSubmit event of the form and using state to manage form data",
      "By directly manipulating the DOM",
      "By using uncontrolled components",
      "By using useRef() to get form values",
    ],
    correctAnswer:
      "By handling the onSubmit event of the form and using state to manage form data",
    explanation:
      "Form submissions in React are typically handled by handling the onSubmit event and using state to manage form data, ensuring controlled components.",
  },
  {
    question: "What is the purpose of the useCallback() hook?",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To manage state",
      "To perform side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize callback functions and prevent unnecessary re-renders",
    explanation:
      "The useCallback() hook is used to memoize callback functions, preventing unnecessary re-renders of components that depend on these functions.",
  },
  {
    question: "How do you handle error boundaries in React?",
    options: [
      "By creating a class component with componentDidCatch() and static getDerivedStateFromError()",
      "By using hooks",
      "By using React.createContext()",
      "By using React.StrictMode",
    ],
    correctAnswer:
      "By creating a class component with componentDidCatch() and static getDerivedStateFromError()",
    explanation:
      "Error boundaries are handled by creating class components with componentDidCatch() and static getDerivedStateFromError() methods to catch errors in child components.",
  },
  {
    question: "What is the purpose of useLayoutEffect() hook?",
    options: [
      "To perform side effects after the DOM has been updated but before the browser has painted",
      "To handle routing in the application",
      "To manage component state",
      "To access context values",
    ],
    correctAnswer:
      "To perform side effects after the DOM has been updated but before the browser has painted",
    explanation:
      "The useLayoutEffect() hook is used to perform side effects after the DOM has been updated but before the browser has painted, useful for measuring DOM elements.",
  },
  {
    question: "How do you use React Router for routing?",
    options: [
      "By using Route, Switch, and BrowserRouter components from react-router-dom",
      "By using Router component from react-router",
      "By using Link and History objects",
      "By defining routes in the index.html file",
    ],
    correctAnswer:
      "By using Route, Switch, and BrowserRouter components from react-router-dom",
    explanation:
      "React Router is used for routing with components like Route, Switch, and BrowserRouter from the react-router-dom package.",
  },
  {
    question: "What is the purpose of React.memo()?",
    options: [
      "To optimize performance by memoizing functional components",
      "To manage component state",
      "To handle routing in the application",
      "To perform side effects",
    ],
    correctAnswer: "To optimize performance by memoizing functional components",
    explanation:
      "React.memo() is a higher-order component used to optimize performance by memoizing functional components and preventing unnecessary re-renders.",
  },
  {
    question:
      "How do you handle component lifecycle in a functional component?",
    options: [
      "Using useEffect() hook",
      "Using componentDidMount() and componentDidUpdate() methods",
      "Using getDerivedStateFromProps() method",
      "Using shouldComponentUpdate() method",
    ],
    correctAnswer: "Using useEffect() hook",
    explanation:
      "In functional components, you handle lifecycle events using the useEffect() hook to perform side effects at different stages.",
  },
  {
    question: "What is React.lazy() used for?",
    options: [
      "For dynamically importing components and enabling code splitting",
      "For handling state management",
      "For managing routing",
      "For handling forms",
    ],
    correctAnswer:
      "For dynamically importing components and enabling code splitting",
    explanation:
      "React.lazy() is used for dynamically importing components and enabling code splitting, which improves the performance by loading components only when needed.",
  },
  {
    question: "How do you handle dynamic imports in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() statements directly",
      "By using require() statements",
      "By using fetch() API",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "Dynamic imports in React are handled using React.lazy() for the component and Suspense for handling the loading state.",
  },
  {
    question: "What does ReactDOM.render() do?",
    options: [
      "Renders a React component into a DOM node",
      "Updates the React component's state",
      "Creates a new React component",
      "Defines component lifecycle methods",
    ],
    correctAnswer: "Renders a React component into a DOM node",
    explanation:
      "ReactDOM.render() is used to render a React component into a DOM node, which initializes the React application in the web page.",
  },
];
