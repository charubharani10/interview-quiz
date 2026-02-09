export const test1 = [
  {
    question: "What is the purpose of useCallback() in React?",
    options: [
      "To memoize callback functions and avoid re-creating them on every render",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions and avoid re-creating them on every render",
    explanation:
      "useCallback() is used to memoize callback functions, ensuring that they are not recreated on every render. This helps in preventing unnecessary re-renders of child components that rely on these callbacks.",
  },
  {
    question: "How does React.memo() optimize performance?",
    options: [
      "It memoizes a component, preventing unnecessary re-renders if props have not changed",
      "It handles asynchronous operations",
      "It manages component state",
      "It creates context",
    ],
    correctAnswer:
      "It memoizes a component, preventing unnecessary re-renders if props have not changed",
    explanation:
      "React.memo() is a higher-order component that memoizes the result of a functional component. It prevents the component from re-rendering unless its props have changed, thus improving performance.",
  },
  {
    question:
      "What is the difference between useEffect() and useLayoutEffect()?",
    options: [
      "useEffect() runs after the DOM has been painted, while useLayoutEffect() runs before it",
      "useLayoutEffect() runs after the DOM has been painted, while useEffect() runs before it",
      "Both hooks run at the same time",
      "Both hooks are used for managing state",
    ],
    correctAnswer:
      "useEffect() runs after the DOM has been painted, while useLayoutEffect() runs before it",
    explanation:
      "useEffect() runs after the browser has painted the DOM, whereas useLayoutEffect() runs synchronously before the DOM is painted. This makes useLayoutEffect suitable for operations that need to happen before the layout is visible to the user.",
  },
  {
    question: "How can you achieve server-side rendering with React?",
    options: [
      "By using frameworks like Next.js or Gatsby",
      "By using React.lazy() and Suspense",
      "By using useEffect() hook",
      "By using useState() hook",
    ],
    correctAnswer: "By using frameworks like Next.js or Gatsby",
    explanation:
      "Server-side rendering (SSR) in React can be achieved using frameworks like Next.js or Gatsby, which handle the server-side rendering process and provide optimized performance and SEO benefits.",
  },
  {
    question: "What is the purpose of React.createContext()?",
    options: [
      "To create a context object for passing data through the component tree without prop drilling",
      "To create a new React component",
      "To handle side effects",
      "To manage state",
    ],
    correctAnswer:
      "To create a context object for passing data through the component tree without prop drilling",
    explanation:
      "React.createContext() creates a context object that allows you to pass data through the component tree without having to pass props down manually at every level, thus avoiding prop drilling.",
  },
  {
    question: "How can you implement code splitting in a React application?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax directly in components",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Code splitting can be implemented in React applications using React.lazy() to dynamically import components and React.Suspense to provide a fallback UI while the component is loading.",
  },
  {
    question: "What does useImperativeHandle() hook allow you to do?",
    options: [
      "It allows customization of the instance value that is exposed when using ref",
      "It handles side effects",
      "It manages component state",
      "It handles asynchronous operations",
    ],
    correctAnswer:
      "It allows customization of the instance value that is exposed when using ref",
    explanation:
      "useImperativeHandle() allows you to customize the instance value that is exposed when using refs, providing a way to control what is exposed to parent components.",
  },
  {
    question: "How can you create a higher-order component (HOC) in React?",
    options: [
      "By writing a function that takes a component and returns a new component with additional props or behavior",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By writing a function that takes a component and returns a new component with additional props or behavior",
    explanation:
      "A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or behavior, allowing for code reuse and enhancement of components.",
  },
  {
    question: "What does React.Suspense provide for dynamic imports?",
    options: [
      "It provides a way to handle loading states for dynamically imported components",
      "It manages component state",
      "It handles side effects",
      "It creates context",
    ],
    correctAnswer:
      "It provides a way to handle loading states for dynamically imported components",
    explanation:
      "React.Suspense provides a way to handle loading states for components that are dynamically imported using React.lazy(). It allows you to show a fallback UI while the component is loading.",
  },
  {
    question: "How can you handle errors in a React application?",
    options: [
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using useReducer() hook",
    ],
    correctAnswer:
      "By using error boundaries with componentDidCatch() and getDerivedStateFromError()",
    explanation:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI. They use componentDidCatch() and getDerivedStateFromError() methods to handle errors.",
  },
  {
    question: "What is the purpose of useMemo() hook?",
    options: [
      "To memoize the result of expensive calculations and avoid unnecessary re-computations",
      "To manage component state",
      "To handle side effects",
      "To access context values",
    ],
    correctAnswer:
      "To memoize the result of expensive calculations and avoid unnecessary re-computations",
    explanation:
      "useMemo() is used to memoize the result of expensive calculations, ensuring that they are not recomputed on every render unless their dependencies change, which helps optimize performance.",
  },
  {
    question: "How can you manage complex state logic with hooks in React?",
    options: [
      "By using useReducer() hook",
      "By using useState() hook",
      "By using context API",
      "By using refs",
    ],
    correctAnswer: "By using useReducer() hook",
    explanation:
      "The useReducer() hook is useful for managing complex state logic in React components, as it allows you to manage state transitions using a reducer function, similar to how Redux works.",
  },
  {
    question: "What is useRef() used for in React?",
    options: [
      "To persist values across renders without causing re-renders",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    correctAnswer:
      "To persist values across renders without causing re-renders",
    explanation:
      "useRef() is used to persist values across renders without causing re-renders. It is often used for accessing and interacting with DOM elements or storing mutable values.",
  },
  {
    question: "How do you handle asynchronous operations in React?",
    options: [
      "By using useEffect() hook with async/await syntax",
      "By using Promise directly in components",
      "By using setTimeout() inside components",
      "By using useState() hook",
    ],
    correctAnswer: "By using useEffect() hook with async/await syntax",
    explanation:
      "Asynchronous operations in React are typically handled within the useEffect() hook using async/await syntax to ensure that side effects, such as data fetching, are managed properly.",
  },
  {
    question: "What does React.StrictMode do?",
    options: [
      "It activates additional checks and warnings for potential problems in the application",
      "It optimizes performance",
      "It manages state",
      "It defines routes",
    ],
    correctAnswer:
      "It activates additional checks and warnings for potential problems in the application",
    explanation:
      "React.StrictMode is a development tool that activates additional checks and warnings to help identify potential problems in an application, such as deprecated practices and unsafe lifecycle methods.",
  },
  {
    question: "What is the purpose of useLayoutEffect() hook?",
    options: [
      "To perform DOM measurements and updates before the browser paints",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To perform DOM measurements and updates before the browser paints",
    explanation:
      "useLayoutEffect() is used to perform DOM measurements and updates before the browser paints, which ensures that changes are applied synchronously and avoids visual inconsistencies.",
  },
  {
    question: "How can you prevent unnecessary re-renders of a component?",
    options: [
      "By using React.memo() for functional components and PureComponent for class components",
      "By using useEffect() hook",
      "By using useState() hook",
      "By using context API",
    ],
    correctAnswer:
      "By using React.memo() for functional components and PureComponent for class components",
    explanation:
      "To prevent unnecessary re-renders, you can use React.memo() for functional components and PureComponent for class components. Both techniques help in optimizing performance by avoiding re-renders when props or state haven't changed.",
  },
  {
    question: "What is the use of useCallback() hook in React?",
    options: [
      "To memoize callback functions to avoid re-creating them on every render",
      "To handle side effects",
      "To manage component state",
      "To create context",
    ],
    correctAnswer:
      "To memoize callback functions to avoid re-creating them on every render",
    explanation:
      "The useCallback() hook helps to memoize callback functions, so they are not recreated on every render. This prevents unnecessary re-renders of child components that rely on these callbacks.",
  },
  {
    question: "How do you implement code splitting in React applications?",
    options: [
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
      "By using import() syntax",
      "By using useMemo() for optimization",
      "By using useState() hook",
    ],
    correctAnswer:
      "By using React.lazy() for dynamic imports and Suspense for fallback UI",
    explanation:
      "Code splitting in React applications can be achieved using React.lazy() to dynamically import components and Suspense to show a fallback UI while the component is being loaded.",
  },
  {
    question: "What is the role of useContext() hook in React?",
    options: [
      "To access context values created with React.createContext()",
      "To manage component state",
      "To handle side effects",
      "To create a new context",
    ],
    correctAnswer:
      "To access context values created with React.createContext()",
    explanation:
      "The useContext() hook allows you to access values from a context created with React.createContext(). It simplifies the process of consuming context values in functional components.",
  },
];
