var express = require('express');
var router = express.Router();
var categoryModel = require('../../models').category;
var reviewModel = require('../../models').review;
var exhibitionModel = require('../../models').exhibition;


//main - category, reviews, exhibition
router.get('/', async(req, res, next) =>{
    console.log("home");
    try{
        const category = await categoryModel.findAll({});
        const review = await reviewModel.findAll({});
        const exhibition = await exhibitionModel.findAll({});
        res.send({
            category:category,
            reviews:review,
            exhibition:exhibition
        });
    }catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;
