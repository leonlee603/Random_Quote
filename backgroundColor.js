// Function that listen to the click event to change the background color.
$(function() {
  $("li.button").on("click", function(e) {
    console.log(e.type)
    if ($(this).attr("id") === "isabelline") {
      $("body").css("backgroundColor", "#F2EFEA");
    } else if ($(this).attr("id") === "independence") {
      $("body").css("backgroundColor", "#4F5D75");
    } else if ($(this).attr("id") === "powerblue") {
      $("body").css("backgroundColor", "#C0E6DE");
    } else if ($(this).attr("id") === "celadon") {
      $("body").css("backgroundColor", "#B5DDA4");
    } else if ($(this).attr("id") === "lacender") {
      $("body").css("backgroundColor", "#D3C2CE")
    }
  });
});
