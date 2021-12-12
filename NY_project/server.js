const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('public'));

data_create_test = {

}

app.get('/', function(request, response) {
    let data = {
        a:'as'
    };
    response.render('main.hbs', data);
});

app.get('/create_test/desc_name/', function(request, response){
    $('.input_btn').on('click', function() {
        console.log($('.name_test').val());
    });
    response.render('create_test.hbs', data_create_test);
})
app.listen(port=3000, function () {
    console.log('Сервер запущен...');
});