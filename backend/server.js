import { addProduct, removeProduct, fetchProduct, editProduct, findProductByID, prodCategory,getTotalProducts, getSumofProducts } from './products.js';
import { addBorrowProduct, removeBorrowProduct, fetchBorrowProduct, acceptborrowProduct, updateReturnStatus } from './borrowProduct.js';
import { fetchNotifs, markNotifs, removeNotification } from './adminNotfication.js';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();
//adminAccount
import createAdminAccount from './src/scripts/admin.js';
createAdminAccount()


//singup route login route imports
import bodyParser from 'body-parser';
import signupRoute from './src/routes/signup.js';
import loginRoute from './src/routes/login.js'

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//sign roure
app.use(cors({
  origin: 'https://inventory-launchpad-admin.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(bodyParser.json());
app.use('/user', signupRoute);

//login route
app.use('/auth', loginRoute)
import userRoute from './src/routes/user.js'
//users route // get?
app.use('/api', userRoute)

//for notifications - admin
app.get('/admin/notifications', fetchNotifs)
app.put('/admin/notifications/:id/markAsRead', markNotifs)

//mongoDB connection using mongoose
mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connected to MongoDB'))
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





app.post('/add-product', addProduct )
app.get('/allproducts', fetchProduct)
app.post('/removeproduct', removeProduct);
app.put('/editProduct', editProduct)

app.post('/add-borrow-products', addBorrowProduct)
app.post('/remove-borrow-products', removeBorrowProduct)
app.get('/all-borrow-products', fetchBorrowProduct)

app.get('/allproducts/:id', findProductByID);
app.post('/accept-borrow-product', acceptborrowProduct)
app.post('/update-return-status', updateReturnStatus)

app.get('/prodCat/:category', prodCategory);

//dashboard
app.get('/totalProducts', getTotalProducts)
app.get('/totalInventory', getSumofProducts)
app.delete('/admin/notifications/:id', removeNotification); // Delete a notification



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