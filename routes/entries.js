var express = require("express");
var router = express.Router();

const Entry = require("../models/entry");


router.get("/", async (req, res, next) => {
  try {
    const { q, category } = req.query;


    let entries = await Entry.find().sort({ createdAt: -1 });


    if (category && category.trim() !== "") {
      entries = entries.filter((e) => e.category === category);
    }

    if (q && q.trim() !== "") {
      const term = q.trim().toLowerCase();
      entries = entries.filter((e) =>
        (e.content || "").toLowerCase().includes(term)
      );
    }

    
    res.render("index", { entries, q: q || "", category: category || "" });
  } catch (err) {
    next(err);
  }
});


router.post("/entry", async (req, res, next) => {
  try {
    const { category, content } = req.body;

    
    if (!category || !content) return res.redirect("/?error=missing");

    await Entry.create({ category, content });
    res.redirect("/"); 
  } catch (err) {
    next(err);
  }
});

module.exports = router;

