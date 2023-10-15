$(document).on('input', 'input[type="range"]', function() {
    $(".bar-range").html($(".range-bar").val());
  });
  
$(".btn").click(function (e) {
    var range = parseFloat($(".bar-range").html());
    $("#passBox").val(generatePassword(range));
})
var  upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  lowerChars = "abcdefghijklmnopqrstuvwxyz";
var  numbers10 = "1234567890"
var  special = "~!@#$%^&*()_+";
function generatePassword(range) {
    var finalPass = "";
    var allChars = "";
    allChars += $("#Lowercase").prop("checked") ? lowerChars : "";
    allChars += $("#Uppercase").prop("checked") ? upperChars : "";
    allChars += $("#Numbers").prop("checked") ? numbers10 : "";
    allChars += $("#Special").prop("checked") ? special : "";

    for (var i = 0; i < range; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        finalPass += allChars.charAt(randomIndex);
    }
    return finalPass;
}
