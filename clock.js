 Status = "";
 object_RESULTS = [];
 confidence = "";
 
 

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(370,400);

    object_detector = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("model Loaded");
    document.getElementById("status").innerHTML = "Detecting Objects";
    Status = "yes";
    object_detector.detect(img,gotResult);

   
}

function gotResult(result,error){
    if(error){
        console.log(error);

    }

    else{
        console.log(result);
        object_RESULTS = result;
    }
}

function preload(){
    img = loadImage("95F7C076-0E51-4FA5-B34B-F2CB7DF4D454.jpeg");
}


function draw(){

    image(img,0,0,600,400);

    if(Status != ""){

        

        for(i=0;i<object_RESULTS.length;i++){
               
            
            document.getElementById("status").innerHTML = "Objects detected";
            confidence = Math.floor(object_RESULTS[i].confidence) * 100;

            //fill("red");
            //textSize(30);
            //text(object_RESULTS[i].label,object_RESULTS[i].x,object_RESULTS[i].y + 10);
            //text(confidence,object_RESULTS[i].x,object_RESULTS[i].y);

            noFill();
            stroke("red");
            rect(object_RESULTS[i].x,object_RESULTS[i].y,object_RESULTS[i].width,object_RESULTS[i].height);

        }

    }

}