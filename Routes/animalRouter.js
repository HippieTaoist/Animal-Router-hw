const express = require('express');
const router = express.Router();

let animalArray = [{
        "id": "1",
        "animalName": "cougar",
    },
    {
        "id": "2",
        "animalName": "dog"
    },
    {
        "id": "3",
        "animalName": "chicken"
    }, {
        "id": "4",
        "animalName": "snipe"
    }
]




router.get('/', function (req, res) {
    // console.log(req);
    console.log('i am here');


    let foundAnimal = null;

    // console.log(Object.keys(req.query).length);

    if (Object.keys(req.query).length === 0) {
        console.log('32 - no query specified');
        res.json(animalArray);
    } else {
        animalArray.forEach((animal) => {
            if (animal.animalName === req.query.animalName) {
                foundAnimal = animal;
                console.log('37 - your huckleberry');
            }
        })
        res.json({
            foundAnimal,
            animal: req.query
        })

    }


})

router.get('/get-animal-by-id/:id', function (req, res) {
    let foundAnimal;

    console.log('req.id', req.params.id)
    if (isNaN(+req.params.id)) {
        res.send("Looking for a number here....")
    } else {
        animalArray.forEach((animal) => {
            if (animal.id === req.params.id) {
                foundAnimal = animal;
            }
        })
        if (foundAnimal) {
            console.log('66 - foundAnimal.length', foundAnimal)
            res.json(foundAnimal)
        } else {
            res.json(' youre search could not be found.')
        }
    }

})

module.exports = router;