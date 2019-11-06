var n = 0;
var c = 4;
var multiplier = 137.5;
var increase = 1.2;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
    colorMode(HSB)
    background(0);
}

function draw() {

    var a = n * multiplier;
    var r = c * sqrt(n);

    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;

    //var cx = map(x,0,width,0,255);


    fill(a % 360, 50, 100);
    noStroke();

    ellipse(x, y, 4, 4)

    n += increase;
    increase +=.00005;
    //multiplier += 1.2;

}

/// IDEAS ///
/*
multiplier increases and decreases at certain rates:
-=.1
+=.1
+=.5
.05
3

play around with colours
fill(r % 360, 50, 100);
fill(r % 360, 100, 100);
same with fill(a)

rainbow!
var cx = map(x,0,width,0,255);
fill(cx % 360, 50, 100);

increase amount n increases by
make this variable += 0.0001 on every iteration

COOL PATTERN
increase 1.2 && increase +=.0001
*/
