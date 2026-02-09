export const test9 = [
  {
    question:
      "How do you create a CSS rule that only affects elements that are not the last child within a parent container?",
    options: [
      ":not(:last-child)",
      ":nth-last-child(n+1)",
      ":last-of-type ~ *",
      ":not(:nth-last-child(1))",
    ],
    correctAnswer: ":not(:last-child)",
    explanation:
      "The :not(:last-child) selector applies styles to all elements except the last child of a parent element.",
  },
  {
    question:
      "Which property is used to control the layout of items in a CSS Grid container with named lines?",
    options: [
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "grid-template-lines",
    ],
    correctAnswer: "grid-template-areas",
    explanation:
      "The grid-template-areas property defines named areas within the grid container to control the layout of items.",
  },
  {
    question:
      "How do you set a CSS rule to ensure that an element’s content is displayed as a flex container?",
    options: [
      "Using display: flex",
      "Applying display: grid",
      "Setting display: inline",
      "Using display: block",
    ],
    correctAnswer: "Using display: flex",
    explanation:
      "The display: flex property ensures that an element’s content is displayed as a flex container, enabling Flexbox layout.",
  },
  {
    question:
      "Which property allows you to adjust the alignment of grid items within a CSS Grid container?",
    options: ["align-items", "justify-items", "grid-align", "justify-content"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property adjusts the alignment of grid items within a CSS Grid container.",
  },
  {
    question:
      "How do you ensure that an element is positioned relative to its closest positioned ancestor?",
    options: [
      "Using position: relative",
      "Applying position: absolute",
      "Setting position: fixed",
      "Using position: sticky",
    ],
    correctAnswer: "Using position: relative",
    explanation:
      "The position: relative property ensures that an element is positioned relative to its closest positioned ancestor.",
  },
  {
    question:
      "What does the flex-direction: column-reverse property do in Flexbox?",
    options: [
      "Stacks flex items vertically in reverse order",
      "Aligns flex items horizontally in reverse order",
      "Sets flex items to be displayed as columns",
      "Aligns flex items from top to bottom",
    ],
    correctAnswer: "Stacks flex items vertically in reverse order",
    explanation:
      "The flex-direction: column-reverse property stacks flex items vertically but in reverse order.",
  },
  {
    question:
      "Which property is used to control the size of the grid container’s rows in CSS Grid Layout?",
    options: ["grid-template-rows", "row-size", "grid-rows", "row-template"],
    correctAnswer: "grid-template-rows",
    explanation:
      "The grid-template-rows property specifies the size of each row in a CSS Grid Layout.",
  },
  {
    question:
      "How do you create a CSS rule that applies styles only when an element is active?",
    options: [
      "Using :active pseudo-class",
      "Applying :focus pseudo-class",
      "Using :hover pseudo-class",
      "Setting :visited pseudo-class",
    ],
    correctAnswer: "Using :active pseudo-class",
    explanation:
      "The :active pseudo-class applies styles to an element when it is being activated by the user.",
  },
  {
    question:
      "Which property is used to control the size of the grid container’s columns in CSS Grid Layout?",
    options: [
      "grid-template-columns",
      "column-size",
      "grid-columns",
      "column-template",
    ],
    correctAnswer: "grid-template-columns",
    explanation:
      "The grid-template-columns property defines the size of each column in a CSS Grid Layout.",
  },
  {
    question: "How do you set a fixed width and height for an element in CSS?",
    options: [
      "Using width and height properties with fixed values",
      "Setting max-width and max-height properties",
      "Applying flex-basis with fixed sizes",
      "Using min-width and min-height properties",
    ],
    correctAnswer: "Using width and height properties with fixed values",
    explanation:
      "To set a fixed width and height, use the width and height properties with specific values.",
  },
  {
    question:
      "What does the grid-auto-flow property control in CSS Grid Layout?",
    options: [
      "Determines how grid items are placed in the grid container",
      "Sets the size of automatically placed grid items",
      "Adjusts the alignment of grid items",
      "Defines the flow of grid lines",
    ],
    correctAnswer: "Determines how grid items are placed in the grid container",
    explanation:
      "The grid-auto-flow property controls the placement of grid items when their position is not explicitly set.",
  },
  {
    question:
      "How do you create a layout where items are centered horizontally and vertically using CSS Grid Layout?",
    options: [
      "Using justify-content: center and align-items: center",
      "Applying grid-template-areas with central positioning",
      "Using margin: auto with grid item",
      "Setting align-content: center and justify-content: center",
    ],
    correctAnswer: "Using justify-content: center and align-items: center",
    explanation:
      "To center items horizontally and vertically in CSS Grid Layout, use justify-content: center and align-items: center.",
  },
  {
    question:
      "Which property is used to set the background color of an element with transparency?",
    options: [
      "background-color with rgba values",
      "background-opacity",
      "color with alpha values",
      "background-filter",
    ],
    correctAnswer: "background-color with rgba values",
    explanation:
      "Use the background-color property with rgba values to set a background color with transparency.",
  },
  {
    question:
      "How do you hide an element but still leave its space in the layout?",
    options: [
      "Using visibility: hidden",
      "Applying display: none",
      "Setting opacity: 0",
      "Using position: absolute with top: -9999px",
    ],
    correctAnswer: "Using visibility: hidden",
    explanation:
      "The visibility: hidden property hides an element but keeps its space in the layout.",
  },
  {
    question: "What does the overflow-x property control in CSS?",
    options: [
      "The horizontal overflow of an element’s content",
      "The vertical overflow of an element’s content",
      "The overflow behavior of child elements",
      "The scrolling behavior of an element",
    ],
    correctAnswer: "The horizontal overflow of an element’s content",
    explanation:
      "The overflow-x property controls the horizontal overflow of an element's content.",
  },
  {
    question:
      "How do you create a CSS rule that applies styles only to elements of a specific type within a parent?",
    options: [
      "Using :nth-of-type()",
      "Applying :first-of-type",
      "Using :last-of-type",
      "Setting :nth-child()",
    ],
    correctAnswer: "Using :nth-of-type()",
    explanation:
      "The :nth-of-type() selector targets elements of a specific type within their parent.",
  },
  {
    question:
      "Which property is used to set the width of the gap between grid items in CSS Grid Layout?",
    options: ["gap", "grid-gap", "grid-item-gap", "column-gap"],
    correctAnswer: "gap",
    explanation:
      "The gap property sets the width of the gap between grid items in CSS Grid Layout.",
  },
  {
    question:
      "How do you make an element scrollable while its content overflows the container?",
    options: [
      "Using overflow: scroll",
      "Applying overflow: hidden",
      "Setting overflow: visible",
      "Using overflow: auto",
    ],
    correctAnswer: "Using overflow: scroll",
    explanation:
      "The overflow: scroll property makes an element scrollable when its content overflows.",
  },
  {
    question: "What does the align-content property do in Flexbox?",
    options: [
      "Aligns flex lines within the flex container",
      "Aligns individual flex items",
      "Sets the alignment of items on the cross axis",
      "Aligns items along the main axis",
    ],
    correctAnswer: "Aligns flex lines within the flex container",
    explanation:
      "The align-content property aligns flex lines within the flex container when there is extra space.",
  },
  {
    question:
      "How do you create a CSS rule that targets all odd elements within a parent?",
    options: [
      "Using :nth-child(odd)",
      "Applying :nth-of-type(odd)",
      "Setting :first-of-type with a counter",
      "Using :last-child(odd)",
    ],
    correctAnswer: "Using :nth-child(odd)",
    explanation:
      "The :nth-child(odd) selector targets all odd elements within a parent container.",
  },
];
