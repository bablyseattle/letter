$(document).ready(function(){
  $("#formOne").submit(function(event){
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var zipInput = $("input#zip").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".zip").text(zipInput);
    $("#letter").show();
    event.preventDefault();
  });
});
