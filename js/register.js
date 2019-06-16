/**
 * Set up Service Worker
 */
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        console.log("Service Worker Registered");
    }).catch(function(err) {
        console.log("Service Worker Registration Failed: " + err);
    });
 }
 else {
    console.log('Service Worker is not supported in this browser');
 }
