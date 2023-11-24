// $("div").add("div").addClass("widget");
// var pdiv = $("p").add("div");
// $(".widget").clone().add("<span>Again</span>").appendTo($("#root"));
// $(".widget")
//   .addClass("innerSide")
//   .css("background-color", "red")
//   .add("<span>Red>/span>");
// $(".widget").click(function () {
//   $(this).hide();
// });

// $(".widget").mouseenter(function () {
//   console.log("Entered");
// });
// $(".widget").mouseleave(function () {
//   console.log("Bye! You now leave!");
// });

// hover takes 2 functionality in-out
// $("#p1").hover(
//   function () {
//     console.log("You entered p1!");
//   },
//   function () {
//     console.log("Bye! You now leave p1!");
//   }
// );

// on for multiple events

// $("p").on({
//   mouseenter: function () {
//     $(this).css("background-color", "lightgray");
//     console.log("Entered!!!");
//   },
//   mouseleave: function () {
//     $(this).css("background-color", "lightblue");
//     console.log("Leave!!!");
//   },
//   click: function () {
//     $(this).css("background-color", "yellow");
//     console.log("Clicked!!!");
//   },
// });

// $("#p1").text("Hello")
// $("#p1").removeText()
// $("#root").append("<div>Box</div>");
// $("#root > div").addClass("box").css({
//   width: "20vw",
//   height: "20vh",
//   "background-color": "red",
// });

// $(".box").on({
//   mouseenter: function () {
//     $(this).animate({ height: "50vh" });
//   },
//   mousedown: function () {
//     $(this).animate({ height: "20vh", width: "50vw" });
//   },
//   mouseleave: function () {
//     $(this).animate({ width: "20vw" });
//   },
// });

// $(document).ready(function () {
//   $("button")
//     .first()
//     .click(function () {
//       $("#div1").fadeIn();
//       $("#div2").fadeIn("slow");
//       $("#div3").fadeIn(3000);
//     });
// });

// $("button").eq(1).click(function () {
//   $("#div1").fadeOut();
//   $("#div2").fadeOut("slow");
//   $("#div3").fadeOut(3000);
// });
