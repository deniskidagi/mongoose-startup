const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true})

// schema
// data validation
const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

// model
const Fruit = mongoose.model("Fruit", fruitSchema)

// documents
const apple = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "good taste"
})
const mango = new Fruit ({
    name: "Mango",
    rating: 6,
    review: "Rich in vitamins"
})
const banana = new Fruit ({
    name: "Banana",
    rating: 7,
    review: "Good for energy"
})
// save to db
Fruit.insertMany([apple, mango, banana], function(err){
    if(err){
        console.log(err);
    }else{
        console.log("successfully saved all the fruits to fruitsDB");
    }
})
fruit.save()
const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    // relationship
    favouriteFruit: fruitSchema
})
const Person = mongoose.model("Person", peopleSchema)

const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 8,
    review: "Great Fruit"
})
pineapple.save()

const person = new Person ({
    name: "Ann",
    age: 24,
    favouriteFruit: pineapple
})

person.save()

// read from db
Fruit.find(function(err, fruits){
    if(err){
        console.log(err)
    }else{
        // close connection
        //  mongoose.connection.close()
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})

// update data
Fruit.updateOne({_id:"619ee98c4b745dc4ed5f774a"}, {name: "Orange"}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Successfully updated")
    }
})

// delete single data
Fruit.deleteOne({_id:"619ee98c4b745dc4ed5f774a"}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("successfully deleted data from database")
    }
})

//delete many
Fruit.deleteMany({name: "pineapple"}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("successfully deleted data")
    }
})
