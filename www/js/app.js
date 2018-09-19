// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'



  angular.module('starter', ['ionic','ngCordova'])
.controller('AppCtrl', function($scope, $cordovaSms) {


  $scope.data = {
    speechText: ''
  };

  $scope.recognizedText =  function() {
    TTS.speak({
           text: $scope.data.recognizedText,
          locale: 'pt-BR',
          //    locale: 'fr-FR',
      //   locale: 'es-ES',
     // locale: 'en-US',
         
           rate: 0.7
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };;  
 
  $scope.speakText = function() {
    TTS.speak({
           text: $scope.data.speechText,
           locale: 'pt-BR',
           //   locale: 'en-GB',
      //   locale: 'es-ES',
        //  locale: 'en-US',
           rate: 1.0
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };
 
  $scope.record = function() {
    var recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            $scope.recognizedText = event.results[0][0].transcript;
            $scope.data.speechText= event.results[0][0].transcript;
            $scope.$apply()

            if((event.results[0][0].transcript == "SMS")||(event.results[0][0].transcript == "send SMS")){
              window.location="sms:?body='hello'";
              return false;

            }

            if((event.results[0][0].transcript == "fuck you")||(event.results[0][0].transcript == "fuck")){
              alert("Fuck you too bitch !!!");
            
            }

            if((event.results[0][0].transcript == "database")||(event.results[0][0].transcript == "go to database")){
              window.location="qrForm.html";
              return false;
            }

            if((event.results[0][0].transcript == "puta")||(event.results[0][0].transcript == "sua puta")){
              alert("Puta e a sua mae !!!");
            }
   
            if((event.results[0][0].transcript == "close")||(event.results[0][0].transcript == "close card")||(event.results[0][0].transcript == "sair")||(event.results[0][0].transcript == "fechar")){
           //   alert("do you wanna close your card now ?");
              navigator.app.exitApp();
            }

            if((event.results[0][0].transcript == "hasta la vista")||(event.results[0][0].transcript == "hasta la vista baby")||(event.results[0][0].transcript == "shut down")
              ||(event.results[0][0].transcript == "bye bye")||(event.results[0][0].transcript == "shut")||(event.results[0][0].transcript == "hasta la vista baby")||(event.results[0][0].transcript == "goodbye")){
            //  alert("do you wanna close your card now ?");
              navigator.app.exitApp();
            }

   

            if(event.results[0][0].transcript == "my bitch"){
              alert("Yea Baby !!!");
            }

            if(event.results[0][0].transcript == "bitch"){
              alert("Fuck You!!!");
            }
        }
    };
    recognition.start();
  };
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
