const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('public'));

app.get('/', function(request, response) {
    let data = {
        'name': 'Artem',
        'year': '15',
        'height': '178',
        'second_name': 'Zimin',
        'title': 'My page',
        'list': ['3060', '3070', '3080', '3090'],
        'keys': {
            'Название': 'fable',
            'Жанр': 'фэнтази, приключения',
            'Платформа': 'PC',
        }
    }
    response.render('index.hbs', data)
});

app.get('/img', function(request, response) {
    let data = {
        'img': '..\\amb.jpg'
    }
    response.render('image.hbs', data)
})

app.listen(port=3000, function() {
    console.log('Сервер запущен...');
});