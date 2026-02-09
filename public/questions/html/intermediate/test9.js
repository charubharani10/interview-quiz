export const test9 = [
  {
    question:
      "How do you define a form input that allows users to enter a number with specific range limits?",
    options: [
      '<input type="number" min="..." max="...">',
      '<input type="range" min="..." max="...">',
      '<input type="text" range="...">',
      '<input type="number" limit="...">',
    ],
    correctAnswer: '<input type="number" min="..." max="...">',
    explanation:
      "The 'min' and 'max' attributes of the <input type='number'> element specify the range of values allowed.",
  },
  {
    question:
      "Which HTML5 element is used to define a container for navigation links?",
    options: ["<nav>", "<navigation>", "<menu>", "<links>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element is used to create a navigation section in a web document.",
  },
  {
    question:
      "How do you specify a fallback image source for different display resolutions?",
    options: [
      "Use the srcset attribute in the <img> tag",
      "Use the sizes attribute in the <img> tag",
      "Use the media attribute in the <img> tag",
      "Use the fallback attribute in the <img> tag",
    ],
    correctAnswer: "Use the srcset attribute in the <img> tag",
    explanation:
      "The 'srcset' attribute allows you to specify different image sources for different screen resolutions or display sizes.",
  },
  {
    question: "What attribute specifies that an image should be responsive?",
    options: ["srcset", "responsive", "sizes", "media"],
    correctAnswer: "srcset",
    explanation:
      "The 'srcset' attribute is used to provide multiple image sources to ensure the image is responsive to different screen sizes.",
  },
  {
    question:
      "Which HTML5 element represents an area of the document intended for supplemental content?",
    options: ["<aside>", "<section>", "<sidebar>", "<extra>"],
    correctAnswer: "<aside>",
    explanation:
      "The <aside> element is used for content that is tangentially related to the content around it, such as sidebars or pull quotes.",
  },
  {
    question: "How do you define a table that should be used for sorting data?",
    options: [
      "Use JavaScript to add sorting functionality",
      "Use the sortable attribute on the <table>",
      'Use the <table sortable="true">',
      "Use CSS to style the table for sorting",
    ],
    correctAnswer: "Use JavaScript to add sorting functionality",
    explanation:
      "Tables themselves do not have a sorting attribute; instead, JavaScript is used to add sorting functionality to table data.",
  },
  {
    question:
      "Which HTML5 attribute specifies that a form input field should be required?",
    options: ["required", "mandatory", "validate", "needed"],
    correctAnswer: "required",
    explanation:
      "The 'required' attribute makes a form input field mandatory, preventing form submission until the field is filled out.",
  },
  {
    question: "What is the purpose of the itemprop attribute in HTML?",
    options: [
      "Defines a property of an item in structured data",
      "Specifies the type of the item",
      "Sets the content of the item",
      "Provides a reference to the item",
    ],
    correctAnswer: "Defines a property of an item in structured data",
    explanation:
      "The 'itemprop' attribute is used in conjunction with Schema.org to specify properties of an item in structured data for better SEO and data clarity.",
  },
  {
    question:
      "How do you define a section of a document for dynamic content updates?",
    options: ['<div id="content">', "<dynamic>", "<update>", "<section>"],
    correctAnswer: '<div id="content">',
    explanation:
      "Using <div id='content'> allows for targeted updates of a specific section using JavaScript or other client-side technologies.",
  },
  {
    question:
      "Which HTML5 element is used to define a set of form controls that can be grouped together?",
    options: ["<fieldset>", "<group>", "<section>", "<container>"],
    correctAnswer: "<fieldset>",
    explanation:
      "The <fieldset> element groups related form controls and labels, often used in conjunction with <legend> to provide a caption.",
  },
  {
    question: "How do you define a block of content that should be emphasized?",
    options: ["<strong>", "<highlight>", "<emphasis>", "<mark>"],
    correctAnswer: "<strong>",
    explanation:
      "The <strong> element is used to give strong importance to the enclosed text, typically rendering it in bold.",
  },
  {
    question:
      "Which HTML5 element represents a self-contained piece of content that can be distributed independently?",
    options: ["<article>", "<section>", "<div>", "<content>"],
    correctAnswer: "<article>",
    explanation:
      "The <article> element represents a self-contained piece of content that could be distributed independently, such as a blog post or news article.",
  },
  {
    question: "How do you create a link to a specific part of the same page?",
    options: [
      'Use an anchor tag with href="#section-id"',
      'Use a link tag with href="section-id"',
      'Use the <link> tag with href="#section-id"',
      "Use the id attribute to jump to the section",
    ],
    correctAnswer: 'Use an anchor tag with href="#section-id"',
    explanation:
      "An anchor tag with an href attribute pointing to an ID on the same page creates a link that jumps to that specific part of the page.",
  },
  {
    question:
      "Which HTML5 element is used to include external content in an HTML document?",
    options: ["<iframe>", "<embed>", "<object>", "<include>"],
    correctAnswer: "<iframe>",
    explanation:
      "The <iframe> element is used to embed another document within the current HTML document, allowing for inclusion of external content.",
  },
  {
    question:
      "What attribute is used to define the relationship between the current document and a linked document?",
    options: ["rel", "href", "type", "src"],
    correctAnswer: "rel",
    explanation:
      "The 'rel' attribute specifies the relationship between the current document and the linked document, such as 'stylesheet' for linking CSS files.",
  },
  {
    question:
      "How do you define a form control that allows users to enter multiple lines of text?",
    options: [
      "<textarea>",
      '<input type="text">',
      "<field>",
      '<input type="multi-line">',
    ],
    correctAnswer: "<textarea>",
    explanation:
      "The <textarea> element is used to create a multi-line text input field, allowing users to enter more text than a single-line input field.",
  },
  {
    question:
      "Which HTML5 attribute specifies a link that should be preloaded or prefetched?",
    options: [
      'rel="preload"',
      'rel="prefetch"',
      'link="preload"',
      'link="prefetch"',
    ],
    correctAnswer: 'rel="preload"',
    explanation:
      "The 'rel' attribute with the value 'preload' indicates that the linked resource should be preloaded to improve performance.",
  },
  {
    question: "What does the type attribute in the <input> element specify?",
    options: [
      "The type of input control to display",
      "The style of the input control",
      "The size of the input control",
      "The default value of the input control",
    ],
    correctAnswer: "The type of input control to display",
    explanation:
      "The 'type' attribute specifies the kind of input control, such as 'text', 'password', or 'number', and determines its behavior.",
  },
  {
    question: "How do you define an area in an image map in HTML?",
    options: ["<area>", "<map>", "<imgmap>", "<hotspot>"],
    correctAnswer: "<area>",
    explanation:
      "The <area> element is used to define clickable areas within an image map, enabling interactive regions in an image.",
  },
  {
    question:
      "Which HTML5 element is used to define the content of a web page that is visible to users?",
    options: ["<body>", "<section>", "<content>", "<main>"],
    correctAnswer: "<body>",
    explanation:
      "The <body> element contains all the contents of an HTML document that are visible to users, such as text, images, and other media.",
  },
];
