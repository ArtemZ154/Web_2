const express = require('express');
const app = express();

const inventory = {
    '145623':{
        'name':'Козырь',
        'Money':'2000',
        'discription':'Он ликвидирует своих врагов также уверенно, как поправляет галстук! Белый костюм, маска с красным ромбом, темные перчатки и галстук – лучше вам не видеть его за игрой в карты!'
    },
    '723532':{
        'name':'Разведчица Galaxy',
        'Money':'2000',
        'discription':'Судьба галактики в ваших руках.'
    },
    '946362':{
        'name':'Элитный агент',
        'Money':'1500',
        'discription':'Любой агент становится элитным, когда у него появляется средство для ночной видимости.'
    },
    '947394':{
        'name':'Бёрди',
        'Money':'800',
        'discription':'Бьёт в цель с первой попытки.'
    },
    '561292':{
        'name':'Вязаная связистка',
        'Money':'2000',
        'discription':'Связана из ласкутков одежды врагов.'
    },
    '123532':{
        'name':'Позывной «Эльф»',
        'Money':'1200',
        'discription':'Я не могу объяснить ему отсутствие классических вытянутых ушек!'
    },
    '423276':{
        'name':'Полковник Полуночник',
        'Money':'1200',
        'discription':'Любитель отдохнуть душой и телом.'
    },
    '847361':{
        'name':'Весельчак',
        'Money':'1500',
        'discription':'Спокойных Вам кошмаров с таким персонажем!'
    }
}

const profile = {
    'users':{
        0:{
            'nickname':'Genius',
            'level':'87',
            'inventory':['145623', '723532', '946362', '561292', '947394'],
            'money':'555',
            'avatar':'..//Genius_a.jpg',
            'len_inv': '5'
        },
        1:{
            'nickname':'Ghaechka',
            'level':'9999',
            'inventory':['947394', '561292', '946362'],
            'money':'99999',
            'avatar':'..//Ghaechka_a.jpg',
            'len_inv': '3'
        },
        2:{
            'nickname':'kloun_maks',
            'level':'73',
            'inventory':['423276', '847361', '123532', '946362'],
            'money':'350',
            'avatar':'..//kloun_maks_a.jpg',
            'len_inv': '4'
        },
        3:{
            'nickname':'Admin',
            'level':'∞',
            'inventory':['145623', '561292', '123532'],
            'money':'∞',
            'avatar':'..//Admin_a.jpg',
            'len_inv': '3'
        }
    }
};

function qual_l_p() {
    let quanity_profile = 0;
    for (var key in profile.users) {
        quanity_profile++;
    };
    return quanity_profile;
}

function prof_l() {
    let profile_last = {
        'users': {
            
        }
    };
    
    for (let i = 0; i < qual_l_p(); i++) {
        let a = profile.users[i];
        profile_last.users[a.nickname] = a;
    };
    return profile_last;
}

app.set('view engine', 'hbs');
app.set('views', './templates');

app.use(express.static('public'));

app.get('/profile/:nickname', function(request, response) {
    let nickname = request.params.nickname;
    response.render('profile.hbs', prof_l().users[nickname]);
});

app.get('/profile/:nickname/inventory', function(request, response) {
    let nickname = request.params.nickname;
    let inventory_profile = prof_l().users[nickname].inventory;
    let inventory_prof = {
        prof:{

        }
    }
    for (let i = 0; i < inventory_profile.length; i++) {
        a = inventory_profile[i];
        b = inventory[a]
        inventory_prof.prof[i] = b;
    };
    response.render('inventory.hbs', inventory_prof);
});

app.get('/profiles', function(request, response) {
    data = {};
    all_profiles = [];
    for (let i = 0; i < qual_l_p(); i++) {
        let a = profile.users[i].nickname;
        all_profiles.push(a);
    };
    data['all_profiles'] = all_profiles;
    response.render('profiles.hbs', data);
});

app.listen(port=3000, function() {
    console.log('Сервер запущен...');
});