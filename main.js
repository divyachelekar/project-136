status = "";

function preload(){

}


function setup(){
    canvas = createCanvas(380 , 380);
    canvas.position(570 , 300);

    video = createCapture(VIDEO);
    video.hide();

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
    input_value = document.getElementById("input").value;
}

function modelLoaded(){
    console.log('Mdoel Loaded');
    status = true;
}

function draw(){
    image(video , 0 ,0 , 500 , 500);
}

