export const test4 = [
  {
    question:
      "Which property is used to set the grid container's items to stretch to fill the available space?",
    options: [
      "align-items: stretch;",
      "justify-items: stretch;",
      "items-align: stretch;",
      "container-align: stretch;",
    ],
    correctAnswer: "align-items: stretch;",
    explanation:
      "The align-items property with the value 'stretch' ensures that items within the grid container stretch to fill the available space.",
  },
  {
    question:
      "How do you create a CSS rule that applies to all children of a parent element?",
    options: [
      "parent-element > * { ... }",
      "parent-element + * { ... }",
      "parent-element * { ... }",
      "parent-element ~ * { ... }",
    ],
    correctAnswer: "parent-element * { ... }",
    explanation:
      "The selector parent-element * applies styles to all descendant elements of the parent element, not just direct children.",
  },
  {
    question:
      "Which property is used to set the CSS grid's columns to have a fixed size with a minimum value?",
    options: [
      "grid-template-columns: minmax(100px, auto);",
      "columns: fixed;",
      "column-width: minmax(100px, auto);",
      "grid-columns: minmax(100px, auto);",
    ],
    correctAnswer: "grid-template-columns: minmax(100px, auto);",
    explanation:
      "The grid-template-columns property with minmax(100px, auto) sets columns to have a minimum size of 100px and can grow beyond that size.",
  },
  {
    question:
      "How do you apply a CSS style to elements with a specific class that are also the first of their type?",
    options: [
      ".class-name:first-of-type",
      ".class-name:first-child",
      ".class-name:first",
      ".class-name:only-of-type",
    ],
    correctAnswer: ".class-name:first-of-type",
    explanation:
      "The selector .class-name:first-of-type targets elements with the specified class that are the first of their type within their parent element.",
  },
  {
    question:
      "Which property is used to control the size of grid columns in CSS Grid Layout?",
    options: [
      "grid-template-columns",
      "grid-columns",
      "column-size",
      "container-columns",
    ],
    correctAnswer: "grid-template-columns",
    explanation:
      "The grid-template-columns property specifies the size of the columns in a grid layout.",
  },
  {
    question:
      "How do you set the CSS grid container’s items to be aligned along the block axis?",
    options: [
      "align-content",
      "justify-content",
      "align-items",
      "justify-items",
    ],
    correctAnswer: "align-content",
    explanation:
      "The align-content property aligns the content of the grid container along the block axis (usually vertical).",
  },
  {
    question:
      "Which property is used to set the color of an element’s text in CSS?",
    options: ["color", "text-color", "font-color", "text-style"],
    correctAnswer: "color",
    explanation:
      "The color property sets the color of the text within an element.",
  },
  {
    question:
      "How do you apply a CSS style to the first line of a block-level element?",
    options: ["::first-line", ":first-line", "::first-block", ":first-block"],
    correctAnswer: "::first-line",
    explanation:
      "The ::first-line pseudo-element applies styles to the first line of a block-level element.",
  },
  {
    question:
      "Which property is used to create space between a block element’s border and its content?",
    options: ["padding", "margin", "border-spacing", "content-space"],
    correctAnswer: "padding",
    explanation:
      "The padding property creates space between the content of a block element and its border.",
  },
  {
    question:
      "How do you create a CSS rule that applies only to elements with a specific class and a specific attribute value?",
    options: [
      ".class-name[attribute=value]",
      "element.class-name[attribute=value]",
      ".class-name[attribute]",
      "element[attribute=value].class-name",
    ],
    correctAnswer: ".class-name[attribute=value]",
    explanation:
      "The selector .class-name[attribute=value] targets elements with the specified class and attribute value.",
  },
  {
    question:
      "Which property is used to set the CSS grid’s columns to be of a specific size in pixels?",
    options: [
      "grid-template-columns: 200px;",
      "column-width: 200px;",
      "columns: 200px;",
      "grid-columns: 200px;",
    ],
    correctAnswer: "grid-template-columns: 200px;",
    explanation:
      "The grid-template-columns property with a specific pixel value sets the width of each column in the grid layout.",
  },
  {
    question:
      "How do you center an element vertically within its parent container using Flexbox?",
    options: [
      "align-items: center;",
      "justify-content: center;",
      "vertical-align: middle;",
      "align-content: center;",
    ],
    correctAnswer: "align-items: center;",
    explanation:
      "The align-items property with the value 'center' vertically centers elements within a flex container.",
  },
  {
    question:
      "Which property is used to control the flex container’s alignment of items along the cross axis?",
    options: ["align-items", "justify-content", "align-content", "flex-align"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property controls the alignment of flex items along the cross axis of the flex container.",
  },
  {
    question:
      "How do you set the width of a CSS grid column to be a percentage of the available space?",
    options: [
      "grid-template-columns: 50%;",
      "column-width: 50%;",
      "columns: 50%;",
      "grid-columns: 50%;",
    ],
    correctAnswer: "grid-template-columns: 50%;",
    explanation:
      "The grid-template-columns property with a percentage value sets the width of columns as a percentage of the available space.",
  },
  {
    question:
      "Which property is used to create a flexible space between grid items in CSS Grid Layout?",
    options: ["gap", "spacing", "grid-spacing", "item-spacing"],
    correctAnswer: "gap",
    explanation:
      "The gap property (formerly grid-gap) sets the space between grid items in a CSS Grid Layout.",
  },
  {
    question:
      "How do you apply a CSS style to the first element of a specific type in a parent element?",
    options: [
      "parent-element :first-of-type",
      "parent-element > :first-of-type",
      "parent-element + :first-of-type",
      "parent-element ~ :first-of-type",
    ],
    correctAnswer: "parent-element > :first-of-type",
    explanation:
      "The selector parent-element > :first-of-type applies styles to the first element of a specific type that is a direct child of the parent element.",
  },
  {
    question:
      "Which property is used to set the grid container’s columns to be flexible with a minimum size?",
    options: [
      "grid-template-columns: minmax(100px, 1fr);",
      "column-width: minmax(100px, auto);",
      "grid-columns: minmax(100px, auto);",
      "columns: minmax(100px, 1fr);",
    ],
    correctAnswer: "grid-template-columns: minmax(100px, 1fr);",
    explanation:
      "The grid-template-columns property with minmax(100px, 1fr) makes columns flexible with a minimum size of 100px and a maximum size that fills available space.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class that are not the last child of their parent?",
    options: [
      ".class-name:not(:last-child)",
      ".class-name:not(:nth-last-child(1))",
      ".class-name:last-child",
      ".class-name:not(:nth-child(last))",
    ],
    correctAnswer: ".class-name:not(:last-child)",
    explanation:
      "The selector .class-name:not(:last-child) applies styles to elements with the specified class that are not the last child of their parent.",
  },
  {
    question:
      "Which property is used to set the height of CSS grid rows to be flexible?",
    options: [
      "grid-template-rows: auto;",
      "row-height: flexible;",
      "grid-rows: auto;",
      "height: auto;",
    ],
    correctAnswer: "grid-template-rows: auto;",
    explanation:
      "The grid-template-rows property with the value 'auto' makes grid rows flexible and adjust their height based on the content.",
  },
  {
    question: "How do you set the border color of an element to red in CSS?",
    options: [
      "border-color: red;",
      "border: red;",
      "color: border-red;",
      "border-style: red;",
    ],
    correctAnswer: "border-color: red;",
    explanation:
      "The border-color property sets the color of the border of an element. The border shorthand property does not work for just setting color.",
  },
];
