$(document).ready(function() {
    $("#searchButton").click(function(){
        var beginDate = $("#startYear").val();
        var endDate = $("#endYear").val();
        var searched = $("#searchTerm").val();
        var recordsDisplayed= $("#numRecordBox").val();
        var queryURL="https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?bebin_date="+ beginDate+ "&end_date="+ endDate+"&q="+ searched+ "&api-key=hvH1MpXQxknB9RAI34sKfjYOv0WiWi6I";


        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
            console.log(response);
            if(beginDate.length==4){
                beginDate= beginDate+ "0101";
            };
            if(endDate.length==4){
                endDate= endDate+"0101";
            };
            
            for(var i=0; i<recordsDisplayed.length; i++){
                var articleDiv= $("<div>");
    
                articleDiv.html(JSON.stringify(response.docs[i]));
                $("#listOfArticles").append(articleDiv);
            }
        });
    })
});