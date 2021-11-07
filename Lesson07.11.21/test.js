let a = 0
let government = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            let i = 1;
            console.log("Собрать нологи");
            if (i == 1) {
                resolve(1000000);
            } else {
                reject('Нологи не собраны') //Выдает ошибку при не выполненом Promise 
            }
        }, 2000);
    }
);

government.then(function () {
    console.log('Бабки в карман!!!');
    a += result;
    return a;
}).then(function (result) {
    a -= a * 0.95;
    console.log(`Ушло в карман В.В. ${a}`)
})
console.log(a);

let govs = [
    new Promise(resolve => setTimeout(() => resolve(1), 1000))
]