export const test1 = [
  {
    question: "What HTML5 API allows you to store data on the client-side?",
    options: [
      "Web Storage API",
      "Web SQL API",
      "IndexedDB API",
      "Service Workers API",
    ],
    correctAnswer: "Web Storage API",
    explanation:
      "The Web Storage API provides mechanisms for storing data in the browser, including localStorage and sessionStorage.",
  },
  {
    question:
      "Which HTML5 element is used to specify a group of related input elements?",
    options: ["<fieldset>", "<group>", "<section>", "<inputgroup>"],
    correctAnswer: "<fieldset>",
    explanation:
      "The <fieldset> element is used to group related form controls and labels within a <form>.",
  },
  {
    question:
      "How do you specify the character encoding for an HTML5 document?",
    options: [
      '<meta charset="UTF-8">',
      '<meta encoding="UTF-8">',
      '<meta charencoding="UTF-8">',
      '<meta content="UTF-8">',
    ],
    correctAnswer: '<meta charset="UTF-8">',
    explanation:
      "The <meta charset='UTF-8'> tag specifies the character encoding for the HTML document.",
  },
  {
    question:
      "What HTML5 element is used to define a container for content that is not a section or article?",
    options: ["<div>", "<section>", "<article>", "<container>"],
    correctAnswer: "<div>",
    explanation:
      "The <div> element is a generic container that can be used to group other elements and apply styles or scripts.",
  },
  {
    question: "Which HTML5 element is used to define a time or date?",
    options: ["<time>", "<date>", "<datetime>", "<calendar>"],
    correctAnswer: "<time>",
    explanation:
      "The <time> element is used to represent a specific period in time, such as a date or a time.",
  },
  {
    question: "What is the purpose of the data-* attributes in HTML5?",
    options: [
      "To store custom data in HTML elements",
      "To define metadata",
      "To create custom elements",
      "To store style information",
    ],
    correctAnswer: "To store custom data in HTML elements",
    explanation:
      "The data-* attributes are used to store custom data on HTML elements, which can be accessed via JavaScript.",
  },
  {
    question: "Which HTML5 element is used for defining a navigation section?",
    options: ["<nav>", "<menu>", "<links>", "<navigation>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element is used to define a navigation section containing links to other pages or sections.",
  },
  {
    question: "How do you include a video in an HTML5 document?",
    options: [
      '<video src="video.mp4" controls>',
      '<media src="video.mp4">',
      '<video file="video.mp4">',
      '<embed src="video.mp4">',
    ],
    correctAnswer: '<video src="video.mp4" controls>',
    explanation:
      "The <video> element allows you to embed a video in the document, and the 'controls' attribute adds playback controls.",
  },
  {
    question:
      "What attribute is used to specify an alternative text for an image in HTML?",
    options: ["alt", "title", "desc", "text"],
    correctAnswer: "alt",
    explanation:
      "The 'alt' attribute provides alternative text for images, which is displayed if the image cannot be shown.",
  },
  {
    question: "Which HTML5 element is used to create a local storage database?",
    options: ["<localStorage>", "<sessionStorage>", "<storage>", "<database>"],
    correctAnswer: "<localStorage>",
    explanation:
      "The localStorage API is used for creating and managing a persistent local storage database in the browser.",
  },
  {
    question: "How do you define a responsive image in HTML5?",
    options: [
      '<img src="image.jpg" srcset="image.jpg 1x, image@2x.jpg 2x">',
      '<img src="image.jpg" media="screen and (max-width: 600px)">',
      '<img src="image.jpg" sizes="(max-width: 600px) 100vw">',
      '<picture src="image.jpg" media="(max-width: 600px)">',
    ],
    correctAnswer:
      '<img src="image.jpg" srcset="image.jpg 1x, image@2x.jpg 2x">',
    explanation:
      "The 'srcset' attribute allows you to provide different image sources for different screen resolutions.",
  },
  {
    question:
      "What HTML5 element is used to define a template that can be instantiated later in the document?",
    options: ["<template>", "<model>", "<placeholder>", "<instance>"],
    correctAnswer: "<template>",
    explanation:
      "The <template> element is used to define reusable chunks of HTML that can be instantiated using JavaScript.",
  },
  {
    question: "How do you create an offline application using HTML5?",
    options: [
      "By using the Application Cache API",
      "By using the Service Workers API",
      "By using LocalStorage API",
      "By using Web Workers API",
    ],
    correctAnswer: "By using the Service Workers API",
    explanation:
      "Service Workers API allows you to create offline applications by caching resources and intercepting network requests.",
  },
  {
    question:
      "Which HTML5 element is used to define a section of a document that is independent and self-contained?",
    options: ["<section>", "<div>", "<aside>", "<article>"],
    correctAnswer: "<article>",
    explanation:
      "The <article> element represents a self-contained piece of content that can be independently distributed or reused.",
  },
  {
    question:
      "What is the purpose of the async attribute in HTML5 for script tags?",
    options: [
      "To load the script asynchronously",
      "To execute the script in parallel with other scripts",
      "To execute the script synchronously",
      "To delay the execution of the script",
    ],
    correctAnswer: "To load the script asynchronously",
    explanation:
      "The 'async' attribute allows the script to be downloaded asynchronously without blocking the rendering of the page.",
  },
  {
    question:
      "How do you create a form that submits data using the POST method in HTML5?",
    options: [
      '<form action="url" method="post">',
      '<form action="url" method="submit">',
      '<form action="url" type="post">',
      '<form url="url" method="post">',
    ],
    correctAnswer: '<form action="url" method="post">',
    explanation:
      "The 'method' attribute of the <form> element specifies the HTTP method (POST or GET) to be used when submitting the form.",
  },
  {
    question:
      "Which HTML5 attribute specifies the maximum allowed value for an input element?",
    options: ["max", "value", "limit", "range"],
    correctAnswer: "max",
    explanation:
      "The 'max' attribute defines the maximum value that a user can input into the field.",
  },
  {
    question: "What HTML5 element is used to define a progress bar?",
    options: ["<progress>", "<bar>", "<meter>", "<status>"],
    correctAnswer: "<progress>",
    explanation:
      "The <progress> element represents the progress of a task or process.",
  },
  {
    question: "How do you specify the source for a web audio file in HTML5?",
    options: [
      '<audio src="audio.mp3" controls>',
      '<sound src="audio.mp3">',
      '<media src="audio.mp3">',
      '<audio file="audio.mp3">',
    ],
    correctAnswer: '<audio src="audio.mp3" controls>',
    explanation:
      "The <audio> element is used to embed audio content, with the 'src' attribute specifying the audio file.",
  },
  {
    question:
      "Which HTML5 element is used to define a form input that allows for the entry of a URL?",
    options: [
      '<input type="url">',
      '<input type="link">',
      '<input type="address">',
      '<input type="text">',
    ],
    correctAnswer: '<input type="url">',
    explanation:
      "The 'url' type specifies that the input field should validate that the entered value is a URL.",
  },
];
