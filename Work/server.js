const express = require('express');
const app = express();

let countries = {
    'Russia': 'Moscow',
    'Ukraine': 'Kiev'
}

app.use(function(req, res, next) {
    next();
})

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/main.html')
});

app.get('/first', function(request, response) {
    let data = request.query;
    let a = data.first_number;
    let b = data.second_number;
    if (isNaN(a) == true || isNaN(b) == true) {
        response.send('No');
    } else {
        response.send(String(Number(a) + Number(b)));
    }
});

app.get('/second', function(request, response) {
    let data = request.query;
    let countrie_site = data.countries;
    if (countrie_site in countries) {
        response.send(String(countries[countrie_site]))
    } else {}
});

app.get('/:page', function(request, response) {
    let file = request.params.page + ".html";
    response.sendFile(__dirname + '/public/' + file);
});

app.listen(port=3000, function() {
    console.log('Сервер запущен...');
});