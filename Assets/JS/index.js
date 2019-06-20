window.onscroll = function() {scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
        $("#toTop").fadeIn("slow")
    else
        $("#toTop").fadeOut("fast")
}
$("#toTop").on("click", function(){
    $("html, body").animate({scrollTop: $("html").offset().top}, 500)
})
$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
})
$('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
})
jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    })
})
$("#presModal").on('shown.bs.modal', function(){
    $('#focus').trigger('focus')
})
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
        $(".carousel-control.left").click()
        return false
    }
    if (e.keyCode === 39) {
        $(".carousel-control.right").click()
        return false
    }
})
$("#submitDoneModal").on('shown.bs.modal', function(){
    $('#gt-button').prop('disabled',true)
    $('#inputEmail').prop('disabled',true)
    $('#inputEmail').val('Email received')
    $('#gt-button').text('Submitted')
    var start = 100
    var mid = 145
    var end = 250
    var width = 25
    var leftX = start
    var leftY = start
    var rightX = mid - (width / 2.7)
    var rightY = mid + (width / 2.7)
    var animationSpeed = 10

    var ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
    ctx.lineWidth = width
    ctx.strokeStyle = 'rgba(53, 186, 53, 1)'

    for (i = start; i < mid; i++) {
    var drawLeft = window.setTimeout(function() {
        ctx.beginPath()
        ctx.moveTo(start, start)
        ctx.lineTo(leftX, leftY)
        ctx.stroke()
        leftX++
        leftY++
    }, 1 + (i * animationSpeed) / 3)
    }

    for (i = mid; i < end; i++) {
    var drawRight = window.setTimeout(function() {
        ctx.beginPath()
        ctx.moveTo(leftX, leftY)
        ctx.lineTo(rightX, rightY)
        ctx.stroke()
        rightX++
        rightY--
    }, 1 + (i * animationSpeed) / 3)
    }
})