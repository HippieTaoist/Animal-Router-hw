const route = require('color-convert/route');
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

    console.log('56 - id - ', req.params.id);
    if (req.params.id === undefined) {
        console.log('58 - yopda')
        res.json({
            animalArray
        })
    }
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

router.get('/get-animal-by-name/:animal', function (req, res) {
    let foundAnimal;
    animalArray.forEach((animal) => {
        if (animal.animalName == req.params.animal) {
            foundAnimal = animal;
        }
    })

    if (foundAnimal) {
        res.json(foundAnimal)
    }
    if (!foundAnimal) {
        res.send('animal not found')
    }
})

router.post('/add-to-animal-array/', function (req, res) {
    let duplicateFound

    console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length === 0) {
        res.send('sorry no empty data  \nCan Not Process \nPlease resend')
    } else {

        animalArray.forEach((animal) => {
            if (animal.animalName == req.body.animalName) {
                duplicateFound = animal
            }
        })

        if (!duplicateFound) {
            animalArray.push(req.body)
            console.log(animalArray);
            res.json(animalArray)
        } else {
            res.send('your animal is already on the list')

        }
    }
})

// create a Put request to update the animalName using animalName params.If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object.If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

router.put('/update-animal-using-params/:animalUpate', function (req, res) {

    console.log(req.params.animalUpate, req.body);
    let foundAnimal;
    animalArray.forEach((animal) => {
        if (animal.animalName === req.params.animalUpate) {
            foundAnimal = animalArray.indexOf(animal)

            animal.animalName = req.body.animalName
        }
    })
    console.log(animalArray);

    if (!foundAnimal) {
        res.send('It looks as though your animal does exist or your spelling is off.')
    } else {
        res.json({
            "Message": "Your animal is updated",
            animalArray
        })
    }

})
module.exports = router;