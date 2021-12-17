const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('static'));

let data_create_test = {
    
}

let answ_questions_test = {

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
    let count = 0;
    for (let key in data_create_test) {
        count++
    }
    console.log(data)
    answ_questions_test[count] = data['quest_name'];
    


    data_create_test[count] = data
    delete data_create_test[count]['answer_for_question'];
    delete data_create_test[count]['count_test'];
    delete data_create_test[count]['count_answer_test'];
    delete data_create_test[count]['quest_name'];
});

app.listen(port=3000, function () {
    console.log('Сервер запущен...');
});