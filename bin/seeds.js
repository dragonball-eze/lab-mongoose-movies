require("../db");
const Celebrity = require("../models/celebrity")

const celebrities = [
    {
      name: "Shawn Carter aka 'Jay-Z'",
      occupation: "Investor",
      catchPhrase: "'I am not a businessman; I am a business, man!'",
    },
    {
        name: "Zlatan Ibrahimovic",
        occupation: "Footballer",
        catchPhrase: "'I can't help but laugh at how perfect I am.'",
    },
    {
        name: "Keanu Reeves",
        occupation: "Actor",
        catchPhrase: "'The Matrix was not a movie, it is a documentary'",
    },
]

Celebrity.insertMany(celebrities).then((celebritiesFromDB) => {
    console.log(`Celebrities created - ${celebritiesFromDB.length}`);
});