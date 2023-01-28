let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let clear = document.querySelector(".clear");
let fill = document.querySelector(".fill");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lw = 10;
let myColor = "black";
let isMouseDown = false;

let colorPicker = document.querySelector("#color");
let lineW = document.querySelector("#lineW");
let lineWValue = document.querySelector(".lineValue");

colorPicker.addEventListener("change", function(){
    myColor = colorPicker.value;
});

clear.addEventListener("click", function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
});

fill.addEventListener("click", function(){
    context.fillStyle = myColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
});


canvas.addEventListener("mousemove", function(event){
    context.fillStyle = myColor;
    context.strokeStyle = myColor;
    context.lineTo(event.clientX, event.clientY);
    context.stroke();

    context.beginPath();
    context.arc(event.clientX, event.clientY, lw/2, 0, Math.PI * 2);

    context.fill();

    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
});

context.lineWidth = lw;

lineW.addEventListener("change", function(){
    lw = lineW.value;
    context.lineWidth = lw;
    lineWValue.innerHTML = lineW.value;
});

setInterval(()=> lineWValue.innerHTML = lineW.value, 0);

