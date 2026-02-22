importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
      apiKey: 'AIzaSyC9nic0jgvTATjgAiY7c1zPhSWh_0927DA',
      appId: '1:528121817018:web:072f91ef0d50a0ec819f83',
      messagingSenderId: '528121817018',
      projectId: 'food-app-4e5b0',
      authDomain: 'food-app-4e5b0.firebaseapp.com',
      storageBucket: 'food-app-4e5b0.firebasestorage.app',
      measurementId: 'G-NYEBTDYWHH',
});

const messaging = firebase.messaging();