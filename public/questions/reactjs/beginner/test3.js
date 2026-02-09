export const test3 = [
  {
    question: "What is the purpose of useImperativeHandle() hook?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To manage state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "The useImperativeHandle() hook allows you to customize the instance value that is exposed to parent components when using ref. This is useful for managing imperative code.",
  },
  {
    question: "How do you handle performance optimization in React?",
    options: [
      "By using React.memo(), useMemo(), and useCallback() hooks",
      "By directly manipulating the DOM",
      "By using class components instead of functional components",
      "By avoiding the use of state",
    ],
    correctAnswer: "By using React.memo(), useMemo(), and useCallback() hooks",
    explanation:
      "Performance optimization in React can be achieved using React.memo(), useMemo(), and useCallback() hooks to memoize components and functions, preventing unnecessary re-renders.",
  },
  {
    question: "What is React.createContext() used for?",
    options: [
      "To create a context object that can be used to pass data through the component tree without having to pass props down manually",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To create a context object that can be used to pass data through the component tree without having to pass props down manually",
    explanation:
      "React.createContext() is used to create a context object, allowing you to pass data through the component tree without manually passing props at every level.",
  },
  {
    question: "How do you use useReducer() hook in React?",
    options: [
      "By passing a reducer function and an initial state to useReducer()",
      "By passing a callback function to useReducer()",
      "By using useState() for managing state",
      "By directly modifying the state object",
    ],
    correctAnswer:
      "By passing a reducer function and an initial state to useReducer()",
    explanation:
      "The useReducer() hook is used for managing state by passing a reducer function and an initial state, which allows for more complex state logic.",
  },
  {
    question: "What does React.StrictMode do in development?",
    options: [
      "It helps identify potential problems in an application by activating additional checks and warnings",
      "It optimizes performance",
      "It handles state management",
      "It defines component routing",
    ],
    correctAnswer:
      "It helps identify potential problems in an application by activating additional checks and warnings",
    explanation:
      "React.StrictMode is a tool for identifying potential problems in an application by enabling additional checks and warnings during development.",
  },
  {
    question: "How do you define default props for a React component?",
    options: [
      "By setting defaultProps on the component",
      "By using useState() hook",
      "By using props directly",
      "By using context",
    ],
    correctAnswer: "By setting defaultProps on the component",
    explanation:
      "Default props for a React component are defined by setting the defaultProps property on the component, which provides default values for props if none are specified.",
  },
  {
    question: "What is the purpose of useLayoutEffect() hook?",
    options: [
      "To run side effects synchronously after all DOM mutations",
      "To handle component state",
      "To perform asynchronous operations",
      "To manage routing",
    ],
    correctAnswer: "To run side effects synchronously after all DOM mutations",
    explanation:
      "The useLayoutEffect() hook runs side effects synchronously after all DOM mutations, allowing you to measure and modify the DOM before the browser paints.",
  },
  {
    question: "How do you handle asynchronous operations in React?",
    options: [
      "By using useEffect() with asynchronous functions or async/await",
      "By using useState() directly",
      "By directly manipulating the DOM",
      "By using React.createContext()",
    ],
    correctAnswer:
      "By using useEffect() with asynchronous functions or async/await",
    explanation:
      "Asynchronous operations in React are handled using the useEffect() hook with asynchronous functions or async/await to manage side effects.",
  },
  {
    question: "What is a functional component in React?",
    options: [
      "A component defined as a function that returns JSX",
      "A component that manages state",
      "A class-based component with lifecycle methods",
      "A component that handles routing",
    ],
    correctAnswer: "A component defined as a function that returns JSX",
    explanation:
      "A functional component is a component defined as a function that returns JSX. It can be stateless or use hooks for managing state and side effects.",
  },
  {
    question: "How do you handle dynamic imports in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() statements",
      "By using require() statements",
      "By using fetch() API",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "Dynamic imports in React are handled using React.lazy() for lazy loading components and Suspense for handling loading states.",
  },
  {
    question: "What is React.Fragment used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage state",
      "To handle routing",
      "To create a context",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment is used to group multiple elements without adding extra nodes to the DOM, helping to keep the DOM tree clean.",
  },
  {
    question: "How do you access a ref in a functional component?",
    options: [
      "By using the useRef() hook",
      "By using React.createRef()",
      "By using this.refs",
      "By passing a callback ref",
    ],
    correctAnswer: "By using the useRef() hook",
    explanation:
      "To access a ref in a functional component, you use the useRef() hook, which provides a mutable ref object.",
  },
  {
    question: "How do you pass data between sibling components in React?",
    options: [
      "By lifting state up to a common ancestor and passing data via props",
      "By using context",
      "By using refs",
      "By using global variables",
    ],
    correctAnswer:
      "By lifting state up to a common ancestor and passing data via props",
    explanation:
      "To pass data between sibling components, you lift state up to a common ancestor component and pass the data via props.",
  },
  {
    question: "What is the purpose of useImperativeHandle()?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To manage component state",
      "To perform side effects",
      "To access context values",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "The useImperativeHandle() hook allows you to customize the instance value exposed by a ref, making it possible to expose a different interface to parent components.",
  },
  {
    question: "How do you handle form inputs in React?",
    options: [
      "By using controlled components with value and onChange props",
      "By using uncontrolled components with refs",
      "By directly manipulating the DOM",
      "By using context",
    ],
    correctAnswer:
      "By using controlled components with value and onChange props",
    explanation:
      "Form inputs in React are typically handled as controlled components, where the value is controlled by React state and changes are managed using onChange handlers.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To optimize performance by memoizing functional components",
      "To manage state",
      "To perform side effects",
      "To handle routing",
    ],
    correctAnswer: "To optimize performance by memoizing functional components",
    explanation:
      "React.memo() is used to optimize performance by memoizing functional components, preventing unnecessary re-renders when props have not changed.",
  },
  {
    question: "How do you handle side effects in a functional component?",
    options: [
      "By using the useEffect() hook",
      "By using componentDidMount() and componentDidUpdate() methods",
      "By using useState() hook",
      "By using useContext() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "Side effects in functional components are managed using the useEffect() hook, which handles tasks like data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    question: "What is the purpose of useMemo() hook?",
    options: [
      "To memoize expensive calculations and avoid unnecessary re-renders",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To memoize expensive calculations and avoid unnecessary re-renders",
    explanation:
      "The useMemo() hook is used to memoize expensive calculations, so they are only recomputed when their dependencies change, helping to avoid unnecessary re-renders.",
  },
  {
    question:
      "How do you define a React component that does not re-render unless specific props change?",
    options: [
      "By using React.memo() for functional components",
      "By using shouldComponentUpdate() for class components",
      "By using PureComponent for class components",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "React components can be optimized to avoid unnecessary re-renders using React.memo() for functional components, shouldComponentUpdate() for class components, or PureComponent, which implements shouldComponentUpdate() with a shallow prop and state comparison.",
  },
  {
    question: "What does useEffect() do with an empty dependency array?",
    options: [
      "It runs the effect only once after the initial render",
      "It runs the effect on every render",
      "It does not run the effect at all",
      "It runs the effect on every state change",
    ],
    correctAnswer: "It runs the effect only once after the initial render",
    explanation:
      "When useEffect() is passed an empty dependency array, it runs only once after the component is mounted. This is commonly used for one-time side effects like data fetching.",
  },
];
