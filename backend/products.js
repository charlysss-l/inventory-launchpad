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
})

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


