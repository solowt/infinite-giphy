var searchTerm = '';
var offset = 0;
var limit = 10;
var hardLimit = 10;
var key = "dc6zaTOxFJmzC";

$('form').on('submit', function(e) {
  e.preventDefault();
  searchTerm = $("#keyword").val();
  offset = 0;
  limit = 10;
  ajaxCall();

});


function ajaxCall() {
  url = "http://api.giphy.com/v1/gifs/search?q="+searchTerm.replace(/ /g,"+")+"&api_key="+key+"&limit="+limit+"&offset="+offset;
  $.ajax({
      url: url,
      type: "get",
      dataType: "json"
  }).done(function(response){
    for(var i = 0; i<hardLimit; i++){
      if (response.data[i]){
        newImg = $("<img src ='' />");
        newImg.attr('src', response.data[i].images.original.url)
        $("body").append(newImg)
      }else {
        return;
      }
    }
    offset += 10;
    limit += 10;
  }).fail(function(){
      console.log("Ajax request fails!")
  })
}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      ajaxCall();
   }
});
