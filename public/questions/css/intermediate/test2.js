export const test2 = [
  {
    question:
      "Which property is used to create a responsive design by controlling the size of elements based on the viewport width?",
    options: [
      "media queries",
      "viewport-size",
      "responsive-width",
      "screen-size",
    ],
    correctAnswer: "media queries",
    explanation:
      "Media queries allow you to apply different styles based on the viewport size, enabling responsive design.",
  },
  {
    question:
      "How do you set an element to be positioned relative to its normal position in CSS?",
    options: [
      "position: relative;",
      "position: absolute;",
      "position: fixed;",
      "position: static;",
    ],
    correctAnswer: "position: relative;",
    explanation:
      "The position: relative; property positions an element relative to its normal position, allowing for adjustments with top, right, bottom, and left properties.",
  },
  {
    question:
      "Which property is used to create a CSS grid with equal column widths?",
    options: [
      "grid-template-columns: repeat(auto-fit, minmax(0, 1fr));",
      "grid-columns: equal;",
      "column-width: auto;",
      "grid-columns: 1fr;",
    ],
    correctAnswer: "grid-template-columns: repeat(auto-fit, minmax(0, 1fr));",
    explanation:
      "The grid-template-columns property with repeat(auto-fit, minmax(0, 1fr)) creates a grid with equal-width columns that adjust based on the available space.",
  },
  {
    question:
      "How do you set the display of an element to inline-block in CSS?",
    options: [
      "display: inline-block;",
      "display: block-inline;",
      "display: inline;",
      "display: block;",
    ],
    correctAnswer: "display: inline-block;",
    explanation:
      "The display: inline-block; property sets an element to be inline with block properties, allowing for elements to be on the same line but with block-level formatting.",
  },
  {
    question:
      "Which property is used to control the opacity of an element in CSS?",
    options: ["opacity", "visibility", "transparency", "filter"],
    correctAnswer: "opacity",
    explanation:
      "The opacity property sets the transparency level of an element, where 1 is fully opaque and 0 is fully transparent.",
  },
  {
    question:
      "How do you set a CSS rule that applies only to elements with a specific attribute and value?",
    options: [
      "[attribute=value]",
      "[attribute=value]{ ... }",
      "element[attribute=value]",
      "element[attribute=value]{ ... }",
    ],
    correctAnswer: "[attribute=value]",
    explanation:
      "The [attribute=value] selector targets elements that have a specific attribute with a given value.",
  },
  {
    question:
      "Which property is used to create a flex container with horizontal alignment of its items?",
    options: [
      "flex-direction: row;",
      "flex-align: horizontal;",
      "flex-flow: row;",
      "flex-items: row;",
    ],
    correctAnswer: "flex-direction: row;",
    explanation:
      "The flex-direction property with the value 'row' arranges flex items horizontally within the flex container.",
  },
  {
    question:
      "How do you create a CSS rule that applies to all elements of a specific type?",
    options: [
      "element { ... }",
      "type-element { ... }",
      "element-type { ... }",
      "type { ... }",
    ],
    correctAnswer: "element { ... }",
    explanation:
      "To apply styles to all elements of a specific type, you use the element selector, e.g., div { ... }.",
  },
  {
    question:
      "Which property is used to set the size of the container’s columns in a grid layout?",
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
      "How do you apply a CSS style to all elements except the ones with a specific class?",
    options: [
      ":not(.class-name)",
      ":exclude(.class-name)",
      ":except(.class-name)",
      ":without(.class-name)",
    ],
    correctAnswer: ":not(.class-name)",
    explanation:
      "The :not(.class-name) selector applies styles to all elements that do not have the specified class.",
  },
  {
    question:
      "Which property is used to control the spacing between grid rows in CSS Grid Layout?",
    options: ["grid-row-gap", "row-spacing", "grid-gap", "row-gap"],
    correctAnswer: "row-gap",
    explanation:
      "The row-gap property controls the spacing between rows in a CSS Grid Layout.",
  },
  {
    question:
      "How do you make an element take up the entire width of its container in CSS?",
    options: [
      "width: 100%;",
      "size: 100%;",
      "container-width: 100%;",
      "element-width: 100%;",
    ],
    correctAnswer: "width: 100%;",
    explanation:
      "The width: 100%; property makes an element expand to occupy the full width of its containing element.",
  },
  {
    question:
      "Which property is used to apply a CSS transition effect to a specific property?",
    options: ["transition", "animation", "transform", "transition-effect"],
    correctAnswer: "transition",
    explanation:
      "The transition property allows you to apply smooth changes to CSS properties over a specified duration.",
  },
  {
    question:
      "How do you create a CSS rule that applies only when a user hovers over an element?",
    options: [":hover", ":focus", ":active", ":visited"],
    correctAnswer: ":hover",
    explanation:
      "The :hover pseudo-class applies styles to an element when the user places their cursor over it.",
  },
  {
    question:
      "Which property is used to control the alignment of items along the cross axis in a flex container?",
    options: ["align-items", "justify-content", "align-content", "flex-align"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property aligns flex items along the cross axis of the flex container, such as vertically.",
  },
  {
    question: "How do you apply a style to an element when it is in focus?",
    options: [":focus", ":active", ":hover", ":visited"],
    correctAnswer: ":focus",
    explanation:
      "The :focus pseudo-class applies styles to an element when it receives focus, such as when a user clicks or tabs into it.",
  },
  {
    question:
      "Which property is used to set the spacing between grid columns in CSS Grid Layout?",
    options: ["grid-column-gap", "column-spacing", "grid-gap", "column-gap"],
    correctAnswer: "column-gap",
    explanation:
      "The column-gap property sets the spacing between columns in a CSS Grid Layout.",
  },
  {
    question:
      "How do you set a CSS rule to apply to all elements inside a specific element?",
    options: [
      "parent-element * { ... }",
      "parent-element > * { ... }",
      "parent-element + * { ... }",
      "parent-element ~ * { ... }",
    ],
    correctAnswer: "parent-element * { ... }",
    explanation:
      "The selector parent-element * applies styles to all elements that are descendants of the specified parent element.",
  },
  {
    question:
      "Which property is used to control the size of the content area of a box in CSS?",
    options: ["box-sizing", "box-width", "content-size", "box-area"],
    correctAnswer: "box-sizing",
    explanation:
      "The box-sizing property allows you to control how the width and height of an element are calculated, including padding and border.",
  },
  {
    question:
      "How do you apply a CSS style to elements of a specific type within a parent element?",
    options: [
      "parent-element element { ... }",
      "parent-element + element { ... }",
      "parent-element > element { ... }",
      "parent-element ~ element { ... }",
    ],
    correctAnswer: "parent-element element { ... }",
    explanation:
      "The selector parent-element element targets all elements of a specific type that are descendants of the specified parent element.",
  },
];
