const sq = require("sqlite3");
const express = require("express");
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

sqlq = 'SELECT * FROM Luchaya_tablica;';
async function getdata (sqlq) {
    let bd = new sq.Database('test_bd.db');

    let prom = new Promise(function(res, rej){
        bd.all(sqlq, [], function(err, rows){
            if (err) {
                rej(err);
            } else {
                res(rows)
            };
        });
    });
    let data = prom;
    bd.close();
    return data;
};

app.get('/', function(req, res){
    getdata(sqlq).then(function(data){
        let templatedata = {
            colums: Object.keys(data[0]),
            rows: data
        };
        res.render('index.html', templatedata);
    });
});

app.listen(port=8000, function () {
    console.log('Сервер запущен...');
});