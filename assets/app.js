// 5y6lpS2mVK3JdNkQemlNS4CQenUvTsjK - API key

//create a set of buttons on load
//clicking button will search giphy via api 
//initally load still image if 10 gifs
//when still clicked, gif should animate.
//if clicked again, enable still
//display rating under each gif
//create form field and submit button to add button topic to top

$(document).ready(function(){
    // var topics = ["Parents", "Kids", "Moms", "Dads", "Children", "Parenting", "Family", "Toddlers", "Babies"];
    

    // function makeButtons() {
    //     for(var i=0; i < makeButtons.length; i++){
    //         $("<button>").text(topic[i]);
    //     }
    // }
    $("button").on("click", function() {
        var topics = $(this).attr("search-topic");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&limit=10&api_key=5y6lpS2mVK3JdNkQemlNS4CQenUvTsjK";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
        console.log(queryURL);
        console.log(response);

        var results = response.data;

        for (var i=0; i < results.length; i++) {
            var searchDiv = $("<div>");
            var p = $("<p>").text("Rating:" + results[i].data.rating);
            var topicImage = $("<img>");
            topicImage.attr("src", results[i].data.images.fixed_width_still);
        
            searchDiv.append(p);
            searchDiv.append(topicImage);
            $("#gif_container").prepend(searchDiv);
        
        }
    }) 
    });
    
   








});

