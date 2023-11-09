





document.addEventListener
("DOMContentLoaded", () ==> {
    canvas.width = document.
    documentElement.clientWidth;
    canvas.height = document.
    documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.ramdom
    () * number);
}

function draw(){
    ctx.clearRect(0,0 canvas.width, canvas.height);
        for (let i = 0; i<100; i++) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(225,0,0,0.5";
            ctx.arc(
                random(canvas.width),
                random(canvas.height),
                random(50),
                0,
                2 * Math.PI,
            );
        }

}