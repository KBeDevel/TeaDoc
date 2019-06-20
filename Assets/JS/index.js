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
$( "#presModal" ).on('shown.bs.modal', function(){
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