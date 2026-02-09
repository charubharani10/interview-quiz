export const test6 = [
  {
    question:
      "How do you set the CSS grid's rows to have a flexible size with a maximum value?",
    options: [
      "grid-template-rows: 1fr;",
      "row-size: auto;",
      "grid-rows: max-content;",
      "grid-template-rows: max-content;",
    ],
    correctAnswer: "grid-template-rows: max-content;",
    explanation:
      "The grid-template-rows property with max-content allows grid rows to expand to fit their content, while setting a maximum value.",
  },
  {
    question:
      "Which property is used to align grid items along the cross axis in CSS Grid Layout?",
    options: [
      "align-items",
      "justify-items",
      "align-content",
      "justify-content",
    ],
    correctAnswer: "align-items",
    explanation:
      "The align-items property controls the alignment of grid items along the cross axis (perpendicular to the main axis).",
  },
  {
    question:
      "How do you center an element horizontally and vertically within its parent container using Flexbox?",
    options: [
      "justify-content: center; align-items: center;",
      "align-content: center; justify-items: center;",
      "text-align: center; vertical-align: middle;",
      "margin: auto; padding: auto;",
    ],
    correctAnswer: "justify-content: center; align-items: center;",
    explanation:
      "Using justify-content: center and align-items: center centers an element both horizontally and vertically in a flex container.",
  },
  {
    question:
      "Which property is used to control the alignment of grid items along the block axis?",
    options: [
      "align-items",
      "justify-items",
      "align-content",
      "justify-content",
    ],
    correctAnswer: "align-items",
    explanation:
      "The align-items property aligns grid items along the block axis (the vertical axis in most writing modes).",
  },
  {
    question:
      "How do you apply a CSS style to every element of a specific type that is the second child of its parent?",
    options: [
      ":nth-child(2)",
      ":nth-of-type(2)",
      ":nth-child(2n)",
      ":nth-of-type(odd)",
    ],
    correctAnswer: ":nth-of-type(2)",
    explanation:
      "The :nth-of-type(2) pseudo-class targets the second element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to control the alignment of flex items within a flex container?",
    options: ["align-items", "justify-content", "align-content", "flex-align"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property controls the alignment of flex items along the cross axis within a flex container.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class and a specific pseudo-element?",
    options: [
      ".class-name::pseudo-element",
      ".class-name:pseudo-element",
      "element.class-name::pseudo-element",
      "element::pseudo-element.class-name",
    ],
    correctAnswer: ".class-name::pseudo-element",
    explanation:
      "The selector .class-name::pseudo-element applies styles to elements with the specified class and a pseudo-element.",
  },
  {
    question:
      "Which property is used to create flexible grid rows in CSS Grid Layout?",
    options: ["grid-template-rows", "row-size", "grid-rows", "row-template"],
    correctAnswer: "grid-template-rows",
    explanation:
      "The grid-template-rows property defines the sizes of the rows in a grid, allowing for flexible and responsive designs.",
  },
  {
    question:
      "How do you set the width of CSS grid columns to be flexible with a minimum value?",
    options: [
      "grid-template-columns: minmax(100px, 1fr);",
      "column-width: minmax(100px, auto);",
      "grid-columns: minmax(100px, auto);",
      "columns: minmax(100px, 1fr);",
    ],
    correctAnswer: "grid-template-columns: minmax(100px, 1fr);",
    explanation:
      "The grid-template-columns property with minmax(100px, 1fr) makes columns flexible with a minimum width of 100px and a maximum width that fills available space.",
  },
  {
    question:
      "Which property is used to set the space between grid rows and columns in CSS Grid Layout?",
    options: ["gap", "spacing", "grid-spacing", "item-spacing"],
    correctAnswer: "gap",
    explanation:
      "The gap property (formerly grid-gap) sets the space between rows and columns in a CSS Grid Layout.",
  },
  {
    question:
      "How do you apply a CSS style to the elements of a specific type that are the third child of their parent?",
    options: [
      ":nth-child(3)",
      ":nth-of-type(3)",
      ":nth-child(3n)",
      ":nth-of-type(3n)",
    ],
    correctAnswer: ":nth-of-type(3)",
    explanation:
      "The :nth-of-type(3) pseudo-class targets the third element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to set the alignment of flex items along the main axis?",
    options: ["justify-content", "align-items", "flex-align", "align-content"],
    correctAnswer: "justify-content",
    explanation:
      "The justify-content property aligns flex items along the main axis of the flex container.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class and a specific pseudo-class?",
    options: [
      ".class-name:pseudo-class",
      ".class-name .pseudo-class",
      "element.class-name:pseudo-class",
      ".pseudo-class.class-name",
    ],
    correctAnswer: ".class-name:pseudo-class",
    explanation:
      "The selector .class-name:pseudo-class applies styles to elements with the specified class and pseudo-class.",
  },
  {
    question:
      "Which property is used to set the font style of an element in CSS?",
    options: ["font-style", "font-weight", "text-style", "font-size"],
    correctAnswer: "font-style",
    explanation:
      "The font-style property sets the style of the font, such as italic or oblique.",
  },
  {
    question: "How do you set the CSS grid's rows to have a fixed size?",
    options: [
      "grid-template-rows: 100px;",
      "row-height: 100px;",
      "grid-rows: 100px;",
      "rows: 100px;",
    ],
    correctAnswer: "grid-template-rows: 100px;",
    explanation:
      "The grid-template-rows property sets the size of rows in a grid layout to a fixed value like 100px.",
  },
  {
    question:
      "Which property is used to set the alignment of grid items along the inline axis in CSS Grid Layout?",
    options: [
      "justify-items",
      "align-items",
      "justify-content",
      "align-content",
    ],
    correctAnswer: "justify-items",
    explanation:
      "The justify-items property aligns grid items along the inline axis (horizontally in most cases).",
  },
  {
    question:
      "How do you apply a CSS style to the last element of a specific type within a parent element?",
    options: [
      "parent-element :last-of-type",
      "parent-element > :last-of-type",
      "parent-element + :last-of-type",
      "parent-element ~ :last-of-type",
    ],
    correctAnswer: "parent-element :last-of-type",
    explanation:
      "The selector parent-element :last-of-type targets the last element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to create space between the border and content of an element?",
    options: ["padding", "margin", "border-spacing", "content-space"],
    correctAnswer: "padding",
    explanation:
      "The padding property creates space between the content of an element and its border.",
  },
  {
    question: "How do you set the font weight of text in CSS?",
    options: ["font-weight", "text-weight", "font-bold", "text-style"],
    correctAnswer: "font-weight",
    explanation:
      "The font-weight property sets the weight (boldness) of the text.",
  },
  {
    question:
      "Which property is used to set the alignment of items within a flex container along the cross axis?",
    options: ["align-items", "justify-content", "flex-align", "align-content"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property sets the alignment of items within a flex container along the cross axis (perpendicular to the main axis).",
  },
];
