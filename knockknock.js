let message = "Knock Knock";
let response = "Whose there?";
let jokes = [["Tank", "You’re welcome."], ["Luke", "Luke through the peep hole and find out."], 
["Alice", "Alice fair in love and war."], ["Honey bee", "Honey bee a dear and get that for me please!"], 
["A little old lady", "Hey, you can yodel!"], ["Orange", "Orange you going to let me in?"], ["Nana", "Nana your business!"], 
["Needle", "Needle little help right now!"], ["Boo", "Don’t cry, it’s just a joke."], ["Mustache", "I mustache you a question."]
]

function joker () {
    let random = Math.random();
let totalJokes = jokes.length;
let randIndex = Math.floor(random * totalJokes);
let randomJokes = jokes[randIndex];
const jokeFirst = randomJokes[0];
let jokeSecond = randomJokes[1];
return console.log(`${jokeFirst}. 
${jokeFirst} who? 
${jokeSecond}`);
}





console.log(message);
console.log(response);
joker(jokes);


