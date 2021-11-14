function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let promise = new Promise(
    function (resolve, reject) {
        a = randomInteger(1, 10)
        if (result <= 5) {
            resolve()
        }

        else if (result >= 6) {
            reject()
        }
    }
)
promise.then(function() {
    console.log('Гений')
}, function() {
    console.log('лох')
})