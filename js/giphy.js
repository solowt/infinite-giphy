searchTerm = '';
var numGifs = 10;
offset = 0;
limit = 10;
key = "dc6zaTOxFJmzC";
url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+key+"&limit="+limit+"&offset="+offset;
$("body").append($("<img src=http://giphy.com/gifs/robot-valvrave-harakiri-DUG89FKzbL5Bu />"))

$('form').on('submit', function(e) {

  e.preventDefault();

  searchTerm = $("#keyword").val();
  url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+key+"&limit="+limit+"&offset="+offset;

  $.ajax({
      url: url,
      type: "get",
      dataType: "json"
  }).done(function(response){
      console.log(response.data[0])
      newImg = $("<img src ='' />");
      newImg.attr('src', response.data[0].url)
      $("body").append(newImg)

  }).fail(function(){
      console.log("Ajax request fails!")
  })

});
// q - search query term or phrase
// limit - (optional) number of results to return, maximum 100. Default 25.
// offset - (optional) results offset, defaults to 0.
// rating - limit results to those rated (y,g, pg, pg-13 or r).
// fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
