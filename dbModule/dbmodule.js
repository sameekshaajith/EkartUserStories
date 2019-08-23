const mongojs = require('mongojs');

const db = mongojs('reactExpress');

module.exports.registerUser = (name, password, email, res) => {
    db.employees.insert({'name':name, 'password':password, 'email':email}, (err,docs) => {
        if(err){
            res.status(401).send('something went wrong, try again')
        }
        res.send('updated');
    });
}

module.exports.checkUser = (email, name, password, res) => {
    db.employees.find({'email':email}, (err,docs) => {
        if(docs.length){
            res.status(400).send('this email id already exists'); 
        } 
        else{
            module.exports.registerUser(name, password, email, res);
        }      
    });
}

module.exports.authenticateUser = (req,res) => {
    db.employees.find({$and: [{'email':req.body.email}, {'password':req.body.password}]}, (err,docs) =>{
        if(err){
            res.status(402).send('encountered some error, try again!')
        }else if(docs.length===0){
            res.status(403).send(`you're not a registered user, please provide the correct credentials`);
        }else{
            console.log(docs[0]);
            res.json(docs[0]);
        }
    })
}

module.exports.getProducts = (res) => {
    db.products.find({}, (err,docs) => {
        if(err){
            res.status(404).send('some error occuered!');
        }else if(docs.length===0){
            res.status(405).send('no products present');
        }else{
            res.json(docs);
        }
    })
}

module.exports.getFeedback = (id,res) => {
    console.log(id);
    db.feedback.find({pId:id}, (err,docs) => {
        if(err){
            res.status(406).send('some error occured');
        }else if(docs.length===0){
            res.status(406).send('no reviews available');
        }else{
            res.json(docs[0]);
        }
    })
}

module.exports.updateDetails = (email,name,password,res) => {
    db.employees.update({'email':email},{$set:{"name":name, "password": password}}, (err,docs) => {
        if(err){
            console.log(err);
            res.status(407).send('some error occured')
        }else{
            console.log(docs.nModified);
            res.send('your details have been updated!')
        }
    })
}

module.exports.getOrders = (email, res) => {
    db.orders.find({'email':email}, (err,docs) => {
        if(err){
            console.log(err);
            res.status(408).send('some error occured')
        }else {
            console.log(docs);
            // res.send(docs);
            let datey = new Date();
            let filteredDocs = docs.filter((item) => {
                let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                let diffDays = Math.round((datey.getTime() - item.date.getTime()) / (oneDay));
                if(diffDays<=30) return item;
                return false;
            })
            let uniquePIds = [...new Set(filteredDocs.map((item) => {
                                    return item.pId;
                                }))]
            let final = uniquePIds.map((id) => {
                return filteredDocs.find((obj) => {
                    if(obj.pId==id) return obj
                })
            })
            console.log('after---');
            console.log(uniquePIds);
            console.log(final);
            res.send(final);
        }
    })
}















