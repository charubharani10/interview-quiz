export const test2 = [
  {
    question: "What does the :nth-of-type(n) pseudo-class selector do in CSS?",
    options: [
      "Selects elements of a specific type that are the nth child of their parent",
      "Selects elements of a specific type based on their index in the parent",
      "Selects every nth element of a specific type",
      "Selects every element of a specific type after the nth child",
    ],
    correctAnswer:
      "Selects elements of a specific type that are the nth child of their parent",
    explanation:
      "The :nth-of-type(n) pseudo-class selects elements of a specific type that are the nth child of their parent element.",
  },
  {
    question:
      "Which property is used to control the size of the grid items in CSS Grid Layout?",
    options: [
      "grid-template-areas",
      "grid-item-size",
      "grid-template-columns",
      "grid-area",
    ],
    correctAnswer: "grid-area",
    explanation:
      "The grid-area property specifies the grid item's position and size within the grid.",
  },
  {
    question:
      "How do you control the alignment of items in a grid container along the block axis?",
    options: [
      "align-items",
      "justify-items",
      "align-content",
      "justify-content",
    ],
    correctAnswer: "align-items",
    explanation:
      "The align-items property controls the alignment of items along the block (vertical) axis in a grid container.",
  },
  {
    question: "What is the purpose of the transform property in CSS?",
    options: [
      "Allows you to apply 2D or 3D transformations to an element",
      "Adjusts the opacity of an element",
      "Changes the background of an element",
      "Modifies the font size of an element",
    ],
    correctAnswer: "Allows you to apply 2D or 3D transformations to an element",
    explanation:
      "The transform property enables you to apply various transformations such as rotate, scale, and translate to an element.",
  },
  {
    question:
      "Which CSS property can be used to adjust the spacing between lines of text?",
    options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
    correctAnswer: "line-height",
    explanation:
      "The line-height property adjusts the spacing between lines of text.",
  },
  {
    question:
      "How do you make an element responsive to changes in viewport size with CSS Grid Layout?",
    options: [
      "Using relative units like percentages for grid-template-columns",
      "Using absolute units like pixels for grid-template-columns",
      "Using grid-template-areas with fixed sizes",
      "Using flex-basis in Flexbox layout",
    ],
    correctAnswer:
      "Using relative units like percentages for grid-template-columns",
    explanation:
      "Using relative units such as percentages for grid-template-columns helps make the grid layout responsive to changes in viewport size.",
  },
  {
    question:
      "Which property is used to specify the space between flex items in a flex container?",
    options: ["gap", "item-spacing", "flex-gap", "space-between"],
    correctAnswer: "gap",
    explanation:
      "The gap property specifies the space between flex items in a flex container.",
  },
  {
    question:
      "How do you create a CSS Grid Layout that adapts to different screen sizes using media queries?",
    options: [
      "Define different grid-template-columns and grid-template-rows for various screen sizes",
      "Use display: flex for small screens",
      "Set width and height properties based on media queries",
      "Adjust font-size for different screen sizes",
    ],
    correctAnswer:
      "Define different grid-template-columns and grid-template-rows for various screen sizes",
    explanation:
      "To create a responsive grid layout, you can define different values for grid-template-columns and grid-template-rows in media queries for various screen sizes.",
  },
  {
    question:
      "Which CSS property is used to set the position of an element relative to its normal position?",
    options: [
      "position: relative",
      "position: absolute",
      "position: fixed",
      "position: static",
    ],
    correctAnswer: "position: relative",
    explanation:
      "The position: relative property positions an element relative to its normal position in the document flow.",
  },
  {
    question:
      "How do you create a CSS animation that changes the opacity of an element from 0 to 1 over 2 seconds?",
    options: [
      "Using @keyframes with opacity property and animation shorthand",
      "Using transition property with opacity",
      "Using animation property with opacity only",
      "Using @keyframes with visibility property",
    ],
    correctAnswer:
      "Using @keyframes with opacity property and animation shorthand",
    explanation:
      "To animate opacity from 0 to 1, you use @keyframes to define the opacity changes and the animation shorthand to apply it over 2 seconds.",
  },
  {
    question: "What is the purpose of the ::marker pseudo-element in CSS?",
    options: [
      "Styles the marker box of list items",
      "Adds content before a list item",
      "Styles the text of list items",
      "Inserts content after a list item",
    ],
    correctAnswer: "Styles the marker box of list items",
    explanation:
      "The ::marker pseudo-element styles the marker box (e.g., bullet or number) of list items.",
  },
  {
    question:
      "How do you apply CSS styles to an element that is the first child of its parent?",
    options: [
      "Using the :first-child pseudo-class",
      "Using the :nth-child(1) pseudo-class",
      "Using the :last-child pseudo-class",
      "Using the :nth-of-type(1) pseudo-class",
    ],
    correctAnswer: "Using the :first-child pseudo-class",
    explanation:
      "The :first-child pseudo-class selects the first child element of its parent.",
  },
  {
    question:
      "Which property is used to create a container with multiple columns?",
    options: ["column-count", "columns", "column-width", "column-layout"],
    correctAnswer: "columns",
    explanation:
      "The columns property is shorthand for setting the column-count and column-width properties to create a multi-column layout.",
  },
  {
    question: "What is the effect of the overflow: hidden property in CSS?",
    options: [
      "Clips the content that overflows the element's box",
      "Allows overflowed content to be visible",
      "Adds scrollbars to the element's box",
      "Adjusts the position of the element",
    ],
    correctAnswer: "Clips the content that overflows the element's box",
    explanation:
      "The overflow: hidden property clips any content that overflows the element's box, hiding it from view.",
  },
  {
    question: "How do you apply a gradient background using CSS?",
    options: [
      "Using background: linear-gradient() or background: radial-gradient()",
      "Using background-image: gradient()",
      "Using background-color: gradient()",
      "Using gradient-background: linear()",
    ],
    correctAnswer:
      "Using background: linear-gradient() or background: radial-gradient()",
    explanation:
      "To apply a gradient background, use the background property with linear-gradient() or radial-gradient() functions.",
  },
  {
    question:
      "Which property is used to control the number of columns an element spans in a CSS Grid Layout?",
    options: ["grid-column", "column-span", "span-columns", "column-span"],
    correctAnswer: "grid-column",
    explanation:
      "The grid-column property controls how many columns an element should span in a CSS Grid Layout.",
  },
  {
    question:
      "How do you make a flex item grow to fill available space in a flex container?",
    options: [
      "Using flex-grow: 1",
      "Using flex-shrink: 1",
      "Using flex-basis: 100%",
      "Using flex: auto",
    ],
    correctAnswer: "Using flex-grow: 1",
    explanation:
      "The flex-grow: 1 property allows a flex item to grow and fill available space within the flex container.",
  },
  {
    question: "What does the object-fit property do in CSS?",
    options: [
      "Defines how an element's content should fit within its container",
      "Adjusts the size of an element",
      "Positions an element within its container",
      "Defines the shape of an element",
    ],
    correctAnswer:
      "Defines how an element's content should fit within its container",
    explanation:
      "The object-fit property specifies how the content of an element should fit within its container.",
  },
  {
    question: "How do you use the :nth-child() pseudo-class in CSS?",
    options: [
      "To select elements based on their index among siblings",
      "To select elements based on their type",
      "To select every nth element of a type",
      "To select the first or last child of a parent",
    ],
    correctAnswer: "To select elements based on their index among siblings",
    explanation:
      "The :nth-child() pseudo-class selects elements based on their index among siblings, allowing for more specific targeting.",
  },
  {
    question:
      "Which property is used to define the size of an element's grid item in CSS Grid Layout?",
    options: [
      "grid-area",
      "grid-item-size",
      "grid-template-areas",
      "grid-size",
    ],
    correctAnswer: "grid-area",
    explanation:
      "The grid-area property defines the size and position of a grid item within the grid layout.",
  },
];
