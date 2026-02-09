export const test7 = [
  {
    question: "How do you set the background color of an element in CSS?",
    options: ["background-color", "color", "bg-color", "background"],
    correctAnswer: "background-color",
    explanation:
      "The background-color property sets the background color of an element.",
  },
  {
    question:
      "Which property is used to create a flexible space between grid items in CSS Grid Layout?",
    options: ["gap", "spacing", "grid-spacing", "item-spacing"],
    correctAnswer: "gap",
    explanation:
      "The gap property is used to set the space between grid items, making it easier to control spacing without affecting individual items.",
  },
  {
    question:
      "How do you apply a CSS style to all elements within a parent element?",
    options: [
      "parent-element *",
      "parent-element > *",
      "parent-element + *",
      "parent-element ~ *",
    ],
    correctAnswer: "parent-element *",
    explanation:
      "The selector parent-element * applies styles to all elements that are descendants of parent-element.",
  },
  {
    question:
      "Which property is used to control the space between flex items in a flex container?",
    options: ["gap", "item-spacing", "flex-spacing", "space-between"],
    correctAnswer: "gap",
    explanation:
      "The gap property can also be used in Flexbox to control the space between flex items, similar to its use in Grid Layout.",
  },
  {
    question:
      "How do you apply a CSS style to the third element of a specific type in a parent element?",
    options: [
      ":nth-of-type(3)",
      ":nth-child(3)",
      ":nth-of-type(3n)",
      ":nth-child(3n)",
    ],
    correctAnswer: ":nth-of-type(3)",
    explanation:
      "The :nth-of-type(3) pseudo-class targets the third element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to set the alignment of items along the main axis in Flexbox?",
    options: ["justify-content", "align-items", "flex-align", "align-content"],
    correctAnswer: "justify-content",
    explanation:
      "The justify-content property aligns flex items along the main axis (horizontally by default).",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class that are also not the first of their type?",
    options: [
      ".class-name:not(:first-of-type)",
      ".class-name:not(:first-child)",
      ".class-name:first-of-type",
      ".class-name:not(:first)",
    ],
    correctAnswer: ".class-name:not(:first-of-type)",
    explanation:
      "The selector .class-name:not(:first-of-type) applies styles to elements with the class that are not the first of their type within their parent.",
  },
  {
    question:
      "Which property is used to control the alignment of items along the cross axis in Flexbox?",
    options: ["align-items", "justify-content", "flex-align", "align-content"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property aligns flex items along the cross axis (perpendicular to the main axis).",
  },
  {
    question:
      "How do you create a CSS rule that applies to every element of a specific type that is also the last child of its parent?",
    options: [
      ":last-child",
      ":last-of-type",
      ":nth-last-child(1)",
      ":nth-of-type(last)",
    ],
    correctAnswer: ":last-of-type",
    explanation:
      "The :last-of-type pseudo-class targets the last element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to create a CSS grid with equal-sized columns?",
    options: [
      "grid-template-columns: repeat(auto-fit, minmax(0, 1fr));",
      "column-size: equal;",
      "grid-columns: auto;",
      "columns: equal;",
    ],
    correctAnswer: "grid-template-columns: repeat(auto-fit, minmax(0, 1fr));",
    explanation:
      "The grid-template-columns property with repeat(auto-fit, minmax(0, 1fr)) creates a grid with flexible, equal-sized columns.",
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
      "The selector .class-name[attribute] applies styles to elements with the specified class and a specific attribute.",
  },
  {
    question: "Which property is used to apply a CSS filter to an element?",
    options: ["filter", "effect", "transform", "image-filter"],
    correctAnswer: "filter",
    explanation:
      "The filter property applies graphical effects like blur or color manipulation to elements.",
  },
  {
    question:
      "How do you set the size of grid columns to be flexible with a minimum and maximum value?",
    options: [
      "grid-template-columns: minmax(100px, 1fr);",
      "column-width: minmax(100px, auto);",
      "grid-columns: minmax(100px, auto);",
      "columns: minmax(100px, 1fr);",
    ],
    correctAnswer: "grid-template-columns: minmax(100px, 1fr);",
    explanation:
      "The grid-template-columns property with minmax(100px, 1fr) sets the size of columns to be flexible, with a minimum value of 100px and a maximum value that expands to fill available space.",
  },
  {
    question:
      "Which property is used to set the space between flex items in a flex container?",
    options: ["gap", "item-spacing", "flex-spacing", "space-between"],
    correctAnswer: "gap",
    explanation:
      "The gap property sets the space between flex items, similar to its use in CSS Grid Layout.",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class that are also the first of their type?",
    options: [
      ".class-name:first-of-type",
      ".class-name:first-child",
      ".class-name:first",
      ".class-name:nth-of-type(1)",
    ],
    correctAnswer: ".class-name:first-of-type",
    explanation:
      "The selector .class-name:first-of-type applies styles to elements with the class that are the first of their type within their parent.",
  },
  {
    question:
      "Which property is used to set the font style of an element in CSS?",
    options: ["font-style", "text-style", "font-weight", "font-size"],
    correctAnswer: "font-style",
    explanation:
      "The font-style property sets the style of the font, such as italic or oblique.",
  },
  {
    question: "How do you set the color of text in CSS?",
    options: ["color", "text-color", "background-color", "font-color"],
    correctAnswer: "color",
    explanation: "The color property sets the color of the text.",
  },
  {
    question:
      "Which property is used to control the spacing between lines of text in CSS?",
    options: ["line-height", "text-spacing", "line-spacing", "font-spacing"],
    correctAnswer: "line-height",
    explanation:
      "The line-height property controls the space between lines of text, affecting readability.",
  },
  {
    question: "How do you set a fixed size for the CSS grid columns?",
    options: [
      "grid-template-columns: 100px;",
      "column-width: 100px;",
      "grid-columns: 100px;",
      "columns: 100px;",
    ],
    correctAnswer: "grid-template-columns: 100px;",
    explanation:
      "The grid-template-columns property sets the size of grid columns to a fixed value, such as 100px.",
  },
  {
    question:
      "Which property is used to control the space between grid columns in CSS Grid Layout?",
    options: ["column-gap", "grid-column-gap", "gap", "item-spacing"],
    correctAnswer: "column-gap",
    explanation:
      "The column-gap property specifically controls the space between grid columns in a CSS Grid Layout.",
  },
];
