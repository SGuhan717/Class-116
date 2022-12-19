nose_x=0;
nose_y=0;

function preload() {
    clown_nose = load_image("https://i.postimg.cc/G3PzkKvg/Clown-nose-large.webp");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet  is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nose_x,nose_y,20);
    image(clown_nose,nose_x,nose_y,30,30);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-5;
        nose_y = results[0].pose.nose.y-5;
        console.log("nose_x = " + nose.x);
        console.log("nose_y = " + nose.y);
    }
}

function take_snapshot() {

    save("myFilterImage.png");
}