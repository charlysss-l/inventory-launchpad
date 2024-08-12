import mongoose from "mongoose";

const BorrowProduct = mongoose.model("BorrowProduct",{
    borrowId:{
        type: Number,
        required: true,
    },
    borrowName:{
        type: String,
        required: true,
    },
    borrowQuantity:{
        type: Number,
        required: true,
    },
    borrowDate: {
        type: Date,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    }
})


export const addBorrowProduct = async (req,res) => {
    try {
        // Retrieve the last product
        let lastProduct = await BorrowProduct.findOne({}).sort({ product_id: -1 }).limit(1);
        let id;

        // If there are products in the database, set id to the last product's id + 1
        if (lastProduct) {
            id = lastProduct.borrowId + 1;
        } else {
            // If no products exist, start with id = 1
            id = 1;
        }

        // Create a new product with the calculated id
        const borrowproduct = new BorrowProduct({
            borrowId: id, // Use the id variable
            borrowName: req.body.borrowName,
            borrowQuantity: req.body.borrowQuantity,  
            borrowDate: req.body.borrowDate,
            purpose:req.body.purpose,
        });

        console.log('Product to save:', borrowproduct);
        await borrowproduct.save();
        console.log('Borrow Product saved');

        res.json({
            success: true,
            borrowName: req.body.borrowName,
        });
    } catch (error) {
        console.error('Error borrowing product:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding the product' });
    }
}


//get all or fetch or render
 export const fetchborrowProduct = async (req, res) => {
    try {
        const borrowProduct = await BorrowProduct.find({});
        console.log('All products fetched successfully');
        res.status(200).json(borrowProduct); // Use res.json for sending JSON response
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' }); // Send an error response if something goes wrong
    }
}

