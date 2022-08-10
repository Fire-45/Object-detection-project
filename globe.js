 Status = "";
 object_RESULTS = [];
 confidence = "";
 
 

function setup(){
    canvas = createCanvas(700,600);
    canvas.position(370,400);

    object_detector = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("model Loaded");
    document.getElementById("status").innerHTML = "Detecting Objects";
    Status = "yes";
   

   
}

function gotResult(error,result){
    if(error){
        console.log(error);

    }

    else{
        
        object_RESULTS = result;
        console.log(object_RESULTS);
    }
}

function preload(){
    img = loadImage("058393CD-8E60-49AC-969E-83EE5DDCAF68.jpeg");
}


function draw(){

    image(img,0,0,700,600);

    object_detector.detect(img,gotResult);

    if(Status != ""){

        

        for(i=0;i<object_RESULTS.length;i++){
               
            
            document.getElementById("status").innerHTML = "Objects detected";
            confidence = Math.floor(object_RESULTS[i].confidence*100);

            fill("blue");
            textSize(30);
            text(object_RESULTS[i].label +  " confidence:"+confidence,object_RESULTS[i].x,object_RESULTS[i].y + 10);
            //text(confidence,object_RESULTS[i].x,object_RESULTS[i].y);

            noFill();
            stroke("blue");
            rect(object_RESULTS[i].x,object_RESULTS[i].y,object_RESULTS[i].width,object_RESULTS[i].height);

        }

    }

}