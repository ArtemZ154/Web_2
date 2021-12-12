$('.count-test').on('keyup', function () {
    let count = $('.count-test').val();
    // console.log(count);
    $('.questions').text("")
    for (let i = 0; i < count; i++) {
        // console.log(1);
        $('.questions').append(`<input type="text" placeholder="Введите вопрос теста" class="name_test_${i}" name="name_test">`);
        $('.questions').append(`<input type="text" placeholder="Количество ответов" class="count-answer n-${i}" name="count_answer_test"><div class="answers"></div>`);
        count_answer = $(`.count_answer_test_${i}`).val();

    };
    $('.count-answer').on('keyup', function () {
        let count = $(this).val();
        console.log(count);
        $('.count-answer').next().text("")
        for (let j = 0; j < count; j++) {
            $(this).next().append(`<label><input type="radio" name="answer_for_question"><input type="text" placeholder="Введите ответы"></label><br>`);
        };
    })
})
