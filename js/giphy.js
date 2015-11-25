//var for the search term
var searchTerm = '';
//var for the offset, aka the index of the array of gifs that we want to start with
var offset = 0;
//limit the number of gifs we request
var limit = 10;
//variable for the loop that draws the images
var hardLimit = 10;
//public key
var key = "dc6zaTOxFJmzC";

//on submit listener for the form
$('form').on('submit', function(e) {
  e.preventDefault();
  //sets the search term
  searchTerm = $("#keyword").val();
  //reset offset and limit when there's a new submission
  offset = 0;
  limit = 10;
  //makes ajaxcall
  ajaxCall();

});

//here's the ajax call
function ajaxCall() {
  //construct the URL using variables from above
  url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm.replace(/ /g,"+")+"&api_key="+key+"&limit="+limit+"&offset="+offset;
  //the call
  $.ajax({
      url: url,
      type: "get",
      dataType: "json"
  }).done(function(response){
    //draw the images based on the response from the call
    for(var i = 0; i<hardLimit; i++){
      if (response.data[i]){
        newImg = $("<img src ='' />");
        newImg.attr('src', response.data[i].images.original.url)
        $("body").append(newImg)
      }else {
        //return if the total number of images is reached, aka the index is invalid.
        return;
      }
    }
    //increas the offset and limit for the next call
    offset += 10;
    limit += 10;
  }).fail(function(){
    //in case of a failure
    console.log("Ajax request fails!")
  })
}

//listener for when the user scrolls to the bottom
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     //make the call again, will have different offset and limit
     if (searchTerm){ //check to see if the search term exists before calling api
       ajaxCall();
     }
   }
});
