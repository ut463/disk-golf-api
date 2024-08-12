const router = require('express').Router();
const { User, Category, Disc, UserDisc, Plastic } = require("../../models");

//get all discs
router.get('/', (req, res) => {
  Disc.findAll({
    include: [
      Category,
      {
        model: User,
        through: UserDisc
      },
    ]
  })
    .then((discs) => res.json(discs))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get('/', async (req, res) => {
  try {
    res.render('disc', {
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
