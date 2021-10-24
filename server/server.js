const express = require('express');
const app = express();

app.use(function(req, res, next) {
    next();
})

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/main.html')
});

app.get('/test', function(request, response) {
    let log_pass = {
        login: 'admin',
        password: 'password'
    };
    let data = request.query;
    console.log(data);
    if (log_pass.login == data.login & log_pass.password == data.password) {
        response.send('Ok');
    } else {
        response.send('No');
    };
})

app.get('/:page', function(request, response) {
    let file = request.params.page + ".html";
    response.sendFile(__dirname + '/public/' + file);
});

app.listen(port=3000, function() {
    console.log('Сервер запущен...');
});