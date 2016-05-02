/**
 * Created by cai on 2016/5/2.
 */
var mongo = require('mongodb'),
dbHost = '192.168.1.109',
dbPort = 27017;
var Db = mongo.Db;
var Connection = mongo.Collection;
var Server = mongo.Server;
var db = new Db ('local',new Server(dbHost, dbPort), {safe:true});
db.open(function (error,dbConnection) {
    if(error){
        console.error(error);
        process.exit(1);
    }
    console.log('db state: ',db._state);
    db.close();
})
