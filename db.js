const mongoclient = require("mongodb").MongoClient
mongoClient.connect('mongodb://localhost/workshop').then(conn => conn.db(workshop)).catch(err => console.log(err))

module.export ={}