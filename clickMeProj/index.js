$("body").css({
  margin: 0,
  padding: 0,
});

$("#root").css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "flex-wrap": "wrap",
});
let i = 0;
$("#root")
  .append("<div>0</div>")
  .children()
  .addClass("click-me")
  .attr("id", i)
  .css({
    height: "2em",
    width: "2em",
    "background-color": "red",
    "border-radius": "18px",
    "text-align": "center",
    margin: "3px",
    cursor: "pointer",
  });

$(".click-me").click((e) => {
  i++;
  console.log("current node : ", i);
  let x = $(`#${e.target.id}`)
    .append(`<div>${e.target.id}, ${1}</div>`)
    .children();
  // debugger
  x.eq(x.length - 1)
    .addClass("click-me")
    .attr("id", i)
    .css({
      height: "2em",
      width: "2em",
      "background-color": "red",
      "border-radius": "18px",
      "text-align": "center",
      margin: "2em",
      cursor: "pointer",
    });
  console.log(x);
});
