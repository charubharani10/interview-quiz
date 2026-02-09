export const test3 = [
  {
    question: "What is useMemo() used for?",
    options: [
      "To memoize expensive calculations and prevent unnecessary re-computations",
      "To manage component state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize expensive calculations and prevent unnecessary re-computations",
    explanation:
      "useMemo() is a React hook that memoizes a value or computation result. It helps avoid re-execution of expensive functions on every render if the inputs haven't changed.",
  },
  {
    question: "How do you handle multiple states in a functional component?",
    options: [
      "By using multiple useState() hooks",
      "By using a single useReducer() hook",
      "By using useContext() for global state",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can manage multiple states using multiple useState() hooks for simple state logic, useReducer() for more complex state management, or useContext() for global state management.",
  },
  {
    question: "What is React.PureComponent?",
    options: [
      "A base class for components that performs shallow comparison of props and state to optimize performance",
      "A hook for managing state",
      "A function for handling side effects",
      "A utility for routing",
    ],
    correctAnswer:
      "A base class for components that performs shallow comparison of props and state to optimize performance",
    explanation:
      "React.PureComponent is a base class similar to React.Component, but it automatically performs a shallow comparison of props and state to prevent unnecessary re-renders.",
  },
  {
    question: "How do you handle context in React?",
    options: [
      "By creating a context object with React.createContext() and using Provider and Consumer components",
      "By using useState() hook",
      "By using useEffect() hook",
      "By using React.memo() hook",
    ],
    correctAnswer:
      "By creating a context object with React.createContext() and using Provider and Consumer components",
    explanation:
      "Context in React is managed by using React.createContext() to create a context, and then wrapping components with Provider and using Consumer or useContext() to access the context values.",
  },
  {
    question: "What is useReducer() used for?",
    options: [
      "To manage complex state logic in a functional component",
      "To handle side effects",
      "To manage component context",
      "To optimize performance",
    ],
    correctAnswer: "To manage complex state logic in a functional component",
    explanation:
      "useReducer() is used in situations where state logic is more complex than what useState() can handle, such as when the next state depends on the previous one or when multiple state values need to be managed.",
  },
  {
    question: "How do you implement lazy loading of components in React?",
    options: [
      "By using React.lazy() and Suspense",
      "By using import() syntax",
      "By using React.memo() for optimization",
      "By using useEffect() hook",
    ],
    correctAnswer: "By using React.lazy() and Suspense",
    explanation:
      "Lazy loading in React is implemented using React.lazy() to load components on demand, and Suspense to define a fallback UI that displays while the component is being loaded.",
  },
  {
    question: "How do you handle form validation in React?",
    options: [
      "By using controlled components and managing validation in event handlers",
      "By using uncontrolled components with ref",
      "By using third-party libraries for complex validation",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Form validation in React can be handled through controlled components where state is tied to the form inputs, by using uncontrolled components with refs, or by using third-party libraries like Formik for more complex validation needs.",
  },
  {
    question: "What does useCallback() do?",
    options: [
      "It memoizes callback functions to avoid unnecessary re-renders",
      "It manages component state",
      "It handles side effects",
      "It performs routing",
    ],
    correctAnswer:
      "It memoizes callback functions to avoid unnecessary re-renders",
    explanation:
      "useCallback() memoizes callback functions, ensuring that the same function instance is used across renders unless its dependencies change, which can prevent unnecessary re-renders in child components.",
  },
  {
    question: "How do you pass data from parent to child components?",
    options: [
      "By using props",
      "By using context API",
      "By using state management libraries",
      "By using refs",
    ],
    correctAnswer: "By using props",
    explanation:
      "Data is passed from parent to child components in React using props, which allows for the unidirectional flow of data from the parent component to its children.",
  },
  {
    question: "What is useLayoutEffect() used for?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is similar to useEffect(), but it fires synchronously after all DOM mutations and before the browser repaints. It's useful for DOM measurements or updates that need to happen before the user sees them.",
  },
  {
    question: "What is React.forwardRef() used for?",
    options: [
      "To forward refs from parent components to child components",
      "To handle side effects",
      "To manage state",
      "To handle routing",
    ],
    correctAnswer: "To forward refs from parent components to child components",
    explanation:
      "React.forwardRef() allows refs to be passed from parent components to child components, enabling the parent to directly access the child's DOM node or component instance.",
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By creating a function that uses built-in hooks and returns values or functions",
      "By using useState() directly in components",
      "By creating class components",
      "By using useContext() for managing context",
    ],
    correctAnswer:
      "By creating a function that uses built-in hooks and returns values or functions",
    explanation:
      "A custom hook is a function that uses built-in hooks like useState, useEffect, or useContext to encapsulate reusable logic, and can be shared across multiple components.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To memoize functional components to avoid unnecessary re-renders",
      "To handle side effects",
      "To manage state",
      "To define routes",
    ],
    correctAnswer:
      "To memoize functional components to avoid unnecessary re-renders",
    explanation:
      "React.memo() is used to memoize functional components, meaning the component will only re-render if its props change. This helps optimize performance by preventing unnecessary re-renders.",
  },
  {
    question: "How do you create a higher-order component (HOC) in React?",
    options: [
      "By creating a function that takes a component and returns a new component with additional props or behavior",
      "By using useEffect() hook",
      "By using useReducer() hook",
      "By creating a class component",
    ],
    correctAnswer:
      "By creating a function that takes a component and returns a new component with additional props or behavior",
    explanation:
      "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component with added behavior or props, allowing for code reuse.",
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
      "React.lazy() is used for code splitting in React by dynamically importing components, which helps improve performance by loading components only when they're needed.",
  },
  {
    question: "How do you use useRef() in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To handle side effects",
      "To manage component state",
      "To define routes",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "useRef() is used to persist values across renders without causing the component to re-render. It can also be used to reference DOM elements directly.",
  },
  {
    question: "What is React.Fragment used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "React.Fragment allows you to return multiple elements from a component without adding extra nodes to the DOM, helping to keep the DOM structure clean.",
  },
  {
    question: "How do you handle multiple states in a functional component?",
    options: [
      "By using multiple useState() hooks",
      "By using a single useReducer() hook",
      "By using context API",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can handle multiple states in React by using multiple useState() hooks, useReducer() for complex state management, or context API for global state management.",
  },
  {
    question:
      "What is the difference between useEffect() and useLayoutEffect()?",
    options: [
      "useEffect() runs after the DOM has painted, while useLayoutEffect() runs before it",
      "useLayoutEffect() runs after the DOM has painted, while useEffect() runs before it",
      "Both hooks run at the same time",
      "Both hooks are used for managing state",
    ],
    correctAnswer:
      "useEffect() runs after the DOM has painted, while useLayoutEffect() runs before it",
    explanation:
      "useEffect() runs after the DOM updates, making it suitable for most side effects, while useLayoutEffect() runs synchronously before the browser paints, useful for DOM measurements.",
  },
  {
    question: "How do you manage application-wide state in React?",
    options: [
      "By using context API or external libraries like Redux or MobX",
      "By using local component state",
      "By using refs",
      "By using hooks like useState() and useEffect()",
    ],
    correctAnswer:
      "By using context API or external libraries like Redux or MobX",
    explanation:
      "Application-wide state is typically managed using context API for simple cases or external state management libraries like Redux or MobX for more complex scenarios.",
  },
];
