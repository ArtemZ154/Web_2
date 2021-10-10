const express = require('express');

const app = express();



app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index1.html')
});

app.get('/about', function(request, response) {
    response.sendFile(__dirname + '/index2.html')
});

app.use('/age/:name/:age', function(request, response) {
    let age = Number(request.params.age);
    let name = request.params.name;
    let ages = Number(2021) - age;
    response.send(`Привет ${name}! Вам ${ages} лет!`);
});

app.listen(port=3000, function() {
    console.log('Сервер запущен...');
});