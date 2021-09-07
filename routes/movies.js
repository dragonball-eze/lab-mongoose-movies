const router = require("express").Router();
const { db } = require("../models/movie");
const Movie = require("../models/movie"); 

// http://localhost:3000/movies
router.get("/movies", async (req, res,) => {
    const movies = await Movie.find();
    console.log(movies);
    res.render("movies/index", movies);
  });
 
 //Adding new movies
 router.get("/movies/new",  async (req, res) => { 
    const movies = await Movie.find();
    res.render("movies/new", movies); 
});

router.post("/movies/new", async (req, res) => {
    const {title, genre, plot, cast} = req.body;
    await Movie.create({title, genre, plot, cast});
    res.redirect("/movies");
});


module.exports = router;