const router = require("express").Router();
const { db } = require("../models/celebrity");
const Celebrity = require("../models/celebrity");

// http://localhost:3000/celebrities
router.get("/celebrities", async (req, res,) => {
    const celebrities = await Celebrity.find();
    console.log(celebrities);
    res.render("celebrities/index", celebrities);
  });

  //new celebrity
router.get("/celebrities/new",  async (req, res) => { 
    const celebrities = await Celebrity.find();
    res.render("celebrities/new", celebrities); 
});

router.post("/celebrities/new", async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.create({name, occupation, catchPhrase});
    res.redirect("/celebrities");
});

// http://localhost:3000/celebrities/1234567
router.get("/celebrities/:celebrityId", async (req, res) => {
    const celebrity = await Celebrity.findById(req.params.celebrityId);
    res.render("celebrities/show", celebrity);
});

router.post("/celebrities/:celebrityId/delete", async (req, res) => {
    await Celebrity.findByIdAndRemove(req.params.celebrityId);
    res.redirect("/celebrities");
});

router.get("/celebrities/:celebrityId/edit", async (req, res) => {
    const celebrity = await Celebrity.findById(req.params.celebrityId);
    res.render("celebrities/edit", celebrity);
});

router.post("/celebrities/:celebrityId/edit", async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.findByIdAndUpdate(req.params.celebrityId, {
        name,
        occupation,
        catchPhrase,
    });
    res.redirect(`/celebrities/${req.params.celebrityId}`);
});


module.exports = router;