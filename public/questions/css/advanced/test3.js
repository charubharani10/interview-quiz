export const test3 = [
  {
    question:
      "How do you center an element vertically within its parent using Flexbox?",
    options: [
      "Using align-items: center",
      "Using justify-content: center",
      "Using align-content: center",
      "Using margin: auto",
    ],
    correctAnswer: "Using align-items: center",
    explanation:
      "The align-items: center property centers flex items vertically within the flex container.",
  },
  {
    question:
      "Which property is used to define the distance between grid items in a CSS Grid Layout?",
    options: ["gap", "item-spacing", "grid-gap", "grid-spacing"],
    correctAnswer: "gap",
    explanation:
      "The gap property defines the space between grid items in a CSS Grid Layout.",
  },
  {
    question: "What is the purpose of the text-overflow property in CSS?",
    options: [
      "Controls how text overflows its container",
      "Adds ellipsis to overflowing text",
      "Sets the color of overflowing text",
      "Controls the font size of overflowing text",
    ],
    correctAnswer: "Controls how text overflows its container",
    explanation:
      "The text-overflow property specifies how the overflowed content should be handled, such as showing ellipsis or clipping the text.",
  },
  {
    question:
      "Which CSS property controls the visibility of an element without affecting its layout?",
    options: ["visibility", "opacity", "display", "clip"],
    correctAnswer: "visibility",
    explanation:
      "The visibility property controls whether an element is visible or not, but it does not affect the layout or position of the element.",
  },
  {
    question:
      "How do you apply a CSS transition to an element when its state changes?",
    options: [
      "Using transition shorthand with property, duration, and timing-function",
      "Using animation property with keyframes",
      "Using transform property",
      "Using transition-duration property",
    ],
    correctAnswer:
      "Using transition shorthand with property, duration, and timing-function",
    explanation:
      "The transition shorthand property allows you to specify which properties to animate, how long the animation should last, and the timing function.",
  },
  {
    question: "What does the transform: translate() property do in CSS?",
    options: [
      "Moves an element from its original position",
      "Rotates an element",
      "Scales an element",
      "Skews an element",
    ],
    correctAnswer: "Moves an element from its original position",
    explanation:
      "The transform: translate() property moves an element from its original position along the X and Y axes.",
  },
  {
    question:
      "Which property is used to set the alignment of items along the cross axis in Flexbox?",
    options: ["align-items", "justify-content", "flex-align", "align-content"],
    correctAnswer: "align-items",
    explanation:
      "The align-items property sets the alignment of flex items along the cross axis (vertical axis if flex-direction is row).",
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
      "The selector .class-name[attribute] applies styles to elements with the specified class and attribute.",
  },
  {
    question:
      "Which property is used to create a flexible layout with flex items in CSS?",
    options: ["flex", "flex-direction", "display: flex", "flex-container"],
    correctAnswer: "display: flex",
    explanation:
      "The display: flex property is used to create a flexible layout by turning the container into a flex container.",
  },
  {
    question:
      "How do you make an element take up the full width of its parent container?",
    options: [
      "Using width: 100%",
      "Using max-width: 100%",
      "Using flex: 1",
      "Using display: block",
    ],
    correctAnswer: "Using width: 100%",
    explanation:
      "The width: 100% property ensures that the element takes up the full width of its parent container.",
  },
  {
    question: "What does the grid-auto-flow property do in CSS Grid Layout?",
    options: [
      "Controls the placement of grid items automatically",
      "Defines the flow of grid items in the container",
      "Sets the direction of grid item placement",
      "Defines the grid item size automatically",
    ],
    correctAnswer: "Controls the placement of grid items automatically",
    explanation:
      "The grid-auto-flow property controls how grid items are placed in the grid container when the explicit grid lines are not enough.",
  },
  {
    question:
      "How do you create a CSS rule that only applies to elements with a specific attribute value?",
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
    question: "What does the contain property do in CSS?",
    options: [
      "Limits the scope of an element's styles to its own subtree",
      "Defines the containment context for an element",
      "Adjusts the size of an element’s content",
      "Controls the visibility of an element’s children",
    ],
    correctAnswer: "Limits the scope of an element's styles to its own subtree",
    explanation:
      "The contain property limits the scope of an element’s styles and layout to its own subtree, improving performance.",
  },
  {
    question:
      "How do you make an element fixed in position but still allow scrolling?",
    options: [
      "Using position: fixed",
      "Using position: absolute with top and left",
      "Using position: sticky with top",
      "Using overflow: auto",
    ],
    correctAnswer: "Using position: fixed",
    explanation:
      "The position: fixed property makes an element stay in the same position relative to the viewport, allowing for scrolling of other content.",
  },
  {
    question:
      "Which CSS property is used to specify the size of an element's border?",
    options: [
      "border-width",
      "border-size",
      "border-thickness",
      "border-dimension",
    ],
    correctAnswer: "border-width",
    explanation:
      "The border-width property specifies the thickness of an element's border.",
  },
  {
    question: "What does the flex-shrink property do in Flexbox?",
    options: [
      "Defines how much a flex item can shrink relative to other flex items",
      "Sets the size of a flex item",
      "Defines the alignment of flex items",
      "Controls the order of flex items",
    ],
    correctAnswer:
      "Defines how much a flex item can shrink relative to other flex items",
    explanation:
      "The flex-shrink property determines how much a flex item should shrink relative to other flex items when there is not enough space.",
  },
  {
    question: "How do you hide an element but keep it in the document flow?",
    options: [
      "Using visibility: hidden",
      "Using display: none",
      "Using opacity: 0",
      "Using position: absolute with left: -9999px",
    ],
    correctAnswer: "Using visibility: hidden",
    explanation:
      "The visibility: hidden property hides an element while maintaining its space in the document flow.",
  },
  {
    question: "Which property is used to set the color of an element's text?",
    options: ["color", "text-color", "font-color", "text-style"],
    correctAnswer: "color",
    explanation:
      "The color property is used to set the color of the text within an element.",
  },
  {
    question: "What does the text-transform property do in CSS?",
    options: [
      "Alters the case of text",
      "Sets the text alignment",
      "Adjusts the spacing of text",
      "Changes the font style of text",
    ],
    correctAnswer: "Alters the case of text",
    explanation:
      "The text-transform property alters the case of text, such as converting it to uppercase, lowercase, or capitalized.",
  },
  {
    question:
      "How do you create a fixed-size grid item within a CSS Grid Layout?",
    options: [
      "Using grid-column and grid-row with fixed sizes",
      "Using flex-basis in Flexbox layout",
      "Setting fixed width and height properties",
      "Using grid-template-areas with specific sizes",
    ],
    correctAnswer: "Using grid-column and grid-row with fixed sizes",
    explanation:
      "To create a fixed-size grid item, you use the grid-column and grid-row properties to define its size explicitly.",
  },
];
