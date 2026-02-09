export const test4 = [
  {
    question: "How do you access the context value in a functional component?",
    options: [
      "By using the useContext() hook",
      "By using this.context",
      "By using Context.Consumer",
      "By using Context.Provider",
    ],
    correctAnswer: "By using the useContext() hook",
    explanation:
      "The useContext() hook allows functional components to access values from React's context, providing a simpler way to consume context without the need for Context.Consumer.",
  },
  {
    question: "What is the purpose of useLayoutEffect() hook?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle routing",
      "To manage state",
      "To access context values",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is similar to useEffect(), but it fires synchronously after all DOM mutations and before the browser has a chance to paint, making it useful for DOM measurements.",
  },
  {
    question: "How do you use useCallback() in React?",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To manage component state",
      "To perform side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize callback functions and prevent unnecessary re-renders",
    explanation:
      "useCallback() is used to memoize callback functions, ensuring that they are not recreated on every render unless their dependencies change, which helps optimize performance.",
  },
  {
    question: "What is the Suspense component used for in React?",
    options: [
      "To handle the loading state while components are being loaded asynchronously",
      "To manage component state",
      "To handle routing",
      "To define context",
    ],
    correctAnswer:
      "To handle the loading state while components are being loaded asynchronously",
    explanation:
      "Suspense is a React component that allows you to display a fallback (like a loading spinner) while waiting for asynchronous components (usually with React.lazy()) to load.",
  },
  {
    question: "How do you handle errors in React components?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using try/catch blocks inside components",
      "By using useEffect() hook",
      "By using context",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are components that catch JavaScript errors in their child component tree using componentDidCatch() and getDerivedStateFromError(), allowing graceful error handling.",
  },
  {
    question: "What is the purpose of React.lazy()?",
    options: [
      "To dynamically import components and enable code splitting",
      "To manage state",
      "To handle routing",
      "To access context values",
    ],
    correctAnswer: "To dynamically import components and enable code splitting",
    explanation:
      "React.lazy() enables dynamic imports of components, which helps in code splitting by loading only the necessary parts of the app as needed.",
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
      "React Router DOM is the most commonly used routing library for React applications, providing components like BrowserRouter, Route, and Link for managing navigation.",
  },
  {
    question: "How do you use useState() with an initial function?",
    options: [
      "By passing a function to useState() that returns the initial state",
      "By passing a constant value to useState()",
      "By using useEffect() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By passing a function to useState() that returns the initial state",
    explanation:
      "You can pass a function to useState() that returns the initial state, which is useful when the initial state is the result of an expensive computation.",
  },
  {
    question: "How do you create a dynamic route in React Router?",
    options: [
      "By using route parameters with :param in the path",
      "By using query strings",
      "By using hash fragments",
      "By using location object",
    ],
    correctAnswer: "By using route parameters with :param in the path",
    explanation:
      "Dynamic routes in React Router are created using route parameters, which are defined by adding :param in the path and can be accessed via match.params.",
  },
  {
    question: "What is React.StrictMode used for?",
    options: [
      "To activate additional checks and warnings for potential problems in the application",
      "To handle state management",
      "To manage routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To activate additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a development tool that highlights potential issues in an application by activating additional checks and warnings, such as detecting unsafe lifecycle methods.",
  },
  {
    question: "How do you handle side effects in React functional components?",
    options: [
      "By using the useEffect() hook",
      "By using componentDidMount() and componentDidUpdate() lifecycle methods",
      "By using useState() hook",
      "By using useContext() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "In functional components, the useEffect() hook is used to handle side effects like fetching data, subscribing to services, or interacting with the browser's DOM.",
  },
  {
    question: "How do you create a higher-order component (HOC) in React?",
    options: [
      "By creating a function that takes a component and returns a new component with additional props",
      "By creating a component that manages routing",
      "By creating a component with lifecycle methods",
      "By using hooks",
    ],
    correctAnswer:
      "By creating a function that takes a component and returns a new component with additional props",
    explanation:
      "A higher-order component (HOC) is a function that takes a component as input and returns a new component that can enhance or modify the behavior of the original component.",
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
      "ReactDOM.hydrate() is used to attach event handlers to existing HTML that was rendered on the server during server-side rendering, making it interactive on the client.",
  },
  {
    question: "How do you handle form validation in React?",
    options: [
      "By using controlled components and validating the input values",
      "By using uncontrolled components and accessing values with refs",
      "By using useReducer() hook",
      "By using context",
    ],
    correctAnswer:
      "By using controlled components and validating the input values",
    explanation:
      "Form validation in React is commonly handled with controlled components, where the input value is managed by state and can be validated on change or submit events.",
  },
  {
    question: "What is the purpose of useImperativeHandle() hook in React?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To manage state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() allows you to customize the ref instance value exposed to parent components, enabling more control over how the parent interacts with the child component.",
  },
  {
    question: "How do you handle dynamic imports in React?",
    options: [
      "By using React.lazy() and Suspense for code splitting",
      "By using import() statements",
      "By using require() statements",
      "By using fetch() API",
    ],
    correctAnswer: "By using React.lazy() and Suspense for code splitting",
    explanation:
      "Dynamic imports in React are handled by using React.lazy() for lazy loading components, and Suspense for displaying fallback content while waiting for the component to load.",
  },
  {
    question: "What is the purpose of useMemo() hook in React?",
    options: [
      "To memoize expensive calculations and avoid unnecessary re-renders",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To memoize expensive calculations and avoid unnecessary re-renders",
    explanation:
      "useMemo() memoizes expensive calculations so they are only recomputed when their dependencies change, optimizing performance by avoiding unnecessary re-renders.",
  },
  {
    question: "How do you use useCallback() hook in React?",
    options: [
      "To memoize callback functions and prevent unnecessary re-renders",
      "To manage component state",
      "To perform side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize callback functions and prevent unnecessary re-renders",
    explanation:
      "useCallback() memoizes callback functions to prevent them from being recreated on every render unless their dependencies change, helping to optimize performance.",
  },
  {
    question: "What does React.StrictMode help with during development?",
    options: [
      "Identifies potential problems in the application by activating additional checks and warnings",
      "Optimizes performance",
      "Manages component state",
      "Defines component routing",
    ],
    correctAnswer:
      "Identifies potential problems in the application by activating additional checks and warnings",
    explanation:
      "React.StrictMode helps developers identify potential problems by enabling additional checks and warnings during development. It highlights issues like unsafe lifecycle methods or side effects.",
  },
  {
    question:
      "How do you handle a component that should only re-render when specific props change?",
    options: [
      "By using React.memo() for functional components or shouldComponentUpdate() for class components",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using context",
    ],
    correctAnswer:
      "By using React.memo() for functional components or shouldComponentUpdate() for class components",
    explanation:
      "React.memo() is used for memoizing functional components to prevent unnecessary re-renders, while shouldComponentUpdate() is used in class components for similar purposes.",
  },
];
