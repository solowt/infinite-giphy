//public key
var key = "dc6zaTOxFJmzC";
var searchTerm; //I want this to be global
//on submit listener for the form
$('form').on('submit', function(e) {
  e.preventDefault();
  //makes ajaxcall
  ajaxCall(0);
});

//here's the ajax call, takes the offset which is the index of the image to start with
function ajaxCall(offset) {
  //get search term from inside input box
  searchTerm = $("#keyword").val();
  //construct the URL using variables from above
  url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm.replace(/ /g,"+")+"&api_key="+key+"&limit=10&offset="+offset;
  //the call
  $.ajax({
      url: url,
      type: "get",
      dataType: "json"
  }).done(function(response){
    //draw the images based on the response from the call
    for(var i = 0; i<10; i++){
      if (response.data[i]){
        newImg = $("<img class="+searchTerm+" src ='' />"); //draw image, set class to be search term
        newImg.attr('src', response.data[i].images.original.url)
        $("body").append(newImg)
      }else {
        //return if the total number of images is reached, aka the index is invalid.
        return;
      }
    }
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
       ajaxCall($("img."+searchTerm).length); //use the number of images to determine the offset, checks for class which was assigned in ajaxcall method
     }
   }
});
