let $canvas = $("#doodlepad");
let lastEvent;
let mouseDown = false;
let context = $("#doodlepad")[0].getContext("2d");
let markerWidth = 4;
let marker = "#08143A";

$canvas
  .on("mousedown", (e) => {
    lastEvent = e;
    mouseDown = true;
  })
  .on("mousemove", (e) => {
    if (mouseDown) {
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.lineWidth = markerWidth;
      context.strokeStyle = marker;
      context.lineCap = "round";
      context.stroke();

      lastEvent = e;
    }
  })
  .on("mouseup", () => {
    mouseDown = false;
  })
  .on("mouseleave", () => {
    mouseDown = false;
  });
