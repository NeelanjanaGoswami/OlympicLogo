canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown (e) {
    color = document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x =" + mouse_x + ",y =" + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle (mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();  
} 

function cleararea() {
    ctx.clearRact (0, 0, canvas.width, canvas.height);
}