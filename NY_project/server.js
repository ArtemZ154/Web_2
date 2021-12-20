const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('static'));

const urlencodedParser = express.urlencoded({extended: false});

let data_create_test = {
    
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

app.post('/info_test', urlencodedParser, function(req, res){
    que = {

    }
    let count = 0;
    for (let key in data_create_test) {
        count++;
    };
    console.log(req)
    data = req.body;
    data_create_test[count] = {}
    data_create_test[count]['name'] = data.name;
    data_create_test[count]['description'] = data['description_test'];
    all_aq = ((Object.keys(data)).length - 5) / 2;
    for (let i = 0; i < data['quest_name'].length; i++) {
        quest = data['quest_name'];
        a = quest[i]
        que[i] = a
        data_create_test[count]['questions'] = que
    };
    all = {}
    for (let i = 0; i < all_aq; i++) {
        an = {}
        for (let j = 0; j < all_aq; j++){
            an[j] = data[`answer_question_input${i}`][j]
        };
        all[i] = an
    };
    data_create_test[count]['answers'] = all
    console.log(data_create_test[0])
});

app.listen(port=3000, function () {
    console.log('Сервер запущен...');
});