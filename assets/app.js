// 5y6lpS2mVK3JdNkQemlNS4CQenUvTsjK - API key

//create a set of buttons on load
//clicking button will search giphy via api 
//initally load still image if 10 gifs
//when still clicked, gif should animate.
//if clicked again, enable still
//display rating under each gif
//create form field and submit button to add button topic to top

$(document).ready(function(){
    // Array of search strings
    var topics = ["Parents", "Kids", "Moms", "Dads", "Children", "Parenting", "Family", "Toddlers", "Babies"];
    
    //First function: display search strings
    function displayGifName() {
        var gifName = $(this).attr("gif-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&limit=10&api_key=5y6lpS2mVK3JdNkQemlNS4CQenUvTsjK";

       // Create AJAX call for button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response)

        // Create gif div
        var gifDiv = $("div class='gif'>");

        //store the rating
        var rating = response.rating;

        //element to have display rating
        var rateGif = $("<p>").text("Rating: " + rating);

        //dispay rating
        gifDiv.append(rateGif);

        //retrieve still shot url
        var stillGif = response.data.images.fixed_height_still;

        //create element to hold still shot
        var stillFrame = $("<div class = freezeFrame>");

        //retrieve animated gif url
        var animatedGif = response.data.url;

        //create element to hold animated gif
        var animatedFrame = $("<div class = frame");

        //append still image 
        gifDiv.append(stillFrame);
        
    
        $("#gif-view").prepend(gifDiv);       
});
    }
// Second function make buttons    
function makeButtons() {
        $("#button_container").empty();
        for(var i = 0; i < topics.length; i++){
            var p = $("<button>");
            // add attributes. reference movie-button-layout-solved.
            p.addClass("gif-btn");
            p.attr("gif-name", topics[i]);
            p.text(topics[i]);
            $("#button_container").append(p);
        }
    }

    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // grabs the input from text box
        var gify = $("#gif-input").val().trim();

        topics.push(gify);

        makeButtons();
    });    
// click event listener to all elemtns w/ class of "gif-btn"
$(document).on("click", ".gif-btn", displayGifName);

makeButtons();

});