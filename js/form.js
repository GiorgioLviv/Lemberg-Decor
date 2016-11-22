
$(function() {
    $('button#sending').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/y_zakharchuk@yahoo.com",
                method: "POST",
                data: {
                    userName: $('#name').val(),
                    userEmail: $('#email').val(),
                    userPhone: $('#tel').val(),
                    userCom: $('#com').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>Дякуємо за відгук! Ми перетелефонуємо вам.</h1>')
            })
            .fail(function() {
                $('form').html('<h1>Упс!</h1> <p>Обновіть сторінку та спробуйте ще раз!</p>')
            });
    });
});