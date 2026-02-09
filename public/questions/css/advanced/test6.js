export const test6 = [
  {
    question: "What is the effect of the backface-visibility property in CSS?",
    options: [
      "Defines whether the back face of an element is visible when turned",
      "Controls the visibility of the front face of an element",
      "Sets the background color of an element",
      "Adjusts the opacity of an element",
    ],
    correctAnswer:
      "Defines whether the back face of an element is visible when turned",
    explanation:
      "The backface-visibility property defines whether the back face of an element is visible when it is turned, such as in a 3D transformation.",
  },
  {
    question:
      "How do you create a fixed-size flex item within a flex container?",
    options: [
      "Using flex: 0 0 fixed-size",
      "Using flex-grow: 0 and flex-basis: fixed-size",
      "Setting width and height properties",
      "Using flex-shrink: 0 and flex-basis: fixed-size",
    ],
    correctAnswer: "Using flex: 0 0 fixed-size",
    explanation:
      "The flex: 0 0 fixed-size property creates a fixed-size flex item by setting flex-grow and flex-shrink to 0 and specifying a fixed size.",
  },
  {
    question:
      "Which property is used to control the size of an element's content box?",
    options: ["box-sizing", "box-sizing-content", "content-box", "size-box"],
    correctAnswer: "box-sizing",
    explanation:
      "The box-sizing property controls how the size of an element's content box is calculated, including or excluding padding and borders.",
  },
  {
    question: "How do you create a circular shape using CSS?",
    options: [
      "Using border-radius: 50%",
      "Setting width and height to equal values with border-radius: 100%",
      "Using clip-path: circle()",
      "Applying border-radius: circle()",
    ],
    correctAnswer: "Using border-radius: 50%",
    explanation:
      "To create a circular shape, you use border-radius: 50% along with equal width and height to form a circle.",
  },
  {
    question: "What does the overflow: visible property do in CSS?",
    options: [
      "Allows content to overflow its container and be visible outside the container",
      "Clips content that overflows its container",
      "Adds scrollbars to the container",
      "Hides any overflowing content",
    ],
    correctAnswer:
      "Allows content to overflow its container and be visible outside the container",
    explanation:
      "The overflow: visible property allows content to overflow its container and be visible outside the container, rather than clipping it or adding scrollbars.",
  },
  {
    question:
      "How do you create a grid layout with fixed column widths in CSS Grid Layout?",
    options: [
      "Using grid-template-columns with fixed sizes",
      "Setting column-width property",
      "Using flex-basis for columns",
      "Applying width to grid items",
    ],
    correctAnswer: "Using grid-template-columns with fixed sizes",
    explanation:
      "The grid-template-columns property allows you to specify fixed sizes for columns in a CSS Grid Layout.",
  },
  {
    question:
      "Which property is used to set the spacing between rows in CSS Grid Layout?",
    options: ["grid-row-gap", "row-gap", "grid-gap", "gap"],
    correctAnswer: "grid-row-gap",
    explanation:
      "The grid-row-gap property sets the spacing between rows in a CSS Grid Layout.",
  },
  {
    question:
      "How do you center an element horizontally within its container using Flexbox?",
    options: [
      "Using justify-content: center",
      "Using align-items: center",
      "Using align-content: center",
      "Using text-align: center",
    ],
    correctAnswer: "Using justify-content: center",
    explanation:
      "The justify-content: center property centers flex items horizontally within their container in Flexbox.",
  },
  {
    question: "What is the purpose of the filter property in CSS?",
    options: [
      "Applies graphical effects like blur or brightness to an element",
      "Controls the color of an element",
      "Adjusts the opacity of an element",
      "Sets the visibility of an element",
    ],
    correctAnswer:
      "Applies graphical effects like blur or brightness to an element",
    explanation:
      "The filter property applies graphical effects such as blur, brightness, and contrast to an element.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class only if they are also within a specific element?",
    options: [
      "ancestor .class",
      "ancestor > .class",
      "ancestor .class descendant",
      "ancestor.class",
    ],
    correctAnswer: "ancestor .class",
    explanation:
      "The selector ancestor .class applies styles to elements with the class .class that are descendants of the ancestor element.",
  },
  {
    question:
      "Which CSS property is used to adjust the space between individual letters in text?",
    options: ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"],
    correctAnswer: "letter-spacing",
    explanation:
      "The letter-spacing property adjusts the space between individual letters in text.",
  },
  {
    question:
      "How do you apply a filter effect like grayscale to an image using CSS?",
    options: [
      "Using filter: grayscale()",
      "Using image-filter: grayscale()",
      "Applying opacity with filter",
      "Using color: grayscale()",
    ],
    correctAnswer: "Using filter: grayscale()",
    explanation:
      "The filter: grayscale() property applies a grayscale effect to an image, making it appear in shades of gray.",
  },
  {
    question:
      "Which property allows you to set a maximum height for an element's content?",
    options: ["max-height", "height-limit", "max-size", "content-height"],
    correctAnswer: "max-height",
    explanation:
      "The max-height property sets the maximum height for an element's content, ensuring it does not exceed the specified value.",
  },
  {
    question: "What does the display: inline-block property do?",
    options: [
      "Allows an element to flow inline but with block-level box characteristics",
      "Sets an element to be displayed as a block element",
      "Displays an element as inline but with fixed width",
      "Makes an element behave like an inline element with no block properties",
    ],
    correctAnswer:
      "Allows an element to flow inline but with block-level box characteristics",
    explanation:
      "The display: inline-block property allows an element to flow inline within text but maintains block-level characteristics such as width and height.",
  },
  {
    question:
      "How do you create a responsive layout that adjusts based on the viewport width using CSS?",
    options: [
      "Using media queries with @media rules",
      "Setting fixed widths for all elements",
      "Applying width: auto to elements",
      "Using viewport-width units",
    ],
    correctAnswer: "Using media queries with @media rules",
    explanation:
      "Media queries with @media rules allow you to apply different styles based on the viewport width, creating a responsive layout.",
  },
  {
    question: "Which property is used to create a CSS animation effect?",
    options: ["animation", "transition", "transform", "keyframes"],
    correctAnswer: "animation",
    explanation:
      "The animation property is used to create CSS animations by specifying the name of the animation, duration, and other properties.",
  },
  {
    question:
      "What does the justify-content: space-between property do in Flexbox?",
    options: [
      "Distributes space between flex items, aligning the first item to the start and the last item to the end",
      "Centers all flex items within the container",
      "Aligns flex items to the start of the container",
      "Spaces flex items evenly with equal space around and between them",
    ],
    correctAnswer:
      "Distributes space between flex items, aligning the first item to the start and the last item to the end",
    explanation:
      "The justify-content: space-between property distributes space between flex items, aligning the first item to the start and the last item to the end of the container.",
  },
  {
    question:
      "How do you set a background image to cover the entire background of an element?",
    options: [
      "Using background-size: cover",
      "Using background-size: contain",
      "Applying background-repeat: no-repeat",
      "Using background-position: center",
    ],
    correctAnswer: "Using background-size: cover",
    explanation:
      "The background-size: cover property ensures that the background image covers the entire background of the element, scaling as necessary.",
  },
  {
    question:
      "Which property is used to set the distance between lines of text?",
    options: ["line-height", "text-spacing", "letter-spacing", "text-height"],
    correctAnswer: "line-height",
    explanation:
      "The line-height property sets the distance between lines of text, affecting the vertical spacing within a block of text.",
  },
  {
    question:
      "How do you ensure an element always stays at the bottom of its container?",
    options: [
      "Using position: absolute with bottom: 0",
      "Applying float: bottom",
      "Using position: fixed with bottom: 0",
      "Setting margin-top: auto",
    ],
    correctAnswer: "Using position: absolute with bottom: 0",
    explanation:
      "The position: absolute with bottom: 0 property ensures an element stays at the bottom of its containing block.",
  },
];
