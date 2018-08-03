const mongoClient = require("mongodb").MongoClient
mongoClient.connect('mongodb://localhost/workshop').then(conn => global.conn = conn.db("workshop")).catch(err => console.log(err))

function findCustomers(callback){
    global.conn.collection('customers').find().toArray(callback);
}

module.export ={findCustomers}