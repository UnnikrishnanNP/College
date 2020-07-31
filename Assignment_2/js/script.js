$(document).ready(function () {
  $("#btn1").click(function () {
    var optionSelected = $("#selection").children("option:selected").val();
    switch (optionSelected) {
      case "1":
        var radius = $("#userInput").val();
        if (!$.isNumeric($("input:text").val())) {
          alert("Enter A NUmber!");
          return false;
        }
        var area = 3.14 * radius * radius;
        var perimeter = 2 * 3.14 * radius;

        $("#text1").text("The Area Of Circle Is : " + area);
        $("#text2").text("The Perimeter Of Circle Is : " + perimeter);

        break;
      case "2":
        var length = $("#userInput").val();
        if (!$.isNumeric($("input:text").val())) {
          alert("Enter A NUmber!");
          return false;
        }

        var area = length * length;
        var perimeter = 4 * length;

        $("#text1").text("The Area Of Square Is : " + area);
        $("#text2").text("The Perimeter Of Square Is : " + perimeter);

        break;
      case "3":
        var num = $("#userInput").val();
        if (!$.isNumeric($("input:text").val())) {
          alert("Enter A NUmber!");
          return false;
        }
        $("#text1").html("Prime Numbers Upto " + num + " is  : ");
        for (i = 2; i <= num; i++) {
          var c = 0;
          for (j = 2; j < i; j++) {
            if (i % j == 0) {
              c = 1;
              console.log(c);
              break;
            }
          }
          if (c == 0) {
            var result = $("#text1").html();
            $("#text1").html(result + "<br />" + j);
          }
        }
    }
  });
});
