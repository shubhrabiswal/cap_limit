const Product = require('../model/product')


// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.addproduct = async (req,res) => {
    
    try{
        let newdata = await new Product(req.body);

        await newdata.save()

        return res.status(200).json({
            "Success": true,
            "Data": newdata,
            "Message": `product added for HSN ${req.body.HSN}`
        })
    }
    catch(error){
        return res.status(400).json({
            "Success": false,
            "Data": null,
            "Message": error.message
        })
    }
}

exports.getdetails = async (req,res) => {
    let hsn = req.params.id
    try{
        let finddata = await Product.find({HSN:hsn});

        return res.status(200).json({
            "Success": true,
            "Data": finddata,
            "Message": `product details for HSN ${hsn}`
        })
    }
    catch(error){
        return res.status(400).json({
            "Success": false,
            "Data": null,
            "Message": error.message
        })
    }
}


exports.calculate = async (req,res) => {
    let hsn = req.params.id;
    let FOB = req.query.FOB;
    let volume = req.query.volume;
    try{
        let product = await Product.find({HSN:hsn});
        console.log(product)
        let total_price = product[0].price * volume;
        let cap = product[0].capPerKg * volume;
        let fob_price = total_price * FOB
        let reward = fob_price
        if(cap<fob_price){
            reward = cap
        }
        reward = parseInt(reward/volume)
        
        return res.status(200).json({
            "Success": true,
            "Data": reward,
            "Message": `reward per ${product[0].UQC} calculated for product hsn ${hsn}`
        })
    }
    catch(error){
        return res.status(400).json({
            "Success": false,
            "Data": null,
            "Message": error.message
        })
    }
}