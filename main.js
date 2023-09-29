status = true;
    objects = [];

function preload() {
    alarm = loadSound("wake_up.mp3");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide()
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results)
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    for(i=0; i < objects.length; i++) {
        r = random(255);
        g - random(255);
        b = random(255);
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    if(objects[i].label == "person") {
        document.getElementById("status").innerHTML = "Status: Person Detected";
        alarm.stop();
    }
    else(objects[i].label != "person");
        document.getElementById("status").innerHTML = "Status: Object Not Detected";
        alarm.play();
    };
    if(objects[i].length > 0) {
        document.getElementById("status").innerHTML = "Status: Object Not Detected";
        alarm.play();
    };

