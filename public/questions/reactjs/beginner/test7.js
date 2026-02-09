export const test7 = [
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
      "Global state in React can be managed using the context API with useReducer(), or more robust solutions like Redux or MobX for complex state management.",
  },
  {
    question: "What is the useLayoutEffect() hook used for in React?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is a hook that runs synchronously after DOM mutations but before the browser paints, making it ideal for reading layout and synchronizing DOM updates.",
  },
  {
    question: "How do you manage async operations in useEffect() hook?",
    options: [
      "By using async/await syntax inside an inner function within useEffect()",
      "By using Promise directly in useEffect()",
      "By using setTimeout() inside useEffect()",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using async/await syntax inside an inner function within useEffect()",
    explanation:
      "Since useEffect() callbacks cannot be async, you can handle asynchronous operations by defining an inner async function and calling it within useEffect().",
  },
  {
    question: "What is React.PureComponent used for?",
    options: [
      "To create a component that only re-renders if props or state have changed",
      "To manage component state",
      "To handle side effects",
      "To perform routing",
    ],
    correctAnswer:
      "To create a component that only re-renders if props or state have changed",
    explanation:
      "React.PureComponent is a base class for creating components that only re-render if there are actual changes to props or state, based on a shallow comparison.",
  },
  {
    question: "How do you handle nested routes with react-router-dom?",
    options: [
      "By using nested Route components inside parent Route components",
      "By using Switch component for nested routes",
      "By using Redirect component for nested routes",
      "By using Route component with exact prop",
    ],
    correctAnswer:
      "By using nested Route components inside parent Route components",
    explanation:
      "Nested routing in react-router-dom is achieved by placing Route components within other Route components, allowing for complex routing structures.",
  },
  {
    question: "What is React.StrictMode used for in development?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a tool for identifying potential issues by wrapping components and providing extra checks in development.",
  },
  {
    question: "How do you implement lazy loading in React?",
    options: [
      "By using React.lazy() and Suspense components",
      "By using import() syntax directly",
      "By using React.memo()",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense components",
    explanation:
      "Lazy loading is achieved in React by using React.lazy() for dynamic imports and wrapping the lazy component with Suspense to handle loading states.",
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
      "Form validation in React can be done using controlled components, uncontrolled components with refs, or by leveraging third-party form validation libraries like Formik or React Hook Form.",
  },
  {
    question: "What does React.forwardRef() allow you to do?",
    options: [
      "Forward refs to a child component",
      "Handle form submission",
      "Manage component state",
      "Define component routing",
    ],
    correctAnswer: "Forward refs to a child component",
    explanation:
      "React.forwardRef() is used to forward a ref from a parent component to a child component, allowing the parent to access the child's DOM node or React instance.",
  },
  {
    question: "How do you manage application-wide state in React?",
    options: [
      "By using context API and useReducer() or third-party libraries like Redux",
      "By using local component state",
      "By using useEffect() hook",
      "By using useMemo() hook",
    ],
    correctAnswer:
      "By using context API and useReducer() or third-party libraries like Redux",
    explanation:
      "Application-wide state in React can be managed using the context API with useReducer(), or by using third-party state management solutions like Redux.",
  },
  {
    question: "What is React.StrictMode used for in development?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To optimize performance",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode helps developers identify potential issues by providing additional checks and warnings, ensuring the application follows best practices.",
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
      "useReducer() is ideal for managing complex state logic by passing a reducer function and an initial state, allowing for more structured state management.",
  },
  {
    question: "What is the role of useEffect() hook?",
    options: [
      "To handle side effects in functional components",
      "To manage local component state",
      "To create context",
      "To perform asynchronous operations",
    ],
    correctAnswer: "To handle side effects in functional components",
    explanation:
      "useEffect() is used to handle side effects such as data fetching, subscriptions, and manual DOM manipulations in functional components.",
  },
  {
    question: "How do you use React.createContext()?",
    options: [
      "By creating a context object with default values and using Provider to pass down context values",
      "By using useState() for state management",
      "By using useReducer() for state logic",
      "By using useEffect() for side effects",
    ],
    correctAnswer:
      "By creating a context object with default values and using Provider to pass down context values",
    explanation:
      "React.createContext() allows the creation of a context object, which can be provided to components through the Provider, passing down values across the component tree.",
  },
  {
    question: "What does React.lazy() do?",
    options: [
      "Allows components to be dynamically imported and code-split",
      "Manages component state",
      "Handles routing",
      "Defines context values",
    ],
    correctAnswer:
      "Allows components to be dynamically imported and code-split",
    explanation:
      "React.lazy() is a function that allows components to be dynamically imported, enabling code splitting by loading components only when necessary.",
  },
  {
    question: "How do you manage forms and validation in React?",
    options: [
      "By using controlled components, handling validation in event handlers, and using libraries for complex validations",
      "By using uncontrolled components with refs",
      "By using third-party libraries like Formik or React Hook Form",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "React allows form handling using controlled components, unmanaged components with refs, or third-party libraries like Formik and React Hook Form for advanced validation.",
  },
  {
    question: "What is the React.Fragment component used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage component state",
      "To handle side effects",
      "To perform asynchronous operations",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows you to group multiple elements without adding additional DOM nodes, providing a cleaner structure in the rendered HTML.",
  },
  {
    question: "How do you use useMemo() to optimize performance?",
    options: [
      "By memoizing expensive calculations so they are only recalculated when dependencies change",
      "By using useCallback() for callback functions",
      "By using React.memo() for functional components",
      "By managing state with useReducer()",
    ],
    correctAnswer:
      "By memoizing expensive calculations so they are only recalculated when dependencies change",
    explanation:
      "useMemo() optimizes performance by memoizing expensive computations, ensuring that they only recalculate when their dependencies change.",
  },
  {
    question: "What is React.StrictMode used for in development?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To manage component state",
      "To handle routing",
      "To define component lifecycle methods",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode wraps parts of the application to provide additional checks and warnings during development, helping identify potential problems early.",
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
      "Conditional rendering in React is achieved through conditional expressions within JSX, like the ternary operator (condition ? true : false) or the && operator.",
  },
];
