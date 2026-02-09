export const test8 = [
  {
    question: "How can you achieve code splitting in React?",
    options: [
      "By using React.lazy() and Suspense to dynamically import components",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() and Suspense to dynamically import components",
    explanation:
      "Code splitting in React can be achieved using React.lazy() and Suspense. React.lazy() dynamically imports components, while Suspense provides a fallback UI while these components are being loaded.",
  },
  {
    question: "What does useRef() hook provide?",
    options: [
      "A mutable object that persists across renders without causing re-renders",
      "A state object",
      "A callback function",
      "A component",
    ],
    correctAnswer:
      "A mutable object that persists across renders without causing re-renders",
    explanation:
      "The useRef() hook provides a mutable ref object whose .current property persists across renders. This allows you to hold a reference to a DOM element or a value without causing re-renders when the ref is updated.",
  },
  {
    question: "How do you implement lazy loading of components in React?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "To implement lazy loading of components in React, use React.lazy() to dynamically import components and Suspense to provide a fallback UI while the component is being loaded.",
  },
  {
    question: "What is the use of useCallback() hook in React?",
    options: [
      "To memoize callback functions and avoid recreating them on every render",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions and avoid recreating them on every render",
    explanation:
      "The useCallback() hook is used to memoize callback functions, preventing them from being recreated on every render. This helps avoid unnecessary re-renders of components that rely on these functions.",
  },
  {
    question:
      "How can you handle asynchronous operations in functional components?",
    options: [
      "By using useEffect() with an async function",
      "By using Promise directly in components",
      "By using setTimeout() in components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() with an async function",
    explanation:
      "Asynchronous operations in functional components can be handled by using the useEffect() hook with an async function. This allows you to perform operations like data fetching or subscriptions within the component.",
  },
  {
    question: "What is React.StrictMode used for during development?",
    options: [
      "To activate additional checks and warnings to identify potential problems in the application",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To activate additional checks and warnings to identify potential problems in the application",
    explanation:
      "React.StrictMode during development is used to activate additional checks and warnings that help identify potential issues in the application, such as deprecated APIs and unsafe lifecycle methods.",
  },
  {
    question: "What does useLayoutEffect() hook allow you to do?",
    options: [
      "Perform DOM measurements and updates before the browser paints",
      "Manage component state",
      "Handle side effects",
      "Create context",
    ],
    correctAnswer:
      "Perform DOM measurements and updates before the browser paints",
    explanation:
      "The useLayoutEffect() hook allows you to perform DOM measurements and make updates before the browser paints. This ensures that layout changes are applied synchronously and can be measured accurately.",
  },
  {
    question: "How can you create a custom hook in React?",
    options: [
      "By defining a function that uses other hooks and returns values or functions",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By defining a function that uses other hooks and returns values or functions",
    explanation:
      "To create a custom hook in React, define a function that uses built-in hooks and returns values or functions that can be reused in other components. Custom hooks allow you to encapsulate and reuse logic across different components.",
  },
  {
    question: "What is useDeferredValue() hook used for in concurrent mode?",
    options: [
      "To defer less urgent updates and improve the responsiveness of the application",
      "To manage state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To defer less urgent updates and improve the responsiveness of the application",
    explanation:
      "The useDeferredValue() hook is used in concurrent mode to defer less urgent updates, allowing more important updates to be processed first and thus improving the responsiveness of the application.",
  },
  {
    question: "How does React.memo() help optimize functional components?",
    options: [
      "By memoizing the component and preventing re-renders if props haven’t changed",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By memoizing the component and preventing re-renders if props haven’t changed",
    explanation:
      "React.memo() optimizes functional components by memoizing them. This means that the component will only re-render if its props have changed, which helps in reducing unnecessary re-renders.",
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
      "React.lazy() is used to dynamically import components. This facilitates code splitting, allowing you to load components only when they are needed, which can improve the performance of your application.",
  },
  {
    question: "What does useContext() hook do in React?",
    options: [
      "Provides access to the context value created by React.createContext()",
      "Manages component state",
      "Handles side effects",
      "Creates context",
    ],
    correctAnswer:
      "Provides access to the context value created by React.createContext()",
    explanation:
      "The useContext() hook provides access to the context value created by React.createContext(). This allows functional components to consume context values without needing to use the Context.Consumer component.",
  },
  {
    question: "How does useReducer() hook benefit complex state management?",
    options: [
      "By allowing you to manage state using a reducer function and dispatch actions",
      "By managing simple state with useState()",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By allowing you to manage state using a reducer function and dispatch actions",
    explanation:
      "The useReducer() hook is beneficial for managing complex state logic. It allows you to use a reducer function to handle state changes and dispatch actions, making it easier to manage state updates in a predictable manner.",
  },
  {
    question: "What does React.createContext() allow you to do?",
    options: [
      "Create a context object for passing data through the component tree without prop drilling",
      "Create a new React component",
      "Handle side effects",
      "Manage local state",
    ],
    correctAnswer:
      "Create a context object for passing data through the component tree without prop drilling",
    explanation:
      "React.createContext() is used to create a context object that enables you to pass data through the component tree without the need for prop drilling. It facilitates sharing values between components at different levels of the hierarchy.",
  },
  {
    question: "How can you use React.memo() to optimize performance?",
    options: [
      "By preventing re-renders of a component if its props have not changed",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By preventing re-renders of a component if its props have not changed",
    explanation:
      "React.memo() helps optimize performance by memoizing the component, which prevents re-renders if the component’s props have not changed. This can significantly improve performance by avoiding unnecessary re-renders.",
  },
  {
    question: "What is React.Suspense used for?",
    options: [
      "To display a fallback UI while waiting for a component to load dynamically",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    correctAnswer:
      "To display a fallback UI while waiting for a component to load dynamically",
    explanation:
      "React.Suspense is used to display a fallback UI while waiting for a component to load dynamically. It is often used in conjunction with React.lazy() for code splitting and lazy loading of components.",
  },
  {
    question: "What does useMemo() hook help with in React?",
    options: [
      "Memoizing the results of expensive calculations to avoid recalculating them on every render",
      "Managing state",
      "Handling side effects",
      "Creating context",
    ],
    correctAnswer:
      "Memoizing the results of expensive calculations to avoid recalculating them on every render",
    explanation:
      "The useMemo() hook helps with memoizing the results of expensive calculations. This prevents recalculating the results on every render, thus improving performance and efficiency.",
  },
  {
    question:
      "How does useImperativeHandle() hook customize the ref exposed by a component?",
    options: [
      "By allowing you to customize the instance value that is exposed when using ref",
      "By managing component state",
      "By handling side effects",
      "By creating context",
    ],
    correctAnswer:
      "By allowing you to customize the instance value that is exposed when using ref",
    explanation:
      "The useImperativeHandle() hook is used to customize the instance value exposed by a ref. This allows you to control what properties or methods are accessible when the ref is used in parent components.",
  },
  {
    question: "How can you use React.lazy() for code splitting?",
    options: [
      "By dynamically importing components with React.lazy() and displaying them with React.Suspense",
      "By using import() syntax directly",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By dynamically importing components with React.lazy() and displaying them with React.Suspense",
    explanation:
      "React.lazy() allows you to dynamically import components, and React.Suspense is used to display a fallback UI while the component is being loaded. This combination helps achieve code splitting and lazy loading of components.",
  },
  {
    question: "What is React.StrictMode and when should it be used?",
    options: [
      "It helps identify potential problems in the application by activating additional checks and warnings during development",
      "It optimizes performance",
      "It manages state",
      "It creates context",
    ],
    correctAnswer:
      "It helps identify potential problems in the application by activating additional checks and warnings during development",
    explanation:
      "React.StrictMode is used during development to activate additional checks and warnings. It helps identify potential problems and issues in the application, such as unsafe lifecycle methods and deprecated APIs.",
  },
];
