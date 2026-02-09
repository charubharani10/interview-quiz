export const test10 = [
  {
    question: "How do you handle multiple states in a React component?",
    options: [
      "By using multiple useState() hooks",
      "By using a single useReducer() hook",
      "By using useContext() for global state",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Handling multiple states can be done by using multiple useState() hooks for local state, a single useReducer() hook for complex state logic, or useContext() for global state management.",
  },
  {
    question: "What is the purpose of useMemo() hook?",
    options: [
      "To memoize expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle routing",
      "To access context values",
    ],
    correctAnswer:
      "To memoize expensive calculations and prevent unnecessary re-computations",
    explanation:
      "useMemo() is used to memoize expensive calculations or values so that they are not recomputed on every render, improving performance by preventing unnecessary re-computations.",
  },
  {
    question: "How do you implement code splitting in a React application?",
    options: [
      "By using React.lazy() and Suspense to load components dynamically",
      "By using import() syntax for dynamic imports",
      "By using React.memo() to memoize components",
      "By using useEffect() for lazy loading",
    ],
    correctAnswer:
      "By using React.lazy() and Suspense to load components dynamically",
    explanation:
      "Code splitting can be implemented using React.lazy() in combination with Suspense to dynamically load components, which helps in reducing the initial load time by splitting the code into smaller chunks.",
  },
  {
    question: "What is React.createContext() used for?",
    options: [
      "To create a context object that allows components to share values without passing props",
      "To create a component that handles side effects",
      "To create a hook for state management",
      "To create a utility for routing",
    ],
    correctAnswer:
      "To create a context object that allows components to share values without passing props",
    explanation:
      "React.createContext() is used to create a Context object that provides a way for components to share values and data across the component tree without passing props down manually.",
  },
  {
    question:
      "How do you manage application-wide state in a React application?",
    options: [
      "By using context API combined with useReducer() or by using external libraries like Redux or MobX",
      "By using local state",
      "By using useEffect() hook",
      "By using useMemo() hook",
    ],
    correctAnswer:
      "By using context API combined with useReducer() or by using external libraries like Redux or MobX",
    explanation:
      "Application-wide state management can be achieved using context API with useReducer(), or by leveraging external libraries like Redux or MobX to handle global state across the application.",
  },
  {
    question: "What is useLayoutEffect() hook used for?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To manage component state",
      "To handle side effects",
      "To handle routing",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is used to perform DOM measurements and updates synchronously before the browser paints, ensuring that layout calculations are accurate before rendering updates.",
  },
  {
    question: "How do you optimize performance in React applications?",
    options: [
      "By using React.memo(), useMemo(), and useCallback() to avoid unnecessary re-renders and computations",
      "By using React Profiler to identify performance bottlenecks",
      "By implementing code splitting with React.lazy() and Suspense",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Performance optimization in React involves using techniques like React.memo(), useMemo(), useCallback(), React Profiler, and code splitting to enhance efficiency and responsiveness of the application.",
  },
  {
    question: "What does React.memo() do?",
    options: [
      "It memoizes a functional component to avoid unnecessary re-renders",
      "It manages component state",
      "It handles side effects",
      "It performs routing",
    ],
    correctAnswer:
      "It memoizes a functional component to avoid unnecessary re-renders",
    explanation:
      "React.memo() is a higher-order component that memoizes functional components to prevent unnecessary re-renders if the props remain unchanged, thus optimizing performance.",
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
      "Conditional rendering in React is achieved by using conditional expressions within JSX, such as ternary operators or logical AND operators, to determine which components or elements should be rendered.",
  },
  {
    question: "What is the purpose of useEffect() hook?",
    options: [
      "To perform side effects in functional components",
      "To manage component state",
      "To create context",
      "To handle routing",
    ],
    correctAnswer: "To perform side effects in functional components",
    explanation:
      "The useEffect() hook is used in functional components to perform side effects such as data fetching, subscriptions, or manually changing the DOM after the component renders.",
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
      "To handle asynchronous operations in useEffect(), you should define an async function inside the effect and call it. The useEffect() hook itself cannot be async, so this approach ensures proper handling of async code.",
  },
  {
    question: "What does React.createContext() return?",
    options: [
      "A context object with Provider and Consumer components",
      "A context provider component",
      "A context consumer component",
      "A context hook",
    ],
    correctAnswer: "A context object with Provider and Consumer components",
    explanation:
      "React.createContext() returns a context object that includes Provider and Consumer components. The Provider is used to supply context values, while the Consumer is used to consume those values.",
  },
  {
    question: "How do you handle form validation in React?",
    options: [
      "By using controlled components and managing validation in event handlers",
      "By using uncontrolled components with ref",
      "By using third-party libraries for complex form validation",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form validation in React can be handled using controlled components with validation in event handlers, uncontrolled components with refs, or third-party libraries that offer advanced validation features.",
  },
  {
    question: "What is React.Fragment used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage component state",
      "To handle side effects",
      "To perform asynchronous operations",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment is used to group multiple elements without introducing additional nodes into the DOM. This helps in returning multiple elements from a component without adding unnecessary wrapper elements.",
  },
  {
    question: "How do you use useMemo() for performance optimization?",
    options: [
      "By memoizing expensive calculations and preventing unnecessary re-computations",
      "By using useCallback() for memoizing functions",
      "By using React.memo() for memoizing components",
      "By managing state with useReducer()",
    ],
    correctAnswer:
      "By memoizing expensive calculations and preventing unnecessary re-computations",
    explanation:
      "The useMemo() hook helps optimize performance by memoizing the results of expensive calculations, thus preventing unnecessary re-computations when dependencies have not changed.",
  },
  {
    question:
      "How do you implement authentication and authorization in a React application?",
    options: [
      "By using context for state management and controlling routes based on authentication status",
      "By using local state for authentication",
      "By using third-party authentication libraries",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Authentication and authorization in React can be implemented using context for managing authentication state, local state, or third-party libraries for more robust solutions. The choice depends on the application's needs and complexity.",
  },
];
