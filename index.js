

const quoteList = [
    {quote :'Forgive your enemies, but never forget their names.', author: 'John F. Kennedy'},
    {quote :"I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later.", author: "Mitch Hedberg"},
    {quote :"Gentlemen, you can't fight in here. This is the war room.",author : "Dr. Strangelove"},
    {quote :"My mother always used to say: The older you get, the better you get, unless you’re a banana. ",author : "Rose, The Golden Girls"},
    {quote :"Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve.",author : "David Letterman"},
    {quote :"Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",author : "Jack Handey"},
    {quote :"Clothes make the man. Naked people have little or no influence in society.",author : "Mark Twain"},
    {quote :"I love being married. It's so great to find that one special person you want to annoy for the rest of your life.",author : "Rita Rudner"}
    
    
]
function generateQuote(){
    const randomji = Math.floor( 8 * Math.random());
    const obj = quoteList[randomji];

    //const afterQuote = obj.quote;
    //const afterAuth = obj.author;

    var quoteHolder = document.querySelector('.quote');
    var authorHolder = document.querySelector('.author');

    quoteHolder.innerHTML='';
    authorHolder.innerHTML='';

    quoteHolder.innerHTML = "\""+obj.quote+"\"";
    authorHolder.innerHTML = obj.author;



}

const generateButton = document.querySelector('#button');
generateButton.addEventListener('click',generateQuote);



