var filtersShowing = false
$(document).ready(function(){
    $("#advancedSearch h5").click(function() {
        if (filtersShowing){
            filtersShowing = false;
            $("#filters").css("max-height", 0)
            $("#advancedSearch .fa").removeClass("fa-times").addClass("fa-chevron-down")
        } else {
            filtersShowing = true;
            var scrollHeight = $("#filters").prop("scrollHeight") + "px"
            $("#filters").css("max-height", scrollHeight)
            $("#advancedSearch .fa").removeClass("fa-chevron-down").addClass("fa-times")
        } 
    });
});