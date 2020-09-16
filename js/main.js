$(document).ready(() => {
    new CircleType(document.getElementById('top1'))
        .radius(95);
    new CircleType(document.getElementById('down1'))
        .dir(-1)
        .radius(95);
    new CircleType(document.getElementById('top2'))
        .radius(95);
    new CircleType(document.getElementById('down2'))
        .dir(-1)
        .radius(95);
    new CircleType(document.getElementById('top3'))
        .radius(95);
    new CircleType(document.getElementById('down3'))
        .dir(-1)
        .radius(95);
    new CircleType(document.getElementById('top4'))
        .radius(95);
    new CircleType(document.getElementById('down4'))
        .dir(-1)
        .radius(95);

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items: 2
            },
            2000:{
                items: 3
            }
        }
    });

    $('.loop').owlCarousel({
        nav: true,
        navText : ["",""],
        dots: true,
        margin:10,
    });

    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');
    });

    document.querySelector(".video-overlay").onclick = function(){
        this.style.display = "none";
    }

    $('#burger').click ( () => {
        $('#menu').show();
        $('#burger').hide();
    });
    $('#menu > *').click ( () => {
        $('#menu').hide();
        $('#burger').show();
    });

    (function () {
        'use strict'

        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation')

            // Loop over them and prevent submission
            Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
        }, false)

        let button = $('#stock .btn');
        let hasError = false;

        button.click(function () {

            let error = $('.error-input');
            error.hide();

            let mail = $('#mail');

            if (!mail.val()) {
                mail.siblings('.error-input').show();
                mail.css('border-color', 'red').css('margin-bottom', '3px');
                hasError = true;
            } else {
                $('#send').hide();
                $('#answer').show();
            }
        });

        $('#popup-action > button').click(() => {
            $('.popup-input').hide();
            let name = $('#name');
            let order = $('#order');
            let phone = $('#phone');
            let amount = $('#amount');

            if (name.val() && order.val() && phone.val() && amount.val()) {
                $.ajax({
                    type: 'post',
                    url: 'mail.php',
                    data: 'name=' + name.val() + '&order=' + order.val() + '&phone=' + phone.val() + '&amount=' + amount.val(),
                    success: () => {
                        $('#popup-content').hide();
                        $('#popup-content-second').show();
                        $('#test-popup').css('background', 'url("../diplom/images/bg-popup-second.png")').css('background-position', 'center');
                    },
                    error: () => {
                        $('#reservation-container').hide();
                        alert('Ошибка бронрования. Свяжитесь, пожалуйста, по номеру телефона.')
                    }
                })
            } else {
                if (!name.val()) {
                    name.siblings('.popup-input').show();
                    hasError = true;
                }
                if (!order.val()) {
                    order.siblings('.popup-input').show();
                    hasError = true;
                }
                if (!phone.val()) {
                    phone.siblings('.popup-input').show();
                    hasError = true;
                }
                if (!amount.val()) {
                    amount.siblings('.popup-input').show();
                    hasError = true;
                }
            }
        });
    }())
})
