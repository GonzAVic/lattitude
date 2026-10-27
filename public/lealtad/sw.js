// Service worker for loyalty-card notifications (2026-10-20). Notifications are sent
// by Lomu Studio (Web Push); this file must live on this domain. The API base and the
// card token come from the registration URL (/lealtad/sw.js?api=…&t=…).
var params = new URL(self.location.href).searchParams;
var API = params.get('api') || '';
var TOKEN = params.get('t') || '';

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : '' }; }
  // Tell any open /lealtad page to re-check the card (stamp celebration).
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (ws) { ws.forEach(function (w) { w.postMessage({ type: 'lt:push' }); }); });
  e.waitUntil(self.registration.showNotification(d.title || 'Lattitude Coffee', {
    body: d.body || '', icon: d.icon, tag: d.tag || 'lealtad', renotify: true, data: { url: d.url || '/lealtad/' }
  }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || '/lealtad/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (ws) {
    for (var i = 0; i < ws.length; i++) {
      if (ws[i].url.indexOf('/lealtad') !== -1 && 'focus' in ws[i]) { ws[i].navigate(url); return ws[i].focus(); }
    }
    return self.clients.openWindow(url);
  }));
});
// The browser renewed the subscription: save the new one in Lomu.
self.addEventListener('pushsubscriptionchange', function (e) {
  var opts = e.oldSubscription && e.oldSubscription.options;
  if (!opts || !API || !TOKEN) return;
  e.waitUntil(self.registration.pushManager.subscribe(opts).then(function (sub) {
    return fetch(API + '/push/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + TOKEN }, body: JSON.stringify(sub.toJSON()) });
  }));
});
