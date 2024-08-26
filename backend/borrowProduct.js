import mongoose from "mongoose";
import {sendEmail} from "./email.js";
import {Notification} from './adminNotfication.js'

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
    isAccepted: { 
        type: Boolean, 
        default: false 
        },
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
    },
    isReturn: { type: String, enum: ['Okay', 'Damaged', null], default: null }, // new field
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
                // Send email notification with borrower's email as reply-to
            const emailSubject = 'Your Borrow Request has been Accepted';
            const emailText = `Hello ${updatedProduct.borrowerName},

Your request to borrow the product "${updatedProduct.borrowName}" has been accepted.

Product Details:
- Quantity: ${updatedProduct.borrowQuantity}
- Borrow Date: ${updatedProduct.borrowDate.toLocaleDateString()}
- Purpose: ${updatedProduct.purpose}

Thank you for your patience.

Best regards,
Admin Team`;

            await sendEmail(
                updatedProduct.borrowerGmail, // Send to borrower's email
                emailSubject,
                emailText,
                updatedProduct.borrowerGmail  // Set as reply-to
            );
                res.status(200).json({ message: 'Product accepted successfully', product: updatedProduct });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    export const updateReturnStatus = async (req, res) => {
        const { borrowId, status } = req.body;
    
        try {
            const updatedProduct = await BorrowProduct.findOneAndUpdate(
                { borrowId: borrowId },
                { isReturn: status },
                { new: true }
            );
    
            if (updatedProduct) {
                res.status(200).json({ message: 'Return status updated successfully', product: updatedProduct });
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

        // Send an email notification to the user with reply-to as their own email
        const emailSubject = 'Borrow Request Received';
        const emailText = `Hello ${req.body.borrowerName},

Your request to borrow the product "${req.body.borrowName}" has been received.

Product Details:
- Quantity: ${req.body.borrowQuantity}
- Borrow Date: ${new Date(req.body.borrowDate).toLocaleDateString()}
- Purpose: ${req.body.purpose}

We will review your request and notify you once it's accepted.

Best regards,
Admin Team`;

        await sendEmail(
            req.body.borrowerGmail, // Send to borrower's email
            emailSubject,
            emailText,
            req.body.borrowerGmail  // Set as reply-to
        );

         // Create a notification for the admin using the borrower's name
         const notificationMessage = `${req.body.borrowerName} has requested to borrow the product "${req.body.borrowName}" (Quantity: ${req.body.borrowQuantity}). Purpose: ${req.body.purpose}`;
         const newNotification = new Notification({
             message: notificationMessage,
         });
 
         await newNotification.save();

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
        // Find and delete the product
        const deletedProduct = await BorrowProduct.findOneAndDelete({ borrowId: req.body.borrowId });

        if (deletedProduct) {
            console.log("Product removed");

            // Send email notification with borrower's email as reply-to
            const emailSubject = 'Your Borrow Request has been Removed';
            const emailText = `Hello ${deletedProduct.borrowerName},

Your request to borrow the product "${deletedProduct.borrowName}" has been removed.

Product Details:
- Quantity: ${deletedProduct.borrowQuantity}
- Borrow Date: ${deletedProduct.borrowDate.toLocaleDateString()}
- Purpose: ${deletedProduct.purpose}

Thank you for your patience.

Best regards,
Admin Team`;

            await sendEmail(
                deletedProduct.borrowerGmail, // Send to borrower's email
                emailSubject,
                emailText,
                deletedProduct.borrowerGmail  // Set as reply-to
            );

            res.json({
                success: true,
                borrowId: req.body.borrowId,
            });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
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