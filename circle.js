// class Circle {
//     constructor(x, y, radius, color) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//     }
//     render() {
//         let canvas = document.getElementById('mycanvas');
//         let ctx = canvas.getContext('2d');
//         ctx.beginPath();
//         ctx.fillStyle = this.color;
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
//         ctx.fill();
//     }
// }
// let circle1 = new Circle(10, 10, 100, "#000000");
// circle1.render();
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color
    this.renderCircle = function () {
        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
    }
}
let circle = new Circle(10,10,100,"#000000");
circle.renderCircle();

