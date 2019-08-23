const express = require('express');
const dbmodule = require('../dbModule/dbmodule');

const router = express.Router();

router.post('/signup', (req,res) => {
    // const customers = [
    //         {name: 'jackie', age: 17},
    //         {name: 'hyde', age: 20}
    // ];
    dbmodule.checkUser(req.body.email,req.body.name,req.body.password, res)
});
router.post('/login', (req,res) => {
    dbmodule.authenticateUser(req,res);
})
router.get('/products', (req,res) => {
    dbmodule.getProducts(res);
});
router.post('/feedback', (req,res) => {
    dbmodule.getFeedback(req.body.id,res);
})
router.post('/update', (req,res) => {
    console.log(`updating with ${req.body.email} and ${req.body.name} and ${req.body.password}`)
    dbmodule.updateDetails(req.body.email,req.body.name,req.body.password,res);
})
router.post('/orders', (req,res) => {
    console.log(`calling db to get orders for ${req.body.email}`);
    dbmodule.getOrders(req.body.email,res);
})
module.exports = router;