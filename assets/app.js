// 5y6lpS2mVK3JdNkQemlNS4CQenUvTsjK - API key

// create a set of buttons on load
//clicking button will search giphy via api 
//initally load still image if 10 gifs
//when still clicked, gif should animate.
//if clicked again, enable still
//display rating under each gif
//create form field and submit button to add button topic to top

var topics = ["Parents", "Kids", "Moms", "Dads", "Children", "Parenting", "Family", "Toddlers", "Babies"]
var queryURL = "https://api.giphy.com/v1/gifs/search/q" + topics + "?api_key=5y6lpS2mVK3JdNkQemlNS4CQenUvTsjK";