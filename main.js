function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/Tp9PFPv7c/');
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}