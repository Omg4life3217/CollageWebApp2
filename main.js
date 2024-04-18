camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="Take My Selfie"){
        console.log("taking selfie------");
    }
    speak();
}