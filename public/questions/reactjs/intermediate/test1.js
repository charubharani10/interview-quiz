export const test1 = [
  {
    question: "What is the purpose of ReactDOM.render()?",
    options: [
      "To render a React component into a DOM node",
      "To create a new React component",
      "To handle state management",
      "To handle routing",
    ],
    correctAnswer: "To render a React component into a DOM node",
    explanation:
      "ReactDOM.render() is used to render a React component or element into a specific DOM node. It initializes the React application by attaching the React component tree to the DOM.",
  },
  {
    question: "How can you handle events in React?",
    options: [
      "By using event handler props such as onClick, onChange, etc.",
      "By using addEventListener directly on DOM elements",
      "By using React.createElement()",
      "By using useState()",
    ],
    correctAnswer:
      "By using event handler props such as onClick, onChange, etc.",
    explanation:
      "In React, events are handled using event handler props like onClick, onChange, etc., which are provided to components as attributes. This allows for declarative event handling.",
  },
  {
    question: "What is PropTypes used for in React?",
    options: [
      "To validate the types of props passed to a component",
      "To manage component state",
      "To handle side effects",
      "To perform routing",
    ],
    correctAnswer: "To validate the types of props passed to a component",
    explanation:
      "PropTypes is a library that allows you to specify and validate the types of props that a component should receive. It helps in catching bugs and ensuring that components are used correctly.",
  },
  {
    question: "How do you update state in a React component?",
    options: [
      "By using this.setState() in class components and setState() in functional components",
      "By directly modifying the state variable",
      "By using useReducer() hook",
      "By using useEffect() hook",
    ],
    correctAnswer:
      "By using this.setState() in class components and setState() in functional components",
    explanation:
      "State in React is updated using this.setState() in class components and the setter function returned by useState() in functional components. Directly modifying the state variable is not recommended.",
  },
  {
    question: "What is React.StrictMode?",
    options: [
      "A tool for identifying potential problems in an application by activating additional checks and warnings",
      "A hook for managing state",
      "A component for rendering lists",
      "A utility for handling side effects",
    ],
    correctAnswer:
      "A tool for identifying potential problems in an application by activating additional checks and warnings",
    explanation:
      "React.StrictMode is a tool that helps identify potential problems in a React application by activating additional checks and warnings during development. It does not affect the production build.",
  },
  {
    question: "How do you pass data between components in React?",
    options: [
      "By using props",
      "By using global variables",
      "By directly manipulating the DOM",
      "By using useState() hook",
    ],
    correctAnswer: "By using props",
    explanation:
      "Data is passed between components in React using props. Props are read-only properties that allow components to receive data and functions from their parent components.",
  },
  {
    question: "What is the purpose of React.Fragment?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage component state",
      "To handle side effects",
      "To handle routing",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment is used to group multiple elements together without adding extra nodes to the DOM. It is useful for returning multiple elements from a component without creating unnecessary wrappers.",
  },
  {
    question: "How do you conditionally render components in React?",
    options: [
      "By using conditional expressions within JSX (e.g., ternary operator, &&)",
      "By using React.Fragment",
      "By using useEffect() for conditional logic",
      "By using useMemo() for rendering",
    ],
    correctAnswer:
      "By using conditional expressions within JSX (e.g., ternary operator, &&)",
    explanation:
      "Conditional rendering in React can be achieved using conditional expressions within JSX, such as the ternary operator or the && operator. This allows you to render different components or elements based on certain conditions.",
  },
  {
    question: "What is useEffect() used for in functional components?",
    options: [
      "To handle side effects like data fetching, subscriptions, or manual DOM manipulations",
      "To manage component state",
      "To define component structure",
      "To handle event bindings",
    ],
    correctAnswer:
      "To handle side effects like data fetching, subscriptions, or manual DOM manipulations",
    explanation:
      "The useEffect() hook in functional components is used to handle side effects, such as data fetching, subscriptions, or manual DOM manipulations, after the component has rendered.",
  },
  {
    question: "How do you use the useState() hook?",
    options: [
      "By calling useState() to initialize state and receive a state variable and a setter function",
      "By directly modifying the state object",
      "By using this.setState() method",
      "By using useEffect() hook",
    ],
    correctAnswer:
      "By calling useState() to initialize state and receive a state variable and a setter function",
    explanation:
      "The useState() hook is used to initialize state in functional components. It returns an array containing the current state value and a function to update it.",
  },
  {
    question: "What is useReducer() used for in React?",
    options: [
      "To manage complex state logic in a functional component",
      "To perform side effects",
      "To handle routing",
      "To define context values",
    ],
    correctAnswer: "To manage complex state logic in a functional component",
    explanation:
      "The useReducer() hook is used to manage complex state logic in functional components by using a reducer function and dispatching actions to modify the state.",
  },
  {
    question: "How do you use useContext() in a functional component?",
    options: [
      "By calling useContext() with the context object created by React.createContext()",
      "By using static contextType in class components",
      "By using Context.Consumer",
      "By using React.memo()",
    ],
    correctAnswer:
      "By calling useContext() with the context object created by React.createContext()",
    explanation:
      "The useContext() hook is used to access the context values created by React.createContext() within functional components, allowing you to consume context values without needing a Context.Consumer.",
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
      "React.createContext() is used to create a context object that allows components to share values across the component tree without having to pass props down manually at every level.",
  },
  {
    question: "How do you handle form inputs in React?",
    options: [
      "By using controlled components with value and onChange props",
      "By using uncontrolled components with ref",
      "By using useState() for form state management",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form inputs in React can be handled using controlled components, which use value and onChange props, uncontrolled components with refs, or useState() for managing form state, depending on the complexity and needs of the form.",
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
      "React.lazy() is used to dynamically import components, enabling code splitting and reducing the initial load time by loading components only when they are needed.",
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
      "Error boundaries are used in React to catch JavaScript errors in the component tree and display a fallback UI. They use componentDidCatch() and getDerivedStateFromError() lifecycle methods in class components.",
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
      "React.StrictMode is a development tool that activates additional checks and warnings to help identify potential problems in your React application. It does not affect the production build.",
  },
  {
    question: "How do you pass data to child components?",
    options: [
      "By using props",
      "By using context",
      "By using state management libraries",
      "By using refs",
    ],
    correctAnswer: "By using props",
    explanation:
      "Data is passed to child components using props. Props are attributes that allow parent components to pass data and functions down to their children.",
  },
  {
    question: "What is the useCallback() hook used for?",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To manage component state",
      "To handle routing",
      "To access context values",
    ],
    correctAnswer:
      "To memoize callback functions and prevent unnecessary re-renders",
    explanation:
      "The useCallback() hook is used to memoize callback functions, preventing them from being recreated on every render and thus reducing unnecessary re-renders of components that depend on these functions.",
  },
  {
    question: "How do you use useMemo() in a React application?",
    options: [
      "To memoize the results of expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle routing",
      "To access context values",
    ],
    correctAnswer:
      "To memoize the results of expensive calculations and prevent unnecessary re-computations",
    explanation:
      "The useMemo() hook is used to memoize the results of expensive calculations. This helps in optimizing performance by preventing unnecessary re-computations of values that depend on specific dependencies.",
  },
];
