const express = require('express');

const app = express();

app.use(function (request, response, next) {
    // response.send('Welcome!');
    next();
});

app.use('/math/:a/:b', function(request, response) {
    let a = Number(request.params.a);
    let b = Number(request.params.b);
    response.send(`Сумма чисел ${a} and ${b} = ${a+b}`);
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/index1.html");
});

app.get('/about', function(request, response) {
    // response.setHeader('Content-Type', 'text/html');
    response.send('<h1>About</h1>');
});

app.use(function(request, response) {
    // response.statusCode = 404;
    response.send("Page not found");
})

app.listen(port=3000, function() {
    console.log('Сервер запущен...');
});