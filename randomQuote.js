// Quote list for random selection.
const QUOTES = [
    {'author': 'Jim Rohn',
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus',
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra',
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy',
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela',
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard',
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Franklin D.Roosevelt',
     'quote': 'When you reach the end of your rope, tie a knot in it and hang on.'
    },
    {'author': 'Heraclitus',
     'quote': 'There is nothing permanent except change.'
    },
    {'author': 'Indira Gandhi',
     'quote': 'You cannot shake hands with a clenched fist.'
    },
    {'author': 'Niccolo Machiavelli',
     'quote': 'It is better to be feared than loved, if you cannot be both.'
    },
    {'author': 'Leonardo da Vinci',
     'quote': 'Learning never exhausts the mind.'
    },
    {'author': 'Jane Austen',
     'quote': 'There is no charm equal to tenderness of heart.'
    },
    {'author': 'Edgar Allan Poe',
     'quote': 'All that we see or seem is but a dream within a dream.'
    },
    {'author': 'Rainer Maria Rilke',
     'quote': 'The only journey is the one within.'
    },
    {'author': 'Will Rogers',
     'quote': 'Good judgment comes from experience, and a lot of that comes from bad judgment.'
    },
    {'author': 'William Blake',
     'quote': 'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.'
    },
    {'author': 'Khalil Gibran',
     'quote': 'Life without love is like a tree without blossoms or fruit.'
    },
    {'author': 'Aesop',
     'quote': 'No act of kindness, no matter how small, is ever wasted.'
    },
    {'author': 'George Washington',
     'quote': 'It is far better to be alone, than to be in bad company.'
    },
    {'author': 'Napoleon Hill',
     'quote': 'If you cannot do great things, do small things in a great way.'
    },
    {'author': 'Susan B. Anthony',
     'quote': 'Independence is happiness.'
    },
    {'author': 'Sun Tzu',
     'quote': 'The supreme art of war is to subdue the enemy without fighting.'
    },
    {'author': 'Sigmund Freud',
     'quote': 'Being entirely honest with oneself is a good exercise.'
    },
    {'author': 'George Orwell',
     'quote': 'Happiness can exist only in acceptance.'
    },
    {'author': 'John Galsworthy',
     'quote': 'Love has no age, no limit; and no death.'
    },
    {'author': 'Albert Einstein',
     'quote': 'You can\'t blame gravity for falling in love.'
    },
    {'author': 'Thomas Jefferson',
     'quote': 'Honesty is the first chapter in the book of wisdom.'
    },
    {'author': 'Lao Tzu',
     'quote': 'The journey of a thousand miles begins with one step.'
    },
    {'author': 'H. Jackson Brown, Jr.',
     'quote': 'The best preparation for tomorrow is doing your best today.'
    },
    {'author': 'J. R. R. Tolkien',
     'quote': 'Not all those who wander are lost.'
    },
    {'author': 'Benjamin Franklin',
     'quote': 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
    },
    {'author': 'Thomas Aquinas',
     'quote': 'There is nothing on this earth more to be prized than true friendship.'
    },
    {'author': 'John C. Maxwell',
     'quote': 'A leader is one who knows the way, goes the way, and shows the way.'
    },
    {'author': 'George Sand',
     'quote': 'There is only one happiness in this life, to love and be loved.'
    },
];
// Function that randomly generate quote from the quote list above.
function newQuote() {
    let randomNumber = Math.floor(Math.random()*QUOTES.length)
    document.querySelector("#quoteContent").innerHTML = `"${QUOTES[randomNumber].quote}"`
    document.querySelector("#quoteAuthor").innerHTML = `- ${QUOTES[randomNumber].author}`
}
// Event Listener for the click event.
const BUTTON = document.querySelector(".button button");
if (BUTTON.addEventListener){
  BUTTON.addEventListener("click", newQuote, false);
} else {
  BUTTON.attachEvent("onclick", newQuote); //for IE5-8
}
