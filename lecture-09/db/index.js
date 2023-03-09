const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://anuj:happy@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:yoyoyo@cluster0.xyqf2cb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


mongoose.connect(uri);

const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'billa' });
// kitty.save().then(() => console.log('meow'));

Cat.find().then(function (responses) {
    console.log(responses);
})