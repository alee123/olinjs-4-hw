$(document).ready(function () {

  $('#tweetForm').submit(function (event) {

  	console.log('working');
    event.preventDefault();
    $.post("/tweets/:user", $('#tweetForm').serialize());
    
    $('#result').html("<p>Submitted!</p>")

    var toRepeat = $.get("/tweets/update",function(data){
      $('#topper').remove();
      $('#tweets').append(data);
    })    
    setInterval(toRepeat, 1000);
    return false;
  })


})


