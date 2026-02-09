export const test1 = [
  {
    question:
      "Which CSS property is used to control the text overflow in a block element?",
    options: ["text-overflow", "overflow-text", "text-clip", "overflow"],
    correctAnswer: "text-overflow",
    explanation:
      "The text-overflow property is used to specify how overflowed content that is not displayed should be signaled to the user, such as with an ellipsis.",
  },
  {
    question:
      "How do you center an element horizontally within its parent using CSS Flexbox?",
    options: [
      "justify-content: center;",
      "align-items: center;",
      "align-content: center;",
      "justify-items: center;",
    ],
    correctAnswer: "justify-content: center;",
    explanation:
      "The justify-content property aligns flex items along the main axis of the flex container, which is used to center items horizontally.",
  },
  {
    question:
      "Which property is used to control the spacing between lines of text in CSS?",
    options: [
      "line-height",
      "text-spacing",
      "line-spacing",
      "text-line-height",
    ],
    correctAnswer: "line-height",
    explanation:
      "The line-height property controls the amount of space between lines of text, affecting the readability and appearance of text blocks.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with multiple classes?",
    options: [
      ".class1.class2 { ... }",
      ".class1, .class2 { ... }",
      ".class1 .class2 { ... }",
      "class1.class2 { ... }",
    ],
    correctAnswer: ".class1.class2 { ... }",
    explanation:
      "To target elements with multiple classes, you use a combined class selector, e.g., .class1.class2 { ... }.",
  },
  {
    question: "Which CSS property is used to add shadow to an element's box?",
    options: ["box-shadow", "shadow", "element-shadow", "shadow-box"],
    correctAnswer: "box-shadow",
    explanation:
      "The box-shadow property applies shadow effects around an element's frame, including options for horizontal and vertical offsets, blur radius, and color.",
  },
  {
    question: "How do you hide an element but keep its space occupied in CSS?",
    options: [
      "visibility: hidden;",
      "display: none;",
      "opacity: 0;",
      "position: absolute;",
    ],
    correctAnswer: "visibility: hidden;",
    explanation:
      "The visibility: hidden; property hides the element from view while maintaining its space in the layout, unlike display: none; which removes it completely.",
  },
  {
    question:
      "Which property is used to control the position of a pseudo-element in CSS?",
    options: ["position", "location", "offset", "placement"],
    correctAnswer: "position",
    explanation:
      "The position property is used to control the positioning of pseudo-elements such as ::before and ::after.",
  },
  {
    question:
      "How do you apply a style to the first child element of a parent in CSS?",
    options: [
      ":first-child",
      ":nth-child(1)",
      ":first-of-type",
      ":nth-of-type(1)",
    ],
    correctAnswer: ":first-child",
    explanation:
      "The :first-child pseudo-class targets the first child element of a parent element.",
  },
  {
    question:
      "Which property is used to set the flex container's items to be evenly distributed?",
    options: [
      "justify-content: space-between;",
      "align-items: space-between;",
      "flex-distribution: evenly;",
      "justify-items: center;",
    ],
    correctAnswer: "justify-content: space-between;",
    explanation:
      "The justify-content: space-between; property distributes flex items evenly along the main axis, with the first item at the start and the last item at the end.",
  },
  {
    question:
      "How do you set the default font size for an element to 16px in CSS?",
    options: [
      "font-size: 16px;",
      "text-size: 16px;",
      "font: 16px;",
      "text-font-size: 16px;",
    ],
    correctAnswer: "font-size: 16px;",
    explanation:
      "The font-size property sets the size of the text within an element. Setting it to 16px defines the default font size.",
  },
  {
    question:
      "Which property is used to set the amount of space between the border and the content of an element in CSS?",
    options: ["padding", "margin", "border-spacing", "padding-space"],
    correctAnswer: "padding",
    explanation:
      "The padding property sets the space between an element's content and its border.",
  },
  {
    question: "How do you create a CSS variable?",
    options: [
      "--variable-name: value;",
      "var variable-name = value;",
      "variable-name: value;",
      "--variable-name = value;",
    ],
    correctAnswer: "--variable-name: value;",
    explanation:
      "CSS variables (custom properties) are defined with a double hyphen prefix, e.g., --variable-name: value; and can be used throughout the CSS file.",
  },
  {
    question:
      "Which property is used to control the order of flex items in a flex container?",
    options: ["order", "flex-order", "item-order", "flex-sequence"],
    correctAnswer: "order",
    explanation:
      "The order property controls the order in which flex items appear within a flex container, allowing for custom ordering.",
  },
  {
    question:
      "How do you apply a CSS style to the last child element of a parent?",
    options: [
      ":last-child",
      ":nth-last-child(1)",
      ":last-of-type",
      ":nth-of-type(last)",
    ],
    correctAnswer: ":last-child",
    explanation:
      "The :last-child pseudo-class targets the last child element of a parent element.",
  },
  {
    question: "Which property is used to create a gradient background in CSS?",
    options: [
      "background: linear-gradient();",
      "background: gradient();",
      "background-color: gradient();",
      "background-gradient: linear();",
    ],
    correctAnswer: "background: linear-gradient();",
    explanation:
      "The background property with the linear-gradient() function creates a gradient background effect.",
  },
  {
    question:
      "How do you set the width of a flex item to grow and fill the available space?",
    options: ["flex-grow: 1;", "flex-fill: 1;", "flex-width: 1;", "grow: 1;"],
    correctAnswer: "flex-grow: 1;",
    explanation:
      "The flex-grow property specifies how much a flex item should grow relative to other items in the flex container.",
  },
  {
    question:
      "Which property is used to control the spacing between elements in a grid layout?",
    options: ["gap", "spacing", "grid-gap", "margin"],
    correctAnswer: "gap",
    explanation:
      "The gap property controls the spacing between grid items, and it is also used in flexbox layouts.",
  },
  {
    question: "How do you create a CSS animation that repeats indefinitely?",
    options: [
      "animation: name duration infinite;",
      "animation: name duration repeat;",
      "animation: name duration forever;",
      "animation: name duration always;",
    ],
    correctAnswer: "animation: name duration infinite;",
    explanation:
      "To create an animation that repeats indefinitely, you use the animation property with the value 'infinite' for the iteration count.",
  },
  {
    question:
      "Which property is used to control the flex container's alignment of items along the main axis?",
    options: [
      "justify-content",
      "align-items",
      "align-content",
      "main-axis-align",
    ],
    correctAnswer: "justify-content",
    explanation:
      "The justify-content property aligns flex items along the main axis of the flex container, such as horizontally.",
  },
  {
    question: "How do you set a fixed height for a CSS grid row?",
    options: [
      "grid-template-rows: 100px;",
      "grid-row-height: 100px;",
      "row-height: 100px;",
      "height: 100px;",
    ],
    correctAnswer: "grid-template-rows: 100px;",
    explanation:
      "The grid-template-rows property defines the height of grid rows. Setting it to a specific value like 100px sets the row height.",
  },
];
