/**
 * Created by cai on 2016/4/30.
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'easyui',
    port:3306
});
conn.connect();
var selectSQL = 'select * from city';
//query
conn.query(selectSQL, function (err2, rows) {
    if (err2) console.log(err2);
    console.log("SELECT ==> ");
    console.log(JSON.stringify(rows));
    for (var i in rows) {
        console.log(rows[i]);
    }
});
conn.end();