const RestaurantModel = require('../Model/Restaurant.model');
const { response } = require('../app');
const FoodModel = require("../Model/Food.model");
const router = require('express').Router();


/**
 * METHOD = GET
 * INPUT = Req,Res,next Callback
 * OUTPUT = RESPONSE
 */
router.get("/", (req,res,next)=>{
    FoodModel.find().then((response)=>{
        if(response.length > 0){
            return res.status(200).json({
                message:"Food fetched successfully",
                data: response,
            });
        } else{
            return res.status(200).json({
                message:"No Food found",
                data:response,
            });    
        }
    }).catch((error)=>{
        return res.status(201).json({
            error:error,
        });
    });

    //console.log('GET HITTED');
    // console.log(req.body);
    //return res.json(
    //     message: "GET REQUEST SUCCESSFUL",
});
    //console.log('GET HITTED');
    // console.log(req.body);
    // return res.json({
    //     message: "GET FOOD REQUEST SUCCESSFUL",
    // });

/**
 * METHOD = POST
 * DESCRIPTION = CREATE A FOOD AND SAVE IT IN MONGODB
 * PARAMS = 
 * OUTPUT = CREATED FOOD
 */
router.post("/", async(req,res,next)=>{
    const{
        name,
        description,
        //category, 
        state,
        // pincode,
        // address,
        // city ,
        // cuisine,
        foodtype,
        price,
        offer,
        restaurantId,
    } = req.body;
    console.log(req.body);
    const Food = new FoodModel({
        name:name,
        description:description,
        foodtype:foodtype,
        price : price,
        offer : offer,
        state:state,

        //isAvailable:isAvailable,
    });
    //Food.save()
    let result = await Food.save()
    // .then((response)=>console.log(response))
    // .catch((e)=> console.log(e));
    //  console.log('POST HITTED',result);
    // then((response)=>{
    //     if(response._id){
    //         return res.status(200).json({
    //             data:responce,
    //             message:"Food added successfully !!",
    //         });
    //     }
    // })
    // .catch((e)=>{
    //     res.status(400).json({
    //         error:e.message,
    //     })
    // })
    return res.json({
        message: "POST REQUEST SUCCESSFUL",
    });
});


module.exports = router;
