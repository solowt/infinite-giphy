$("button").click(function(){
  system.log($("#keyword").val());
})

// q - search query term or phrase
// limit - (optional) number of results to return, maximum 100. Default 25.
// offset - (optional) results offset, defaults to 0.
// rating - limit results to those rated (y,g, pg, pg-13 or r).
// fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)

var numGifs = 10;
offset = 0;
limit = 10;
key = "dc6zaTOxFJmzC";
//url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+key+"&limit="+limit+"&offset="+offset;
