export const test5 = [
  {
    question: "What is the purpose of React.createContext()?",
    options: [
      "To create a context object for passing data through the component tree",
      "To manage component state",
      "To handle routing",
      "To define component lifecycle methods",
    ],
    correctAnswer:
      "To create a context object for passing data through the component tree",
    explanation:
      "React.createContext() creates a context object that allows passing data through the component tree without having to pass props down manually at every level.",
  },
  {
    question: "How can you handle form submission in React?",
    options: [
      "By handling the onSubmit event of the form and using state to manage form data",
      "By using uncontrolled components and ref",
      "By using useEffect() to submit the form",
      "By using useState() to store form data",
    ],
    correctAnswer:
      "By handling the onSubmit event of the form and using state to manage form data",
    explanation:
      "In React, form submissions are typically handled by managing form data with state and handling the form's onSubmit event to prevent default behavior and control the data flow.",
  },
  {
    question: "What does React.lazy() do?",
    options: [
      "Enables dynamic import of components and code splitting",
      "Manages component state",
      "Handles routing",
      "Creates a context object",
    ],
    correctAnswer: "Enables dynamic import of components and code splitting",
    explanation:
      "React.lazy() enables components to be loaded lazily via dynamic imports, which helps in optimizing the app's performance by splitting code and loading it only when necessary.",
  },
  {
    question: "How do you optimize performance in React?",
    options: [
      "By using React.memo(), useMemo(), and useCallback() hooks",
      "By using shouldComponentUpdate() and PureComponent in class components",
      "By avoiding unnecessary renders and optimizing state management",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "React offers multiple tools such as React.memo(), useMemo(), and useCallback() for optimizing performance by preventing unnecessary re-renders and memoizing values.",
  },
  {
    question: "What is the role of useContext() hook?",
    options: [
      "To access the value of a context in functional components",
      "To manage local component state",
      "To handle form submissions",
      "To perform side effects",
    ],
    correctAnswer: "To access the value of a context in functional components",
    explanation:
      "The useContext() hook allows functional components to access the current value of a context without the need for a Context.Consumer wrapper.",
  },
  {
    question: "How do you create a higher-order component (HOC) in React?",
    options: [
      "By creating a function that takes a component and returns a new component with enhanced props",
      "By using useEffect() hook",
      "By using React.createRef()",
      "By using React.memo()",
    ],
    correctAnswer:
      "By creating a function that takes a component and returns a new component with enhanced props",
    explanation:
      "A higher-order component (HOC) is a function that takes a component and returns a new component with enhanced props or behavior, useful for reusing component logic.",
  },
  {
    question: "What is the purpose of React.Fragment?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows you to group multiple elements without adding extra nodes to the DOM, which helps to keep the DOM structure clean and lightweight.",
  },
  {
    question:
      "How can you manage side effects in a React functional component?",
    options: [
      "By using the useEffect() hook",
      "By using componentDidMount() and componentDidUpdate() lifecycle methods",
      "By using useState() hook",
      "By using useMemo() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "useEffect() is the primary hook used in functional components for managing side effects such as fetching data, updating the DOM, or interacting with external APIs.",
  },
  {
    question: "What is ReactDOM.hydrate() used for?",
    options: [
      "To attach event handlers to server-rendered HTML",
      "To perform side effects",
      "To manage state",
      "To handle routing",
    ],
    correctAnswer: "To attach event handlers to server-rendered HTML",
    explanation:
      "ReactDOM.hydrate() is used in server-side rendered (SSR) applications to attach event listeners to HTML that has been pre-rendered on the server, making it interactive.",
  },
  {
    question: "How do you use useReducer() in React?",
    options: [
      "By passing a reducer function and an initial state to useReducer()",
      "By using useState() hook with a reducer function",
      "By managing state directly with context",
      "By handling side effects",
    ],
    correctAnswer:
      "By passing a reducer function and an initial state to useReducer()",
    explanation:
      "useReducer() is used for more complex state logic where the state transitions are managed by a reducer function, similar to Redux but built directly into React.",
  },
  {
    question: "How do you implement a modal component in React?",
    options: [
      "By creating a component that conditionally renders based on state and handles visibility",
      "By using a third-party library for modals",
      "By using React.Fragment for layout",
      "By directly manipulating the DOM",
    ],
    correctAnswer:
      "By creating a component that conditionally renders based on state and handles visibility",
    explanation:
      "A modal component can be implemented by conditionally rendering content based on the state, and controlling its visibility using state management techniques.",
  },
  {
    question: "What is the purpose of useImperativeHandle()?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To manage component state",
      "To handle side effects",
      "To perform asynchronous operations",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() is a React hook that allows you to customize the value exposed to the parent component when using refs, giving more control over interactions.",
  },
  {
    question: "How do you handle errors in React components?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using try/catch blocks inside components",
      "By using useEffect() hook",
      "By using React.StrictMode",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and provide a fallback UI to prevent the entire app from crashing.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To optimize performance by memoizing functional components",
      "To manage component state",
      "To handle side effects",
      "To define routes",
    ],
    correctAnswer: "To optimize performance by memoizing functional components",
    explanation:
      "React.memo() is a higher-order component that prevents unnecessary re-renders by memoizing the result of a functional component if its props remain unchanged.",
  },
  {
    question: "How do you use useRef() in React?",
    options: [
      "To create mutable references that persist across renders",
      "To handle state management",
      "To manage side effects",
      "To access context values",
    ],
    correctAnswer: "To create mutable references that persist across renders",
    explanation:
      "useRef() is used to create a mutable reference that persists across renders, often useful for accessing DOM elements or storing mutable values without causing re-renders.",
  },
  {
    question: "What is the Suspense component used for in React?",
    options: [
      "To handle the loading state while components are being loaded asynchronously",
      "To manage state",
      "To define routes",
      "To perform side effects",
    ],
    correctAnswer:
      "To handle the loading state while components are being loaded asynchronously",
    explanation:
      "React's Suspense component allows developers to show a fallback UI while waiting for asynchronous operations, such as lazy-loaded components, to complete.",
  },
  {
    question: "How do you access context in a class component?",
    options: [
      "By using static contextType and this.context",
      "By using useContext() hook",
      "By using contextType property in functional components",
      "By using Context.Consumer",
    ],
    correctAnswer: "By using static contextType and this.context",
    explanation:
      "In class components, context is accessed by defining static contextType on the class and accessing the context value through this.context.",
  },
  {
    question: "What is the purpose of useEffect() hook?",
    options: [
      "To perform side effects in functional components",
      "To manage local component state",
      "To handle routing",
      "To create context",
    ],
    correctAnswer: "To perform side effects in functional components",
    explanation:
      "useEffect() is used to perform side effects such as data fetching, setting up subscriptions, or manually changing the DOM from within a functional component.",
  },
  {
    question: "How do you handle conditional rendering in React?",
    options: [
      "By using JavaScript conditional expressions (e.g., if, ternary operator) within JSX",
      "By using React.Fragment",
      "By using React.memo()",
      "By managing state with useState()",
    ],
    correctAnswer:
      "By using JavaScript conditional expressions (e.g., if, ternary operator) within JSX",
    explanation:
      "React allows conditional rendering using standard JavaScript conditional expressions, such as ternary operators, inside JSX.",
  },
  {
    question: "What does React.StrictMode do in development?",
    options: [
      "Activates additional checks and warnings for potential problems",
      "Optimizes component rendering",
      "Manages component state",
      "Defines component routing",
    ],
    correctAnswer:
      "Activates additional checks and warnings for potential problems",
    explanation:
      "React.StrictMode adds extra checks and warnings in development mode to highlight potential issues in the application.",
  },
];
