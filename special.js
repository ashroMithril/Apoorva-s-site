$(document).ready(function() {
  $("#about").click(function() {
    $("#about-content").show();
    $("#projects-content").hide();
    $("#contact-content").hide();
  });
  $('#projects').click(function() {
    $("#about-content").hide();
    $("#projects-content").show();
    $("#contact-content").hide();
  });
  $('#contact').click(function() {
    $("#about-content").hide();
    $("#projects-content").hide();
    $("#contact-content").show();
  });
  $("#pic-text").hover(function() {
    $("#vishy").show();
  }, function() {
    $("#vishy").hide();
  });
});

