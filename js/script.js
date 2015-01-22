

function launchCSSanim() {
    console.log("anim launched");
}

$('.banner2').unslider({
    fluid: true,
    dots: true,
    speed: 500,
    delay: 3000,
    complete: function () {
        launchCSSanim();
    },
});

$(function () {

    $(' #da-thumbs > li ').each(function () {
        $(this).hoverdir();
    });

});