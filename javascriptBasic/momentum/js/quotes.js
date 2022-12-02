const quotes = [
  {
    qoute:
      "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    qoute: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    qoute:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    qoute: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    qoute:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    qoute: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    qoute:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    qoute:
      "Success seems to be connected with action. Successful people keep moving.",
    author: "Conrad Hilton",
  },
  {
    qoute: "In order to succeed, we must first believe that we can.",
    author: "Nikos",
  },
  {
    qoute:
      "The only place where success comes before work is in the dictionary.",
    author: " Vidal Sassoon",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.qoute;
author.innerText = todaysQoute.author;
