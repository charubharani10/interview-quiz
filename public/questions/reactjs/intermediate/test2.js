export const test2 = [
  {
    question: "What is React.PureComponent used for?",
    options: [
      "To optimize performance by performing shallow comparison of props and state",
      "To manage component state",
      "To handle side effects",
      "To define context values",
    ],
    correctAnswer:
      "To optimize performance by performing shallow comparison of props and state",
    explanation:
      "React.PureComponent is used to optimize component rendering by performing a shallow comparison of props and state. If the shallow comparison indicates that neither props nor state has changed, the component is not re-rendered.",
  },
  {
    question: "How do you implement conditional rendering in React?",
    options: [
      "By using conditional expressions within JSX (e.g., ternary operator or &&)",
      "By using React.Fragment",
      "By using useState() for conditional logic",
      "By using useMemo() for rendering optimization",
    ],
    correctAnswer:
      "By using conditional expressions within JSX (e.g., ternary operator or &&)",
    explanation:
      "Conditional rendering in React can be implemented by using JavaScript expressions inside JSX, such as the ternary operator or the logical AND (&&) operator. This allows you to conditionally render elements based on the state or props.",
  },
  {
    question: "What is the purpose of useLayoutEffect()?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To manage component state",
      "To handle routing",
      "To perform side effects",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is similar to useEffect(), but it fires synchronously after all DOM mutations and before the browser has painted. It is often used for tasks that require DOM measurements or updates that need to happen before the user sees any changes.",
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By creating a function that uses React hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useReducer() hook",
      "By creating a class component",
    ],
    correctAnswer:
      "By creating a function that uses React hooks and returns values or functions",
    explanation:
      "A custom hook in React is a JavaScript function that utilizes one or more built-in hooks (like useState, useEffect) and encapsulates logic that can be reused across components. The function name must start with 'use' to follow React's hook rules.",
  },
  {
    question: "What is React.forwardRef() used for?",
    options: [
      "To forward refs from parent components to child components",
      "To create context",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer: "To forward refs from parent components to child components",
    explanation:
      "React.forwardRef() allows you to pass a ref from a parent component to a child component. This is useful when the parent component needs to directly access the child's DOM element or component instance.",
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
      "To handle asynchronous operations inside useEffect(), you can use async/await within a separate inner function, since the main useEffect callback itself cannot be asynchronous.",
  },
  {
    question:
      "What is the difference between useEffect() and useLayoutEffect()?",
    options: [
      "useEffect() runs after paint, while useLayoutEffect() runs before paint",
      "useLayoutEffect() runs after paint, while useEffect() runs before paint",
      "Both run at the same time",
      "Both are used for managing state",
    ],
    correctAnswer:
      "useEffect() runs after paint, while useLayoutEffect() runs before paint",
    explanation:
      "useEffect() runs after the browser has painted the changes, while useLayoutEffect() runs synchronously after all DOM updates but before the browser has painted, making it suitable for tasks that need to block the paint until they're done.",
  },
  {
    question: "What is the useRef() hook used for?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To define routes",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "useRef() is a hook that provides a way to persist values across renders without triggering re-renders. It is often used to directly access and manipulate DOM elements or to store mutable variables.",
  },
  {
    question: "How do you perform code splitting in React?",
    options: [
      "By using React.lazy() and Suspense to dynamically load components",
      "By using import() syntax for dynamic imports",
      "By using React.memo() to memoize components",
      "By using useEffect() for lazy loading",
    ],
    correctAnswer:
      "By using React.lazy() and Suspense to dynamically load components",
    explanation:
      "Code splitting in React can be done by using React.lazy() to lazily load components when they're needed. Suspense is used to handle the loading state while the component is being fetched.",
  },
  {
    question: "How do you create a higher-order component (HOC) in React?",
    options: [
      "By creating a function that takes a component and returns a new component with additional props or behavior",
      "By using useEffect() hook",
      "By using useReducer() hook",
      "By creating a custom hook",
    ],
    correctAnswer:
      "By creating a function that takes a component and returns a new component with additional props or behavior",
    explanation:
      "A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new component that wraps the original one, often adding extra props or behaviors to the wrapped component.",
  },
  {
    question: "What is React.memo() used for?",
    options: [
      "To memoize a functional component to avoid unnecessary re-renders",
      "To manage component state",
      "To handle side effects",
      "To perform routing",
    ],
    correctAnswer:
      "To memoize a functional component to avoid unnecessary re-renders",
    explanation:
      "React.memo() is used to optimize performance by memoizing functional components. It prevents unnecessary re-renders by doing a shallow comparison of the props and only re-renders the component if the props change.",
  },
  {
    question: "How do you pass functions as props in React?",
    options: [
      "By passing functions as props and using them within child components",
      "By using state management libraries",
      "By using context API",
      "By using refs",
    ],
    correctAnswer:
      "By passing functions as props and using them within child components",
    explanation:
      "In React, you can pass functions as props to child components just like other data. The child component can then call these functions to trigger changes or actions in the parent component.",
  },
  {
    question: "What is the purpose of useImperativeHandle()?",
    options: [
      "To customize the instance value that is exposed when using ref in parent components",
      "To handle side effects",
      "To manage component state",
      "To handle routing",
    ],
    correctAnswer:
      "To customize the instance value that is exposed when using ref in parent components",
    explanation:
      "useImperativeHandle() is used with React.forwardRef() to customize the ref's value that is exposed to parent components, allowing the parent to interact with child component instances in a more controlled way.",
  },
  {
    question: "How do you manage application-wide state in React?",
    options: [
      "By using context API combined with useReducer() or by using external libraries like Redux or MobX",
      "By using local state",
      "By using useEffect() hook",
      "By using useMemo() hook",
    ],
    correctAnswer:
      "By using context API combined with useReducer() or by using external libraries like Redux or MobX",
    explanation:
      "For managing global or application-wide state, React's context API combined with useReducer() is commonly used. Alternatively, state management libraries like Redux or MobX can be utilized for more complex state handling.",
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
      "React.createContext() is used to create a context object that enables data to be shared across components without having to pass props through every level of the component tree.",
  },
  {
    question: "How do you create a controlled component in React?",
    options: [
      "By using the value and onChange props to control form inputs",
      "By using ref to control form inputs",
      "By using useState() for managing local state",
      "By using useEffect() for handling side effects",
    ],
    correctAnswer:
      "By using the value and onChange props to control form inputs",
    explanation:
      "A controlled component in React is a form input element that is controlled by React's state. This is achieved by setting the value prop of the input and updating the state in the onChange handler.",
  },
  {
    question: "What does React.lazy() return?",
    options: [
      "A component that can be loaded dynamically",
      "A hook for managing state",
      "A context provider component",
      "A function for handling side effects",
    ],
    correctAnswer: "A component that can be loaded dynamically",
    explanation:
      "React.lazy() returns a component that can be loaded dynamically. It is used for lazy loading components in React to optimize performance by splitting the bundle and loading components only when needed.",
  },
  {
    question: "How do you handle side effects in functional components?",
    options: [
      "By using the useEffect() hook",
      "By using useState() hook",
      "By using useContext() hook",
      "By using useReducer() hook",
    ],
    correctAnswer: "By using the useEffect() hook",
    explanation:
      "The useEffect() hook is used to handle side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM after rendering.",
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
      "React.StrictMode is a wrapper component that activates additional checks and warnings for its children. It helps developers identify potential problems, such as deprecated features or side effect issues in the application.",
  },
  {
    question: "How do you create a component with hooks in React?",
    options: [
      "By using functional components with hooks like useState(), useEffect(), etc.",
      "By using class components with lifecycle methods",
      "By using React.createClass()",
      "By using React.createElement()",
    ],
    correctAnswer:
      "By using functional components with hooks like useState(), useEffect(), etc.",
    explanation:
      "In React, functional components with hooks like useState() and useEffect() are used to manage state and side effects. This is the modern way of building components, whereas class components are becoming less common.",
  },
];
