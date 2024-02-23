//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record

function startRecording() {
  console.log("recordButton clicked");

  /*
    Simple constraints object, for more advanced audio features see
    https://addpipe.com/blog/audio-constraints-getusermedia/
  */

  var constraints = { audio: true, video: false }


  /*
    We're using the standard promise based getUserMedia() 
    https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  */

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

    /*
      create an audio context after getUserMedia is called
      sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
      the sampleRate defaults to the one set in your OS for your playback device

    */
    audioContext = new AudioContext();

    /*  assign to gumStream for later use  */
    gumStream = stream;

    /* use the stream */
    input = audioContext.createMediaStreamSource(stream);

    /* 
      Create the Recorder object and configure to record mono sound (1 channel)
      Recording 2 channels  will double the file size
    */
    rec = new Recorder(input, { numChannels: 1 })

    //start the recording process
    rec.record()

    console.log("Recording started");

  }).catch(function (err) {
    alert("cannot record audio!");
    console.log(err)
  });
}

function stopRecording() {
  console.log("stopButton clicked");

  //tell the recorder to stop the recording
  rec.stop();

  //stop microphone access
  gumStream.getAudioTracks()[0].stop();

  //create the wav blob and pass it on to getReportFromSpeechace
  rec.exportWAV(getReportFromSpeechace);

}

function getReportFromSpeechace(blob) {

  var url = URL.createObjectURL(blob);

  //name of .wav file to use during upload and download (without extendion)
  var filename = new Date().toISOString() + ".wav";

  var formdata = new FormData();
  formdata.append("text", "cow");
  formdata.append("user_audio_file", blob, filename);
  formdata.append("question_info", "'u1/q1'");
  formdata.append("no_mc", "1");

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://api2.speechace.com/api/scoring/text/v9/json?key=CGUUSsrcz%2Bv%2BHwmFY6Vi9%2BCxENZ0tMbSRcgjyyUFd7EyOuptab7Td1JYcltG6S40Az25fKvMz8cCYwpf%2BF3qoFsvT6SMWV04l97GZlMOi%2FRlnoQoI4XXcaDnyfvWxSMq&dialect=en-us&user_id=XYZ-ABC-99001", requestOptions)
    .then(response => response.text())
    .then(result => {
      var json_result = JSON.parse(result);
      var score = json_result.text_score.speechace_score.pronunciation;
      var phone_score_list = json_result.text_score.word_score_list[0].phone_score_list; //get total score - refer to json network when inspect
      var sound_1_score = phone_score_list[0].quality_score; //get score for 1st sound
      var sound_2_score = phone_score_list[1].quality_score; //get score for 2nd sound
      var player = GetPlayer();
      player.SetVar("scoreAI", score); //assign total score to SL variable
      player.SetVar("word_C", sound_1_score); //assign 1st sound to SL variable
      player.SetVar("word_OW", sound_2_score); //assign 2nd sound to SL variable
    })
    .catch(error => console.log('error', error));
}
function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ootZ8H1vgn":
        Script1();
        break;
      case "6kRPjPA4vAs":
        Script2();
        break;
      case "6AeFsKpcWxQ":
        Script3();
        break;
      case "6QOfw6CTTud":
        Script4();
        break;
      case "6InXM97h4KQ":
        Script5();
        break;
      case "6YBcdElNhS3":
        Script6();
        break;
      case "5bDQ2NqehUQ":
        Script7();
        break;
      case "6Cyqws08S0a":
        Script8();
        break;
      case "5Wsc1CK9j78":
        Script9();
        break;
      case "6ahbaBjYmMp":
        Script10();
        break;
      case "6Rw9QLdq6mi":
        Script11();
        break;
      case "5jf0sOr22Ck":
        Script12();
        break;
  }
}

function Script1()
{
  console.log("Recording starts");
  startRecording();

}

function Script2()
{
  console.log("Recording stops");
  stopRecording();

}

function Script3()
{
  console.log("Recording starts");
  startRecording();

}

function Script4()
{
  console.log("Recording stop");
  stopRecording();

}

function Script5()
{
  var object = document.querySelectorAll("[data-acc-text='audio']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script6()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script7()
{
  var object = document.querySelectorAll("[data-acc-text='go']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script8()
{
  var object = document.querySelectorAll("[data-acc-text='retry']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script9()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script10()
{
  var object = document.querySelectorAll("[data-acc-text='retry']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script11()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script12()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

