const sq = require("sqlite3");
const express = require("express");

async function getdata () {
    let db = new sq.Database("genius_table.db");

    let sqlq = "SELECT * FROM users"
    let prom = new Promise(function(resolve, reject){
        db.all(sqlq, [], function (err, rows){
            if (err) {
                reject(err);
            } else {
                resolve(rows)
            };
        });
    });
    let data = await prom;
    db.close();
    return data;
}

app = express();

app.get("/", function (request, response){
    getdata().then(function(data){
        response.send(JSON.stringify(data));
    });
});

app.listen(3000)