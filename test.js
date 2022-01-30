const sq = require("sqlite3");
const express = require("express");
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

sqlq = 'SELECT * FROM Luchaya_tablica;';
async function getdata (typeq, dataq) {
    let bd = new sq.Database('test_bd.db');
    all_types = {
        all:'SELECT * FROM Luchaya_tablica',
        search:'SELECT * FROM Luchaya_tablica WHERE id=?'
    };
    let sqlq = all_types[typeq]
    let prom = new Promise(function(res, rej){
        bd.all(sqlq, dataq, function(err, rows){
            if (err) {
                rej(err);
            } else {
                res(rows);
            };
        });
    });
    let data = prom;
    bd.close();
    return data;
};

app.get('/', function(req, res){
    getdata('all', []).then(function(data){
        let templatedata = {
            colums: Object.keys(data[0]),
            rows: data
        };
        res.render('index.html', templatedata);
    });
});

app.get('/search', function(req, res){
    let data = Object.values(req.query);
    getdata('search', data).then(function(data){
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