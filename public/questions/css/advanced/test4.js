export const test4 = [
  {
    question:
      "Which property is used to create a layout with rows and columns in Flexbox?",
    options: [
      "flex-direction",
      "flex-flow",
      "display: grid",
      "grid-template-rows",
    ],
    correctAnswer: "flex-direction",
    explanation:
      "The flex-direction property specifies the direction of the flex items in a flex container, which determines the layout as rows or columns.",
  },
  {
    question: "What is the effect of the text-align property in CSS?",
    options: [
      "Aligns text within its containing element",
      "Sets the alignment of block-level elements",
      "Adjusts the space between text characters",
      "Defines the font size of text",
    ],
    correctAnswer: "Aligns text within its containing element",
    explanation:
      "The text-align property aligns the text within its containing element, such as left, center, or right alignment.",
  },
  {
    question: "How do you specify a background image in CSS?",
    options: [
      "background-image: url('image.jpg')",
      "background: image('image.jpg')",
      "image-background: url('image.jpg')",
      "background-url: 'image.jpg'",
    ],
    correctAnswer: "background-image: url('image.jpg')",
    explanation:
      "To specify a background image, you use the background-image property with the url() function.",
  },
  {
    question:
      "Which property is used to define the size of the gaps between grid items in a CSS Grid Layout?",
    options: ["gap", "grid-gap", "item-gap", "spacing"],
    correctAnswer: "grid-gap",
    explanation:
      "The grid-gap property (now simply 'gap') defines the size of the gaps between grid items in a CSS Grid Layout.",
  },
  {
    question:
      "How do you specify a flex container that aligns its items to the center both vertically and horizontally?",
    options: [
      "Using align-items: center and justify-content: center",
      "Using align-content: center and justify-items: center",
      "Using align-self: center and justify-self: center",
      "Using flex-direction: row and flex-wrap: wrap",
    ],
    correctAnswer: "Using align-items: center and justify-content: center",
    explanation:
      "The align-items: center and justify-content: center properties align flex items to the center both vertically and horizontally within the flex container.",
  },
  {
    question:
      "Which CSS property is used to control the number of decimal places displayed in a number?",
    options: ["number-format", "decimal-places", "format", "text-align"],
    correctAnswer: "number-format",
    explanation:
      "The number-format property is not valid in CSS; use JavaScript or other methods to control decimal places. This question might need correction.",
  },
  {
    question: "What is the purpose of the box-sizing property in CSS?",
    options: [
      "Adjusts how the width and height of an element are calculated",
      "Defines the size of the box-shadow",
      "Controls the sizing of the element’s border",
      "Sets the alignment of the element’s content",
    ],
    correctAnswer:
      "Adjusts how the width and height of an element are calculated",
    explanation:
      "The box-sizing property changes how the width and height of an element are calculated, including or excluding padding and borders.",
  },
  {
    question:
      "How do you apply a CSS grid layout to a container with multiple rows and columns?",
    options: [
      "Define grid-template-rows and grid-template-columns",
      "Set grid-rows and grid-columns",
      "Use grid-areas with grid-template",
      "Apply grid-gap for spacing",
    ],
    correctAnswer: "Define grid-template-rows and grid-template-columns",
    explanation:
      "The grid-template-rows and grid-template-columns properties define the size and number of rows and columns in a CSS Grid Layout.",
  },
  {
    question:
      "Which CSS property allows you to create a shadow effect for text?",
    options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    correctAnswer: "text-shadow",
    explanation:
      "The text-shadow property adds a shadow effect to text, allowing you to create a variety of visual effects.",
  },
  {
    question: "What does the flex-basis property define in a Flexbox layout?",
    options: [
      "The initial size of a flex item before any available space is distributed",
      "The maximum size a flex item can grow to",
      "The minimum size a flex item can shrink to",
      "The alignment of a flex item within the container",
    ],
    correctAnswer:
      "The initial size of a flex item before any available space is distributed",
    explanation:
      "The flex-basis property specifies the initial size of a flex item before space is distributed according to flex-grow or flex-shrink properties.",
  },
  {
    question:
      "How do you ensure that an element takes up the available space within a flex container?",
    options: [
      "Using flex: 1",
      "Using flex-grow: 1",
      "Using flex-basis: auto",
      "Using width: 100%",
    ],
    correctAnswer: "Using flex: 1",
    explanation:
      "The flex: 1 shorthand property makes an element take up the available space within a flex container by setting both flex-grow and flex-basis.",
  },
  {
    question: "Which CSS property is used to create a flexible box layout?",
    options: [
      "display: flex",
      "display: grid",
      "display: box",
      "display: inline-flex",
    ],
    correctAnswer: "display: flex",
    explanation:
      "The display: flex property creates a flexible box layout, allowing you to design complex layouts with ease.",
  },
  {
    question:
      "How do you adjust the size of an element’s content while keeping the element’s box size constant?",
    options: [
      "Using transform: scale()",
      "Using resize property",
      "Using min-width and max-width",
      "Using box-sizing: border-box",
    ],
    correctAnswer: "Using transform: scale()",
    explanation:
      "The transform: scale() property adjusts the size of an element’s content while keeping the element’s box size constant.",
  },
  {
    question: "What does the align-self property do in a Flexbox layout?",
    options: [
      "Overrides the align-items property for individual flex items",
      "Sets the alignment of all flex items",
      "Defines the order of flex items",
      "Sets the size of individual flex items",
    ],
    correctAnswer:
      "Overrides the align-items property for individual flex items",
    explanation:
      "The align-self property allows you to override the align-items property for individual flex items, setting their alignment independently.",
  },
  {
    question:
      "Which CSS property allows you to create a responsive layout by defining a flexible number of columns?",
    options: [
      "grid-template-columns",
      "column-count",
      "flex-wrap",
      "display: grid",
    ],
    correctAnswer: "column-count",
    explanation:
      "The column-count property defines the number of columns in a multi-column layout, allowing for responsive design.",
  },
  {
    question:
      "How do you create a responsive navigation menu with CSS Flexbox?",
    options: [
      "Use display: flex and set flex-direction: row or column as needed",
      "Apply display: block to menu items",
      "Use float for menu items",
      "Set display: grid with multiple columns",
    ],
    correctAnswer:
      "Use display: flex and set flex-direction: row or column as needed",
    explanation:
      "Using display: flex with appropriate flex-direction allows you to create a responsive navigation menu that adjusts layout as needed.",
  },
  {
    question: "What is the effect of the position: sticky property in CSS?",
    options: [
      "The element is positioned relative to its nearest scrolling ancestor and sticks within a defined boundary",
      "The element is positioned absolutely within the viewport",
      "The element scrolls with the page but remains fixed at the top",
      "The element is positioned relative to the viewport",
    ],
    correctAnswer:
      "The element is positioned relative to its nearest scrolling ancestor and sticks within a defined boundary",
    explanation:
      "The position: sticky property allows an element to stick within a defined boundary as the page scrolls, relative to its nearest scrolling ancestor.",
  },
  {
    question:
      "Which CSS property is used to control the alignment of items along the main axis in Flexbox?",
    options: ["justify-content", "align-items", "align-content", "flex-align"],
    correctAnswer: "justify-content",
    explanation:
      "The justify-content property controls the alignment of flex items along the main axis of the flex container.",
  },
  {
    question:
      "How do you apply a different style to an element when it is hovered over with the mouse?",
    options: [
      "Using the :hover pseudo-class",
      "Using the :focus pseudo-class",
      "Using the :active pseudo-class",
      "Using the :visited pseudo-class",
    ],
    correctAnswer: "Using the :hover pseudo-class",
    explanation:
      "The :hover pseudo-class allows you to apply styles to an element when the mouse is over it.",
  },
  {
    question: "What is the effect of the overflow: auto property in CSS?",
    options: [
      "Adds scrollbars to an element if its content overflows",
      "Hides any overflowing content",
      "Clips the overflowing content",
      "Adjusts the position of the element",
    ],
    correctAnswer: "Adds scrollbars to an element if its content overflows",
    explanation:
      "The overflow: auto property adds scrollbars to an element if its content exceeds its bounds.",
  },
];
