const mongoClient = require("mongodb").MongoClient
mongoClient.connect('mongodb://localhost/workshop').then(conn => global.conn = conn.db("workshop")).catch(err => console.log(err))

module.export ={}