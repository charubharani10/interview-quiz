export const test8 = [
  {
    question: "What does useRef() hook return?",
    options: [
      "A mutable ref object that persists across renders",
      "A state variable",
      "A context value",
      "A callback function",
    ],
    correctAnswer: "A mutable ref object that persists across renders",
    explanation:
      "The useRef() hook returns a mutable ref object that persists across renders and can hold a reference to a DOM element or any other value.",
  },
  {
    question: "How do you implement code splitting in React?",
    options: [
      "By using React.lazy() and Suspense to load components dynamically",
      "By using import() syntax for dynamic imports",
      "By using React.memo() to memoize components",
      "By using useEffect() for lazy loading",
    ],
    correctAnswer:
      "By using React.lazy() and Suspense to load components dynamically",
    explanation:
      "React.lazy() and Suspense are used together to dynamically import components and display fallback content while the components are loading, enabling code splitting.",
  },
  {
    question: "What is React.createRef() used for?",
    options: [
      "To create a ref object that can be attached to React elements for direct DOM access",
      "To manage state",
      "To handle side effects",
      "To perform routing",
    ],
    correctAnswer:
      "To create a ref object that can be attached to React elements for direct DOM access",
    explanation:
      "React.createRef() is used to create a ref object that can be attached to React elements, enabling direct access to DOM elements or component instances.",
  },
  {
    question: "How do you handle user input in React forms?",
    options: [
      "By using controlled components with value and onChange props",
      "By using uncontrolled components with ref",
      "By using third-party libraries for form management",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "User input in React forms can be managed using controlled components with value and onChange props, uncontrolled components with refs, or third-party libraries for more complex forms.",
  },
  {
    question: "What is React.PureComponent used for?",
    options: [
      "To optimize performance by preventing re-renders if props and state have not changed",
      "To manage component state",
      "To handle side effects",
      "To perform routing",
    ],
    correctAnswer:
      "To optimize performance by preventing re-renders if props and state have not changed",
    explanation:
      "React.PureComponent performs a shallow comparison of props and state to prevent unnecessary re-renders, optimizing performance in certain scenarios.",
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
      "Authentication in React can be managed using the context API for global state and route protection, local state, or third-party libraries like Firebase.",
  },
  {
    question: "What does the React.memo() function do?",
    options: [
      "It memoizes a functional component to avoid unnecessary re-renders",
      "It handles form submissions",
      "It manages component state",
      "It performs side effects",
    ],
    correctAnswer:
      "It memoizes a functional component to avoid unnecessary re-renders",
    explanation:
      "React.memo() is a higher-order component that memoizes a functional component, preventing unnecessary re-renders if the props haven't changed.",
  },
  {
    question: "How do you manage multiple states in a React component?",
    options: [
      "By using multiple useState() hooks",
      "By using a single useReducer() hook",
      "By using useContext() for global state",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Managing multiple states in a React component can be done using multiple useState() hooks, a single useReducer() for complex state logic, or the context API for global state.",
  },
  {
    question: "What is React.lazy() used for?",
    options: [
      "To dynamically import components and enable code splitting",
      "To handle state management",
      "To manage side effects",
      "To create context",
    ],
    correctAnswer: "To dynamically import components and enable code splitting",
    explanation:
      "React.lazy() is a function that allows components to be dynamically imported, supporting code splitting and improving the performance of large applications.",
  },
  {
    question: "How do you handle complex state logic in React?",
    options: [
      "By using useReducer() hook",
      "By using useState() hook",
      "By using context API",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using useReducer() hook",
    explanation:
      "useReducer() is the preferred hook for handling complex state logic, as it allows for a more structured and centralized approach compared to useState().",
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
      "useImperativeHandle() is used to customize the values exposed to parent components when using refs, enabling controlled access to the internal methods or properties of child components.",
  },
  {
    question: "What is the purpose of React.memo()?",
    options: [
      "To optimize performance by memoizing a component",
      "To handle side effects",
      "To manage state",
      "To handle routing",
    ],
    correctAnswer: "To optimize performance by memoizing a component",
    explanation:
      "React.memo() helps improve performance by memoizing a component, preventing unnecessary re-renders if its props remain the same.",
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
      "Error boundaries in React are used to catch and handle JavaScript errors that occur during rendering, ensuring that the entire application doesn't crash.",
  },
  {
    question: "What is React.Suspense used for?",
    options: [
      "To handle loading states while components are being dynamically imported",
      "To manage component state",
      "To handle routing",
      "To define context values",
    ],
    correctAnswer:
      "To handle loading states while components are being dynamically imported",
    explanation:
      "React.Suspense is used to handle loading states when components are dynamically imported via React.lazy(), allowing fallback UI to be displayed while the component is loading.",
  },
  {
    question: "How do you implement a controlled form component in React?",
    options: [
      "By using value and onChange props to control form inputs",
      "By using ref for uncontrolled components",
      "By using third-party libraries for form management",
      "All of the above",
    ],
    correctAnswer: "By using value and onChange props to control form inputs",
    explanation:
      "Controlled components are form elements whose values are controlled by React state. Using the `value` and `onChange` props allows you to manage and validate form inputs effectively.",
  },
  {
    question: "What does React.createContext() do?",
    options: [
      "Creates a context object that allows components to share values without explicitly passing props",
      "Creates a component that can handle side effects",
      "Creates a hook to manage state",
      "Creates a utility for routing",
    ],
    correctAnswer:
      "Creates a context object that allows components to share values without explicitly passing props",
    explanation:
      "React.createContext() creates a Context object that helps in sharing values across the component tree without having to pass props down manually through every level.",
  },
  {
    question: "How do you implement pagination in a React application?",
    options: [
      "By managing the current page and items per page with state and updating the displayed items accordingly",
      "By using third-party pagination libraries",
      "By using useEffect() to fetch paginated data",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Pagination can be implemented by managing page states and items per page, utilizing libraries, and fetching data as needed using hooks like useEffect().",
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
      "React.lazy() allows you to dynamically import components, enabling code splitting and reducing the initial load time of your application.",
  },
  {
    question: "How do you optimize performance in React applications?",
    options: [
      "By using memoization techniques with React.memo(), useMemo(), and useCallback()",
      "By using React Profiler to identify performance bottlenecks",
      "By lazy loading components with React.lazy() and Suspense",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Performance optimization in React involves using various techniques such as memoization, profiling, and lazy loading to ensure efficient rendering and responsiveness.",
  },
  {
    question: "What is useEffect() with a cleanup function used for?",
    options: [
      "To clean up resources or subscriptions when the component unmounts or dependencies change",
      "To handle component state",
      "To perform side effects",
      "To manage routing",
    ],
    correctAnswer:
      "To clean up resources or subscriptions when the component unmounts or dependencies change",
    explanation:
      "The cleanup function in useEffect() is used to clean up resources or subscriptions to prevent memory leaks when the component unmounts or dependencies change.",
  },
];
