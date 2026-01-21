/* spell-checker: disable */
const sentences = [
  // "Wibbly wobbly, timey wimey",
  "Allons-y!",
  "Geronimo!",
  "We're all stories in the end. Just make it a good one.",
  "Do or do not. There is no try.",
  "May the Force be with you.",
  // "So Long, and Thanks for All the Fish",
  "Don't Panic!",
  "42",
  // "It's dangerous to go alone! Take this.",
  "With great power comes great responsibility.",
  "Even the smallest person can change the course of the future.",
  "sudo make me a sandwich",
  "Talk is cheap. Show me the code.",
  // "Live long and prosper.",
  "It works on my machine.",
  "Well, there's your problem.",
];

const getRandomSentence = () => sentences[Math.floor(Math.random() * sentences.length)];

export default getRandomSentence;
