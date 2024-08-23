import mongoose  from "mongoose";
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
    product_price:{
        type: Number,
        required: true,
    },
    product_totalPrice:{
        type: Number,
        required: true,
    },
    product_supplier:{
        type: String,
        required: true,
    }
})

export const prodCategory = async (req, res) => {
    const category = req.params.category; // Get category from the request params
    try {
        const products = await Product.find({ product_category: category }); // Fetch products by category
        res.json(products); // Send back the products as JSON
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
        res.status(500).send('Internal Server Error');
    }
};



export const addProduct = async (req,res) => {  
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
            product_price: req.body.product_price,
            product_totalPrice: req.body.product_totalPrice,
            product_supplier: req.body.product_supplier,
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
}

//delet product
export const removeProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ product_id: req.body.product_id });
        console.log("Product removed");
        res.json({
            success: true,
            product_id: req.body.product_id,
        });
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({
            success: false,
            message: 'Failed to remove product',
        });
    }
}

    //get all or fetch or render
    export const fetchProduct = async (req, res) => {
        try {
            const products = await Product.find({});
            console.log('All products fetched successfully');
            res.status(200).json(products); // Use res.json for sending JSON response
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: 'Error fetching products' }); // Send an error response if something goes wrong
        }
    }


// Edit product
export const editProduct = async (req, res) => {
    try {
      const { product_id } = req.body;
  
      if (!product_id) {
        return res.status(400).json({ success: false, message: "Please provide a product ID" });
      }
  
      const product = await Product.findOne({ product_id });
  
      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      product.product_name = req.body.product_name;
      product.product_brand = req.body.product_brand;
      product.product_quantity = req.body.product_quantity;
      product.product_category = req.body.product_category;
      product.product_datePurchased = req.body.product_datePurchased;
      product.product_price = req.body.product_price;
      product.product_totalPrice = req.body.product_totalPrice;
      product.product_supplier = req.body.product_supplier;
  
      await product.save();
      res.json({ success: true, product_name: req.body.product_name });
    } catch (error) {
      console.error("Error editing product:", error);
      res.status(500).json({ success: false, message: "Failed to edit product" });
    }
  };

  export const findProductByID = async (req, res) => {
    try {
        const product = await Product.findOne({ product_id: req.params.id });
 // Adjust this according to your database query method
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
  }