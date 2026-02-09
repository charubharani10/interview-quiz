export const test3 = [
  {
    question:
      "Which property is used to set a CSS grid’s rows to have equal height?",
    options: [
      "grid-template-rows: repeat(auto-fit, 1fr);",
      "grid-rows: equal;",
      "row-size: auto;",
      "equal-rows: true;",
    ],
    correctAnswer: "grid-template-rows: repeat(auto-fit, 1fr);",
    explanation:
      "The grid-template-rows property with repeat(auto-fit, 1fr) creates rows of equal height in a grid layout.",
  },
  {
    question: "How do you set the border style of an element to dashed in CSS?",
    options: [
      "border-style: dashed;",
      "border: dashed;",
      "border-dash: true;",
      "border-pattern: dashed;",
    ],
    correctAnswer: "border-style: dashed;",
    explanation:
      "The border-style property with the value 'dashed' sets the border to be dashed.",
  },
  {
    question:
      "Which property is used to control the alignment of items within a grid container along the block axis?",
    options: [
      "align-items",
      "justify-items",
      "align-content",
      "justify-content",
    ],
    correctAnswer: "align-items",
    explanation:
      "The align-items property aligns items within a grid container along the block axis (usually vertical).",
  },
  {
    question:
      "How do you create a CSS rule that applies to elements with a specific class but only if they are not the first child of their parent?",
    options: [
      ":not(:first-child)",
      ":not(:nth-child(1))",
      ":first-child:not(.class-name)",
      ":not(:nth-of-type(1))",
    ],
    correctAnswer: ":not(:nth-child(1))",
    explanation:
      "The :not(:nth-child(1)) selector applies styles to elements that are not the first child of their parent.",
  },
  {
    question:
      "Which property is used to control the flex container's alignment of items along the cross axis?",
    options: ["align-items", "justify-content", "flex-align", "align-content"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property aligns items along the cross axis of a flex container.",
  },
  {
    question:
      "How do you create a CSS rule that applies to every second element of a specific type?",
    options: [
      ":nth-of-type(2n)",
      ":nth-child(2n)",
      ":nth-child(even)",
      ":nth-type(2)",
    ],
    correctAnswer: ":nth-of-type(2n)",
    explanation:
      "The :nth-of-type(2n) selector applies styles to every second element of a specified type.",
  },
  {
    question:
      "Which property is used to control the horizontal alignment of inline elements in CSS?",
    options: ["text-align", "align-items", "justify-content", "inline-align"],
    correctAnswer: "text-align",
    explanation:
      "The text-align property controls the horizontal alignment of inline elements within their containing block.",
  },
  {
    question:
      "How do you apply a CSS style to an element when it is active (e.g., during a mouse click)?",
    options: [":active", ":focus", ":hover", ":visited"],
    correctAnswer: ":active",
    explanation:
      "The :active pseudo-class applies styles to an element when it is being activated by the user, such as during a mouse click.",
  },
  {
    question:
      "Which property is used to set the CSS grid’s columns to be of fixed size?",
    options: [
      "grid-template-columns: 100px;",
      "columns: fixed;",
      "column-width: 100px;",
      "grid-columns: fixed;",
    ],
    correctAnswer: "grid-template-columns: 100px;",
    explanation:
      "The grid-template-columns property with a fixed value sets the width of each column in the grid layout.",
  },
  {
    question:
      "How do you create a CSS transition effect with a duration of 0.5 seconds?",
    options: [
      "transition: all 0.5s;",
      "transition-duration: 0.5s;",
      "transition-effect: 0.5s;",
      "transition-time: 0.5s;",
    ],
    correctAnswer: "transition: all 0.5s;",
    explanation:
      "The transition property with 'all 0.5s' applies a transition effect to all properties over 0.5 seconds.",
  },
  {
    question:
      "Which property is used to apply a style to the first letter of a block-level element?",
    options: ["::first-letter", ":first-letter", "::first-line", ":first-line"],
    correctAnswer: "::first-letter",
    explanation:
      "The ::first-letter pseudo-element applies styles to the first letter of a block-level element.",
  },
  {
    question:
      "How do you make a CSS grid container’s rows to have a flexible height?",
    options: [
      "grid-template-rows: auto;",
      "grid-rows: flexible;",
      "row-size: auto;",
      "rows: flexible;",
    ],
    correctAnswer: "grid-template-rows: auto;",
    explanation:
      "The grid-template-rows property with the value 'auto' allows rows to adjust their height based on their content.",
  },
  {
    question: "Which property is used to apply a shadow effect to text in CSS?",
    options: ["text-shadow", "shadow-text", "text-effect", "shadow"],
    correctAnswer: "text-shadow",
    explanation:
      "The text-shadow property applies a shadow effect to text, allowing you to create various visual effects.",
  },
  {
    question:
      "How do you set the width of a CSS grid column to a fraction of the available space?",
    options: [
      "grid-template-columns: 1fr;",
      "column-width: 1fr;",
      "column-size: auto;",
      "grid-columns: auto;",
    ],
    correctAnswer: "grid-template-columns: 1fr;",
    explanation:
      "The grid-template-columns property with the value '1fr' sets the width of columns to a fraction of the available space.",
  },
  {
    question:
      "Which property is used to set the distance between elements and the edge of their container in CSS Grid Layout?",
    options: ["grid-gap", "spacing", "grid-spacing", "gap"],
    correctAnswer: "gap",
    explanation:
      "The gap property (formerly grid-gap) sets the distance between elements in a grid layout.",
  },
  {
    question:
      "How do you center a block element horizontally within its parent container?",
    options: [
      "margin: 0 auto;",
      "text-align: center;",
      "align-items: center;",
      "justify-content: center;",
    ],
    correctAnswer: "margin: 0 auto;",
    explanation:
      "The margin: 0 auto; property centers a block element horizontally within its parent container.",
  },
  {
    question:
      "Which property is used to set the CSS grid’s columns to be of minimum size?",
    options: [
      "grid-template-columns: minmax(100px, 1fr);",
      "min-column-size: 100px;",
      "columns: minmax(100px, auto);",
      "grid-columns: minmax(100px, 1fr);",
    ],
    correctAnswer: "grid-template-columns: minmax(100px, 1fr);",
    explanation:
      "The grid-template-columns property with minmax(100px, 1fr) sets columns to have a minimum size of 100px and grow to fill the available space.",
  },
  {
    question: "How do you apply a CSS style to the last element of a list?",
    options: [
      ":last-of-type",
      ":last-child",
      ":nth-last-child(1)",
      ":nth-of-type(last)",
    ],
    correctAnswer: ":last-child",
    explanation:
      "The :last-child pseudo-class applies styles to the last child element of its parent.",
  },
  {
    question:
      "Which property is used to control the visibility of an element while still taking up space in the layout?",
    options: [
      "visibility: visible;",
      "display: block;",
      "opacity: 1;",
      "position: relative;",
    ],
    correctAnswer: "visibility: visible;",
    explanation:
      "The visibility property controls whether an element is visible or not, while still taking up space in the layout. 'visibility: hidden;' can be used to hide the element but keep its space.",
  },
  {
    question:
      "How do you create a CSS rule that applies only to elements with a specific class and a specific attribute?",
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
];
