const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oytlp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
        await client.connect();
        const serviceCollection = client.db("doctors_care").collection("services");

        app.get('/service', async (req, res)=>{
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);

        })

    }
    finally{

    }

}
run().catch(console.dir);


//Get Data
app.get('/', (req, res) => {
    res.send('Hello From Doctors Care')
})

app.listen(port, () => {
    console.log(`Doctors Care app listening on port ${port}`)
})