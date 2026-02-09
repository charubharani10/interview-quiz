export const test3 = [
  {
    question:
      "How do you apply styles to elements that are hovered over in CSS?",
    options: [
      "element:hover { ... }",
      "element:focus { ... }",
      "element:active { ... }",
      "element:visited { ... }",
    ],
    correctAnswer: "element:hover { ... }",
    explanation:
      "To apply styles when an element is hovered over by the cursor, use the 'hover' pseudo-class selector, e.g., 'element:hover { ... }'.",
  },
  {
    question: "Which CSS property is used to change the appearance of links?",
    options: ["a { ... }", "link { ... }", "a:link { ... }", "a:hover { ... }"],
    correctAnswer: "a { ... }",
    explanation:
      "To change the appearance of all links, use the 'a' element selector. For specific states like visited or hovered, use 'a:visited' or 'a:hover'.",
  },
  {
    question: "How do you hide the overflow of an element's content in CSS?",
    options: [
      "overflow: hidden;",
      "overflow: visible;",
      "overflow: scroll;",
      "overflow: auto;",
    ],
    correctAnswer: "overflow: hidden;",
    explanation:
      "The 'overflow: hidden;' property hides any content that overflows the element's box, preventing it from being visible or scrollable.",
  },
  {
    question:
      "Which property is used to set the transparency level of an element in CSS?",
    options: ["opacity", "transparent", "alpha", "visibility"],
    correctAnswer: "opacity",
    explanation:
      "The 'opacity' property is used to set the transparency level of an element, where '0' is fully transparent and '1' is fully opaque.",
  },
  {
    question:
      "How do you apply a CSS style to only the first child element of a parent?",
    options: [":first-child", ":nth-child(1)", ":last-child", ":only-child"],
    correctAnswer: ":first-child",
    explanation:
      "To style only the first child element of a parent, use the ':first-child' pseudo-class selector.",
  },
  {
    question:
      "Which CSS property is used to set the border style of an element?",
    options: ["border-style", "border-color", "border-width", "border"],
    correctAnswer: "border-style",
    explanation:
      "The 'border-style' property is used to specify the style of the border, such as 'solid', 'dashed', or 'dotted'.",
  },
  {
    question: "How do you create a rounded border in CSS?",
    options: [
      "border-radius: 10px;",
      "border-style: rounded;",
      "corner-radius: 10px;",
      "radius-border: 10px;",
    ],
    correctAnswer: "border-radius: 10px;",
    explanation:
      "The 'border-radius' property is used to create rounded corners on an element's border.",
  },
  {
    question:
      "Which property is used to change the size of an element’s border in CSS?",
    options: [
      "border-width",
      "border-size",
      "border-thickness",
      "border-style",
    ],
    correctAnswer: "border-width",
    explanation:
      "The 'border-width' property specifies the thickness of an element's border.",
  },
  {
    question: "How do you center text within an element in CSS?",
    options: [
      "text-align: center;",
      "align-text: center;",
      "center-text: true;",
      "text-center: true;",
    ],
    correctAnswer: "text-align: center;",
    explanation:
      "To center text within an element, use the 'text-align: center;' property.",
  },
  {
    question: "Which property controls the position of an element's box model?",
    options: ["box-sizing", "position", "layout", "display"],
    correctAnswer: "box-sizing",
    explanation:
      "The 'box-sizing' property controls how the total width and height of an element are calculated, including padding and borders.",
  },
  {
    question:
      "How do you apply styles to elements with a specific attribute in CSS?",
    options: [
      "[attribute=value]",
      "attribute=value",
      ".attribute[value]",
      "element[attribute]",
    ],
    correctAnswer: "[attribute=value]",
    explanation:
      "To apply styles to elements with a specific attribute, use the attribute selector, e.g., '[attribute=value]'.",
  },
  {
    question: "What is the purpose of the overflow: auto; property in CSS?",
    options: [
      "Adds scrollbars if the content overflows",
      "Hides overflow content",
      "Expands the element to fit the content",
      "Clips overflow content",
    ],
    correctAnswer: "Adds scrollbars if the content overflows",
    explanation:
      "The 'overflow: auto;' property adds scrollbars to an element if its content overflows its box.",
  },
  {
    question: "How do you create a simple animation in CSS?",
    options: [
      "Use @keyframes and animation properties",
      "Use transition property",
      "Use transform property",
      "Use animation-duration property",
    ],
    correctAnswer: "Use @keyframes and animation properties",
    explanation:
      "To create a simple animation, define the keyframes using '@keyframes' and apply animation properties such as 'animation-name' and 'animation-duration'.",
  },
  {
    question:
      "Which property controls the spacing between lines of text in CSS?",
    options: ["line-height", "text-spacing", "line-spacing", "text-line"],
    correctAnswer: "line-height",
    explanation:
      "The 'line-height' property controls the vertical spacing between lines of text.",
  },
  {
    question: "How do you apply a CSS style to an element when it has focus?",
    options: [
      "element:focus { ... }",
      "element:hover { ... }",
      "element:active { ... }",
      "element:visited { ... }",
    ],
    correctAnswer: "element:focus { ... }",
    explanation:
      "To apply styles to an element when it has focus (e.g., when a user clicks on an input field), use the ':focus' pseudo-class selector.",
  },
  {
    question:
      "Which property is used to set the background color of an element in CSS?",
    options: ["background-color", "color", "bgcolor", "background"],
    correctAnswer: "background-color",
    explanation:
      "The 'background-color' property sets the background color of an element.",
  },
  {
    question: "How do you set the width and height of an element in CSS?",
    options: [
      "width and height",
      "size and height",
      "element-width and element-height",
      "box-size and element-size",
    ],
    correctAnswer: "width and height",
    explanation:
      "To set the width and height of an element, use the 'width' and 'height' properties.",
  },
  {
    question: "What is the use of the text-align property in CSS?",
    options: [
      "Aligns text horizontally within an element",
      "Aligns text vertically within an element",
      "Sets the font color",
      "Adjusts the font size",
    ],
    correctAnswer: "Aligns text horizontally within an element",
    explanation:
      "The 'text-align' property aligns text horizontally within its containing element.",
  },
  {
    question: "Which CSS property is used to set the opacity of an element?",
    options: ["opacity", "transparency", "visible", "filter"],
    correctAnswer: "opacity",
    explanation:
      "The 'opacity' property sets the transparency level of an element.",
  },
  {
    question: "How do you change the color of text in CSS?",
    options: [
      "color: #000000;",
      "text-color: #000000;",
      "font-color: #000000;",
      "background-color: #000000;",
    ],
    correctAnswer: "color: #000000;",
    explanation:
      "To change the color of text, use the 'color' property with the desired color value.",
  },
];
