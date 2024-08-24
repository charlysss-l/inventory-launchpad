import mongoose from "mongoose";

export const BorrowProduct = mongoose.model("BorrowProduct",{
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
    },
    isAccepted: { type: Boolean, default: false },
    destination: {
        type: String,
        required: true
    },
    clientStaff: {
        type: String,
        required: true,
    },
    borrowerName: {
        type: String,
        required: true,
    },
    borrowerGmail:{
        type: String,
        requireed: true,
    },
    borrowerNumber:{
        type: Number,
        required: true,
    }
})

export const acceptborrowProduct = async (req, res) => {
        const { borrowId } = req.body;
    
        try {
            const updatedProduct = await BorrowProduct.findOneAndUpdate(
                { borrowId: borrowId },
                { isAccepted: true },
                { new: true }
            );
    
            if (updatedProduct) {
                res.status(200).json({ message: 'Product accepted successfully', product: updatedProduct });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }



export const addBorrowProduct = async (req,res) => {
    try {
        // Retrieve the last product
        let lastProduct = await BorrowProduct.findOne({}).sort({ borrowId: -1 }).limit(1);
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
            destination: req.body.destination,
            clientStaff: req.body.clientStaff,
            borrowerName: req.body.borrowerName,
            borrowerGmail: req.body.borrowerGmail,
            borrowerNumber: req.body.borrowerNumber,
            
        });

        console.log('Product to save:', borrowproduct);
        await borrowproduct.save();
        console.log('Borrow Product saved');

        res.json({
            success: true,
            product_name: req.body.product_name,
        });
    } catch (error) {
        console.error('Error borrowing product:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding the product' });
    }
}


export const removeBorrowProduct = async (req, res) => {
    try {
        await BorrowProduct.findOneAndDelete({ borrowId: req.body.borrowId });
        console.log("Product removed");
        res.json({
            success: true,
            borrowId: req.body.borrowId,
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
    export const fetchBorrowProduct = async (req, res) => {
        try {
            const Borrowproduct = await BorrowProduct.find({});
            console.log('All products fetched successfully');
            res.status(200).json(Borrowproduct); // Use res.json for sending JSON response
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: 'Error fetching productssss' }); // Send an error response if something goes wrong
        }
    }