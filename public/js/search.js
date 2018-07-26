var filtersShowing = false
var filters = []
$(document).ready(function(){
    setUpFilters();
    $("#advancedSearch h5").click(function() {
        if (filtersShowing){
            hideFilters()
        } else {
           showFilters()
        } 
    });

     $("#advancedSearch #submitNewSearch a").click(function() {
        var filterChoices = []
        $('.filter select').each(function(e){
            filterChoices.push($(this).val());
        })

        var filterChoicesWithoutFilterTitle = filterChoices;

        var filters = local_data.filters.map(function(filter){ return filter.title })
        filters.push("----------")

        filters.forEach(function(filter){
            var index = filterChoicesWithoutFilterTitle.indexOf(filter)
            if(index != -1){
                filterChoices.splice(index, 1);
            }
        });

        for (var i = filterChoices.length - 1; i >= 0; i--) {
            local_data.filters.forEach(function(filter){
                if(filter.options.includes(filterChoices[i])){
                    filterChoices[i] = filter.title + "=" + filterChoices[i]
                }
            })
        }
        var queryString = buildFilterQueryString(filterChoices);

        $("#advancedSearch #submitNewSearch a").attr("href", "/search" + queryString)
    });
});

var buildFilterQueryString = function(filterChoices){
    if(filterChoices.length == 0) return ""
    var queryString = "?searchFilters=true&"
    filterChoices.forEach(function(filter){
        if(filter.includes("=")){
            queryString = queryString + filter.replace(" ", "_") + "&"
        }
    })
    return queryString.substring(0, queryString.length-1)
}

var setUpFilters = function() {
    var filterMap = new Map()

    local_data.filters.forEach(function(filter){
        var filterValue = getUrlParameter(filter.title.replace(" ", "_"))
        if(filterValue != undefined){
            filterMap.set(filter.title.replace(" ", "_"), filterValue);
        }
    })
    console.log(filterMap)
    filterMap.forEach(function(value, key){
        $("[value='" + key.replace("_", " ") + "'] select option[value='" + value + "']").attr('selected','selected');    
    })

    if(filterMap.size > 0) {
        showFilters()
    }
}

var showFilters = function(){
    filtersShowing = true;
    var scrollHeight = $("#filters").prop("scrollHeight") + "px"
    $("#filters").css("max-height", scrollHeight)
    $("#advancedSearch .fa").removeClass("fa-chevron-down").addClass("fa-times")
}

var hideFilters = function(){
    filtersShowing = false;
    $("#filters").css("max-height", 0)
    $("#advancedSearch .fa").removeClass("fa-times").addClass("fa-chevron-down")
}

var getUrlParameter = function(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};