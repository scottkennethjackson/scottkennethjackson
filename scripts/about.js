let $canvas = $('#canvas');
let lastEvent;
let mouseDown = false;
let context = $('#canvas')[0].getContext('2d');
let markerWidth = 4;
let marker = '#211936';

// Let the user doodle on Esmé's illustration
$canvas.on('mousedown', (e) => {
    lastEvent = e;
    mouseDown = true;
}).on('mousemove', (e) => {
    if(mouseDown) {
        context.beginPath();

        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.lineWidth = markerWidth;
        context.strokeStyle = marker;
        context.lineCap = "round";
        context.stroke();

        lastEvent = e;
    }
}).on('mouseup', () => {
    mouseDown = false;
}).on('mouseleave', () => {
    mouseDown = false;
});