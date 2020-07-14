// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAIH04hIkZ2ybK3QAM9LUqRLynND-oMKdg",
    authDomain: "test-firebase-d2f75.firebaseapp.com",
    databaseURL: "https://test-firebase-d2f75.firebaseio.com",
    projectId: "test-firebase-d2f75",
    storageBucket: "test-firebase-d2f75.appspot.com",
    messagingSenderId: "590105674777",
    appId: "1:590105674777:web:eed3dc1f8c414f365a1688",
    measurementId: "G-EG16C02VKH"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    let obj = JSON.parse(payload.data.notification);
    const notificationTitle = obj.title;
    const notificationOptions = {
      body: obj.body,
      icon: obj.icon
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
});