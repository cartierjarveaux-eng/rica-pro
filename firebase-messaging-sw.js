importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDodv4XF4Gl1BzmfFWCyceWsngMA20eCr0",
  authDomain: "ricapro-fd683.firebaseapp.com",
  projectId: "ricapro-fd683",
  storageBucket: "ricapro-fd683.firebasestorage.app",
  messagingSenderId: "81672217982",
  appId: "1:81672217982:web:5dead5e119db9b258d7f2f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body, image, click_action } = payload.notification || {};
  const data = payload.data || {};
  
  self.registration.showNotification(title || 'Rica Pro', {
    body: body || '',
    icon: '/icon-192.png',
    image: image || data.image || '',
    badge: '/icon-192.png',
    data: { url: data.url || click_action || 'https://rica-pro.vercel.app' },
    actions: [{ action: 'open', title: '¡Ver ahora!' }]
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url || 'https://rica-pro.vercel.app';
  event.waitUntil(clients.openWindow(url));
});
