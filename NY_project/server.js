const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('static'));

data_create_test = {
    
}

app.get('/', function(request, response) {
    let data = {
        a:'as'
    };
    response.render('main.hbs', data);
});

app.get('/create_info', function(request, response){
    let data = {

    };
    response.render('create_test.hbs', data);
});

app.get('/info_test', function(request, response){
    let data = request.query;
    console.log(data);
    let count = 0;
    for (let key in data_create_test) {
        count++
    }
    data_create_test[count] = data
    console.log(data_create_test)
});

app.listen(port=3000, function () {
    console.log('Сервер запущен...');
});