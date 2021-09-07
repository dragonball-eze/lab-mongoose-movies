require("../db");
const Movie = require("../models/movie")

const movies = [
    {
      title: "The Godfather",
      genre: "Drama",
      plot: "A son inherits the notorious business of his father: Godfather of a Mafia",
      cast: ["Marlon Brandon", "Al Pacino", "Robert de Niro"],
    },
]

Movie.insertMany(movies).then((moviesFromDB) => {
    console.log(`Movies created - ${moviesFromDB.length}`);
});
