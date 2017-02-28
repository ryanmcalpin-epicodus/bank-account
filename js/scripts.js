$(document).ready(function() {
  $(".radio").change(function() {
    $(".transaction").toggle();
  });

  $("form#registration-form").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();

  });
  $("form#balance-form").submit(function(event) {
    event.preventDefault();
    var withdrawalInput = $("#withdrawal").val();
    var depositInput = $("#deposit").val();
  });
});
