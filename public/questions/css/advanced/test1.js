export const test1 = [
  {
    question: "What does the will-change property do in CSS?",
    options: [
      "Specifies which properties will change in the future",
      "Optimizes rendering by hinting which properties will change",
      "Applies changes to an element's style dynamically",
      "Controls the change of element dimensions",
    ],
    correctAnswer:
      "Optimizes rendering by hinting which properties will change",
    explanation:
      "The will-change property provides a hint to the browser about which properties are expected to change, helping it optimize performance by preparing for those changes.",
  },
  {
    question:
      "Which property in CSS Grid Layout is used to define the size of columns and rows?",
    options: [
      "grid-template-columns and grid-template-rows",
      "grid-columns and grid-rows",
      "grid-size-columns and grid-size-rows",
      "column-width and row-height",
    ],
    correctAnswer: "grid-template-columns and grid-template-rows",
    explanation:
      "The grid-template-columns and grid-template-rows properties define the size of columns and rows in CSS Grid Layout.",
  },
  {
    question: "What does the clamp() function do in CSS?",
    options: [
      "Limits the value of a CSS property between a minimum and maximum value",
      "Combines multiple CSS property values",
      "Controls the transition of a CSS property",
      "Adjusts the size of an element based on viewport",
    ],
    correctAnswer:
      "Limits the value of a CSS property between a minimum and maximum value",
    explanation:
      "The clamp() function sets a value that is constrained between a defined minimum and maximum value, making it useful for responsive design.",
  },
  {
    question:
      "How do you create a responsive grid with different column spans using CSS Grid Layout?",
    options: [
      "By using grid-column and grid-row properties",
      "By setting grid-template-areas",
      "By adjusting column-span and row-span properties",
      "By using media queries to change grid-template-columns",
    ],
    correctAnswer: "By using grid-column and grid-row properties",
    explanation:
      "The grid-column and grid-row properties can be used to specify the span of grid items, allowing for responsive layouts.",
  },
  {
    question:
      "Which property is used to create a CSS Grid Layout that responds to different screen sizes?",
    options: [
      "grid-template-columns with media queries",
      "grid-template-areas with media queries",
      "grid-template-rows with media queries",
      "grid-auto-columns with media queries",
    ],
    correctAnswer: "grid-template-columns with media queries",
    explanation:
      "Using grid-template-columns with media queries allows you to adjust the grid layout based on different screen sizes.",
  },
  {
    question:
      "What does the content property in the ::before and ::after pseudo-elements do?",
    options: [
      "Inserts content before or after an element’s content",
      "Sets the content of an element",
      "Creates new elements before or after an element",
      "Defines the display type of pseudo-elements",
    ],
    correctAnswer: "Inserts content before or after an element’s content",
    explanation:
      "The content property specifies what content is inserted before or after an element's actual content when using ::before and ::after pseudo-elements.",
  },
  {
    question:
      "Which CSS property can be used to create a fixed position element that remains in place even when the page is scrolled?",
    options: [
      "position: fixed",
      "position: absolute",
      "position: relative",
      "position: sticky",
    ],
    correctAnswer: "position: fixed",
    explanation:
      "The position: fixed property creates an element that stays in a fixed position relative to the viewport, even when the page is scrolled.",
  },
  {
    question: "What is the purpose of the z-index property in CSS?",
    options: [
      "Controls the stacking order of positioned elements",
      "Adjusts the transparency of an element",
      "Sets the size of an element",
      "Defines the font size of text",
    ],
    correctAnswer: "Controls the stacking order of positioned elements",
    explanation:
      "The z-index property determines the stacking order of positioned elements, with higher values appearing in front of lower values.",
  },
  {
    question:
      "How do you use CSS Custom Properties (CSS Variables) in a stylesheet?",
    options: [
      "Define with --variable-name and use with var(--variable-name)",
      "Define with variable-name and use with get(variable-name)",
      "Define with @variable-name and use with use(variable-name)",
      "Define with define variable-name and use with apply(variable-name)",
    ],
    correctAnswer:
      "Define with --variable-name and use with var(--variable-name)",
    explanation:
      "CSS Custom Properties (variables) are defined with --variable-name and used with the var(--variable-name) syntax.",
  },
  {
    question:
      "Which property is used to set the base size of the font in CSS for responsive text sizing?",
    options: [
      "font-size with relative units like em or rem",
      "font-scale",
      "text-size",
      "font-adjust",
    ],
    correctAnswer: "font-size with relative units like em or rem",
    explanation:
      "The font-size property with relative units such as em or rem allows for responsive text sizing that adapts to different screen sizes.",
  },
  {
    question:
      "How do you apply a CSS style to an element when it is hovered over?",
    options: [
      "Using the :hover pseudo-class",
      "Using the :active pseudo-class",
      "Using the :focus pseudo-class",
      "Using the :visited pseudo-class",
    ],
    correctAnswer: "Using the :hover pseudo-class",
    explanation:
      "The :hover pseudo-class applies styles to an element when the user hovers over it with the mouse.",
  },
  {
    question: "Which property is used to create a multi-column layout in CSS?",
    options: ["column-count", "columns", "multi-column", "column-layout"],
    correctAnswer: "column-count",
    explanation:
      "The column-count property specifies the number of columns in a multi-column layout.",
  },
  {
    question:
      "What is the purpose of the grid-template-areas property in CSS Grid Layout?",
    options: [
      "Defines a grid template by referencing names of grid areas",
      "Sets the size of grid items",
      "Creates grid gaps between rows and columns",
      "Defines the alignment of grid items",
    ],
    correctAnswer: "Defines a grid template by referencing names of grid areas",
    explanation:
      "The grid-template-areas property allows you to define a grid layout by naming the areas in the grid and specifying their placement.",
  },
  {
    question:
      "How do you create a flex container that wraps its items to the next line when there is not enough space?",
    options: [
      "Using flex-wrap: wrap",
      "Using flex-direction: row-reverse",
      "Using align-items: stretch",
      "Using justify-content: center",
    ],
    correctAnswer: "Using flex-wrap: wrap",
    explanation:
      "The flex-wrap: wrap property allows flex items to wrap onto multiple lines when there is not enough space in the container.",
  },
  {
    question:
      "Which CSS property is used to set the minimum width of an element?",
    options: ["min-width", "width-min", "minimum-width", "width-limit"],
    correctAnswer: "min-width",
    explanation:
      "The min-width property sets the minimum width that an element can be.",
  },
  {
    question: "How do you center an element horizontally using Flexbox?",
    options: [
      "justify-content: center",
      "align-items: center",
      "align-content: center",
      "justify-items: center",
    ],
    correctAnswer: "justify-content: center",
    explanation:
      "The justify-content: center property centers flex items horizontally within the flex container.",
  },
  {
    question:
      "Which property is used to control the size of an element's font relative to the viewport?",
    options: [
      "font-size: viewport-width",
      "font-size: vw",
      "font-size: vh",
      "font-size: vmin",
    ],
    correctAnswer: "font-size: vw",
    explanation:
      "The font-size property with the vw unit sets the font size relative to the viewport width.",
  },
  {
    question: "What is the purpose of the display: contents property in CSS?",
    options: [
      "Makes an element disappear from the layout but keeps its children visible",
      "Hides the contents of an element",
      "Makes an element behave like its children elements",
      "Displays the content of a pseudo-element",
    ],
    correctAnswer:
      "Makes an element disappear from the layout but keeps its children visible",
    explanation:
      "The display: contents property makes the element itself disappear from the layout, but its children remain visible and participate in the layout.",
  },
  {
    question:
      "Which CSS property controls the appearance of a box shadow on an element?",
    options: ["box-shadow", "shadow", "border-shadow", "text-shadow"],
    correctAnswer: "box-shadow",
    explanation:
      "The box-shadow property adds a shadow effect around an element's frame.",
  },
  {
    question:
      "How do you define a fixed-size container that will always remain the same size regardless of viewport changes?",
    options: [
      "Using width and height properties with fixed units like px",
      "Using flex-grow: 0 and flex-shrink: 0",
      "Using min-width and min-height properties",
      "Using max-width and max-height properties",
    ],
    correctAnswer: "Using width and height properties with fixed units like px",
    explanation:
      "The width and height properties with fixed units such as px ensure that the container remains the same size regardless of viewport changes.",
  },
];
