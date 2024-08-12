import { addProduct, removeProduct, fetchProduct } from './products.js';
import { addBorrowProduct, fetchborrowProduct } from './borrowProduct.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://teamlaunchpadinventory:teamlaunchpadinventory@cluster0.bdcqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Express app is running');
});

app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
  } else {
    console.log(`Server running on port ${port}`);
  }
});

//adding products - admin
app.post('/add-product', addProduct )
app.get('/allproducts', fetchProduct)
app.post('/removeproduct', removeProduct);

//borrowing products - user
app.post('/add-borrow-product',addBorrowProduct)
app.get('/allborrowproducts', fetchborrowProduct)


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = 'mongodb+srv://launchpad2024:launchpad@2024@cluster0.nfyxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
    //     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);