const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://teamlaunchpadinventory:teamlaunchpadinventory@cluster0.bdcqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));


//schema for products
const Product = mongoose.model("Product",{
    product_id:{
        type: Number,
        required: true,
    },
    product_name:{
        type: String,
        required: true,
    },
    product_brand:{
        type: String,
        required: true,
    },
    product_quantity:{
        type: Number,
        required: true,
    },
    product_category:{
        type: String,
        required: true,
    },
    product_datePurchased:{
        type: Date,
        required: true,
    },
})


app.post('/add-product', async (req, res) => {
    try {
        // Retrieve the last product
        let lastProduct = await Product.findOne({}).sort({ product_id: -1 }).limit(1);
        let id;

        // If there are products in the database, set id to the last product's id + 1
        if (lastProduct) {
            id = lastProduct.product_id + 1;
        } else {
            // If no products exist, start with id = 1
            id = 1;
        }

        // Create a new product with the calculated id
        const product = new Product({
            product_id: id,  // Use the id variable
            product_name: req.body.product_name,
            product_brand: req.body.product_brand,
            product_quantity: req.body.product_quantity,
            product_category: req.body.product_category,
            product_datePurchased: req.body.product_datePurchased,
        });

        console.log('Product to save:', product);
        await product.save();
        console.log('Product saved');

        res.json({
            success: true,
            product_name: req.body.product_name,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding the product' });
    }
});


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

//get all or fetch or render
app.get('/allproducts', async (req, res) => {
    try {
        const products = await Product.find({});
        console.log('All products fetched successfully');
        res.status(200).json(products); // Use res.json for sending JSON response
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' }); // Send an error response if something goes wrong
    }
});



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