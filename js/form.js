
$(function() {
    $('button.applicationButton').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/vexx.lviv@gmail.com",
                method: "POST",
                data: {
                    userName: $('#name').val(),
                    userEmail: $('#email').val(),
                    userPhone: $('#tel').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>ваше повідомлення надіслане! я звяжусь з вами найближчим часом!</h1>')
            })
            .fail(function() {
                $('form').html('<h1>нажаль ви ввели некоректні данні! спробуйте ще раз!</h1>')
            });
    });
});