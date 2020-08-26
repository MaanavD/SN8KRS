const router = require('express').Router();
const multer = require('multer');
const GridFSStorage = require('multer-gridfs-storage');
let Shoe = require('../models/shoe.model');

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    let shoes = await Shoe.find();
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.route('/').get((req, res) => {
//     Shoe.find()
//       .then(shoes => res.json(shoes))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

router.post("/add", async (req, res) => {
  try {
    let { size, gender, brand, modelName, colorway, offerMin, offerMax, sellerUsername } = req.body;
    size = Number(size);
    offerMin = Number(offerMin);
    offerMax = Number(offerMax);
    // const picture = req.body.picture;
    let newShoe = new Shoe({
      size,
      gender,
      brand,
      modelName,
      colorway,
      offerMin,
      offerMax,
      sellerUsername
    });
    await newShoe.save();
    res.json("Shoe added");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let shoe = await Shoe.findById(req.params.id);
    res.json(shoe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.route('/:id').get((req, res) => {
//   Shoe.findById(req.params.id)
//     .then(shoe => res.json(shoe))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.delete("/:id", async (req, res) => {
  try {
    await Shoe.findByIdAndDelete(req.params.id);
    res.json("Shoe deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.route('/:id').delete((req, res) => {
//   Shoe.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Shoe deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.post("/update/:id", async (req, res) => {
  try {
    let shoe = await Shoe.findById(req.params.id);
    [ shoe.size, shoe.gender, shoe.brand, shoe.modelName, shoe.colorway, shoe.offerMin, shoe.offerMax, shoe.sellerUsername ] = 
    [ Number(req.body.size), req.body.gender, req.body.modelName, Number(req.body.offerMin), Number(req.body.offerMax), req.body.sellerUsername ];
    await shoe.save();
    res.json("Shoe updated");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

// router.route('/update/:id').post((req, res) => {
//   Shoe.findById(req.params.id)
//     .then(shoe => {
//       [ shoe.size, shoe.gender, shoe.brand, shoe.modelName, shoe.colorway, shoe.offerMin, shoe.offerMax, shoe.sellerUsername ] = 
//       [ Number(req.body.size), req.body.gender, req.body.modelName, Number(req.body.offerMin), Number(req.body.offerMax), req.body.sellerUsername ];

//       shoe.save()
//         .then(() => res.json('Shoe updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.get("/shoe/:id", async (req, res) => {
  try {
    let shoes = await Shoe.find({ shoeId: req.params.id });
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.route('/user/:id').get((req, res) => {
//   Shoe.find({sellerUsername: req.params.id})
//     .then(shoe => res.json(shoe))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


module.exports = router;