export const test5 = [
  {
    question:
      "How do you create a CSS rule that only applies to elements with a specific attribute and value?",
    options: [
      "element[attribute=value]",
      'element[attribute="value"]',
      'element[attribute~="value"]',
      'element[attribute|="value"]',
    ],
    correctAnswer: "element[attribute=value]",
    explanation:
      "The selector element[attribute=value] targets elements with the specified attribute having the given value.",
  },
  {
    question:
      "Which property is used to define the number of lines in a CSS Grid Layout?",
    options: ["grid-template-rows", "grid-rows", "grid-lines", "row-template"],
    correctAnswer: "grid-template-rows",
    explanation:
      "The grid-template-rows property defines the number of rows and their sizes in a CSS Grid Layout.",
  },
  {
    question: "What is the purpose of the mix-blend-mode property in CSS?",
    options: [
      "Defines how an element's content blends with its background",
      "Changes the blending of colors in an image",
      "Adjusts the opacity of an element",
      "Controls the layout of overlapping elements",
    ],
    correctAnswer:
      "Defines how an element's content blends with its background",
    explanation:
      "The mix-blend-mode property specifies how an element's content blends with its background, creating various visual effects.",
  },
  {
    question:
      "How do you make an element invisible but still take up space in the layout?",
    options: [
      "Using visibility: hidden",
      "Using opacity: 0",
      "Using display: none",
      "Using position: absolute with top: -9999px",
    ],
    correctAnswer: "Using visibility: hidden",
    explanation:
      "The visibility: hidden property hides an element but still occupies space in the layout, unlike display: none, which removes the element from the document flow.",
  },
  {
    question:
      "Which CSS property is used to define the alignment of flex items along the cross axis in Flexbox?",
    options: [
      "align-items",
      "justify-content",
      "flex-direction",
      "align-content",
    ],
    correctAnswer: "align-items",
    explanation:
      "The align-items property aligns flex items along the cross axis (perpendicular to the main axis) in a Flexbox layout.",
  },
  {
    question: "What does the clip-path property do in CSS?",
    options: [
      "Defines a clipping region to create complex shapes for an element",
      "Clips the content of an element to a rectangular shape",
      "Adjusts the size of an element's border",
      "Creates a clipping effect for background images",
    ],
    correctAnswer:
      "Defines a clipping region to create complex shapes for an element",
    explanation:
      "The clip-path property defines a clipping region that allows you to create complex shapes for an element, restricting the visible part to within the specified path.",
  },
  {
    question:
      "How do you specify a fixed height for a grid row in CSS Grid Layout?",
    options: [
      "Using grid-template-rows with fixed sizes",
      "Using grid-row-height property",
      "Setting height on the grid item",
      "Using row-template property",
    ],
    correctAnswer: "Using grid-template-rows with fixed sizes",
    explanation:
      "The grid-template-rows property defines the height of grid rows, and you can specify fixed sizes for rows.",
  },
  {
    question: "Which CSS property is used to create a multi-column layout?",
    options: ["columns", "column-count", "column-width", "column-layout"],
    correctAnswer: "columns",
    explanation:
      "The columns property is a shorthand for setting both column-count and column-width properties to create a multi-column layout.",
  },
  {
    question:
      "How do you apply a gradient overlay on a background image using CSS?",
    options: [
      "Using background: linear-gradient() and background-image",
      "Using background-image: gradient()",
      "Applying background-color with opacity",
      "Using background-blend-mode",
    ],
    correctAnswer: "Using background: linear-gradient() and background-image",
    explanation:
      "To apply a gradient overlay on a background image, you use background: linear-gradient() along with background-image.",
  },
  {
    question: "What does the transform: rotate() property do in CSS?",
    options: [
      "Rotates an element around a fixed point",
      "Moves an element from its original position",
      "Scales an element in size",
      "Skews an element",
    ],
    correctAnswer: "Rotates an element around a fixed point",
    explanation:
      "The transform: rotate() property rotates an element around its fixed point (usually its center).",
  },
  {
    question:
      "Which property is used to control the visibility of text within a container?",
    options: ["visibility", "display", "opacity", "clip"],
    correctAnswer: "visibility",
    explanation:
      "The visibility property controls the visibility of an element, including text, while still allowing it to occupy space in the layout.",
  },
  {
    question:
      "How do you define a grid item that spans multiple columns in CSS Grid Layout?",
    options: [
      "Using grid-column with start and end positions",
      "Using grid-row with multiple values",
      "Setting column-span property",
      "Using grid-area with row and column values",
    ],
    correctAnswer: "Using grid-column with start and end positions",
    explanation:
      "The grid-column property with start and end positions allows you to define how many columns a grid item spans.",
  },
  {
    question:
      "What is the effect of the justify-items property in CSS Grid Layout?",
    options: [
      "Aligns grid items within their grid area along the inline (row) axis",
      "Aligns grid items along the block (column) axis",
      "Sets the size of grid items",
      "Adjusts the spacing between grid items",
    ],
    correctAnswer:
      "Aligns grid items within their grid area along the inline (row) axis",
    explanation:
      "The justify-items property aligns grid items within their grid area along the inline (row) axis in CSS Grid Layout.",
  },
  {
    question:
      "Which property is used to set the maximum width of an element's content?",
    options: ["max-width", "width-limit", "max-size", "width-max"],
    correctAnswer: "max-width",
    explanation:
      "The max-width property sets the maximum width of an element’s content, ensuring it does not exceed a specified value.",
  },
  {
    question:
      "How do you ensure that an element’s content does not overflow its container?",
    options: [
      "Using overflow: hidden",
      "Using overflow: auto",
      "Using overflow: visible",
      "Using overflow: scroll",
    ],
    correctAnswer: "Using overflow: hidden",
    explanation:
      "The overflow: hidden property hides any content that overflows the bounds of its container, preventing it from being visible.",
  },
  {
    question:
      "Which property is used to create an effect that makes an element's text appear blurred?",
    options: [
      "text-shadow with a blur radius",
      "filter: blur()",
      "opacity",
      "font-blur",
    ],
    correctAnswer: "filter: blur()",
    explanation:
      "The filter: blur() property applies a blur effect to an element's text, making it appear blurred.",
  },
  {
    question:
      "How do you create a CSS rule that applies only to elements that are direct children of a specific element?",
    options: [
      "Using the > combinator",
      "Using the + combinator",
      "Using the ~ combinator",
      "Using the ::after pseudo-element",
    ],
    correctAnswer: "Using the > combinator",
    explanation:
      "The > combinator targets elements that are direct children of a specified element, applying styles only to them.",
  },
  {
    question: "What does the z-index property control in CSS?",
    options: [
      "The stacking order of positioned elements",
      "The width of an element's border",
      "The visibility of an element",
      "The height of an element",
    ],
    correctAnswer: "The stacking order of positioned elements",
    explanation:
      "The z-index property controls the stacking order of positioned elements, determining which elements appear on top of others.",
  },
  {
    question: "Which property is used to set the size of an element’s border?",
    options: [
      "border-width",
      "border-size",
      "border-thickness",
      "border-dimension",
    ],
    correctAnswer: "border-width",
    explanation:
      "The border-width property sets the size of an element’s border, determining how thick the border appears.",
  },
  {
    question:
      "How do you create a responsive grid layout with variable number of columns in CSS Grid Layout?",
    options: [
      "Using grid-template-columns with flexible units like fr or repeat()",
      "Setting fixed values for grid-template-columns",
      "Using flex-direction for columns",
      "Applying display: block with width adjustments",
    ],
    correctAnswer:
      "Using grid-template-columns with flexible units like fr or repeat()",
    explanation:
      "The grid-template-columns property with flexible units like fr or repeat() allows you to create a responsive grid layout with a variable number of columns.",
  },
];
