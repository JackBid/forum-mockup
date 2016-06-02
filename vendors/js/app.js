$(document).ready(function(){
  var $ol = $(".main-content ol");
  var $submit = $(".submit-form-section input[type='submit']");
  var $title = $(".title-form-section input[type='text']");
  var $text = $(".text-form-section textarea");

  $submit.on('click', function(event){
    event.preventDefault();
    var postTitle = $title.val();
    var postText = $text.val();
    console.log(postTitle + "\n" + postText);
    var liToAdd = "<li><div class='post-container'>" +
                      "<h3 class='post-title'>" + postTitle + "</h3>" +
                      "<p class='post-text'>" + postText + "</p>" +
                      "<div class='icon-container'>" +
                        "<i class='icon ion-thumbsup'></i>" +
                        "<i class='icon ion-android-person'></i>" +
                      "</div>" +
                  "</div></li>";
    $ol.append(liToAdd);
  });
});
