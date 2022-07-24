 Status = "";
 
 function preload(){
    img = loadImage("95F7C076-0E51-4FA5-B34B-F2CB7DF4D454.jpeg");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(370,400);

    object_detector = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("model Loaded");
    document.getElementById("status").innerHTML = "Detecting Objects";

    object_detector.detect(img,gotResult);
}

function gotResult(result,error){
    if(error){
        console.log(error);

    }

    else{
        console.log(result);
    }
}