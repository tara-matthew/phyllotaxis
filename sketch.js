var n = 0;
var c = 4;
var multiplier = 137.5;

var slider;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
    colorMode(HSB)
    background(0);
    slider = createSlider(0,100);
    slider.position(407,383);
}

function draw() {

    var a = n * multiplier;
    var r = c * sqrt(n);

    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;

    fill(a % 360, 50, 100);
    noStroke();

    ellipse(x, y, 4, 4)

    n += 1;

}
