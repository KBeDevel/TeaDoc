window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        $("#toTop").fadeIn("slow")
    } else {
        $("#toTop").fadeOut("fast")
    }
}
// When the user clicks on the button, scroll to the top of the document
$("#toTop").on("click", function(){
    $("html, body").animate({scrollTop: $("html").offset().top}, 500)
})