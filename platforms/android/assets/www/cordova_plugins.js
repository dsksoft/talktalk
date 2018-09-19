cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-tts.tts",
        "file": "plugins/cordova-plugin-tts/www/tts.js",
        "pluginId": "cordova-plugin-tts",
        "clobbers": [
            "TTS"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognition",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognition.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognition"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionError",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionError.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionError"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionAlternative",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionAlternative.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionAlternative"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResult",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResult.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionResult"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResultList",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResultList.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionResultList"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionEvent",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionEvent.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionEvent"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechGrammar",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammar.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechGrammar"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechGrammarList",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammarList.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechGrammarList"
        ]
    },
    {
        "id": "cordova-sms-plugin.Sms",
        "file": "plugins/cordova-sms-plugin/www/sms.js",
        "pluginId": "cordova-sms-plugin",
        "clobbers": [
            "window.sms"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.0.5",
    "cordova-plugin-ionic-webview": "1.1.19",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-tts": "0.2.3",
    "cordova-plugin-compat": "1.2.0",
    "phonegap-plugin-speech-recognition": "0.3.0",
    "cordova-sms-plugin": "0.1.11"
};
// BOTTOM OF METADATA
});