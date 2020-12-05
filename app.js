
var authorQuote = document.getElementById('authorQuote');
var quoteGeneratorBtn = document.getElementById('quoteBtn');
var authorName = document.getElementById('authorName');

var famousQuotes = [
{author: 'John Lennon', quote:"Life is what happens when you're busy making other plans."},
{author: 'Hans Gruber', quote:"People die, yes, but words don't unless they are lost."},
{author: 'james Cameron', quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"},
{author: 'Benjamin Franklin', quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn."},
{author: 'Helen Keller', quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."},
{author: 'Aristotle', quote:"It is during our darkest moments that we must focus to see the light."},
{author: 'Henry David Thoreau', quote:"Go confidently in the direction of your dreams! Live the life you've imagined."}
];

function generateQuote(){

  var random = Math.floor(Math.random() * famousQuotes.length);
  authorQuote.textContent = famousQuotes[random].quote;
  authorName.textContent = famousQuotes[random].author;

}

quoteGeneratorBtn.addEventListener('click', generateQuote);



