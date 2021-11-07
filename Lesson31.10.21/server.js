const express = require('express');
const app = express();

const inventory = {
    'users': {
        '0': {
            'name': 'Козырь',
            'Money': '2000',
            'discription': 'Он ликвидирует своих врагов также уверенно, как поправляет галстук! Белый костюм, маска с красным ромбом,    темные перчатки и галстук – лучше вам не видеть его за игрой в карты!',
            'url': 'trump'
        },
        '1': {
            'name': 'Разведчица Galaxy',
            'Money': '2000',
            'discription': 'Судьба галактики в ваших руках.',
            'url': 'galaxy_scout'
        },
        '2': {
            'name': 'Элитный агент',
            'Money': '1500',
            'discription': 'Любой агент становится элитным, когда у него появляется средство для ночной видимости.',
            'url': 'elite_agent'
        },
        '3': {
            'name': 'Бёрди',
            'Money': '800',
            'discription': 'Бьёт в цель с первой попытки.',
            'url': 'birdie'
        },
        '4': {
            'name': 'Вязаная связистка',
            'Money': '2000',
            'discription': 'Связана из ласкутков одежды врагов.',
            'url': 'knitted_signalman'
        },
        '5': {
            'name': 'Позывной «Эльф»',
            'Money': '1200',
            'discription': 'Я не могу объяснить ему отсутствие классических вытянутых ушек!',
            'url': 'called_Elf'
        },
        '6': {
            'name': 'Полковник Полуночник',
            'Money': '1200',
            'discription': 'Любитель отдохнуть душой и телом.',
            'url': 'colonel_midnight'
        },
        '7': {
            'name': 'Весельчак',
            'Money': '1500',
            'discription': 'Спокойных Вам кошмаров с таким персонажем!',
            'url': 'humorist'
        }
    }
};

const profile = {
    'users': {
        0: {
            'nickname': 'Genius',
            'level': '87',
            'inventory': ['0', '1', '2', '4', '3'],
            'money': '555',
            'avatar': '..//Genius_a.jpg',
            'len_inv': '5'
        },
        1: {
            'nickname': 'Ghaechka',
            'level': '9999',
            'inventory': ['3', '4', '2'],
            'money': '99999',
            'avatar': '..//Ghaechka_a.jpg',
            'len_inv': '3'
        },
        2: {
            'nickname': 'kloun_maks',
            'level': '73',
            'inventory': ['6', '7', '5', '2'],
            'money': '350',
            'avatar': '..//kloun_maks_a.jpg',
            'len_inv': '4'
        },
        3: {
            'nickname': 'Admin',
            'level': '∞',
            'inventory': ['0', '4', '5'],
            'money': '∞',
            'avatar': '..//Admin_a.jpg',
            'len_inv': '3'
        }
    }
};

function len_list(lst) {
    let quanity_profile = 0;
    for (var key in lst.users) {
        quanity_profile++;
    };
    return quanity_profile;
};

function prof_l(profile) {
    let profile_last = {
        'users': {

        }
    };

    for (let i = 0; i < len_list(profile); i++) {
        let a = profile.users[i];
        profile_last.users[a.nickname] = a;
    };
    return profile_last;
};

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('<a href="/profiles">Profiles</a> <a href="/items">Items</a>');
})

app.get('/profile/:nickname', function (request, response) {
    let nickname = request.params.nickname;
    response.render('profile.hbs', prof_l(profile).users[nickname]);
});

app.get('/profile/:nickname/inventory', function (request, response) {
    let nickname = request.params.nickname;
    let inventory_profile = prof_l(profile).users[nickname].inventory;
    let inventory_prof = {
        prof: {

        }
    };
    for (let i = 0; i < inventory_profile.length; i++) {
        a = inventory_profile[i];
        b = inventory.users[a];
        inventory_prof.prof[i] = b;
    };
    response.render('inventory.hbs', inventory_prof);
});

app.get('/profiles', function (request, response) {
    data = {};
    all_profiles = [];
    for (let i = 0; i < len_list(profile); i++) {
        let a = profile.users[i].nickname;
        all_profiles.push(a);
    };
    data['all_profiles'] = all_profiles;
    response.render('profiles.hbs', data);
});

app.get('/items', function (request, response) {
    data = {
        items: {

        }
    };
    for (let j = 0; j < len_list(inventory); j++) {
        one_name = inventory.users[j].name;
        url = inventory.users[j].url;
        data.items[one_name] = url;
    };
    response.render('items.hbs', data);
});

app.get('/item/:itemname', function (req, res) {
    let itemname = req.params.itemname;
    let profile_last = {

    };

    for (let i = 0; i < len_list(inventory); i++) {
        let a = inventory.users[i];
        if (a.url == itemname) {
            profile_last[itemname] = a
        };
    };
    res.render('item.hbs', profile_last[itemname]);
});

app.listen(port = 3000, function () {
    console.log('Сервер запущен...');
});