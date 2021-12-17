$('.count-test').on('keyup', function () {
    let count = $('.count-test').val();
    $('.questions').text("")
    for (let i = 0; i < count; i++) {
        $('.questions').append(`<input type="text" placeholder="Введите вопрос теста" class="name_test_${i}" name="name_test">`);
        $('.questions').append(`<input type="text" placeholder="Количество ответов" class="count-answer n-${i}" name="count_answer_test"><div class="answers"></div>`);
    };
    $('.count-answer').on('keyup', function () {
        let count = $(this).val();
        var classList = $(this).attr('class').split(/\s+/);
        $('.' + classList[1]).next().text("");
        for (let j = 0; j < count; j++) {
            $(this).next().append(`<label><input type="radio" name="answer_for_question"><input type="text" placeholder="Введите ответы"></label><br>`);
        };
    })
})
