let scene, car, rocket;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    rocket = document.querySelector("#rocket");

    car.x = 0;
    car.dx = 0.01;

    rocket.y = -2;
    rocket.dy = 0.01;


    loop();
    
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position", {x:car.x, y:0, z:-5});

    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x:0, y:0, z:0});

    window.requestAnimationFrame(loop);
}