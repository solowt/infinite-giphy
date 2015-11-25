var searchTerm = $("#keyword").val();

// q - search query term or phrase
// limit - (optional) number of results to return, maximum 100. Default 25.
// offset - (optional) results offset, defaults to 0.
// rating - limit results to those rated (y,g, pg, pg-13 or r).
// fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)

//giphy url, what kind of json will this return? array of gifs or 1 gif only?
offset= 
limit = 10;
key = "dc6zaTOxFJmzC";
url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+key+"&limit="+limit+"";

var numGifs = 10;
