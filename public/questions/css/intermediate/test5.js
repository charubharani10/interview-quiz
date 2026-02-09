export const test5 = [
  {
    question: "Which property is used to apply a CSS animation to an element?",
    options: ["animation", "transition", "keyframes", "transform"],
    correctAnswer: "animation",
    explanation:
      "The animation property is used to apply CSS animations to elements, specifying the name of the animation, its duration, and other details.",
  },
  {
    question:
      "How do you create a CSS rule that applies to every third element of a specific type?",
    options: [
      ":nth-of-type(3n)",
      ":nth-child(3n)",
      ":nth-type(3)",
      ":nth-child(odd)",
    ],
    correctAnswer: ":nth-of-type(3n)",
    explanation:
      "The :nth-of-type(3n) pseudo-class targets every third element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to set the CSS grid’s rows to have a specific size in pixels?",
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
      "How do you create a CSS rule that applies only to elements with a specific class and a specific pseudo-class?",
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
      "Which property is used to control the alignment of grid items along the inline axis?",
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
      "How do you create a CSS rule that applies to elements with a specific class and a specific attribute?",
    options: [
      ".class-name[attribute]",
      "element.class-name[attribute]",
      ".class-name[attribute=value]",
      "element[attribute].class-name",
    ],
    correctAnswer: ".class-name[attribute]",
    explanation:
      "The selector .class-name[attribute] targets elements with the specified class and a specific attribute, regardless of its value.",
  },
  {
    question:
      "Which property is used to control the flex container’s alignment of items along the main axis?",
    options: ["justify-content", "align-items", "flex-align", "align-content"],
    correctAnswer: "justify-content",
    explanation:
      "The justify-content property aligns flex items along the main axis of the flex container.",
  },
  {
    question:
      "How do you create a CSS rule that applies to every other element of a specific type?",
    options: [
      ":nth-child(odd)",
      ":nth-of-type(even)",
      ":nth-child(even)",
      ":nth-type(odd)",
    ],
    correctAnswer: ":nth-child(odd)",
    explanation:
      "The :nth-child(odd) pseudo-class targets every other element within its parent, starting from the first one.",
  },
  {
    question:
      "Which property is used to apply a style to the last line of a block-level element?",
    options: ["::last-line", ":last-line", "::after-line", ":after-line"],
    correctAnswer: "::last-line",
    explanation:
      "The ::last-line pseudo-element applies styles to the last line of a block-level element.",
  },
  {
    question:
      "How do you create a CSS rule that applies to all child elements of a parent element that are also the last child of their parent?",
    options: [
      "parent-element > :last-child",
      "parent-element :last-of-type",
      "parent-element:last-child",
      "parent-element :last-child",
    ],
    correctAnswer: "parent-element > :last-child",
    explanation:
      "The selector parent-element > :last-child targets all child elements that are also the last child of their parent.",
  },
  {
    question:
      "Which property is used to set the CSS grid container’s columns to be flexible with a minimum size?",
    options: [
      "grid-template-columns: minmax(200px, 1fr);",
      "column-width: minmax(200px, auto);",
      "grid-columns: minmax(200px, auto);",
      "columns: minmax(200px, 1fr);",
    ],
    correctAnswer: "grid-template-columns: minmax(200px, 1fr);",
    explanation:
      "The grid-template-columns property with minmax(200px, 1fr) makes columns flexible with a minimum size of 200px and a maximum size that fills available space.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class and a specific attribute value?",
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
      "Which property is used to control the spacing between grid rows in CSS Grid Layout?",
    options: ["row-gap", "grid-row-gap", "grid-gap", "row-spacing"],
    correctAnswer: "row-gap",
    explanation:
      "The row-gap property sets the space between rows in a CSS Grid Layout. It is also known as grid-row-gap.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class that are also not the first child of their parent?",
    options: [
      ".class-name:not(:first-child)",
      ".class-name:not(:nth-child(1))",
      ".class-name:first-child",
      ".class-name:not(:first)",
    ],
    correctAnswer: ".class-name:not(:first-child)",
    explanation:
      "The selector .class-name:not(:first-child) applies styles to elements with the specified class that are not the first child of their parent.",
  },
  {
    question:
      "Which property is used to control the space between grid items and the container's edge in CSS Grid Layout?",
    options: ["gap", "spacing", "grid-spacing", "item-spacing"],
    correctAnswer: "gap",
    explanation:
      "The gap property (formerly grid-gap) sets the space between grid items and the edges of the grid container.",
  },
  {
    question:
      "Which property is used to control the size of grid items in CSS Grid Layout?",
    options: [
      "grid-template-areas",
      "grid-item-size",
      "grid-template-columns",
      "grid-area",
    ],
    correctAnswer: "grid-area",
    explanation:
      "The grid-area property specifies how grid items are placed within the grid, effectively controlling their size and position.",
  },
  {
    question:
      "How do you apply a CSS style to the second last child of a parent element?",
    options: [
      ":nth-last-child(2)",
      ":nth-last-of-type(2)",
      ":nth-child(-2)",
      ":nth-of-type(2)",
    ],
    correctAnswer: ":nth-last-child(2)",
    explanation:
      "The :nth-last-child(2) pseudo-class targets the second last child of a parent element.",
  },
  {
    question:
      "Which property is used to set the font size of an element in CSS?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    correctAnswer: "font-size",
    explanation:
      "The font-size property sets the size of the font used in an element.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class that are also the last of their type?",
    options: [
      ".class-name:last-of-type",
      ".class-name:last-child",
      ".class-name:last",
      ".class-name:only-of-type",
    ],
    correctAnswer: ".class-name:last-of-type",
    explanation:
      "The selector .class-name:last-of-type targets elements with the specified class that are the last of their type within their parent element.",
  },
  {
    question:
      "Which property is used to set the space between the items in a flex container?",
    options: ["gap", "spacing", "item-gap", "space-between"],
    correctAnswer: "gap",
    explanation:
      "The gap property (formerly flex-gap) sets the space between items in a flex container.",
  },
];
