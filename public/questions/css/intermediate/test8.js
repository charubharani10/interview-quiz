export const test8 = [
  {
    question:
      "How do you apply a CSS style to elements with a specific class and a specific pseudo-class?",
    options: [
      ".class-name:pseudo-class",
      ".class-name .pseudo-class",
      "element.class-name:pseudo-class",
      ".pseudo-class.class-name",
    ],
    correctAnswer: ".class-name:pseudo-class",
    explanation:
      "The selector .class-name:pseudo-class applies styles to elements with the class and the specified pseudo-class.",
  },
  {
    question:
      "Which property is used to set the width of flex items in a flex container?",
    options: ["flex-basis", "flex-width", "item-width", "flex-size"],
    correctAnswer: "flex-basis",
    explanation:
      "The flex-basis property sets the initial main size of a flex item, which is used to determine its width or height.",
  },
  {
    question:
      "How do you create a CSS rule that applies to every element of a specific type that is also the second child of its parent?",
    options: [
      ":nth-of-type(2)",
      ":nth-child(2)",
      ":nth-of-type(2n)",
      ":nth-child(2n)",
    ],
    correctAnswer: ":nth-of-type(2)",
    explanation:
      "The :nth-of-type(2) pseudo-class selects the second element of a specific type within its parent.",
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
      "The align-items property in CSS Grid Layout aligns grid items along the block axis (typically vertical alignment).",
  },
  {
    question:
      "How do you set the space between grid rows and columns in CSS Grid Layout?",
    options: ["gap", "spacing", "grid-spacing", "item-spacing"],
    correctAnswer: "gap",
    explanation:
      "The gap property sets the space between both grid rows and columns in CSS Grid Layout.",
  },
  {
    question:
      "Which property is used to set the background image of an element in CSS?",
    options: ["background-image", "bg-image", "image-background", "background"],
    correctAnswer: "background-image",
    explanation:
      "The background-image property sets one or more background images for an element.",
  },
  {
    question:
      "How do you apply a CSS style to elements with a specific class and a specific attribute?",
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
    question:
      "Which property is used to control the space between flex items in a flex container?",
    options: ["gap", "item-spacing", "flex-spacing", "space-between"],
    correctAnswer: "gap",
    explanation:
      "The gap property can be used to control the space between flex items, similar to its use in Grid Layout.",
  },
  {
    question:
      "How do you create a CSS rule that applies to every element of a specific type that is the last child of its parent?",
    options: [
      ":last-of-type",
      ":last-child",
      ":nth-last-child(1)",
      ":nth-of-type(last)",
    ],
    correctAnswer: ":last-of-type",
    explanation:
      "The :last-of-type pseudo-class selects the last element of a specific type within its parent.",
  },
  {
    question:
      "Which property is used to set the text decoration of an element in CSS?",
    options: [
      "text-decoration",
      "text-style",
      "font-style",
      "text-decoration-style",
    ],
    correctAnswer: "text-decoration",
    explanation:
      "The text-decoration property sets the text decoration, such as underline or line-through.",
  },
  {
    question:
      "How do you apply a CSS style to every element of a specific type that is not the first child of its parent?",
    options: [
      ":not(:first-child)",
      ":not(:first-of-type)",
      ":nth-of-type(n+2)",
      ":nth-child(n+2)",
    ],
    correctAnswer: ":not(:first-of-type)",
    explanation:
      "The :not(:first-of-type) pseudo-class applies styles to every element of a specific type that is not the first of its type within its parent.",
  },
  {
    question:
      "Which property is used to set the space between the border and content of an element in CSS?",
    options: ["padding", "margin", "border-spacing", "content-space"],
    correctAnswer: "padding",
    explanation:
      "The padding property sets the space between the border and the content of an element.",
  },
  {
    question:
      "How do you set the alignment of items along the cross axis in CSS Flexbox?",
    options: ["align-items", "justify-content", "align-content", "flex-align"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property sets the alignment of items along the cross axis (perpendicular to the main axis) in Flexbox.",
  },
  {
    question:
      "Which property is used to set the size of grid items in CSS Grid Layout?",
    options: [
      "grid-template-areas",
      "grid-item-size",
      "grid-template-columns",
      "grid-area",
    ],
    correctAnswer: "grid-area",
    explanation:
      "The grid-area property specifies where an item should be placed within the grid, affecting its size and position.",
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
      "The selector .class-name:pseudo-class applies styles to elements with the class and the specified pseudo-class.",
  },
  {
    question:
      "Which property is used to control the space between grid rows in CSS Grid Layout?",
    options: ["row-gap", "grid-row-gap", "gap", "item-spacing"],
    correctAnswer: "row-gap",
    explanation:
      "The row-gap property controls the space between grid rows in CSS Grid Layout.",
  },
  {
    question: "How do you set the background color of an element in CSS?",
    options: ["background-color", "color", "bg-color", "background"],
    correctAnswer: "background-color",
    explanation:
      "The background-color property sets the background color of an element.",
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
      "How do you apply a CSS style to the last element of a specific type within a parent element?",
    options: [
      "parent-element :last-of-type",
      "parent-element > :last-of-type",
      "parent-element + :last-of-type",
      "parent-element ~ :last-of-type",
    ],
    correctAnswer: "parent-element :last-of-type",
    explanation:
      "The selector parent-element :last-of-type applies styles to the last element of a specific type within the parent element.",
  },
  {
    question:
      "Which property is used to set the space between flex items in a flex container?",
    options: ["gap", "item-spacing", "flex-spacing", "space-between"],
    correctAnswer: "gap",
    explanation:
      "The gap property sets the space between flex items in a flex container.",
  },
];
