$(document).ready(function() {
    $("#searchButton").click(function(){
        var beginDate = $("#startYear").val();
        var endDate = $("#endYear").val();
        var searched = $("#searchTerm").val();
        var recordsDisplayed = $("#numRecordBox").val();
        var queryURL="https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?bebin_date="+ beginDate+ "&end_date="+ endDate+"&q="+ searched+ "&api-key=hvH1MpXQxknB9RAI34sKfjYOv0WiWi6I";
        
        // if(beginDate.length==4){
        //     beginDate= beginDate+ "0101";
        // };
        // if(endDate.length==4){
        //     endDate= endDate+"0101";
        // };
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
            console.log(response);
        
            for (var i = 0; i < recordsDisplayed; i++) {
                var articleDiv = $("<div>").addClass("article");
                var headlineel = $("<h5>").text(response.response.docs[i].headline.main);
                var abstractel = $("<p>").text(response.response.docs[i].abstract);
                var linkel = $("<a>").attr("href", response.response.docs[i].web_url).text(response.response.docs[i].web_url);
                articleDiv.append(headlineel, abstractel, linkel);
                $("#listOfArticles").append(articleDiv);
            }
            
        });      
    });
});