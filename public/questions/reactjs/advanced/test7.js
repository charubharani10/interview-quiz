export const test7 = [
  {
    question: "What is the use of useImperativeHandle() hook in React?",
    options: [
      "To customize the instance value that is exposed when using ref",
      "To handle side effects",
      "To manage component state",
      "To handle asynchronous operations",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value exposed when using ref. It allows you to control which properties or methods are accessible through the ref.",
  },
  {
    question: "How do you optimize a React application’s performance?",
    options: [
      "By using techniques like memoization, lazy loading, and code splitting",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using techniques like memoization, lazy loading, and code splitting",
    explanation:
      "Optimizing a React application’s performance can be achieved through techniques such as memoization to avoid unnecessary re-renders, lazy loading to split code and load components on demand, and code splitting to improve loading times.",
  },
  {
    question: "What is useLayoutEffect() and when should it be used?",
    options: [
      "It runs synchronously after all DOM mutations and should be used for measuring layout",
      "It runs asynchronously after the paint",
      "It is used for handling side effects",
      "It is used for managing component state",
    ],
    correctAnswer:
      "It runs synchronously after all DOM mutations and should be used for measuring layout",
    explanation:
      "useLayoutEffect() runs synchronously after all DOM mutations but before the browser paints. It should be used for measuring layout or making changes that need to be reflected before the user sees the updated layout.",
  },
  {
    question: "What is useReducer() hook used for?",
    options: [
      "To manage complex state logic by dispatching actions and updating state",
      "To manage simple state with useState()",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To manage complex state logic by dispatching actions and updating state",
    explanation:
      "The useReducer() hook is used to manage complex state logic by dispatching actions and updating state based on those actions. It is often preferred over useState() for complex state updates.",
  },
  {
    question:
      "What are the benefits of using React.memo() in functional components?",
    options: [
      "It prevents unnecessary re-renders by memoizing the component",
      "It manages state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It prevents unnecessary re-renders by memoizing the component",
    explanation:
      "React.memo() helps optimize performance by memoizing a functional component, preventing it from re-rendering if its props have not changed. This reduces unnecessary rendering and improves efficiency.",
  },
  {
    question: "How can React.lazy() help with code splitting?",
    options: [
      "By dynamically importing components and splitting the code for better performance",
      "By handling side effects",
      "By managing state",
      "By creating context",
    ],
    correctAnswer:
      "By dynamically importing components and splitting the code for better performance",
    explanation:
      "React.lazy() allows you to dynamically import components and split the code, which helps improve performance by loading only the necessary parts of the application when needed.",
  },
  {
    question: "What does useRef() hook return?",
    options: [
      "A mutable ref object whose .current property is initialized to the passed argument",
      "A state object",
      "A callback function",
      "A component",
    ],
    correctAnswer:
      "A mutable ref object whose .current property is initialized to the passed argument",
    explanation:
      "The useRef() hook returns a mutable ref object with a .current property that is initialized to the passed argument. This ref object can be used to persist values across renders without causing re-renders.",
  },
  {
    question:
      "How can you handle side effects in a React functional component?",
    options: [
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using useEffect() hook",
    explanation:
      "The useEffect() hook is used to handle side effects in functional components. It allows you to perform operations such as data fetching, subscriptions, or manually changing the DOM after the component renders.",
  },
  {
    question: "What is useTransition() used for in concurrent mode?",
    options: [
      "To manage concurrent updates and prioritize urgent tasks",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer: "To manage concurrent updates and prioritize urgent tasks",
    explanation:
      "The useTransition() hook is used in concurrent mode to manage updates and prioritize urgent tasks, allowing you to keep the application responsive by deferring less critical updates.",
  },
  {
    question: "How do you ensure a component only re-renders when necessary?",
    options: [
      "By using React.memo() for functional components and shouldComponentUpdate() in class components",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using React.memo() for functional components and shouldComponentUpdate() in class components",
    explanation:
      "To ensure a component only re-renders when necessary, you can use React.memo() for functional components and shouldComponentUpdate() for class components. These methods control when components should re-render based on prop changes.",
  },
  {
    question: "What does React.Suspense provide during dynamic imports?",
    options: [
      "A fallback UI while waiting for the component to load",
      "State management",
      "Error boundaries",
      "Context management",
    ],
    correctAnswer: "A fallback UI while waiting for the component to load",
    explanation:
      "React.Suspense provides a fallback UI while a component is being dynamically imported. This allows you to show a loading indicator or placeholder content while the component is being loaded.",
  },
  {
    question: "How does useCallback() optimize performance?",
    options: [
      "By memoizing callback functions to avoid recreating them on every render",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing callback functions to avoid recreating them on every render",
    explanation:
      "The useCallback() hook optimizes performance by memoizing callback functions, preventing them from being recreated on every render. This helps avoid unnecessary re-renders of child components that use these functions.",
  },
  {
    question: "When should you use useImperativeHandle() hook?",
    options: [
      "When you need to customize the instance value exposed by ref",
      "When managing state",
      "When handling side effects",
      "When creating context",
    ],
    correctAnswer:
      "When you need to customize the instance value exposed by ref",
    explanation:
      "The useImperativeHandle() hook is used when you need to customize the instance value that is exposed through a ref. This allows you to control what properties or methods are available to parent components.",
  },
  {
    question: "What is React.StrictMode and its purpose?",
    options: [
      "It helps detect potential problems in the application by activating additional checks and warnings",
      "It optimizes performance",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It helps detect potential problems in the application by activating additional checks and warnings",
    explanation:
      "React.StrictMode is a development tool that helps identify potential issues in the application by activating additional checks and warnings, such as detecting unsafe lifecycle methods and deprecated APIs.",
  },
  {
    question:
      "How does useLayoutEffect() differ from useEffect() in terms of timing?",
    options: [
      "useLayoutEffect() runs synchronously after all DOM mutations, while useEffect() runs asynchronously after the paint",
      "useEffect() runs synchronously",
      "useLayoutEffect() runs asynchronously",
      "Both run at the same time",
    ],
    correctAnswer:
      "useLayoutEffect() runs synchronously after all DOM mutations, while useEffect() runs asynchronously after the paint",
    explanation:
      "useLayoutEffect() runs synchronously after all DOM mutations but before the browser has painted, while useEffect() runs asynchronously after the paint. useLayoutEffect() is useful for reading layout from the DOM and synchronously re-rendering.",
  },
  {
    question: "What does useDeferredValue() hook do?",
    options: [
      "Defers updates to less urgent state values to avoid blocking the main thread",
      "Manages state",
      "Handles side effects",
      "Creates context",
    ],
    correctAnswer:
      "Defers updates to less urgent state values to avoid blocking the main thread",
    explanation:
      "The useDeferredValue() hook is used to defer updates to less urgent state values, allowing more urgent updates to be processed first. This helps keep the application responsive by avoiding blocking the main thread.",
  },
  {
    question: "What is the role of useContext() in managing state?",
    options: [
      "It allows you to access the context value created with React.createContext()",
      "It manages local component state",
      "It handles side effects",
      "It creates a new context",
    ],
    correctAnswer:
      "It allows you to access the context value created with React.createContext()",
    explanation:
      "The useContext() hook allows you to access the value of a context created with React.createContext(). It provides a way to consume context values in functional components without needing the Context.Consumer component.",
  },
  {
    question: "How do you handle errors in React components?",
    options: [
      "By implementing error boundaries using componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By implementing error boundaries using componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Errors in React components can be handled by implementing error boundaries. This involves using the componentDidCatch() and getDerivedStateFromError() lifecycle methods in class components to catch errors and display a fallback UI.",
  },
  {
    question: "What does useMemo() hook do?",
    options: [
      "Memoizes expensive calculations to prevent recalculating on every render",
      "Manages component state",
      "Handles side effects",
      "Creates context",
    ],
    correctAnswer:
      "Memoizes expensive calculations to prevent recalculating on every render",
    explanation:
      "The useMemo() hook memoizes the results of expensive calculations so that they are not recalculated on every render. This helps improve performance by avoiding unnecessary recalculations.",
  },
  {
    question: "What is React.createContext() used for?",
    options: [
      "To create a context for managing global state and avoiding prop drilling",
      "To create a new React component",
      "To handle side effects",
      "To manage local state",
    ],
    correctAnswer:
      "To create a context for managing global state and avoiding prop drilling",
    explanation:
      "React.createContext() is used to create a context object that allows you to manage global state and avoid prop drilling. It enables components to share values without passing props through every level of the component tree.",
  },
];
