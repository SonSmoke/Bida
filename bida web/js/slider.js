$(document).ready(function() {
    $('.slideshow-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 5000
    });


    $('.firms').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });



    const clearInput = () => {
        const input = document.getElementsByTagName("input")[0];
        input.value = "";
    }

    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clearInput);



});