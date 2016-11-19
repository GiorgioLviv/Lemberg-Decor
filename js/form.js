
$(function() {
    $('#sending').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/y_zakharchuk@yahoo.com",
                method: "POST",
                data: {
                    userName: $('#name').val(),
                    phone: $('#tel').val(),
                    email: $('#email').val(),
                    comment: $('#com').val()
                },
                dataType: "json"
})
            .done(function() {
                $('form').html("<h1>Ми неодмінно зв'яжемося з вами.</h1>")
            })
            .fail(function() {
                $('form').html('<h1>Упс.</h1> <p>Спробуйте заповнити форму ще раз і відправити.</p>')
            });
    });
});
