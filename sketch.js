var n = 0;
var c = 4;
var multiplier = 137.5;
var increase = 1;
var increaseBy = 1;
var newIncrease = 0;
var nOffset = 100;


var increaseSlider;
var increaseBySlider;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
    colorMode(HSB)
    background(0);
    increaseSlider = createSlider(0,10,0,0.1);
    increaseSlider.position(407,383);
}

function draw() {
    increaseSlider.changed(printVal);
    increase = newIncrease + increaseSlider.value();
    // print(increase);
    var a = n * multiplier;
    var r = c * sqrt(n);

    n += map(noise(nOffset), 0, 1, 0, 8);
    console.log(n)
    // console.log(nIncrease)
    // n += round(nIncrease);

    nOffset += 0.00001;

    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;

    fill(a % 360, 50, 100);
    noStroke();

    ellipse(x, y, 4, 4)
    //newIncrease += 0.0001;
    n += increase;

}

function printVal() {
    print(increaseSlider.value());
}
