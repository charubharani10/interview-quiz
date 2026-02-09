export const test1 = [
  {
    question: "What is React?",
    options: [
      "A JavaScript framework",
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A backend framework",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
    explanation:
      "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "JavaScript Extra",
      "JavaScript HTML",
    ],
    correctAnswer: "JavaScript XML",
    explanation:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code in React.",
  },
  {
    question: "How do you create a React component?",
    options: [
      "By defining a class that extends React.Component",
      "By using a function that returns JSX",
      "By using React.createElement()",
      "Both a and b",
    ],
    correctAnswer: "Both a and b",
    explanation:
      "You can create a React component either by defining a class that extends React.Component or by using a function that returns JSX.",
  },
  {
    question: "What is the purpose of render() in a React component?",
    options: [
      "To update the component's state",
      "To define what the component should display",
      "To handle user events",
      "To manage the component's lifecycle",
    ],
    correctAnswer: "To define what the component should display",
    explanation:
      "The render() method in a React component defines what the UI should look like by returning JSX.",
  },
  {
    question: "How do you pass data to a React component?",
    options: ["Using props", "Using state", "Using context", "Using hooks"],
    correctAnswer: "Using props",
    explanation:
      "In React, data is passed to components using props (short for properties).",
  },
  {
    question: "What is the purpose of state in a React component?",
    options: [
      "To store data that affects the rendering of the component",
      "To manage component lifecycle",
      "To handle user events",
      "To pass data between components",
    ],
    correctAnswer: "To store data that affects the rendering of the component",
    explanation:
      "State is used to store data that affects how a component renders and behaves.",
  },
  {
    question: "How do you update the state in a React component?",
    options: [
      "Using this.setState()",
      "Directly modifying the state object",
      "Using this.updateState()",
      "Using this.replaceState()",
    ],
    correctAnswer: "Using this.setState()",
    explanation:
      "You update the state in a React component using the setState() method, which ensures the component re-renders with the new state.",
  },
  {
    question: "What is the function of componentDidMount() in React?",
    options: [
      "It is called before the component is rendered",
      "It is called after the component has been rendered to the DOM",
      "It is called when the component receives new props",
      "It is called before the component unmounts",
    ],
    correctAnswer:
      "It is called after the component has been rendered to the DOM",
    explanation:
      "The componentDidMount() lifecycle method is called after a component has been rendered to the DOM, often used for initial data fetching.",
  },
  {
    question: "How do you handle events in React?",
    options: [
      "By using event handlers passed as props",
      "By defining event handlers inside the component",
      "By using inline event handlers in JSX",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "In React, you can handle events using event handlers passed as props, defined inside the component, or inline event handlers in JSX.",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the actual DOM",
      "A new DOM element created for every component",
      "A method for creating new React components",
      "A way to directly manipulate the browser's DOM",
    ],
    correctAnswer: "A lightweight copy of the actual DOM",
    explanation:
      "The virtual DOM is a lightweight representation of the actual DOM that React uses to optimize updates and rendering.",
  },
  {
    question: "How do you conditionally render elements in React?",
    options: [
      "Using if statements inside the render method",
      "Using ternary operators in JSX",
      "Using logical && operator in JSX",
      "Both b and c",
    ],
    correctAnswer: "Both b and c",
    explanation:
      "You can conditionally render elements in React using ternary operators or logical && operators in JSX.",
  },
  {
    question: "What is the purpose of key in React lists?",
    options: [
      "To uniquely identify elements in a list",
      "To handle user events in lists",
      "To control the component's lifecycle",
      "To manage component state",
    ],
    correctAnswer: "To uniquely identify elements in a list",
    explanation:
      "The key prop is used in React lists to uniquely identify elements and help React efficiently update and render lists.",
  },
  {
    question: "How do you handle forms in React?",
    options: [
      "By using controlled components",
      "By using uncontrolled components",
      "By directly manipulating the DOM",
      "By using third-party libraries",
    ],
    correctAnswer: "By using controlled components",
    explanation:
      "Forms in React are typically handled using controlled components, where form data is managed by the component's state.",
  },
  {
    question: "What is a controlled component in React?",
    options: [
      "A component where form data is handled by the component's state",
      "A component that directly manipulates the DOM",
      "A component that does not use state",
      "A component that handles its own form data using refs",
    ],
    correctAnswer:
      "A component where form data is handled by the component's state",
    explanation:
      "A controlled component in React is one where form data is controlled by the component's state, allowing for better management and validation.",
  },
  {
    question: "How do you use props in a React component?",
    options: [
      "By accessing this.props in class components",
      "By accessing props directly in functional components",
      "By passing props as arguments to the component",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Props can be used in React components by accessing this.props in class components, directly in functional components, or passing them as arguments.",
  },
  {
    question: "What is a React hook?",
    options: [
      "A function that lets you use state and other React features in functional components",
      "A class method used for lifecycle management",
      "A way to handle routing in React",
      "A utility function for managing props",
    ],
    correctAnswer:
      "A function that lets you use state and other React features in functional components",
    explanation:
      "React hooks are functions that allow you to use state and other React features within functional components.",
  },
  {
    question: "What does useState() do in a functional component?",
    options: [
      "It manages the state of the component",
      "It handles component lifecycle",
      "It controls routing in the application",
      "It provides access to context values",
    ],
    correctAnswer: "It manages the state of the component",
    explanation:
      "The useState() hook in React allows you to add state to functional components, managing and updating the component's state.",
  },
  {
    question: "How do you use useEffect() in React?",
    options: [
      "To perform side effects in functional components",
      "To manage state in functional components",
      "To define routes in the application",
      "To handle events in functional components",
    ],
    correctAnswer: "To perform side effects in functional components",
    explanation:
      "The useEffect() hook is used in React functional components to perform side effects, such as data fetching or manipulating the DOM.",
  },
  {
    question: "What is the purpose of the useContext() hook in React?",
    options: [
      "To access context values in functional components",
      "To manage component state",
      "To handle component lifecycle",
      "To perform side effects",
    ],
    correctAnswer: "To access context values in functional components",
    explanation:
      "The useContext() hook allows you to access context values in functional components, enabling you to share data without passing props manually.",
  },
  {
    question: "What is a higher-order component (HOC) in React?",
    options: [
      "A function that takes a component and returns a new component with additional props",
      "A component that manages routing",
      "A component that performs side effects",
      "A method for creating forms",
    ],
    correctAnswer:
      "A function that takes a component and returns a new component with additional props",
    explanation:
      "A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or functionality.",
  },
];
