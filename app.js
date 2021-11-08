function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function mouseInCanvasEventListener() {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("jsCanvas");

  let painting = false;

  if (canvas) {
      mouseInCanvasEventListener();
  }

});
